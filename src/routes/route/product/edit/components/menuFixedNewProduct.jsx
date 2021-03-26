import { Component } from 'react'
import $ from 'jquery'

class menuFixedNewProduct extends Component {
  
  componentDidMount() {
    window.onscroll = function() {
      var basic = document.getElementById('div-basic-information').getBoundingClientRect().top
      var sales = document.getElementById('div-seller-information').getBoundingClientRect().top
      var image = document.getElementById('div-manager-image').getBoundingClientRect().top
      var shipping = document.getElementById('div-shipping').getBoundingClientRect().top
      var other = document.getElementById('div-other-information').getBoundingClientRect().top
      if (other < 100) {
        $('.link-menu-new-product').removeClass('active')
        $('#span-other-information').addClass('active')
      } else if (shipping < 100) {
        $('.link-menu-new-product').removeClass('active')
        $('#span-shipping').addClass('active')
      } else if (image < 100) {
        $('.link-menu-new-product').removeClass('active')
        $('#span-manager-image').addClass('active')
      } else if (sales < 100) {
        $('.link-menu-new-product').removeClass('active')
        $('#span-seller-information').addClass('active')
      } else if (basic < 100) {
        $('.link-menu-new-product').removeClass('active')
        $('#span-basic-information').addClass('active')
      }
    }
  }
  
  
  goToInfoBasic = async () => {
    document.getElementById('div-basic-information').scrollIntoView()
    $('.link-menu-new-product').removeClass('active')
    $('#span-basic-information').addClass('active')
  }

  goToInfoSales = async () => {
    document.getElementById('div-seller-information').scrollIntoView()
    $('.link-menu-new-product').removeClass('active')
    $('#span-seller-information').addClass('active')
  }

  goToInfoImage = async () => {
    document.getElementById('div-manager-image').scrollIntoView()
    $('.link-menu-new-product').removeClass('active')
    $('#span-manager-image').addClass('active')
  }

  goToInfoShipping = async () => {
    document.getElementById('div-shipping').scrollIntoView()
    $('.link-menu-new-product').removeClass('active')
    $('#span-shipping').addClass('active')
  }

  goToInfoOther = async () => {
    document.getElementById('div-other-information').scrollIntoView()
    $('.link-menu-new-product').removeClass('active')
    $('#span-other-information').addClass('active')
  }

  render() {
    return (
      <>
        <div className="div-submmenu-go-to-internal col-md-3 col-lg-2 h-100 position-sticky t-0 r-0 py-5">
          <div className="w-100 position-relative" style={{ "minHeight": "80vh" }}>
            <div className="div-link-menu-right position-absolute">
              <span style={{'cursor': 'pointer'}} id="span-basic-information" onClick={this.goToInfoBasic} className="link-menu-new-product nav-link submenu-right-new-product active m-0 py-2 pl-2">Thông tin cơ bản</span>
              <span style={{'cursor': 'pointer'}} id="span-seller-information" onClick={this.goToInfoSales} className="link-menu-new-product nav-link submenu-right-new-product m-0 py-2 pl-2">Thông tin bán hàng</span>
              <span style={{'cursor': 'pointer'}} id="span-manager-image" onClick={this.goToInfoImage} className="link-menu-new-product nav-link submenu-right-new-product m-0 py-2 pl-2">Quản lý hình ảnh</span>
              <span style={{'cursor': 'pointer'}} id="span-shipping" onClick={this.goToInfoShipping} className="link-menu-new-product nav-link submenu-right-new-product m-0 py-2 pl-2">Vận chuyển</span>
              <span style={{'cursor': 'pointer'}} id="span-other-information" onClick={this.goToInfoOther} className="link-menu-new-product nav-link submenu-right-new-product m-0 py-2 pl-2">Thông tin khác </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default menuFixedNewProduct
