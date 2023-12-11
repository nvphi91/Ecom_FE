import React, { useState } from 'react';
import Images from 'commons/Images';
import {
    EyeOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { registerStore } from './index';
const RegisterPage = () => {
    const [isShowPass, setShowPass] = useState(false)
    const [isShowRePass, setShowRePass] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [phone, setPhone] = useState()

    const navigate = useNavigate()

    const onShowPass = () => {
        setShowPass(!isShowPass)
    }

    const onShowRePass = () => {
        setShowRePass(!isShowRePass)
    }

    const onChange = (text, name) => {
        registerStore.setErrorMessage(null)

        switch (name) {
            case 'name':
                setName(text)
                break;
            case 'email':
                setEmail(text)
                break;
            case 'password':
                setPassword(text)
                break;
            case 'repassword':
                setRePassword(text)
                break;
            case 'phone':
                setPhone(text)
                break;
        }
    }

    const doLogin = () => {
        navigate('/sign-in')
    }

    const doRegister = () => {
        registerStore.register(name, email, password, rePassword, phone)
    }

    return (
        <div className='h-screen w-screen bg-[#ccc] flex items-center justify-center'>
            <div className='w-[800px] rounded-md bg-white flex overflow-hidden'>
                <div className='flex-1 bg-white p-10 space-y-4'>
                    <h4 className='text-xl font-semibold'>Xin chào </h4>
                    <p>Đăng ký tài khoản Tiki</p>
                    <input
                        type="text"
                        placeholder='họ tên'
                        className='bg-white rounded-md border 
                    border-[#ccc] h-11 w-full outline-none px-4'
                        onChange={(e) => onChange(e.target.value, 'name')} />
                    <input
                        type="email"
                        placeholder='abc@gmail.com'
                        className='bg-white rounded-md border 
                    border-[#ccc] h-11 w-full outline-none px-4'
                        onChange={(e) => onChange(e.target.value, 'email')} />
                    <div className='relative'>
                        <input
                            type={isShowPass ? 'text' : 'password'}
                            placeholder='mật khẩu'
                            className='bg-white rounded-md border 
                    border-[#ccc] h-11 w-full outline-none px-4'
                            onChange={(e) => onChange(e.target.value, 'password')}
                        />
                        <span
                            className='absolute top-[10px] bottom-[10px] right-2'
                            onClick={onShowPass}>
                            {
                                isShowPass ?
                                    <EyeOutlined />
                                    :
                                    <EyeInvisibleOutlined />
                            }
                        </span>
                    </div>
                    <div className='relative'>
                        <input
                            type={isShowRePass ? 'text' : 'password'}
                            placeholder='mật lại khẩu'
                            className='bg-white rounded-md border 
                    border-[#ccc] h-11 w-full outline-none px-4'
                            onChange={(e) => onChange(e.target.value, 'repassword')} />
                        <span
                            className='absolute top-[10px] bottom-[10px] right-2'
                            onClick={onShowRePass}>
                            {
                                isShowRePass ?
                                    <EyeOutlined />
                                    :
                                    <EyeInvisibleOutlined />
                            }
                        </span>
                    </div>
                    <input
                        type="number"
                        placeholder='số điện thoại'
                        className='bg-white rounded-md border 
                    border-[#ccc] h-11 w-full outline-none px-4'
                        onChange={(e) => onChange(e.target.value, 'phone')} />
                    {
                        registerStore.errorMessage && <div className='text-sm text-red-500'>{registerStore.errorMessage}</div>
                    }
                    <div className='text-center space-y-6 pt-10'>
                        <button
                        disabled = {
                            !name.length || 
                            !email.length || 
                            !password.length || 
                            !rePassword.length || 
                            !phone.length
                        }
                            onClick={doRegister}
                            className='h-11 bg-red-500 text-white px-4 rounded-md'>
                            Đăng ký
                        </button>
                        <div>Bạn đã có tài khoản? <span onClick={doLogin} className='text-blue'>Đăng nhập</span></div>
                    </div>
                </div>
                <div className='flex w-[300px] flex-col justify-center 
                items-center gradientBg'>
                    <div className='max-w-[203px] max-h-[203px]'>
                        <img src={Images.SIGNIN_LOGO} alt="" />
                    </div>
                    <div className='text-center space-y-2 mt-10'>
                        <h3 className='text-[#0b74e5] text-[17px] font-semibold'>
                            Mua sắm tại Tiki
                        </h3>
                        <h4 className='text-[#0b74e5] text-[16px]'>
                            Siêu ưu đãi mỗi ngày
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(RegisterPage);
