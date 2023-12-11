
import React, { memo } from 'react';
import { Card, Image } from 'antd';
import './cardItem.scss';
import {
    StarFilled
} from '@ant-design/icons';
import Images from 'commons/Images';

const CardItem = (props) => {
    const { name, image, type, price, countInStock,
        rating, description, discount, selled } = props.product

    const onClickProduct = () => {
        props.onClickProduct(props.product)
    }

    return (
        <Card
            hoverable
            style={{ width: 140 }}
            bodyStyle={{ padding: '10px' }}
            className={'card_product'}
            cover={<img alt="example" src={image} />}
            onClick={onClickProduct}
        >
            <img
                className={'card_img_logo'}
                src={Images.LOGO_CARD} />
            <div className={'card_name_product'}>{name}</div>
            <div className={'card_rate_product'}>
                <span>{rating}</span>
                <StarFilled style={{
                    fontSize: '10px', color: 'yellow',
                    marginLeft: 2, marginRight: 8
                }} />
                <p>|</p>
                <span style={{ marginLeft: 8 }}> {'Đã bán 1000+'}</span>
            </div>
            <div className={'card_price_product'}>
                <span>
                    {price.toLocaleString()}
                </span>
                {discount && <div>{`-${discount}%`}</div>}
            </div>
        </Card>
    );
}

export default memo(CardItem);