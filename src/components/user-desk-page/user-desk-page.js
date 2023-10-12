import styles from './user-desk-page.module.css'
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Cascader, Checkbox, Modal, Select, Table } from 'antd';
import { uniqBy } from 'lodash';
import moment from 'moment';
import 'moment/locale/ru';
import { LineChartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Line } from "@ant-design/plots";

import { serverData } from "../../utils/serverData/serverData";
import { AppHeader } from '../app-header/app-header';

const { Option } = Select;

const salesChartConfig = (salesData) => ({
    data: salesData,
    xField: 'date',
    yField: 'sold',
    seriesField: 'type',
    smooth: true,
    meta: {
        type: { alias: 'green' },
        sold: { alias: 'green' },
    },
});

const generateProductOptions = (data) => {
    const traverseData = (currentData) => {
        return currentData.map((item) => {
            let option = {
                value: item.key,
                label: item.label
            };

            if (item.children) {
                option.children = traverseData(item.children);
            }

            return option;
        });
    };

    return traverseData(data);
};

const tcOptions = serverData.map((item) => ({
    label: item.label,
    value: item.label,
}));

const calculateSolds = (data, tcCategory = '') => {
    return data.map((item) => {
        const isTC = item.label.startsWith('Торговый Центр');
        const useCategory = isTC ? item.label : tcCategory;

        if (item.children) {
            const children = calculateSolds(item.children, useCategory);
            const totalSold = children.reduce((sum, child) => sum + child.sold, 0);
            return {
                ...item,
                tcCategory: useCategory,
                children,
                sold: totalSold
            };
        }
        return {
            ...item,
            tcCategory: useCategory
        };
    });
};

const columns = [
    {
        title: 'Торговый центр',
        dataIndex: 'tcCategory',
        key: 'tcCategory',
        width: 150
    },
    {
        title: 'Название',
        dataIndex: 'label',
        key: 'label',
        sorter: (a, b) => a.label.localeCompare(b.label),
        defaultSortOrder: 'ascend',
    },
    {
        title: 'Неделя',
        dataIndex: 'week',
        key: 'week',
    },
    {
        title: 'Фактические продажи',
        dataIndex: 'sold',
        key: 'sold',
    },
    {
        title: 'Прогноз',
        dataIndex: 'forecast',
        key: 'forecast',
    },
    {
        title: 'Разница факт. и план',
        dataIndex: 'variance',
        key: 'variance',
    },
    {
        title: 'Качество прогноза WAPE',
        dataIndex: 'wape',
        key: 'wape',
    },

];

export const UserDeskPage = ({ style }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productOptions, setProductOptions] = useState([]);
    const [combinedData, setCombinedData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productName, setProductName] = useState("");
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const prepareChartData = useCallback((checkedBoxes) => {
        const selectedData = checkedBoxes.flatMap(item => item.salesData || []);
        return [
            ...selectedData.map((item) => ({
                ...item,
                type: 'Продажи',
            })),
            ...selectedData.map((item) => ({
                ...item,
                sold: item.forecast,
                type: 'Прогноз',
            })),
        ];
    }, []);

    useEffect(() => {
        if (checkedBoxes.length) {
            const updatedChartData = prepareChartData(checkedBoxes);
            setChartData(updatedChartData);
        }
    }, [checkedBoxes, prepareChartData]);

    useEffect(() => {
        if (isModalVisible && selectedProduct) {
            setCheckedBoxes([selectedProduct]);
        }
    }, [isModalVisible, selectedProduct]);

    const handleCheckboxChange = record => {
        const index = checkedBoxes.findIndex(item => item.key === record.key);
        if (index !== -1) {
            setCheckedBoxes([
                ...checkedBoxes.slice(0, index),
                ...checkedBoxes.slice(index + 1)
            ]);
        } else {
            setCheckedBoxes([...checkedBoxes, record]);
        }
    };

    const modalColumns = [
        {
            title: '',
            dataIndex: 'checkbox',
            key: 'checkbox',
            render: (_, record) => (
                <Checkbox
                    checked={checkedBoxes.findIndex(i => i.key === record.key) !== -1}
                    onChange={() => handleCheckboxChange(record)}
                />
            ),
        },
        ...columns
    ];

    const showModal = (salesData, record) => {
        setIsModalVisible(true);
        setProductName(record.label);
        setSelectedProduct(record);
        setChartData([
            ...salesData.map((item) => ({
                ...item,
                type: 'Продажи',
            })),
            ...salesData.map((item) => ({
                ...item,
                sold: item.forecast,
                type: 'Прогноз',
            })),
        ]);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const expandedRowRender = (record) => {
        if (!record.salesData) return null;

        // создаем карту для каждой даты с соответствующими ей продажами и прогнозом
        let salesByDate = {};
        record.salesData.forEach((sale) => {
            let date = moment(sale.date, 'YYYY-MM-DD').format('DD.MM.YY');
            salesByDate[date] = {
                sold: sale.sold,
                forecast: sale.forecast
            };
        });

        // создание дат на весь месяц
        let startDate = moment(record.salesData[0].date);
        let endDate = moment(record.salesData[record.salesData.length - 1].date);
        let dateArray = [];

        // получить все даты между датой начала и датой окончания
        while (startDate.isSameOrBefore(endDate)) {
            dateArray.push(moment(startDate).format("DD.MM.YY"));
            startDate.add(1, "days");
        }
        moment.locale('ru');
        // сопоставление даты со столбцами
        let columns = dateArray.map((date) => ({
            title: date,
            children: [
                {
                    title: moment(date, 'DD.MM.YY').format('dd').toUpperCase(),
                    key: date + '-data',
                    align: 'center',

                    render: (text, record) => (
                        <div>
                            <div>
                                {record[date + '-sold'] !== undefined &&
                                    <p><ShoppingCartOutlined /> {record[date + '-sold']}</p>}
                                {record[date + '-forecast'] !== undefined &&
                                    <p><LineChartOutlined /> {record[date + '-forecast']}</p>}
                            </div>
                        </div>
                    ),
                }
            ]
        }));

        // создание данных строки
        let data = [

            {
                key: 'salesData-forecast',
                ...Object.fromEntries(Object.entries(salesByDate).map(([date, sales]) => [date + '-forecast', sales.forecast])),
            },
            {
                key: 'salesData-sold',
                ...Object.fromEntries(Object.entries(salesByDate).map(([date, sales]) => [date + '-sold', sales.sold])),
            },
        ];

        return (
            <>
                <div className={styles.scrollbar} style={{ overflowX: 'auto' }}>
                    <Table size={"small"} style={{ width: 1280 }} columns={columns}
                        dataSource={data} pagination={false} />
                </div>
                <Button style={{ margin: 20 }}
                    onClick={() => showModal(record.salesData, record)}>
                    График продаж
                </Button>
            </>

        );
    };

    const onTCChange = (values) => {
        const selectedTcData = values.map((value) =>
            serverData.find((tc) => tc.label === value)
        );

        let combinedChildren = [];
        selectedTcData.forEach((tcData) => {
            if (tcData) combinedChildren.push(...tcData.children);
        });

        // А вот тут уже уникальные (*решение проблемы с отображением каскадера и таблицы)
        combinedChildren = uniqBy(combinedChildren, 'label');

        const productOptions = generateProductOptions(combinedChildren);
        setProductOptions(productOptions);

        const newData = selectedTcData.flatMap((tcData) =>
            calculateSolds(tcData ? [tcData] : [])
        );
        setCombinedData(newData);
    };

    const onProductsChange = (value, selectedOptions) => {
        let selectedLabels = [];

        for (let selectedOption of selectedOptions) {
            let path = '';
            for (let option of selectedOption) {
                path += (path ? ' > ' : '') + option.label;
            }
            selectedLabels.push(path);
        }

        setSelectedProducts(selectedLabels);
    };

    const getAllNestedChildren = (element) => {
        if (element.children) {
            return element.children.flatMap(getAllNestedChildren);
        }
        return [element];
    };

    const filteredData = (data, labels) => {
        return data.reduce((acc, item) => {
            const itemFullPath = item.label;

            if (labels.includes(itemFullPath)) {
                if (item.children) {
                    // Если у выбранного товара есть вложенные элементы, добавляем все
                    // вложенные элементы
                    acc.push(...getAllNestedChildren(item));
                } else {
                    // Если это последний элемент, добавляем его напрямую
                    acc.push(item);
                }
            } else if (item.children) {
                // Если это не выбранный товар, но у него есть дочерние элементы,
                // проверяем их
                acc.push(
                    ...filteredData(item.children, labels.map(label => label.replace(itemFullPath + " > ", "")))
                );
            }

            return acc;
        }, []);
    };

    const updatedServerData = calculateSolds(combinedData);
    const filteredServerData = filteredData([...updatedServerData], selectedProducts);

    return (
        <>
            <AppHeader />
            <main style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Select
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        width: '40%', ...style
                    }}
                    placeholder="Выберите Торговый Центр"
                    onChange={onTCChange}
                    mode="multiple"
                >
                    {tcOptions.map(option => (
                        <Option key={option.value} value={option.value}>
                            {option.label}
                        </Option>
                    ))}
                </Select>
                <Cascader
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        width: '50%', ...style
                    }}
                    options={productOptions}
                    onChange={onProductsChange}
                    multiple
                    maxTagCount="responsive"
                    placeholder="Выберите продукты"
                />
                <Table
                    style={{
                        marginTop: 20,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    dataSource={filteredServerData}
                    // @ts-ignore
                    columns={columns}
                    expandable={{
                        expandIconColumnIndex: 1,
                        expandedRowRender,
                    }}
                />
                <Modal width={'80%'} open={isModalVisible} onCancel={handleCancel}
                    footer={null}
                    style={{ top: 0 }}>
                    <h2 style={{ textAlign: 'center' }}>{productName}</h2>
                    <Line {...salesChartConfig(chartData)} />
                    <Table
                        dataSource={filteredServerData}
                        // @ts-ignore
                        columns={modalColumns}
                    />
                </Modal>
            </main>
        </>
    );
};

