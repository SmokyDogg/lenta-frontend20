import React, { useEffect, useState } from 'react';
import '../index.css';
import qs from 'qs';
import { Table } from 'antd';

const columns = [
	{
		title: 'Наименование',
		dataIndex: 'name',
		sorter: (a, b) => a.name.last.localeCompare(b.name.last),
		render: (name) => `${name.last} ${name.first}`,
		width: '20%',
	},
	{
		title: 'Неделя',
		dataIndex: 'gender',
		width: '20%',
	},
	{
		title: 'Фактические продажи',
		dataIndex: 'email',
	},
	{
		title: 'Прогноз продаж',
		dataIndex: 'email',
	},
	{
		title: 'Разница продаж и прогноза',
		dataIndex: 'email',
	},
	{
		title: 'Качество прогноза',
		dataIndex: 'email',
	},
];

const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
});

const TableProduct = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
	
	const fetchData = () => {
		setLoading(true);
		fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
			.then((res) => res.json())
			.then(({ results }) => {
				setData(results);
				setLoading(false);
				setTableParams({
					...tableParams,
					pagination: {
						...tableParams.pagination,
						total: 200,
					},
				});
			});
	};
	
	useEffect(() => {
		fetchData();
	}, [JSON.stringify(tableParams)]);
	
	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			...sorter,
		});
	};
	
	const sortedData = data.slice().sort((a, b) => {
		return a.name.last.localeCompare(b.name.last); // Сортировка по фамилии
	});
	
	return (
		<Table
			columns={columns}
			rowKey={(record) => record.login.uuid}
			dataSource={sortedData}
			pagination={tableParams.pagination}
			loading={loading}
			onChange={handleTableChange}
		/>
	);
};

export default TableProduct;
