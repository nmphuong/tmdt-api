import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerFinance extends Component {
  render() {
    var link = [
      // {
      //   href: "all",
      //   name: "Doanh thu"
      // },
      // {
      //   href: "destroy",
      //   name: "Ví Shopee"
      // },
      {
        href: "/portal/sale/finance/wallet/cards",
        name: "Tài khoản ngân hàng"
      }
    ]
    return (
      <>
        <MenuDetail name="Tài chính" icon="FaWallet" link={link}/>
      </>
    );
  }
}

export default ManagerFinance
