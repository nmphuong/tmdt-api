import { Component } from 'react'
// Import icon
import { FaPrint } from 'react-icons/fa'
// 
import ShippingUnit from './shippingUnit.jsx'

class shippingSetting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 
    }
  }

  render() {
    var items = []
    this.props.data.forEach((element, index) => {
      items.push(<ShippingUnit getData={this.props.getData} key={index} data={element} />)
    });
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0 setting-shiping pt-2 pb-5">
            <div className="container-fluid">
              <div className="col-lg-12 px-0 py-1 m-0">
                <span className="font-weight-bold h5">
                  Cài Đặt Vận Chuyển
                </span>
                <p>Thiết lập vận chuyển</p>
              </div>
              <hr className="mt-2 mb-3" />
              <div className="col-lg-12 px-0 py-1 m-0">
                <span className="font-weight-bold h6">
                  Kênh vận chuyển
                </span>
                <p>
                  Với các tùy chọn giao hàng được Shopee hỗ trợ, người mua sẽ được Shopee thông báo về thông tin theo dõi mới nhất của các đơn hàng của họ.
                </p>
              </div>
              <hr className="mt-2 mb-3" />
              <div className="col-lg-12 px-0 py-1 m-0">
                <span className="font-weight-bold h6">
                  Shopee Vận Chuyển
                </span>
                <p>
                  Với Kênh Vận Chuyển Tích Hợp, Người mua sẽ được thông báo thông tin theo dõi đơn hàng qua Shopee.
                </p>
              </div>
              <div className="col-lg-12 px-0 py-1 m-0">
                {items}
              </div>
              <hr className="mt-2 mb-3" />
              <div className="col-lg-12 px-0 py-1 m-0">
                <div className="row p-0 m-0">
                  <div className="col-9 d-flex align-items-center">
                    <p className="text-secondary h4 m-0 d-flex align-items-center">
                      <FaPrint />
                    </p>
                    &nbsp;&nbsp;&nbsp;
                    <div className="m-0">
                      <p className="font-weight-bold h6">
                        In Nhiệt (Thermal)
                      </p>
                      <p className="text-secondary m-0">
                        Bật In Nhiệt cho các Phiếu Xuất Hàng của tất cả kênh vận chuyển.
                      </p>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-end">
                    <div className="custom-control custom-switch custom-switch-lg px-0">
                      <input type="checkbox" className="custom-control-input" id="thermal_printing" />
                      <label className="custom-control-label" htmlFor="thermal_printing">
                      </label>
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

export default shippingSetting
