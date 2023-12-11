import { makeAutoObservable } from 'mobx';
import { API_LOGIN, API_USER_INFO } from 'networks/Api';
import { postAPI, getAPI } from 'networks/Request';
import { message } from 'antd';
import { jwtDecode } from "jwt-decode";
import { globalStore } from 'stores';
class LoginStore {
    isLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    setLoading = (isLoading) => {
        this.isLoading = isLoading
    }

    async login(email, password, success) {
        this.setLoading(true)
        const params = {
            'email': email,
            'password': password
        }
        var res = await postAPI(API_LOGIN, params)
        this.setLoading(false)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            // console.log(res.response);
            const token = res.response.access_token
            const re_token = res.response.refesh_token
            localStorage.setItem('access_token', token);
            localStorage.setItem('refesh_token', re_token);
            window.token = token;
            console.log(token);
            console.log(global.token);
            message.success(res.message, 3)
            const decoded = jwtDecode(token);
            if (decoded.payload.id) {
                this.userInfo(decoded.payload.id, success)
            }
        } else {
            //error 
            console.log(res.message);
            message.error(res.message, 3)
        }
    }

    async userInfo(id, success) {
        const params = {
            'id': id
        }
        console.log('param');
        console.log(params);
        var res = await postAPI(API_USER_INFO, params)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            globalStore.setUser(res.response)
            success()
        } else {
            //error 
            console.log(res.message);
        }
    }
}

export default LoginStore;