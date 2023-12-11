import React from 'react';
import { Table } from 'antd';
import {
    DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { render } from '@testing-library/react';
const TableComponent = (props) => {
    const { product, onClickRow } = props

    const renderAction = () => {
        return <div>
            <DeleteOutlined style={{ fontSize: 25, color: 'red', cursor: 'pointer' }} />
            <EditOutlined style={{ fontSize: 25, color: 'green', cursor: 'pointer' }}
                onClick={handleDetailProduct}
            />
        </div>
    }

    const handleDetailProduct = () => {
        console.log('1');
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        }, {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
        }, {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }, {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction
        }
    ]


    const data = product.map((item, index) => ({ ...item, key: index }))
    // console.log(data);
    const onRow = (record, index) => {
        return {
            onClick: event => {
                onClickRow(record, index);
            }
        }
    }

    return (
        <Table columns={columns} 
        dataSource={data}
         onRow={onRow}></Table>
    );
}

export default TableComponent;