import { Row, Col, Badge, Popover } from 'antd';
// import Search from 'antd/es/input/Search';
import {
    UserOutlined, CaretDownOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import React, { memo, useEffect } from 'react';
import './style.scss'
import ButtonInputSearch from 'components/buttonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { globalStore } from 'stores/index';

const HeaderComponent = () => {
    const navigate = useNavigate()
    // const onSearch = (value, info) => {
    //     console.log(value);
    //     console.log(info);
    // }

    const onLogin = () => {
        if (globalStore.userInfo) {
            // console.log('123');
        } else {
            navigate('sign-in');
        }
    }

    const onCms = () => {
        navigate('admin');
    }

    const onLogout = () => {
        window.token = null;
        localStorage.clear();
        globalStore.setUser(null)
    }

    const onProfile = () => {
        navigate('/profile')
    }

    const goHome = () => {
        navigate('/')
    }

    const content = (
        <div className='space-y-2'>
            <p className='text-sm text-black hover:text-[#0a86f3] cursor-pointer'
                onClick={onLogout}>Đăng xuất</p>
            <p className='text-sm text-black hover:text-[#0a86f3] cursor-pointer'
                onClick={onProfile}
            >Thông tin người dùng</p>
            <p className='text-sm text-black hover:text-[#0a86f3] cursor-pointer'
                onClick={onCms}>Trang quản lý</p>
        </div>
    );

    return (
        <div>
            <Row className='header_top'>
                <Col span={6}>
                    <span className='header_top_left'
                        onClick={goHome}>
                        Tiki
                    </span>
                </Col>
                <Col span={12}>
                    {/* <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    /> */}
                    <ButtonInputSearch
                        size={'large'}
                        textButton="Tìm kiếm"
                        placeholder="Nhập tìm kiếm"
                    />
                </Col>
                <Col span={6}>
                    <div className={'header_top_right'}>
                        <div className={'header_top_right_account'}>
                            {
                                globalStore.userInfo?.avatar ?
                                    <div className='rounded-full border-[1px] border-gray-300 overflow-hidden 
                                flex justify-center items-center w-[20px] h-[20px]'>
                                        <img src={globalStore.userInfo?.avatar} alt=''
                                            className='w-[18px] object-scale-down' />
                                    </div>
                                    :
                                    <UserOutlined className={'icon_user'} />
                            }
                            {
                                globalStore.userInfo?.name ?
                                    <Popover content={content}>
                                        {globalStore.userInfo.name}
                                    </Popover>
                                    :
                                    <div onClick={onLogin}>
                                        <span className={'span_login'}>
                                            Đăng nhập/Đăng ký
                                        </span>
                                        <div>
                                            <span className={'span_login'}> {'Tài khoản'}</span>
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                            }

                        </div>
                        <div className={'header_top_right_card'}>
                            <Badge count={4} size={'small'}>
                                <ShoppingCartOutlined className={'icon_cart'} />
                            </Badge>
                            <span className={'span_card'}>
                                {
                                    'Giỏ hàng'
                                }
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default memo(observer(HeaderComponent))