import { Component } from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

import * as FontFa from 'react-icons/fa'

// Import css
import '../../../assets/Rokida/css/SellerStyle/style/settingShop/index.css'

// Impory Component 
import NamePage from '../../../components/Rokida/Seller/SettingShop/components/namePage.jsx'

import StepSettingShop from '../../../components/Rokida/Seller/SettingShop/components/stepSettingShop.jsx'

import { dataComponent } from'./data'

class privacy extends Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_setting_privacy} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            <NamePage />
            <StepSettingShop activeTab="privacy" dataTabName={dataComponent.data} />
            <hr className="mb-2 w-100" />
            <div className="row p-0 m-0 align-items-center profile-setting-min-height disabled">
              <div className="col-lg-1">
                <div className="row">
                  <div className="pr-3 icon">
                    <FontFa.FaWifi />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                    Hoạt động riêng tư
                </p>
                  <p>Bật hoạt động riêng tư để ẩn hoạt động thích và bình luận của bạn khỏi những người đang theo dõi bạn.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="privacy_setting_privacy" />
                  <label className="custom-control-label" htmlFor="privacy_setting_privacy">
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
                    <FontFa.FaHeart />
                  </div>
                </div>
              </div>
              <div className="col-lg-11 user row align-items-center p-0 m-0">
                <div className="basic-user col-md-11">
                  <p className="font-weight-bold">
                  Ẩn thích của tôi
                </p>
                  <p>Người khác sẽ không thấy lượt thích của bạn trong hồ sơ shop nếu kích hoạt.</p>
                </div>
                <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                  <input type="checkbox" className="custom-control-input" id="privacy_setting_like_my" />
                  <label className="custom-control-label" htmlFor="privacy_setting_like_my">
                  </label>
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

export default privacy
