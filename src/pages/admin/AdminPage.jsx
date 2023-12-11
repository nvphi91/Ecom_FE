import { Menu } from 'antd';
import React, { useState } from 'react';
import './Admin.scss';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import AdminUser from './component/AdminUser';
import AdminProduct from './component/AdminProduct';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Người dùng', 'user', <MailOutlined />),
    getItem('Sản phẩm', 'product', <AppstoreOutlined />),
];

const AdminPage = () => {

    const [openKeys, setOpenKeys] = useState('user');

    const onOpenChange = (keys) => {
        // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        // if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        //     setOpenKeys(keys);
        // } else {
        //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        // }
    };

    const onClick = ({ item, key, keyPath, domEvent }) => {
        // console.log(key);
        setOpenKeys(key)
    }

    const renderContent = () => {
        switch (openKeys) {
            case 'user':
                return <AdminUser />
            case 'product':
                return < AdminProduct />
        }
    }

    return (
        <div style={{ display: "flex" }}>
            <Menu
                mode="inline"
                // openKeys={openKeys}
                // onOpenChange={onOpenChange}
                defaultSelectedKeys={['user']}
                defaultOpenKeys={['user']}
                style={{ width: 256, height: '100vh', boxShadow: '1px 1px 1px #ccc' }}
                items={items}
                onClick={onClick}

            />
            <div style={{ flex: 1, padding: 15 }}>
                {
                    renderContent()
                }
            </div>
        </div>
    );
}

export default AdminPage;