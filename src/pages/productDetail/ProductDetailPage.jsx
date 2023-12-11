import { Col, Image, Row } from 'antd';
import Images from 'commons/Images';
import React from 'react';
import './ProductDetail.scss';
import {
    StarFilled, PlusOutlined, MinusOutlined
} from '@ant-design/icons';
import { InputNumber, Button } from 'antd';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import LikeShareComponent from 'components/fbComponent/LikeShareComponent';
import { useLocation } from 'react-router-dom';
import CommentComponent from 'components/fbComponent/CommentComponent';

const initialOptions = {
    clientId: "AQK_dwRgLfn0bABvCXVTUwtFeHH9ENZbR7Jija4WZRx__44xiSVPUNQKLa1sheu_Tban2wBJIvJVneX6",
    currency: "USD",
    intent: "capture",
};

const productDetail = {
    description: 'sản phẩm 1',
    price: 1
}

const ProductDetailPage = () => {

    const renderImageSmall = () => {
        return <Col span={4}>
            <Image
                preview={false}
                alt={'product small'}
                src={Images.PRODUCT_LARGE} />
        </Col>
    }

    const onChange = (value) => {
        console.log('changed', value);
    }

    const createOrder = (data, actions) => {
        return actions.order.create({
            "purchase_units": [
                {
                    "description": "sản phẩm 1",
                    "amount": {
                        "currency_code": "USD",
                        "value": "1.00"
                    }
                }
            ]
        })
    }
    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log('order');
        console.log(order);
        console.log(data.orderId);
    }

    return (
        <div className='product_detail_container'>
            <Row style={{ padding: '16px' }}>
                <Col span={10}>
                    <Image
                        preview={false}
                        alt={'product detail'}
                        src={Images.PRODUCT_LARGE} />
                    <Row style={{ paddingTop: '10px' }}>
                        {renderImageSmall()}
                        {renderImageSmall()}
                        {renderImageSmall()}
                        {renderImageSmall()}
                        {renderImageSmall()}
                    </Row>
                </Col>

                <Col span={14}>
                    <div className='product_title'>
                        Điện Thoại Nokia C30 (2GB/32GB) - Hàng Chính Hãng
                    </div>
                    <div className='product_rate'>
                        4.7
                        <StarFilled style={{
                            fontSize: '10px', color: '#FFC400',
                            marginLeft: 2
                        }} />
                        <StarFilled style={{
                            fontSize: '10px', color: '#FFC400'
                        }} />
                        <StarFilled style={{
                            fontSize: '10px', color: '#FFC400',
                            marginRight: 8
                        }} />
                        <p>|</p>
                        <span className='product_rate_selled'> {'Đã bán 500'}</span>
                    </div>
                    <div className='product_price'>
                        1.490.000
                        <sup>₫</sup>
                    </div>

                    <div className='product_address_box'>
                        <div className='product_address_name'>
                            Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
                        </div>
                        <span style={{ color: 'rgb(10, 104, 255)' }}> Đổi</span>
                    </div>

                    <div>
                        <div style={{ margin: '10px 0px' }}>
                            Số Lượng
                        </div>
                        <div className='product_quantity'>
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <MinusOutlined />
                            </button>
                            <InputNumber min={1} max={10}
                                defaultValue={1}
                                onChange={onChange}
                                width={30}
                            // disabled={true}
                            />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <PlusOutlined />
                            </button>
                        </div>

                        <div style={{ marginTop: 20, display: 'flex', gap: 16 }}>
                            <Button
                                className='btn_buy_now'>Mua ngay</Button>
                            <Button className='btn_buy_first'>
                                <div style={{ fontSize: 14 }}>
                                    Mua trước trả sau
                                </div>
                                <div style={{ fontSize: 10, marginTop: -4 }}>
                                    Lãi suất 0%
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div className='my-4'>
                        Thanh toán
                        <PayPalScriptProvider options={initialOptions}>
                            <div className='max-w-[150px]'>
                                <PayPalButtons
                                    style={{
                                        color: 'silver',
                                        // layout: 'horizontal',
                                        // height: 44,
                                        tagline: false,
                                        shape: 'pill',
                                        label: 'paypal',
                                        disableMaxWidth: true
                                    }}
                                    fundingSource={undefined}
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                    onCancel={() => {
                                        console.log('cancel');
                                    }}
                                    onError={(err) => {
                                        console.log('error');
                                    }}
                                />
                            </div>
                        </PayPalScriptProvider>
                    </div>

                    <div>
                        <LikeShareComponent href={window.location.href} />
                    </div>
                </Col>
            </Row>
            <div>
                <CommentComponent href={window.location.href}/>
            </div>
        </div>
    );
}

export default ProductDetailPage;