import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerShipping extends Component {
  render() {
    var link = [
      {
        href: "/portal/sale/order/toship",
        name: "Quản lý vận chuyển",
      },
      // {
      //   href: "/portal/sale/waiting-for-delivery",
      //   name: "Giao hàng loạt"
      // },
      {
        href: "/portal/settings/shop/logistics",
        name: "Cài đặt vận chuyển"
      }
    ]
    return (
      <>
        <MenuDetail name="Vận chuyển" icon="FaShippingFast" link={link}/>
      </>
    );
  }
}

export default ManagerShipping
