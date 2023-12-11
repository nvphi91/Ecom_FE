import React from 'react';
import { Alert, Space, Spin } from 'antd';
const LoadingComponent = (props) => {
    const { children, loading } = props
    return (
        <Spin spinning={loading} delay={500}>
            {children}
        </Spin>
    );
}

export default LoadingComponent;