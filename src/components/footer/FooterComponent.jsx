import React, { memo } from 'react';
import './style.scss';

const FooterComponent = () => {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className='col-lg-4'>
                        <div className={'footer-about'}>
                            <h1 className={'footer-about-logo'}>Sivi Shop</h1>
                            <ul>
                                <li>
                                    Địa chỉ: 213 Dương Đình Nghệ
                                </li>
                                <li>
                                    Phone: 0963376146
                                </li>
                                <li>
                                    Email: nvphi91@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        Footer 2
                    </div>
                    <div className={'col-lg-4'}>
                        Footer 3
                    </div>
                    <div className={'col-lg-4'}>
                        Footer 4
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(FooterComponent);