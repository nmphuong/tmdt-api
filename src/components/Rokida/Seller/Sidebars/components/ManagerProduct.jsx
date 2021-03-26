import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerProduct extends Component {
  render() {
    var link = [
      {
        href: "/portal/sale/product/all",
        name: "Tất cả sản phẩm"
      },
      {
        href: "/portal/sale/product/add/category",
        name: "Thêm sản phẩm"
      },
      {
        href: "/portal/sale/product/banned/action",
        name: "Sản phẩm vi phạm"
      }
    ]
    return (
      <>
        <MenuDetail name="Quản lý sản phẩm" icon="FaList" link={link}/>
      </>
    );
  }
}

export default ManagerProduct
