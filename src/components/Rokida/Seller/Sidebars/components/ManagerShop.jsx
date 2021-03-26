import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerShop extends Component {
  render() {
    var link = [
      {
        href: "all",
        name: "Đánh giá shop"
      },
      {
        href: "destroy",
        name: "Hồ sơ shop"
      },
      {
        href: "destroy",
        name: "Trang trí shop"
      },
      {
        href: "destroy",
        name: "Danh mục của shop"
      },
      {
        href: "destroy",
        name: "Báo cáo của tôi"
      }
    ]
    return (
      <>
        <MenuDetail name="Quản lý shop" link={link}/>
      </>
    );
  }
}

export default ManagerShop
