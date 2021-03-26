import { Component } from 'react'
import { Switch, Route } from "react-router-dom"

// ORDER
import OrderAll from './route/order/all.jsx'
import OrderUnpaid from './route/order/unpaid.jsx'
import OrderToShip from './route/order/toship.jsx'
import OrderShipping from './route/order/shipping.jsx'
import OrderComplete from './route/order/complete.jsx'
import OrderCancel from './route/order/cancel.jsx'
import ReturnRefund from './route/order/returnRefund.jsx'
import DetailOrder from './route/order/detail.jsx'
// SHIP
import SettingShipping from './route/shipping/logistics.jsx'
// USER
import Login from './route/user/login.jsx'
import Register from './route/user/register.jsx'
// PRODUCT
// AddCategory
import ProductCategory from './route/product/add/category.jsx'
// Add
import ProductDetail from './route/product/add/addProduct.jsx'
// Edit
import EditProduct from './route/product/edit/editProduct.jsx'
import ProductAll from './route/product/all.jsx'
import ProductActive from './route/product/active.jsx'
import ProductSoldout from './route/product/soldout.jsx'
import ProductBanned from './route/product/banned.jsx'
import ProductUnlisted from './route/product/unlisted.jsx'
import DetailProduct from './route/product/detail/detail.jsx'
// PROFILE
import ProfileSettingAccount from './route/profile/settingProfile/account.jsx'
// SHOP
import SettingShopBasic from './route/settingShop/basic.jsx'
import SettingShopPrivacy from './route/settingShop/privacy.jsx'
import SettingShopChat from './route/settingShop/chat.jsx'
import SettingShopNotification from './route/settingShop/notification.jsx'
// ADDRESS
import AddressShop from './route/address/index.jsx'
// BANK CARD
import BankCards from './route/finance/bankCards.jsx'

// Import API
import authStore from '../stores/auth.store'

class index extends Component {
  componentDidMount = async() => {
    if (window.location.pathname.split("/").pop() === 'login' || window.location.pathname.split("/").pop() === 'register' || window.location.pathname.split("/").pop() === 'forgot-password') {
      if (localStorage.getItem('j6VDAJXFnY-user-rokida') !== null) {
        await authStore.getProfile().then(async (res) => {
          if (res.data !== false) {
            window.location.href = '/portal/sale/order/all'
          } else {
            return true
          }
        }).catch(e => {
          console.log(e)
        })
      }
    } else {
      if (localStorage.getItem('j6VDAJXFnY-user-rokida') === null) {
        window.location.href = '/portal/login'
      }
    }
  }
  
  render() {
    return (
      <Switch>
        {/* ORDER */}
        <Route exact path="/portal/sale/order/all">
          <OrderAll />
        </Route>
        <Route exact path="/portal/sale/order/unpaid">
          <OrderUnpaid />
        </Route>
        <Route exact path="/portal/sale/order/toship">
          <OrderToShip />
        </Route>
        <Route exact path="/portal/sale/order/shipping">
          <OrderShipping />
        </Route>
        <Route exact path="/portal/sale/order/completed">
          <OrderComplete />
        </Route>
        <Route exact path="/portal/sale/order/cancel">
          <OrderCancel />
        </Route>
        <Route exact path="/portal/sale/order/refund">
          <ReturnRefund />
        </Route>
        <Route exact path="/portal/sale/order/detail/:id">
          <DetailOrder />
        </Route>
        {/* SHIP */}
        <Route exact path="/portal/settings/shop/logistics">
          <SettingShipping />
        </Route>
        {/* USER */}
        <Route exact path="/portal/login">
          <Login />
        </Route>
        <Route exact path="/portal/register">
          <Register />
        </Route>
        {/* PRODUCTS */}
        <Route exact path="/portal/sale/product/add/category">
          <ProductCategory />
        </Route>
        <Route exact path="/portal/sale/product/add/detail">
          <ProductDetail />
        </Route>
        <Route exact path="/portal/sale/product/all">
          <ProductAll />
        </Route>
        <Route exact path="/portal/sale/product/active">
          <ProductActive />
        </Route>
        <Route exact path="/portal/sale/product/soldout">
          <ProductSoldout />
        </Route>
        <Route exact path="/portal/sale/product/banned/action">
          <ProductBanned />
        </Route>
        <Route exact path="/portal/sale/product/banned/deleted">
          <ProductBanned />
        </Route>
        <Route exact path="/portal/sale/product/unlisted">
          <ProductUnlisted />
        </Route>
        <Route exact path="/portal/sale/product/detail/:id">
          <DetailProduct />
        </Route>
        <Route exact path="/portal/sale/product/edit/:id">
          <EditProduct />
        </Route>
        {/* PROFILE */}
        <Route exact path="/portal/settings/account">
          <ProfileSettingAccount />
        </Route>
        {/* SHOP */}
        <Route exact path="/portal/settings/basic/shop">
          <SettingShopBasic />
        </Route>
        <Route exact path="/portal/settings/basic/privacy">
          <SettingShopPrivacy />
        </Route>
        <Route exact path="/portal/settings/basic/chat">
          <SettingShopChat />
        </Route>
        <Route exact path="/portal/settings/basic/notification">
          <SettingShopNotification />
        </Route>
        {/* ADDRESS */}
        <Route exact path="/portal/settings/shop/address">
          <AddressShop />
        </Route>
        {/* BANK ACCOUNT */}
        <Route exact path="/portal/sale/finance/wallet/cards">
          <BankCards />
        </Route>
      </Switch>
    );
  }
}

export default index
