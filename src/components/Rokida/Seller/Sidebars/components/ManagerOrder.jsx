import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerOrder extends Component {
  render() {
    var link = [
      {
        href: "/portal/sale/order/all",
        name: "Tất cả"
      },
      {
        href: "/portal/sale/order/cancel",
        name: "Đơn hủy"
      },
      {
        href: "/portal/sale/order/refund",
        name: "Trả hàng / Hoàn tiền"
      }
    ]
    return (
      <>
        <MenuDetail name="Quản lý đơn hàng" icon="FaClipboardList" link={link}/>
      </>
    );
  }
}

export default ManagerOrder
