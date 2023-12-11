
import React, { memo } from 'react';

const ProductItem = (props) => {
    const {title} = props
    return (
        <div style={{whiteSpace: 'nowrap'}}>
            {title}
        </div>
    );
}

export default memo(ProductItem);