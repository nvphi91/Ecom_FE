import { makeAutoObservable } from 'mobx';

class AdminProductStore {
    allProducts = [];

    constructor() {
        makeAutoObservable(this);
    }
}
const adminProductStore = new AdminProductStore();
export default adminProductStore;