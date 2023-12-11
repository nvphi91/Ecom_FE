import React, { useState } from 'react';
import './Login.scss';
import { Button, Image } from 'antd';
import Images from 'commons/Images';
import {
    EyeOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
import LoadingComponent from 'components/loading/LoadingComponent';
import { useNavigate } from 'react-router-dom';
import { loginStore } from './index';
import InputComponent from 'components/inputs/InputComponent';
import { validateEmail } from 'commons/Ultil';
import { observer } from 'mobx-react';

const LoginPage = () => {
    const navigate = useNavigate()
    const [isShowText, setShowText] = useState(false)
    const [email, setEmail] = useState()
    const [errEmail, setErrEmail] = useState()
    const [password, setPassword] = useState()
    const [errPassword, setErrPassword] = useState()

    const onShowText = () => {
        setShowText(!isShowText)
    }

    const onChangeValue = (value, name) => {
        setErrEmail()
        setErrPassword()

        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const onLogin = () => {
        if (!email || email.length === 0) {
            setErrEmail('Vui lòng nhập email')
            return
        }

        if (!validateEmail(email)) {
            setErrEmail('Email không đúng định dạng')
            return
        }

        if (!password || password.length === 0) {
            setErrPassword('Vui lòng nhập mật khẩu')
            return
        }

        if (password.length < 6) {
            setErrPassword('Mật khẩu tối thiểu 6 ký tự')
            return
        }

        loginStore.login(email, password, () => {
            console.log('123');
            navigate('/')
        })
    }

    const doRegister = () => {
        navigate('/sign-up')
    }

    return (
        <div className='login_container'>
            <div className='login_content'>
                <div className='login_content_left'>
                    <div>
                        <h4>Đăng nhập bằng email </h4>
                        <p>Nhập email và mật khẩu tài khoản Tiki</p>
                        <InputComponent
                            style={{ height: 40 }}
                            placeholder={'abc@gmail.com'}
                            name='email'
                            value={email}
                            onChangeValue={onChangeValue} />
                        {errEmail && <div className='text-red-500 text-[12px] pt-1'>{errEmail}</div>}
                    </div>

                    <div style={{
                        position: 'relative',
                        marginTop: 10
                    }}>
                        <InputComponent
                            style={{ height: 40 }}
                            placeholder={'Mật khẩu'}
                            name='password'
                            value={password}
                            onChangeValue={onChangeValue}
                            type={isShowText ? 'text' : 'password'} />
                        <span
                            style={{
                                position: 'absolute', top: 10,
                                right: 8
                            }}
                            onClick={onShowText}>
                            {
                                isShowText ?
                                    <EyeOutlined />
                                    :
                                    <EyeInvisibleOutlined />
                            }
                        </span>
                    </div>
                    <div>
                        {errPassword && <div className='text-red-500 text-[12px] pt-1'>{errPassword}</div>}
                    </div>
                    <LoadingComponent loading={loginStore.isLoading}>
                        <Button
                            onClick={onLogin}
                            className='btn_buy_now'>Đăng nhập</Button>
                    </LoadingComponent>
                    <p className='forgot_pass'>Quên mật khẩu?</p>
                    <p className='create-account'>Chưa có tài khoản? <span onClick={doRegister}>Tạo tài khoản</span></p>
                </div>

                <div className='login_content_right'>
                    <Image
                        height='203px' width='203px'
                        src={Images.SIGNIN_LOGO}
                        preview={false}
                        alt={'login-logo'} />
                    <div className='content'>
                        <h4>
                            Mua sắm tại Tiki
                        </h4>
                        <span>
                            Siêu ưu đãi mỗi ngày
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(LoginPage);