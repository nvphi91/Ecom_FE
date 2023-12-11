import { makeAutoObservable, runInAction } from 'mobx';
import { API_USER_UPDATE } from 'networks/Api';
import { putAPI } from 'networks/Request';
import { message } from 'antd';

class ProfileStore {
    allProducts = [];
    errorMessage = null;

    constructor() {
        makeAutoObservable(this);
    }

    setErrorMessage = (errorMessage) => {
        this.errorMessage = errorMessage
    }

    async updateProfile(id, body) {
        const res = await putAPI(API_USER_UPDATE + `/${id}`, body)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            console.log(res.response);
            message.success('Cập nhật thành công', 3)
        } else {
            //error 
            console.log(res.message);
            this.setErrorMessage(res.message)
        }
    }
}

export default ProfileStore;