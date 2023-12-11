import { makeAutoObservable, runInAction } from 'mobx';
import { API_REGISTER } from 'networks/Api';
import { postAPI } from 'networks/Request';

class RegisterStore {
    allProducts = [];
    errorMessage = null;

    constructor() {
        makeAutoObservable(this);
    }

    setErrorMessage = (errorMessage) => {
        this.errorMessage = errorMessage
    }

    async register(name, email, password, rePassword, phone) {
        const params = {
            'name': name,
            'email': email,
            'password': password,
            'confirmPassword': rePassword,
            'phone': phone
        }
        var res = await postAPI(API_REGISTER, params)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            console.log(res.response);
        } else {
            //error 
            console.log(res.message);
            this.setErrorMessage(res.message)
        }
    }
}

export default RegisterStore;