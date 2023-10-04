import React from 'react';
import { Select } from 'antd';

const products = [
	{
		id: 1,
		name: 'Product 1',
		actualQuantity: 10,
		soldQuantity: 5,
	},
	{
		id: 2,
		name: 'Product 2',
		actualQuantity: 20,
		soldQuantity: 8,
	},
	{
		id: 3,
		name: 'Product 3',
		actualQuantity: 15,
		soldQuantity: 2,
	},
	{
		id: 4,
		name: 'Product 4',
		actualQuantity: 12,
		soldQuantity: 10,
	},
];

const ProductFilter = () => {
	const filterOption = (input, option) => (option?.label ?? '').includes(input);
	
	const filterSort = (optionA, optionB) =>
		(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());
	
	const options = products.map((product) => ({
		value: product.id.toString(),
		label: `${product.name} (Actual: ${product.actualQuantity}, Sold: ${product.soldQuantity})`,
	}));
	
	return (
		<Select
			showSearch
			style={{
				width: 200,
			}}
			placeholder="Search to Select"
			optionFilterProp="children"
			filterOption={filterOption}
			filterSort={filterSort}
			options={options}
		/>
	);
};

export default ProductFilter;
