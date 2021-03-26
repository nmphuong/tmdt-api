import { Component } from 'react'

// Import icon 
import * as FontFa from 'react-icons/fa'
import { Accordion, Button, Card } from 'react-bootstrap'

//  Import message translate
import { messageSettingAccount } from '../../../../../../include/language/vi'

import authStore from '../../../../../../stores/auth.store'

class account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  updateEmail = async () => {
    if (this.state.email !== '') {
      if (window.confirm('Bạn có chắc chắn muốn cập nhật email này?')) {
        await this.setState({
          loader: true
        })
        await authStore.updateEmail(this.state.email)
        .then(async (res) => {
          if (res.data === false) {
            await this.setState({
              loader: false
            })
          } else {
            localStorage.removeItem('j6VDAJXFnY-user-rokida')
            window.location.href = '/portal/login'
          }
        })
        .catch(async (err) => {
          await this.setState({
            loader: false
          })
          console.log(err)
        })
        await this.setState({
          loader: false
        })
      }
    }
  }

  render() {
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0 setting-shiping pt-2 pb-5">
            <div className="container-fluid">
              <div className="col-lg-12 px-0 py-1 m-0">
                <span className="font-weight-bold h5">
                  {messageSettingAccount.account}
                </span>
                <p>{messageSettingAccount.change_setting_default}</p>
              </div>
              <hr className="mt-2 mb-3" />
              <div className="container-fluid py-3">
                {/* Hồ sơ của tôi */}
                <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="pr-3 icon">
                        <FontFa.FaUserAlt />
                      </div>
                      <div className="text">
                        {messageSettingAccount.myProfile}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 user row align-items-center p-0 m-0">
                    <div className="avt avt-user ml-2 d-flex justify-content-center align-items-center">
                      <img className="w-100 h-100" src={JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).avatar} alt="" />
                    </div>
                    <div className="name-user">
                      &nbsp;&nbsp;<span>{JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).name}</span>
                    </div>
                  </div>
                  <hr className="mt-3 mb-2 w-100" />
                </div>
                {/* Phone number */}
                <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="pr-3 icon">
                        <FontFa.FaPhoneAlt />
                      </div>
                      <div className="text">
                        {messageSettingAccount.numberPhone}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 user row align-items-center p-0 m-0 justify-content-between">
                    <div className="name-user">
                      <span>*****{(JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).phone).slice((JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).phone).length - 2, (JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).phone).length)}</span>
                    </div>
                    <div className="button-edit-phone">
                      <button className="px-3 btn bg-none text-dark border-secondary">{messageSettingAccount.btnEdit}</button>
                    </div>
                  </div>
                  <hr className="my-2 w-100" />
                </div>
                {/* Email */}
                <div className="row p-0 m-0 profile-setting-min-height">
                  <Accordion className="col-12 p-0 m-0">
                    <Card className="border-0 bg-none">
                      <Card.Header className="p-0 py-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="row">
                                <div className="pr-3 icon">
                                  <FontFa.FaMailBulk />
                                </div>
                                <div className="text">
                                  {messageSettingAccount.email}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-9 text-right px-0">
                              <div className="row p-0 m-0 justify-content-between">
                                <div className="email-user">
                                  {
                                    (JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email !== null && JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email !== undefined)
                                    ? <span>{(JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email).slice(0, 2)}*****{(JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email).slice((JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email).indexOf('@'), (JSON.parse(localStorage.getItem('j6VDAJXFnY-profile-user-rokida-profile')).email).length)}</span>
                                    : <span>Email chưa được cập nhật</span>
                                  }
                                </div>
                                <div className="button-edit-email">
                                  <Accordion.Toggle as={Button} variant="link" className="py-0 p-0" eventKey="0">
                                    <span className="btn px-3 btn bg-none text-dark border-secondary">{messageSettingAccount.btnEdit}</span>
                                  </Accordion.Toggle>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="" style={{background: 'rgb(234, 234, 234)'}}>
                          <div className="row">
                            <div className="col-12 p-0 m-0">
                              <div className="row p-0 m-0">
                                <div className="col-lg-2">
                                  <div className="email">
                                    {messageSettingAccount.email}
                                  </div>
                                </div>
                                <div className="col-lg-10">
                                  <div className="row p-0 m-0">
                                    <div className="col-lg-10">
                                      <div className="input-change-email">
                                        <input onChange={
                                          (event) => {
                                            this.setState({
                                              email: event.target.value
                                            })
                                          }
                                        } value={this.state.email} type="email" className="form-control" placeholder="Nhập vào" />
                                      </div>
                                    </div>
                                    <div className="col-lg-2">
                                      <div className="button-change-email">
                                        <button onClick={this.updateEmail} className="w-100 btn btn-danger">{messageSettingAccount.btnSave}</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <hr className="my-2" />
                  </Accordion>
                </div>
                {/* Password */}
                <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="pr-3 icon">
                        <FontFa.FaLock />
                      </div>
                      <div className="text">
                        {messageSettingAccount.passwordLogin}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 user row align-items-center justify-content-between p-0 m-0">
                    <div className="name-user">
                      <span className="text-secondary">{messageSettingAccount.yourMessage}</span>
                    </div>
                    <div className="button-edit">
                      <button className="px-3 btn bg-none text-dark border-secondary">{messageSettingAccount.btnUpdate}</button>
                    </div>
                  </div>
                  <hr className="my-2 w-100" />
                </div>
                {/* API platform */}
                <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="pr-3 icon">
                        <FontFa.FaLaptopCode />
                      </div>
                      <div className="text">
                        {messageSettingAccount.partnerPlatformAPI}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 user row align-items-center justify-content-between p-0 m-0">
                    <div className="name-user">
                      <span className="text-secondary">{messageSettingAccount.notYetSetup}</span>
                    </div>
                    <div className="button-edit">
                      <button className="px-3 btn bg-none text-dark border-secondary disabled">{messageSettingAccount.btnView}&nbsp;<FontFa.FaAngleDown /></button>
                    </div>
                  </div>
                  <hr className="my-2 w-100" />
                </div>
                {/* Account link */}
                <div className="row p-0 m-0 align-items-center profile-setting-min-height">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="pr-3 icon">
                        <FontFa.FaLink />
                      </div>
                      <div className="text">
                        {messageSettingAccount.linkAccount}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 user row align-items-center justify-content-between p-0 m-0">
                    <div className="name-user">
                      <span className="text-dark">{messageSettingAccount.notSetup}</span>
                    </div>
                    <div className="button-edit">
                      <button className="px-3 btn bg-none text-dark border-secondary disabled">{messageSettingAccount.btnView}&nbsp;<FontFa.FaAngleDown /></button>
                    </div>
                  </div>
                  <hr className="my-2 w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default account
