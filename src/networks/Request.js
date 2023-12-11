// const axios = require('axios');
import axios from 'axios';

const configHeader = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
        headers: {
            'token': `Beare ${window.token}`,
            'Content-Type': 'application/json'
        }
    });
}

const getAPI = async (url, params) => {
    try {
        var instance = configHeader();
        var response = await instance.get(url, {
            params: params
        });
        console.log('=======GET=========');
        console.log(url);
        console.log(response);

        return handleResponseSuccess(response);
    } catch (error) {
        console.log(url);
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return;
        }
        return handleResponseError(error)
    }
}

const postAPI = async (url, params) => {
    try {
        var instance = configHeader();
        var response = await instance.post(url, params, {});
        console.log('=======POST=========');
        console.log(url);
        console.log(response);
        return handleResponseSuccess(response);
    } catch (error) {
        console.log('error');
        console.log(url);
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return;
        }
        return handleResponseError(error);
    }
}

const putAPI = async (url, bodies) => {
    try {
        var instance = configHeader();
        var response = await instance.put(url, bodies);
        console.log('=======PUT=========');
        console.log(url);
        console.log(response);
        return handleResponseSuccess(response);
    } catch (error) {
        console.log('error');
        console.log(url);
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return;
        }
        return handleResponseError(error);
    }
}

function handleResponseError(error) {
    console.log('==========ERROR=============');
    console.log(error);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error.response');
        console.log(error.response);
        console.log(error.response.data);
        console.log(error.response.status);
        const status = error.response.status;
        var message = error.response.data ? error.response.data : 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!';
        if (status == 401) {
            window.token = null
            window.userInfo = null
            localStorage.setItem('access_token', null);
        } else {
            // Thiết bị/kết nối của quý khách đang không ổn định. Xin vui lòng thử lại, xin cảm ơn!
            // RootNavigation.navigate(SCREEN.MODAL_DEFAULT, {
            //     message: `Có lỗi xảy ra trong quá trình xử lý, Quý khách vui lòng thử lại sau (${status})`,
            // })
            return;
        }

    } else if (error.request) {
        console.log('error.request');
        console.log(error.request);
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // RootNavigation.navigate(SCREEN.MODAL_DEFAULT, {
        //     message: `Thiết bị/kết nối của quý khách đang không ổn định (1001). Xin vui lòng thử lại, xin cảm ơn!`
        // })
        return;
    } else {
        console.log('error 1');
        // Something happened in setting up the request that triggered an Error
        // RootNavigation.navigate(SCREEN.MODAL_DEFAULT, {
        //     message: `Thiết bị/kết nối của quý khách đang không ổn định (1002). Xin vui lòng thử lại, xin cảm ơn!`
        // })
        return;
    }
}

async function handleResponseSuccess(response) {
    if (response.status == 200) {
        return {
            'code': response.data.statusCode,
            'message': response.data.message,
            'response': response.data.data
        }
    } else {
        return {
            'code': 1,
            'message': 'Đã có lỗi xảy ra',
        }
    }
}

export { postAPI, getAPI, putAPI };




