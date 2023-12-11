
import React, { useEffect } from 'react';
import ProductItem from './components/ProductItem';
import SliderComponent from './components/SliderComponent';
import './style.scss'
import Images from 'commons/Images'
import NavbarComponent from 'components/navbar/NavbarComponent';
import { Button } from 'antd';
import CardItem from 'components/cardComponent/CardItem';
import { homeStore } from './index';
import { observer } from 'mobx-react';
import { useNavigate, generatePath } from 'react-router-dom';

const HomePage = () => {
    const products = ['tv', 'tu lanh', 'lap top']
    const sliders = [Images.SLIDER1, Images.SLIDER2, Images.SLIDER3]
    const navigate = useNavigate()

    useEffect(() => {
        homeStore.getAllProduct()
    }, [])

    const loadMore = () => {
        homeStore.page += 1
        homeStore.getAllProduct()
    }

    const onClickProduct = (item) => {
        console.log(`/product-detai/${item._id}`);
        navigate(`/product-detai/${item._id}`)
    }

    return (
        <>
            <div className={'home_content'}>
                <div className={'home_top'}>
                    {
                        products.map((item, index) => {
                            return <ProductItem
                                key={index}
                                title={item} />
                        })
                    }
                </div>
            </div>
            <div className={'home_slider'}>
                <SliderComponent sliders={sliders} />
                <div className={'home_card_content'}>
                    {
                        homeStore.allProducts && homeStore.allProducts.map((item, index) => {
                            return <CardItem
                                key={index}
                                product={item}
                                onClickProduct={onClickProduct}
                            />
                        })
                    }
                </div>
                {
                    homeStore.allProducts.length < homeStore.total && <div className='container_btn'>
                        <Button
                            className='btn_more my-10'
                            onClick={loadMore}
                        >
                            <span>{'Xem thêm'}</span>
                        </Button>
                    </div>
                }
            </div>

        </>
    );
}

export default observer(HomePage);