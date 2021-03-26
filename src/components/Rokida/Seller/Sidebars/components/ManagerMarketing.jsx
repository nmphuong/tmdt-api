import { Component } from 'react'
import MenuDetail from './MenuDetail.jsx'

class ManagerMarketing extends Component {
  render() {
    var link = [
      {
        href: "all",
        name: "Kênh Marketing"
      },
      {
        href: "destroy",
        name: "Quảng cáo Shopee"
      }
    ]
    return (
      <>
        <MenuDetail name="Kênh Marketing" link={link}/>
      </>
    );
  }
}

export default ManagerMarketing
