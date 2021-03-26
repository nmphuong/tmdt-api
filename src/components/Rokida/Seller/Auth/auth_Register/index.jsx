import { Component } from 'react'

import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firebase from '../../../../../firebase/firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// Import API
import authStore from '../../../../../stores/auth.store'

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      invalidRequiredPhone: false,
      numberPhoneInvalid: false,
      invalidRequiredPhoneCode: false,
      numberPhoneInvalidCode: false,
      buttonLoading: false,
      invalidExitstsPhone: false,
      phoneVal: '',
      phoneCodeVal: '',
      arrayKeyCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', null],
      arrayCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', null],
      step: 1,
      resend: 60,
      verificationId: null,
      messageCodeError: false,
      nameShop: '',
      password: '',
      rePassword: '',
      passwordRequired: '',
      repasswordRequired: '',
      nameRequired: '',
    }
  }

  componentDidMount() {
  }

  // Convert Number phone +84
  onSignInSubmit = async () => {
    if (this.state.phoneVal === '') {
      this.setState({
        invalidRequiredPhone: true
      })
    } else {
      if (this.state.phoneVal.length === 10) {
        var phone_10 = '+84' + this.state.phoneVal.slice(1, this.state.phoneVal.length)
        await this.setState({
          phoneVal: phone_10
        })
        this.sendCodePhone()
      } else if (this.state.phoneVal.length === 9) {
        var phone_9 = '+84' + this.state.phoneVal
        await this.setState({
          phoneVal: phone_9
        })
        this.sendCodePhone()
      } else if (this.state.phoneVal.length === 12) {
        if (this.state.phoneVal.indexOf('+84') === 0) {
          this.sendCodePhone()
        } else {
          this.setState({
            invalidRequiredPhone: false,
            numberPhoneInvalid: true
          })
        }
      } else {
        this.setState({
          invalidRequiredPhone: false,
          numberPhoneInvalid: true
        })
      }
    }
  }

  // Send code to phone number and check phone number exists
  sendCodePhone = async () => {
    this.setState({
      invalidExitstsPhone: false,
      buttonLoading: true
    })
    await authStore.checkPhoneExists(this.state.phoneVal).then(async (res) => {
      if (res.data === true) {
        await this.renderRecaptcha()
        this.setState({
          resend: 60
        })
        var phone = this.state.phoneVal
        firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
          .then(async (confirmationResult) => {
            window.confirmationResult = confirmationResult
            await this.setState({
              step: 2,
              buttonLoading: false
            })
            this.handleResendCode()
            return true
          }).catch((error) => {
            return false
          })
      } else {
        this.setState({
          buttonLoading: false,
          invalidExitstsPhone: true
        })
      }
    }).catch(e => {
    })
  }

  // Render recaptcha
  renderRecaptcha = async () => {
    this.setState({
      buttonLoading: true
    })
    await this.setState({
      invalidRequiredPhone: false,
      numberPhoneInvalid: false
    })
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
      }
    })
  }

  // Input number phone change
  handlePhoneChange = async (event) => {
    if (this.state.arrayKeyCode.indexOf(event.nativeEvent.data) !== -1) {
      await this.setState({
        phoneVal: event.target.value
      })
      if (this.state.phoneVal.length === 0) {
        this.setState({
          invalidRequiredPhone: true,
          numberPhoneInvalid: false
        })
      } else if (this.state.phoneVal.length !== 12 && this.state.phoneVal.length !== 10 && this.state.phoneVal.length !== 9) {
        this.setState({
          invalidRequiredPhone: false,
          numberPhoneInvalid: true
        })
      } else {
        this.setState({
          invalidRequiredPhone: false,
          numberPhoneInvalid: false
        })
      }
    } else {
      this.setState({
        invalidRequiredPhone: false,
        numberPhoneInvalid: true
      })
    }
  }

  // Check code verify phone number
  checkCode = async () => {
    this.setState({
      buttonLoading: true,
      messageCodeError: false
    })
    await window.confirmationResult.confirm(this.state.phoneCodeVal).then((result) => {
      this.setState({
        buttonLoading: false,
        step: 3,
        messageCodeError: false
      })
      return true
    }).catch((error) => {
      this.setState({
        buttonLoading: false,
        messageIncorrectCode: true,
        messageCodeError: true
      })
      return false
    });
  }

  // Resend code phone number
  handleResendCode = async () => {
    if (this.state.resend > 0) {
      setTimeout(() => {
        this.setState({
          resend: this.state.resend - 1
        })
        this.handleResendCode()
      }, 1000)
    }
  }

  // Input number code phone change
  handlePhoneCodeChange = async (event) => {
    if (this.state.arrayCode.indexOf(event.nativeEvent.data) !== -1) {
      await this.setState({
        phoneCodeVal: event.target.value
      })
      if (this.state.phoneCodeVal.length === 0) {
        this.setState({
          invalidRequiredPhoneCode: true,
          numberPhoneInvalidCode: false
        })
      } else if (this.state.phoneCodeVal.length !== 6) {
        this.setState({
          invalidRequiredPhoneCode: false,
          numberPhoneInvalidCode: true
        })
      } else {
        this.setState({
          invalidRequiredPhoneCode: false,
          numberPhoneInvalidCode: false
        })
      }
    } else {
      this.setState({
        invalidRequiredPhoneCode: false,
        numberPhoneInvalidCode: true
      })
    }
  }

  // register
  register = async () => {
    this.setState({
      buttonLoading: true,
      passwordRequired: false,
      messagePasswordNotSame: false,
      repasswordRequired: false,
      nameRequired: false
    })
    var error = 0
    if (this.state.password !== this.state.rePassword) {
      this.setState({
        buttonLoading: false,
        messagePasswordNotSame: true
      })
      error = error + 1
    }
    if (this.state.password === '') {
      this.setState({
        buttonLoading: false,
        passwordRequired: true,
        messagePasswordNotSame: false
      })
      error = error + 1
    }
    if (this.state.rePassword === '') {
      this.setState({
        buttonLoading: false,
        repasswordRequired: true,
        messagePasswordNotSame: false
      })
      error = error + 1
    }
    if (this.state.nameShop === '') {
      this.setState({
        buttonLoading: false,
        nameRequired: true
      })
      error = error + 1
    }
    if (error === 0) {
      var query = {}
      query.phone = this.state.phoneVal
      query.name = this.state.nameShop
      query.password = this.state.password
      authStore.register(query).then(async (res) => {
        window.location.href = '/portal/login'
      }).catch(e => {
      })
    }
  }

  render() {
    return (
      <>
        <div className="row login mh-80vh">
          <div className="col-md-12 mh-100 p-0 m-0 d-flex justify-content-center parent-img-view-login align-items-center">
            {/* <img className="img-view-login" src={background} alt="" />
          </div>
          <div className="col-md-6 mh-100 p-0 m-0 d-flex justify-content-center align-items-center"> */}
            {/* Step 1: Input phone number */}
            {(this.state.step === 1)
              ? <div className="form-login p-4">
                <div id="recaptcha-container"></div>
                <p className="font-weight-bold h4 text-center">
                  Đăng ký bán hàng cùng Rokida
                  </p>
                <input id="phone" type="text" onChange={this.handlePhoneChange} value={this.state.phoneVal} placeholder="Số điện thoại" className="form-control mt-3" onKeyPress={event => { if (event.key === 'Enter') { this.onSignInSubmit() } }} />
                {(this.state.invalidExitstsPhone === false) ? '' : <p className="text-danger m-0">Số điện thoại đã được sử dụng</p>}
                {(this.state.invalidRequiredPhone === false) ? '' : <p className="text-danger m-0">Không được để trống ô</p>}
                {(this.state.numberPhoneInvalid === false) ? '' : <p className="text-danger m-0">Số điện thoại nhập không đúng</p>}
                {(this.state.buttonLoading === false)
                  ? <button type="button" onClick={this.onSignInSubmit} className="btn btn-danger w-100 my-2">Đăng ký</button>
                  : <button type="button" disabled className="btn btn-danger w-100 disbaled my-2">
                    <Spinner animation="border" variant="light" size="sm" />&nbsp;&nbsp;Loading...
                    </button>
                }
                <hr className="p-0 m-0 mt-3 py-2" />
                <div className="text-center d-flex justify-content-center">
                  Bạn đã có tài khoản?&nbsp;<Link to="/portal/login" className="nav-link p-0">Đăng nhập</Link>
                </div>
              </div>
              : ''}
            {/* Step 2: Input code send to phone number */}
            {(this.state.step === 2)
              ? <div className="form-login p-4">
                <div id="recaptcha-container"></div>
                <p className="font-weight-bold h4 text-center">
                  Nhập mã xác thực
                  </p>
                {(this.state.messageCodeError === true)
                  ? <div className="text-danger">
                    <p className="text-danger mb-1">Mã xác thực không đúng.</p>
                    <p className="text-danger mb-1">Vui lòng thử lại.</p>
                  </div>
                  : ''
                }
                <input id="phone" type="text" onChange={this.handlePhoneCodeChange} value={this.state.phoneCodeVal} placeholder="Mã xác thực" className="form-control mt-3" onKeyPress={event => { if (event.key === 'Enter') { this.checkCode() } }} />
                {(this.state.resend > 0)
                  ? <p className="text-primary d-flex justify-content-center m-0">Gửi lại mã sau {this.state.resend} giây</p>
                  : <button type="button" onClick={this.sendCodePhone} className="btn btn-danger w-100 my-2">Gửi lại mã</button>
                }
                {(this.state.invalidRequiredPhoneCode === false) ? '' : <p className="text-danger m-0">Không được để trống ô</p>}
                {(this.state.numberPhoneInvalidCode === false) ? '' : <p className="text-danger m-0">Mã xác thực nhập không đúng</p>}
                {(this.state.buttonLoading === false)
                  ? ((this.state.phoneCodeVal === '' || this.state.phoneCodeVal.length !== 6)
                    ? <button type="button" disabled className="btn btn-danger w-100 my-2 disabled">Đăng ký</button>
                    : <button type="button" onClick={this.checkCode} className="btn btn-danger w-100 my-2">Đăng ký</button>)
                  : <button type="button" disabled className="btn btn-danger w-100 disbaled my-2">
                    <Spinner animation="border" variant="light" size="sm" />&nbsp;&nbsp;Loading...
                    </button>
                }
                <hr className="p-0 m-0 mt-3 py-2" />
                <div className="text-center d-flex justify-content-center">
                  Bạn đã có tài khoản?&nbsp;<Link to="/portal/login" className="nav-link p-0">Đăng nhập</Link>
                </div>
              </div>
              : ''}
            {/* Step: Input name, password and avatar */}
            {(this.state.step === 3)
              ? <div className="form-login p-4">
                <div id="recaptcha-container"></div>
                <p className="font-weight-bold h4 text-center">
                  Đăng ký bán hàng cùng Rokida
              </p>
                {(this.state.messagePasswordNotSame === true)
                  ? <div className="text-danger">
                    <p className="mb-1">Mật khẩu không giống nhau</p>
                  </div>
                  : ''}
                <input id="password-shop" value={this.state.password} onKeyPress={event => { if (event.key === 'Enter') { this.register() } }} onChange={event => { this.setState({ password: event.target.value }) }} type="password" placeholder="Mật khẩu" className="form-control mt-3" />
                {(this.state.passwordRequired === true)
                  ? <p className="text-danger">Không được để ô trống</p>
                  : ''}
                <input id="re-password-shop" value={this.state.rePassword} onKeyPress={event => { if (event.key === 'Enter') { this.register() } }} onChange={event => { this.setState({ rePassword: event.target.value }) }} type="password" placeholder="Nhập lại mật khẩu" className="form-control mt-3" />
                {(this.state.repasswordRequired === true)
                  ? <p className="text-danger">Không được để ô trống</p>
                  : ''}
                <input id="name-shop" value={this.state.nameShop} onKeyPress={event => { if (event.key === 'Enter') { this.register() } }} onChange={event => { this.setState({ nameShop: event.target.value }) }} type="text" placeholder="Tên shop" className="form-control mt-3" />
                {(this.state.nameRequired === true)
                  ? <p className="text-danger">Không được để ô trống</p>
                  : ''}
                {(this.state.buttonLoading === true)
                  ? <button type="button" disabled className="btn btn-danger w-100 disbaled my-2">
                    <Spinner animation="border" variant="light" size="sm" />&nbsp;&nbsp;Loading...
                </button>
                  : <button type="button" className="btn btn-danger w-100 my-2" onClick={this.register}>Hoàn tất</button>}
                <hr className="p-0 m-0 mt-3 py-2" />
                <div className="text-center d-flex justify-content-center">
                  Bạn đã có tài khoản?&nbsp;<Link to="/portal/login" className="nav-link p-0">Đăng nhập</Link>
                </div>
              </div>
              : ''}
          </div>
        </div>
      </>
    );
  }
}

export default index
