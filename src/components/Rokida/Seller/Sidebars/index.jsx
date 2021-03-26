import { Component } from 'react'
import ManagerOrder from './components/ManagerOrder.jsx'
import ManagerShipping from './components/ManagerShipping.jsx'
import ManagerProduct from './components/ManagerProduct.jsx'
// import ManagerMarketing from './components/ManagerMarketing.jsx'
import ManagerFinance from './components/ManagerFinance.jsx'
// import ManagerData from './components/ManagerData.jsx'
// import SupportCustomer from './components/SupportCustomer.jsx'
// import ManagerShop from './components/ManagerShop.jsx'
import SettingShop from './components/SettingShop.jsx'

class index extends Component {
  render() {
    return (
      <>
        <ManagerShipping />
        <ManagerOrder />
        <ManagerProduct />
        {/* <ManagerMarketing /> */}
        <ManagerFinance />
        {/* <ManagerData />
        <SupportCustomer />
        <ManagerShop /> */}
        <SettingShop />
      </>
    );
  }
}

export default index
