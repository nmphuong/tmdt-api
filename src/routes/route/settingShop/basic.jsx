import { Component } from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

import * as FontFa from 'react-icons/fa'

// Import css
import '../../../assets/Rokida/css/SellerStyle/style/settingShop/index.css'

// Impory Component 
import NamePage from '../../../components/Rokida/Seller/SettingShop/components/namePage.jsx'

import StepSettingShop from '../../../components/Rokida/Seller/SettingShop/components/stepSettingShop.jsx'

import { dataComponent } from './data'

class basic extends Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_basic_setting} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            <NamePage />
            <StepSettingShop activeTab="basic" dataTabName={dataComponent.data} />
            <hr className="mb-2 w-100" />
            <div className="row p-0 m-0 align-items-center profile-setting-min-height">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaPhoneAlt />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                    Cho phép Người Mua gọi
                </p>
                  <p>Bật lựa chọn này để hiển thị số điện thoại của bạn trong phần Thông tin sản phẩm để khách hàng có thể gọi điện cho bạn.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="basic_setting_phone" />
                  <label className="custom-control-label" htmlFor="basic_setting_phone">
                  </label>
                </div>
              </div>
              <hr className="my-2 w-100" />
            </div>
            {/*  */}
            <div className="row p-0 m-0 align-items-center profile-setting-min-height">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaShieldAlt />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                  Bảo vệ tài khoản của bạn ngay bây giờ bằng cách xác minh hoạt động đáng ngờ
                </p>
                  <p>Trong trường hợp hoạt động có rủi ro cao, hãy xác minh hoạt động với OTP</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="basic_setting_protect" />
                  <label className="custom-control-label" htmlFor="basic_setting_protect">
                  </label>
                </div>
              </div>
              <hr className="my-2 w-100" />
            </div>
            {/*  */}
            <div className="row p-0 m-0 align-items-center profile-setting-min-height disabled">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaMoon />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                  Chế độ Tạm nghỉ
                </p>
                  <p>Kích hoạt Chế độ Tạm nghỉ để ngăn khách hàng đặt đơn hàng mới. Những đơn hàng đang tiến hành vẫn phải được xử lý.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="take_a_break" />
                  <label className="custom-control-label" htmlFor="take_a_break">
                  </label>
                </div>
              </div>
              <hr className="my-2 w-100" />
            </div>
            {/*  */}
            <div className="row p-0 m-0 align-items-center profile-setting-min-height">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaGlobe />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col">
                  <p className="font-weight-bold m-0">
                  Ngôn ngữ
                </p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col justify-content-end">
                  <div className="row p-0 m-0">
                    <div className="col-12 p-0 m-0">
                      <div className="custom-control custom-radio">
                        <input defaultChecked type="radio" id="vietnamese" name="language" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="vietnamese">Việt Nam (vietnamese)</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="english" name="language" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="english">English</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-2 w-100" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default basic
