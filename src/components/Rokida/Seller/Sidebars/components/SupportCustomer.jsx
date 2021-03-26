import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class SupportCustomer extends Component {
  render() {
    var link = [
      {
        href: "all",
        name: "Trợ lý chat"
      }
    ]
    return (
      <>
        <MenuDetail name="Chăm sóc khách hàng" link={link}/>
      </>
    );
  }
}

export default SupportCustomer
