import { Col, Pagination, Row } from 'antd';
import CardItem from 'components/cardComponent/CardItem';
import NavbarComponent from 'components/navbar/NavbarComponent';
import React from 'react';
import './TypeProduct.scss';


const TypeProductPage = () => {
    const onChange = (pageNumber) => {

    }
    return (
        <div className={'type_product_container'}>
            <Row className={'type_product_content'}>
                <Col span={4}
                    className='navbar_container'>
                    <NavbarComponent />
                </Col>
                <Col pan={20}>
                    <div className='content'>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        total={100}
                        onChange={onChange}
                        className='paging' />
                </Col>

            </Row>

        </div>
    );
}

export default TypeProductPage;