import { Component } from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

import * as FontFa from 'react-icons/fa'

// Import css
import '../../../assets/Rokida/css/SellerStyle/style/settingShop/index.css'

// Impory Component 
import NamePage from '../../../components/Rokida/Seller/SettingShop/components/namePage.jsx'

import StepSettingShop from '../../../components/Rokida/Seller/SettingShop/components/stepSettingShop.jsx'

import { dataComponent } from'./data'

class chat extends Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_setting_chat} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            <NamePage />
            <StepSettingShop activeTab="chat" dataTabName={dataComponent.data} />
            <hr className="mb-2 w-100" />
            <div className="row p-0 m-0 align-items-center profile-setting-min-height disabled">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaMoneyBillWaveAlt />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                  Cho phép Trả giá
                </p>
                  <p>Nếu tắt chức năng này, Người mua sẽ không thể trả giá</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="chat_bargain" />
                  <label className="custom-control-label" htmlFor="chat_bargain">
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
                    <FontFa.FaCheckCircle />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                  Cho phép Chat từ trang Hồ sơ
                </p>
                  <p>Bật để cho phép mọi người chat với bạn qua trang Hồ sơ. Khuyến khích với người mua.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="chat_allow_chat" />
                  <label className="custom-control-label" htmlFor="chat_allow_chat">
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
                    <FontFa.FaUserSlash />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col">
                  <p className="font-weight-bold">
                  Người dùng đã bị chặn
                </p>
                  <p>Danh sách người dùng bạn đã chặn từ Chat.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col justify-content-end">
                  <p>Chưa có Người dùng nào bị chặn</p>
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

export default chat
