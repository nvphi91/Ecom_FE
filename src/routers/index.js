import AdminPage from "pages/admin/AdminPage";
import LoginPage from "pages/login/LoginPage";
import ProductDetailPage from "pages/productDetail/ProductDetailPage";
import TypeProductPage from "pages/typeProduct/TypeProductPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RegisterPage from "pages/register/RegisterPage";
import ProfilePage from "pages/profile/ProfilePage";

const { default: HomePage } = require("../pages/home/HomePage");
const { default: OrderPage } = require("../pages/order/OrderPage");
const { default: ProductPage } = require("../pages/product/ProductPage");

const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    }, {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    }, {
        path: '/product',
        page: ProductPage,
        isShowHeader: true
    },{
        path: '/product-detai/:id',
        page: ProductDetailPage,
        isShowHeader: true
    },{
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },{
        path: '/sign-in',
        page: LoginPage,
        isShowHeader: false
    },{
        path: '/sign-up',
        page: RegisterPage,
        isShowHeader: false
    },{
        path: '/profile',
        page: ProfilePage,
        isShowHeader: true
    },{
        path: '/admin',
        page: AdminPage,
        isShowHeader: false
    }, {
        path: '*',
        page: NotFoundPage
    },
]

const routesSivi = [
    {
        path: '/',
        name: 'Trang chủ',
    }, {
        path: '/store',
        name: 'Cửa hàng'
    }, {
        path: '/product',
        name: 'Sản phẩm',
        isShowSubMenu: true,
        child: [
            {
                name: 'Thịt',
                path: ''
            },{
                name: 'Rau củ',
                path: ''
            },{
                name: 'Thức ăn nhanh',
                path: ''
            },
        ]
    }, {
        path: '/post',
        name: 'Bài viết'
    }, {
        path: '/contact',
        name: 'Liên hệ'
    }
]

export {
    routes, routesSivi
}