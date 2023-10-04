import React, {useState} from 'react';
import {Cascader, Table} from 'antd';

const serverData = [
	{
		key: '1',
		label: 'Хлеб',
		sold: 10,
		children: [
			{
				key: '1-1',
				label: 'Хлеб мелкий',
				sold: 10,
				children: [
					{
						key: '1-1-1',
						label: 'Булочка с маком',
						sold: 10,
						disableCheckbox: true,
					},
					{
						key: '1-1-2',
						label: 'Булочка с изюмом',
						sold: 10,
					},
					{
						key: '1-1-3',
						label: 'Булочка с повидлом',
						sold: 10,
					},
				],
			},
			{
				key: '1-2',
				label: 'Хлеб большой',
				sold: 10,
				children: [
					{
						key: '1-2-1',
						label: 'Кирпич',
						sold: 10,
					},
					{
						key: '1-2-2',
						label: 'Батон',
						sold: 10,
					},
					{
						key: '1-2-3',
						label: 'Багет',
						sold: 10,
					},
				],
			},
		],
	},
	{
		key: '2',
		label: 'Пироги',
		sold: 10,
		children: [
			{
				key: '2-1',
				label: 'Пироги Сладкие',
				sold: 10,
				children: [
					{
						key: '2-1-1',
						label: 'Пироги Фруктовые',
						sold: 10,
						children: [
							{
								key: '2-1-1-1',
								label: 'Пирог c абрикосом',
								sold: 10,
							},
							{
								key: '2-1-1-2',
								label: 'Пирог c яблоком',
								sold: 10,
							},
						],
					},
					{
						key: '2-1-2',
						label: 'Пироги Шоколадные',
						sold: 10,
					},
					{
						key: '2-1-3',
						label: 'Пироги Кремовые',
						sold: 10,
					},
				],
			},
			{
				key: '2-2',
				label: 'Пироги Солёные',
				sold: 10,
				children: [
					{
						key: '2-2-1',
						label: 'Пироги Мясные',
						sold: 10,
					},
					{
						key: '2-2-2',
						label: 'Пироги Рыбные',
						sold: 10,
					},
					{
						key: '2-2-3',
						label: 'Пироги Сырные',
						sold: 10,
					},
				],
			},
		],
	},
];

const calculateSolds = (data) => {
	return data.map((item) => {
		if (item.children) {
			const children = calculateSolds(item.children);
			const totalSold = children.reduce((sum, child) => sum + child.sold, 0);
			return { ...item, children, sold: totalSold };
		}
		return item;
	});
};

const renderOptions = (data) => {
	return data.map((item) => {
		if (item.children) {
			return {
				label: item.label,
				value: item.label,
				children: renderOptions(item.children),
			};
		} else {
			return {
				label: item.label,
				value: item.label,
			};
		}
	});
};

const options = renderOptions(serverData);

const columns = [
	{
		title: 'Название',
		dataIndex: 'label',
		key: 'label',
		sorter: (a, b) => a.label.localeCompare(b.label),
	},
	{
		title: 'Значение',
		dataIndex: 'sold',
		key: 'sold',
		sorter: (a, b) => a.sold - b.sold,
	},
];

const MultipleProduct = ({ style }) => {
	const [selectedsolds, setSelectedsolds] = useState([]);
	const [expandedRowKeys, setExpandedRowKeys] = useState([]);
	
	
	const onChange = (value, selectedOptions) => {
		let selectedLabels = [];
		
		for (let selectedOption of selectedOptions) {
			let path = '';
			for (let option of selectedOption) {
				path += (path ? ' > ' : '') + option.label;
			}
			selectedLabels.push(path);
		}
		
		setSelectedsolds(selectedLabels);
	};
	
	const onExpand = (expanded, record) => {
		if (expanded) {
			setExpandedRowKeys(prevKeys => [...prevKeys, record.key]);
		} else {
			setExpandedRowKeys(prevKeys => prevKeys.filter(key => key !== record.key));
		}
	}
	
	
	const filteredData = (data, labels) => {
		return data.reduce((acc, item) => {
			const itemFullPath = item.label;
			
			if (labels.includes(itemFullPath)) {
				acc.push(item);
			} else if (labels.some(label => label.startsWith(itemFullPath + " > "))) {
				// проверяем является ли данный элемент предком одного из выбранных элементов
				const newItem = {...item, children: filteredData(item.children, labels.map(label => label.replace(itemFullPath + " > ", "")))};
				if (newItem.children.length > 0) { // записываем только если у него есть выбранные дочерние элементы
					acc.push(newItem);
				}
			}
			
			return acc;
		}, []);
	};
	
	console.log(selectedsolds)
	const updatedServerData = calculateSolds(serverData);
	const filteredServerData = filteredData([...updatedServerData], selectedsolds);
	
	
	return (
		<>
			<Cascader
				style={style}
				options={options}
				onChange={onChange}
				multiple
				maxTagCount='responsive'
			/>
			<Table
				dataSource={filteredServerData}
				columns={columns}
				expandable={{
					expandedRowKeys,
					onExpand,
				}}
			/>
		</>
	);
};

export default MultipleProduct;
