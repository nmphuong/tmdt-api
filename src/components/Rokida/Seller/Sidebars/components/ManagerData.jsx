import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerData extends Component {
  render() {
    var link = [
      {
        href: "all",
        name: "Phân tích bán hàng"
      },
      {
        href: "destroy",
        name: "Hiệu quả hoạt động"
      },
      {
        href: "destroy",
        name: "Shop yêu thích"
      }
    ]
    return (
      <>
        <MenuDetail name="Dữ liệu" link={link}/>
      </>
    );
  }
}

export default ManagerData
