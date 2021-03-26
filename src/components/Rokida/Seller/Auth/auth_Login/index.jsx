import { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Import API
import authStore from '../../../../../stores/auth.store'

// Import Mesage
import { messageLogin } from '../../../../../include/language/vi'

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      invalidRequiredPhone: false,
      invalidRequiredPassword: false,
      numberPhoneInvalid: false,
      phoneVal: '',
      pwdVal: '',
      arrayKeyCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', null],
      buttonLoading: false,
      loginFail: false,
      typePass: 'password'
    }
  }

  changePhone = async() => {
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
        this.handleLogin()
      } else if (this.state.phoneVal.length === 9) {
        var phone_9 = '+84' + this.state.phoneVal
        await this.setState({
          phoneVal: phone_9
        })
        this.handleLogin()
      } else if (this.state.phoneVal.length === 12) {
        if (this.state.phoneVal.indexOf('+84') === 0) {
          this.handleLogin()
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

  handleLogin = () => {
    var actionLogin = true
    if (this.state.phoneVal === '') {
      actionLogin = false
      this.setState({
        invalidRequiredPhone: true
      })
    } else {
      this.setState({
        invalidRequiredPhone: false
      })
    }
    if (this.state.pwdVal === '') {
      actionLogin = false
      this.setState({
        invalidRequiredPassword: true
      })
    } else {
      this.setState({
        invalidRequiredPassword: false
      })
    }
    if (actionLogin === true) {
      this.setState({
        invalidRequiredPhone: false,
        invalidRequiredPassword: false,
        buttonLoading: true,
        loginFail: false
      })
      var query = {}
      query.phone = this.state.phoneVal
      query.password = this.state.pwdVal
      authStore.login(query).then(async (res) => {
        this.setState({
          loginFail: false,
          buttonLoading: false
        })
        localStorage.setItem('j6VDAJXFnY-user-rokida', res.data.token)
        localStorage.setItem('j6VDAJXFnY-profile-user-rokida-profile', JSON.stringify(res.data))
        window.location.href = '/portal/sale/order/all'
      }).catch(e => {
        this.setState({
          buttonLoading: false,
          loginFail: true
        })
      })
    }
  }

  handlePhoneChange = async(event) => {
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

  handlePasswordChange = (event) => {
    this.setState({
      pwdVal: event.target.value
    })
  }

  render() {
    return (
      <>
        <div className="row login mh-80vh">
          <div className="col-md-12 mh-100 p-0 m-0 d-flex justify-content-center parent-img-view-login align-items-center">
            <div className="form-login p-4">
              <p className="font-weight-bold h4 text-center">
                {messageLogin.titleForm}
              </p>
              {(this.state.loginFail === true) ? <div className="p-2 login-fail">
                <p className="text-danger mb-1">
                  {messageLogin.accountOrPasswordIncorect}
                </p>
                <p className="text-danger mb-1">
                  {messageLogin.retryPlease}
                </p>
              </div> : ''}
              <input id="phone" type="text" value={this.state.phoneVal} onChange={this.handlePhoneChange} placeholder={messageLogin.placeholderInputPhoneNumber} className="form-control mt-3" onKeyPress={event => {if (event.key === 'Enter') {this.changePhone()}}}/>
              {(this.state.invalidRequiredPhone === false) ? '' : <p className="text-danger m-0">{messageLogin.requiredEmpty}</p>}
              {(this.state.numberPhoneInvalid === false) ? '' : <p className="text-danger m-0">{messageLogin.phoneNumberInvalid}</p>}
              <div className="position-relative pb-2">
                <input style={{'padding-right': '45px'}} id="pwd" type={this.state.typePass} onChange={this.handlePasswordChange} placeholder={messageLogin.placeholderInputPassword} className="form-control mt-3" onKeyPress={event => {if (event.key === 'Enter') {this.changePhone()}}}/>
                <div className="position-absolute" style={{"top": "7px", 'right': '10px', 'cursor': 'pointer'}}>
                  {(this.state.typePass === 'password')
                  ? <FaRegEye style={{'cursor': 'pointer'}} onClick={() => {this.setState({typePass: 'text'})}} />
                  : <FaRegEyeSlash style={{'cursor': 'pointer'}} onClick={() => {this.setState({typePass: 'password'})}} />
                  }
                </div>
              </div>
              {(this.state.invalidRequiredPassword === false) ? '' : <p className="text-danger m-0">{messageLogin.requiredEmpty}</p>}
              <div className="d-flex row p-0 m-0 pb-3">
                <div className="col-6 p-0">
                  <input type="checkbox" />
                  &nbsp;{messageLogin.rememberMe}
                </div>
                <div className="col-6 p-0 text-right">
                  <Link to="/portal/forgot-password" className="nav-link p-0">{messageLogin.forgotPassword}</Link>
                </div>
              </div>
              {(this.state.buttonLoading === false)
              ? <button type="button" onClick={this.changePhone} className="btn btn-danger w-100">{messageLogin.btnLogin}</button>
              : <button type="button" disabled className="btn btn-danger w-100 disbaled">
                  <Spinner animation="border" variant="light" size="sm" />&nbsp;&nbsp;{messageLogin.btnLoading}
                </button>
              }
              <hr className="p-0 m-0 mt-3 py-2" />
              <div className="text-center">
                <Link to="/portal/register" className="nav-link p-0">{messageLogin.registerLink}</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default index
