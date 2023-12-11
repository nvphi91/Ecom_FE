// import FooterComponent from 'components/footer/FooterComponent';
import React from 'react';
import HeaderComponent from "../headerComponent/HeaderComponent"

const DefaultComponent = ({children}) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            {/* <FooterComponent /> */}
        </div>
    )
}
export default DefaultComponent