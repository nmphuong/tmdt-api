import { Component } from 'react'
import logo from '../../../../../assets/Rokida/images/Logo/logo_red.svg'
import { FaMapMarkerAlt, FaGlobe, FaMailBulk } from 'react-icons/fa'

class footer extends Component {
  render() {
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0">
            <div className="col-12 footer pt-3 pb-5">
              <div className="row p-0 m-0">
                <div className="col-12">
                  <div className="col-12 line social-div position-relative">
                    <div className="row p-0 m-0 justify-content-center">
                      <div className="col-lg-6 text-center">
                        <img src={logo} alt="" width="200" />
                      </div>
                      <div className="col-lg-6">
                        <div className="name-company">
                          <p className="text-uppercase font-weight-bold">
                            CÔNG TY CỔ PHẦN BILLIONAIRE
                          </p>
                          <p>
                            <span><FaMapMarkerAlt />&nbsp;</span>
                            <span>Tâng 16 - Landmark 5 - 205 Nguyễn Hữu Cảnh - p22 - Quận Bình Thạnh - TP HCM</span>
                          </p>
                          <p>
                            <span><FaGlobe />&nbsp;</span>
                            <span>www.billionairegroup.vn</span>
                          </p>
                          <p>
                            <span><FaMailBulk />&nbsp;</span>
                            <span>info@billionairegroup.vn</span>
                          </p>
                          <p>
                            <span className="d-flex">
                              <span className="ministry-of-industry">
                                <img className="w-100" src="https://bluebit.vn/wp-content/uploads/2020/08/logo-da-thong-bao-website-voi-bo-cong-thuong.png" alt="" />
                              </span>
                              &nbsp;&nbsp;&nbsp;
                              <span className="ministry-of-industry">
                                <img className="w-100" src="https://bluebit.vn/wp-content/uploads/2020/08/logo-da-thong-bao-website-voi-bo-cong-thuong.png" alt="" />
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default footer
