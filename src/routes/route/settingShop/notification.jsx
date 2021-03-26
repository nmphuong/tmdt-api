import { Component } from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

// Import css
import '../../../assets/Rokida/css/SellerStyle/style/settingShop/index.css'

// Impory Component 
import NamePage from '../../../components/Rokida/Seller/SettingShop/components/namePage.jsx'

import StepSettingShop from '../../../components/Rokida/Seller/SettingShop/components/stepSettingShop.jsx'

import { dataComponent } from './data'

import { Accordion, Button, Card } from 'react-bootstrap'

import * as FontFa from 'react-icons/fa'

class notification extends Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_setting_notification} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            <NamePage />
            <StepSettingShop activeTab="notification" dataTabName={dataComponent.data} />
            <hr className="mb-2 w-100" />
            {/*  */}
            <div className="row p-0 m-0 profile-setting-min-height">
              <Accordion className="col-12 p-0 m-0">
                <Card className="border-0 bg-none">
                  <Card.Header className="p-0 py-2 bg-none">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-1">
                          <div className="row h-100 align-items-center">
                            <div className="pr-3 icon">
                              <FontFa.FaMailBulk />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-11 p-0 m-0">
                          <div className="row p-0 m-0 justify-content-between align-items-center">
                            <div className="text">
                              <p className="font-weight-bold">Thông báo Email</p>
                              <p className="m-0">Kiểm soát việc Shopee gửi email đến bạn</p>
                            </div>
                            <div className="button-edit-email">
                              <Accordion.Toggle as={Button} variant="link" className="py-0 p-0" eventKey="0">
                                <button className="px-3 btn bg-none text-dark border-secondary">Kích hoạt Email</button>
                              </Accordion.Toggle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="" style={{ background: 'rgb(234, 234, 234)' }}>
                      <div className="row">
                        <div className="col-12 p-0 m-0">
                          <div className="row p-0 m-0">
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaClipboardList />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Cập nhật đơn hàng
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_update_order" />
                                    <label className="custom-control-label" htmlFor="notification_update_order">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaGift />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Bản tin
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_news" />
                                    <label className="custom-control-label" htmlFor="notification_news">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100 disabled">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaRegNewspaper />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Cập nhật sản phẩm
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_update_product" />
                                    <label className="custom-control-label" htmlFor="notification_update_product">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100 disabled">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaRegUser />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Nội dung cá nhân
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_content_user" />
                                    <label className="custom-control-label" htmlFor="notification_content_user">
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* // */}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr className="my-2" />
              </Accordion>
            </div>
            {/*  */}
            <div className="row p-0 m-0 profile-setting-min-height">
              <Accordion className="col-12 p-0 m-0">
                <Card className="border-0 bg-none">
                  <Card.Header className="p-0 py-2 bg-none">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-1">
                          <div className="row h-100 align-items-center">
                            <div className="pr-3 icon">
                              <FontFa.FaBell />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-11 p-0 m-0">
                          <div className="row p-0 m-0 justify-content-between align-items-center">
                            <div className="text">
                              <p className="font-weight-bold">Thông báo</p>
                              <p className="m-0">Đối với Người dùng iOS: vui lòng bật cài đặt thông báo điện thoại của bạn trong phần Cài đặt <FontFa.FaAngleRight />Thông báo</p>
                            </div>
                            <div className="button-edit-email">
                              <Accordion.Toggle as={Button} variant="link" className="py-0 p-0" eventKey="0">
                                <button className="px-3 btn bg-none text-dark border-secondary">Kích hoạt thông báo</button>
                              </Accordion.Toggle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="" style={{ background: 'rgb(234, 234, 234)' }}>
                    <div className="row">
                        <div className="col-12 p-0 m-0">
                          <div className="row p-0 m-0">
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaLayerGroup />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Thông báo theo nhóm
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification__notification_group" />
                                    <label className="custom-control-label" htmlFor="notification__notification_group">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaRegListAlt />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                      Cập nhật đơn hàng
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_notification_update_order" />
                                    <label className="custom-control-label" htmlFor="notification_notification_update_order">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaRocketchat />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Chats
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_chats" />
                                    <label className="custom-control-label" htmlFor="notification_chats">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaTags />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Khuyến mãi Shopee
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_promotion-shopee" />
                                    <label className="custom-control-label" htmlFor="notification_promotion-shopee">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaCommentAlt />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                      Theo dõi và Bình luận
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_follow_and_comment" />
                                    <label className="custom-control-label" htmlFor="notification_follow_and_comment">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaGift />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Sản phẩm hết hàng
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_out__stock" />
                                    <label className="custom-control-label" htmlFor="notification_out__stock">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaWallet />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Cập nhật Ví
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_wallet" />
                                    <label className="custom-control-label" htmlFor="notification_wallet">
                                    </label>
                                  </div>
                                </div>
                                <hr className="my-2 w-100" />
                              </div>
                            </div>
                            {/*  */}
                            <div className="w-100 disabled">
                              <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                                <div className="col-lg-1">
                                  <div className="row">
                                    <div className="pr-3 icon">
                                      <FontFa.FaBusinessTime />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11 user row align-items-center p-0 m-0">
                                  <div className="basic-user col-md-11">
                                    <p className="font-weight-bold">
                                    Ngân sách quảng cáo hàng ngày.
                                    </p>
                                    <p className="m-0">
                                    Kích hoạt chức năng nhận thông báo khi ngân sách hàng ngày đang ở mức thấp.
                                    </p>
                                  </div>
                                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-md-1 justify-content-end">
                                    <input type="checkbox" className="custom-control-input" id="notification_budget" />
                                    <label className="custom-control-label" htmlFor="notification_budget">
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* */}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr className="my-2" />
              </Accordion>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default notification
