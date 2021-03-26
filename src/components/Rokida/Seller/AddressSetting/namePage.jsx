import { Component } from 'react'

import * as FontFa from 'react-icons/fa'

class namePage extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between">
          <div className="name-page">
            <p className="font-weight-bold h4">
              Địa Chỉ
            </p>
            <p className="text-name text-secondary">
              Quản lý việc vận chuyển và địa chỉ giao hàng của bạn
            </p>
          </div>
          <div className="btn-add-address">
            <button id="add-address" className="btn btn-danger"><FontFa.FaPlus />&nbsp;Thêm địa chỉ mới</button>
          </div>
        </div>
      </>
    )
  }
}

export default namePage
