import { makeAutoObservable } from 'mobx';
import { API_REFRESH_TOKEN, API_USER_INFO } from 'networks/Api';
import { postAPI, getAPI } from 'networks/Request';
import { jwtDecode } from "jwt-decode";

class GlobalStore {
    userInfo = null

    constructor() {
        makeAutoObservable(this);
    }

    setUser(userInfo) {
        this.userInfo = userInfo
    }

    async getUserInfo(id) {
        const params = {
            'id': id
        }
        console.log('param');
        console.log(params);
        var res = await postAPI(API_USER_INFO, params)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            this.setUser(res.response)
        } else {
            //error 
            console.log(res.message);
        }
    }

    async getRefeshToken() {
        var res = await postAPI(API_REFRESH_TOKEN)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            const token = res.response
            if (token) {
                localStorage.setItem('access_token', token);
                window.token = token;
                const decoded = jwtDecode(token);
                if (decoded.payload.id) {
                    this.getUserInfo(decoded.payload.id)
                }
            }
        } else {
            //error 
            console.log(res.message);
        }
    }
}

export default GlobalStore;