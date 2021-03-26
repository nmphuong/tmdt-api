import React, { Component } from 'react'

class button extends Component {
  render() {
    return (
      <>
        <div className="col-lg-6 p-0 m-0 px-3 pb-2">
          <div className="search-name-sku row p-0 h-100 m-0">
            <div className="pr-2">
              <button id="search-product" className="btn btn-danger">Tìm</button>
            </div>
            <div className="pr-2">
              <button id="reset-search-product" className="btn btn-light">Nhập lại</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default button
