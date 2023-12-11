import { makeAutoObservable, runInAction } from 'mobx';
import { API_ALL_PRODUCT } from 'networks/Api';
import { postAPI, getAPI } from 'networks/Request';
import { homeStore } from '.';

class HomeStore {
    allProducts = [];
    limit = 10;
    page = 0;
    total = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setAllProduct = (products) => {
        this.allProducts.push(...products)
    }

    async getAllProduct() {
        const params = {
            'limit': this.limit,
            'page': this.page
        }
        var res = await getAPI(API_ALL_PRODUCT, params)
        console.log(res);
        if (!res) { return }
        if (res.code == 0) {
            this.setAllProduct(res.response.data)
            runInAction(()=>{
                homeStore.total = res.response.total
            })
        } else {
            //error 
            console.log(res.message);
        }
    }
}

export default HomeStore;