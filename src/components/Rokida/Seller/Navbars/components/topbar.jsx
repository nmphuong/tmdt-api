import { Component } from 'react'
import { DropdownButton, Dropdown, Spinner } from 'react-bootstrap'
import { FaHome, FaPowerOff } from 'react-icons/fa'
import logo from '../../../../../assets/Rokida/images/Logo/logo.svg'
// Import api
import authStore from '../../../../../stores/auth.store'

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProfile: null
    }
  }

  componentDidMount() {
    if (window.location.pathname.split("/").pop() !== 'login' && window.location.pathname.split("/").pop() !== 'register' && window.location.pathname.split("/").pop() !== 'forgot-password') {
      authStore.getProfile().then(async (res) => {
        if (res.data === false) {
          window.location.href = '/portal/login'
        } else {
          await this.setState({
            dataProfile: res.data
          })
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }

  logout = () => {
    localStorage.removeItem('j6VDAJXFnY-user-rokida')
  }
  
  render() {
    return (
      <>
        <div className="col-12 text-white">
          <div className="row p-0 m-0 text-center align-items-center justify-content-center">
            <div className="col-lg-4 download-app">Tải ứng dụng</div>
            <div className="col-lg-4 logo">
              <a href="/portal/sale/order/all">
                <img width="180" src={logo} alt="" />
              </a>
            </div>
            {(window.location.pathname.split("/").pop() === 'login' || window.location.pathname.split("/").pop() === 'register' || window.location.pathname.split("/").pop() === 'forgot-password')
              ? <div className="col-lg-4 utility row align-items-center justify-content-center">
                  <div className="index-rokida">
                    <a href="https://rokida.com" className="nav-link text-white">Trang chủ Rokida</a>
                  </div>
                </div>
              : <div className="col-lg-4 utility row align-items-center justify-content-center">
              <div className="noti">Thông báo</div>
              <div>&nbsp;|&nbsp;</div>
              <div className="help">Trợ giúp</div>
              <div>&nbsp;|&nbsp;</div>
              <div className="user row align-items-center p-0 m-0">
                <div className="avt avt-user ml-2 d-flex justify-content-center align-items-center">
                  {(this.state.dataProfile === null || this.state.dataProfile === undefined)
                  ? <Spinner animation="border" variant="light" size="sm" />
                  : <img className="w-100 h-100" src={this.state.dataProfile.avatar} alt="" />}
                </div>
                <div className="name-user">
                {
                (this.state.dataProfile === null || this.state.dataProfile === undefined)
                  ? <Spinner animation="border" variant="light" size="sm" />
                  : <DropdownButton id="dropdown-username-button" title={(this.state.dataProfile === null || this.state.dataProfile === undefined) ? '' : this.state.dataProfile.name}>
                      <Dropdown.Item href="#/action-1" className="text-danger"><FaHome />&nbsp;Trang chủ</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="/portal/login" onClick={this.logout}>
                        <FaPowerOff />&nbsp;Đăng xuất
                      </Dropdown.Item>
                    </DropdownButton>
                }
                </div>
              </div>
            </div>}
          </div>
        </div>
      </>
    );
  }
}

export default TopBar
            