import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class SettingShop extends Component {
  render() {
    var link = [
      {
        href: "/portal/settings/shop/address",
        name: "Địa chỉ"
      },
      // {
      //   href: "/portal/settings/basic/shop",
      //   name: "Thiết lập cơ bản"
      // },
      {
        href: "/portal/settings/account",
        name: "Tài khoản"
      }
    ]
    return (
      <>
        <MenuDetail name="Thiết lập shop" icon="FaCog" link={link}/>
      </>
    );
  }
}

export default SettingShop
