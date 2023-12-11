import {
    Button, Modal, Form,
    Input, Drawer, Upload, message
} from 'antd';
import React, { useState } from 'react';
import {
    PlusOutlined, UploadOutlined
} from '@ant-design/icons';
import TableComponent from './TableComponent';
import InputComponent from 'components/inputs/InputComponent';
import { getBase64 } from 'utils/utils';
import './AdminProduct.scss';
import adminProductStore from './AdminProductStore';
import { observer } from 'mobx-react';

const AdminProduct = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        quantity: 0,
        price: 0,
        type: '',
        description: '',
        rating: '',
        image: ''
    });


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setIsModalOpen(false);
        adminProductStore.allProducts.push(product);
        // console.log(adminProductStore.allProducts);
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeValue = (e, v) => {
        const key = Object.keys(e)[0]

        setProduct({ ...product, [key]: e[key] })
    }

    const beforeUpload = (file) => {

        // return isPNG || Upload.LIST_IGNORE;

        return new Promise((resolve, reject) => {
            const isPNG = file.type === 'image/png';
            if (!isPNG) {
                message.error(`${file.name} is not a png file`);
                reject(`${file.name} is not a png file`)
            } else {
                resolve('success')
            }
        })
    }

    const onChange = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
            setProduct({ ...product, image: file.preview })
        }

        // setProduct({ ...product, image: file.preview })
    }

    const renderModal = () => {
        return <Modal title="Tạo sản phẩm"
            open={isModalOpen}
            onOk={handleOk}
            footer={null}
            onCancel={handleCancel}>
            <Form
                form={form}
                // name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{
                    maxWidth: 600,
                }}
                // initialValues={{
                //     remember: true,
                // }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                onValuesChange={onChangeValue}
            >
                <Form.Item
                    label="Tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Loại"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product type!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số lượng"
                    name="quantity"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product quantity!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Đánh giá"
                    name="rate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product rate!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ảnh sản phẩm"
                    name="image"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input product images!',
                        },
                    ]}
                >
                    <Upload
                        // beforeUpload={beforeUpload}
                        onChange={onChange} >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    }

    // drawer 

    const onClose = () => {
        setIsDrawerOpen(false);
    };

    const renderDrawer = () => {
        return <Drawer title="Chi tiết sản phẩm"
            placement="right"
            onClose={onClose}
            width={'90%'}
            open={isDrawerOpen}>

            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={onChangeValue}
            >
                
                <Form.Item
                    label="Tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product name!',
                        },
                    ]}
                >
                    <input value={'product.name'}/>
                </Form.Item>

                <Form.Item
                    label="Loại"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product type!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số lượng"
                    name="quantity"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product quantity!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Đánh giá"
                    name="rate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product rate!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ảnh sản phẩm"
                    name="image"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input product images!',
                        },
                    ]}
                >
                    <Upload
                        // beforeUpload={beforeUpload}
                        onChange={onChange} >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    }

    //table
    const onClickRow = (record, index) => {
        console.log(record);
        console.log(index);
        
        setProduct(record)
        setTimeout(() => {
            setIsDrawerOpen(true)
        }, 3000);
    }

    return (
        <div >
            Quản lý sản phẩm
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Button onClick={showModal}>
                    <PlusOutlined />
                </Button>
            </div>
            <div>
                <TableComponent
                    onClickRow={onClickRow}
                    product={adminProductStore.allProducts} />
            </div>

            {renderModal()}

            {renderDrawer()}
        </div>
    );
}

export default observer(AdminProduct);