import React, { memo, useEffect } from 'react';

const LikeShareComponent = (props) => {
    const { href } = props

    console.log('env: ', process.env);
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse()
        }
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: process.env.REACT_APP_FACEBOOK_APP_ID,
                autoLogAppEvent: true,
                cookie: true,
                xfbml: true,
                version: 'v11.0'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, [])

    return (
        <>
            <div className="fb-like"
                data-href={process.env.NODE_ENV === "development" ? 'https://www.24h.com.vn/' : href}
                data-width=""
                data-layout="standard"
                data-action="like"
                data-size="small"
                data-share="true">
            </div>
        </>
    )
}

export default memo(LikeShareComponent);