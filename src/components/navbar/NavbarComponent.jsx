
import { Checkbox } from 'antd';
import React, { memo } from 'react';
import './navbar.scss';
import { Rate } from 'antd';

const NavbarComponent = (props) => {

    const onchange = (value) => {

    }

    const renderContent = (type, datas) => {
        switch (type) {
            case 'text':
                return <div>
                    {
                        datas.map((item, index) => {
                            return <div className='navbar_text_value'> {item}</div>
                        })
                    }
                </div>

            case 'checkbox':
                return <div>
                    <Checkbox.Group
                        className={'checkbox_group'}
                        onChange={onchange}>
                        {
                            datas.map(item => {
                                return <Checkbox
                                    style={{ marginLeft: 0 }}
                                    value={item.value}>
                                    <div className='navbar_text_value'>{item.label}</div>
                                </Checkbox>
                            })
                        }
                    </Checkbox.Group>
                </div>

            case 'rate':
                return <div>
                    {datas.map(item => {
                        return <div >
                            <Rate
                                style={{ fontSize: '12px' }}
                                disabled defaultValue={item} />
                            <span className='navbar_text_value'> {` từ ${item} sao`}</span>
                        </div>
                    })}
                </div>

            case 'price':
                return <div >
                    {datas.map(item => {
                        return <div className={'navbar_price navbar_text_value'}>
                            {item}
                        </div>
                    })}
                </div>

            default:
                break;
        }
    }
    return (
        <div>
            <div className='nav_bar_title'> {'Label'}</div>
            {
                renderContent('text', ['Tủ lạnh', 'Tv', 'Máy giặt'])
            }
            {
                renderContent('checkbox', [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }])
            }
            {
                renderContent('rate', [3, 4, 5])
            }
            {
                renderContent('price', ['50.000đ', '50.000đ - 1.000.000đ', '1.000.000đ - 10.000.000đ'])
            }
        </div>
    );
}

export default memo(NavbarComponent);