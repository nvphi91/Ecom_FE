import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { profileStore } from '.';
import { globalStore } from 'stores';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { getBase64 } from 'commons/Ultil';

const ProfilePage = () => {

    const navigate = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        if (globalStore.userInfo) {
            console.log(globalStore.userInfo);
            setName(globalStore.userInfo.name)
            setEmail(globalStore.userInfo.email)
            setPhone(globalStore.userInfo.phone)
            setAddress(globalStore.userInfo.address)
            setAvatar(globalStore.userInfo.avatar)
        }
    }, [globalStore.userInfo])

    const doUpdate = (namestr) => (e) => {
        const body = {}
        if (namestr === 'name') {
            body[namestr] = name
        } else if (namestr === 'email') {
            body[namestr] = email
        } else if (namestr === 'phone') {
            body[namestr] = phone
        } else if (namestr === 'address') {
            body[namestr] = address
        }
        profileStore.updateProfile(globalStore.userInfo._id, body)
    }

    const onChange = (text, name) => {
        profileStore.setErrorMessage(null)

        switch (name) {
            case 'name':
                setName(text)
                break;
            case 'email':
                setEmail(text)
                break;
            case 'phone':
                setPhone(text)
                break;
            case 'address':
                setAddress(text)
                break;
        }
    }

    const renderField = (name, title, value) => {
        return <div className='py-4'>
            <label
                htmlFor={name}
                className='text-base w-[100px] inline-block'>{title}</label>
            <input
                id={name}
                className='outline-none p-2 border-b-[1px] w-[300px]
                ml-2 mr-10'
                placeholder='Nhập text'
                value={value ?? ''}
                onChange={(e) => onChange(e.target.value, name)} />
            <button
                onClick={doUpdate(name)}
                className='bg-blue text-white px-4 py-2 rounded-md'>
                Cập nhật
            </button>
        </div>
    }

    const uploadButton = () => {
        return <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    }

    const dummyRequest = async ({ file, onSuccess }) => {
        console.log('123');
        console.log(file);

        const url = await getBase64(file);
        console.log(url);

        const body = {'avatar' : url}
        profileStore.updateProfile(globalStore.userInfo._id, body)

        setAvatar(url);
    };

    const beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJPG) {
            message.error('You can only upload JPG or PNG file!');
            return false;
        } else {
            return true;
        }
    }

    const handlePreview = async (file) => {
    };

    return (
        <div className='h-screen px-[120px] mx-auto mt-10
        flex flex-col items-center'>
            <h1 className='text-4xl font-semibold mb-10'>Thông tin User</h1>
            <div className='border-[1px] border-gray-300 mx-10 p-10 rounded-2xl'>
                {renderField('name', 'Name', name)}
                {renderField('email', 'Email', email)}
                {renderField('phone', 'Phone', phone)}
                {renderField('address', 'Address', address)}
                <div className='flex items-center'>
                    <p className='text-base text-black w-full'>Avatar</p>
                    <Upload
                        name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        onPreview={handlePreview}
                        customRequest={dummyRequest}
                        beforeUpload={beforeUpload}
                    >
                        {avatar 
                        ?
                            <img src={avatar} alt="avatar"
                                className='w-[100px] h-[100px] rounded-full object-scale-down' />
                            :
                            uploadButton()}
                    </Upload>
                </div>
            </div>
        </div>
    );
}

export default observer(ProfilePage);
