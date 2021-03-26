import React, { Component } from 'react'

class topProduct extends Component {
  render() {
    return (
      <>
        <div className="col-lg-6 p-0 m-0 px-3 pb-2">
          <div className="search-name-sku row p-0 h-100 m-0">
            <select name="" id="search-type" className="w-25 input-change-border bg-none h-100">
              <option value="name">Tên sản phẩm</option>
              <option value="sku">SKU sản phẩm</option>
              <option value="product-code">Mã sản phẩm</option>
            </select>
            <input id="search-name" className="input-search w-75 input-change-border bg-none h-100 form-control" type="text" placeholder="Nhập tên sản phẩm" />
          </div>
        </div>

        <div className="col-lg-6 p-0 m-0 px-3 pb-2">
          <div className="search-name-sku row p-0 h-100 m-0">
            <span name="" id="" className="col-md-2 p-0 m-0 bg-none align-items-center">
              Danh mục
                </span>
            <input id="category-search" className="input-search-category col-md-10 input-change-border bg-none form-control" type="text" placeholder="Chọn ngành hàng" />
          </div>
        </div>

        <div className="col-lg-6 p-0 m-0 px-3 pb-2">
          <div className="search-name-sku row p-0 h-100 m-0">
            <span name="" id="" className="col-md-2 p-0 m-0 bg-none d-flex align-items-center">
              Kho hàng
              </span>
            <div className="col-md-10 p-0 m-0">
              <div className="row p-0 m-0 align-items-center">
                <input id="ware-house-from" className="col-5 input-search-category input-change-border bg-none h-100 form-control" type="number" placeholder="Nhập vào" />
                <div className="col-2 text-center"> - </div>
                <input id="ware-house-to" className="col-5 input-search-category input-change-border bg-none h-100 form-control" type="number" placeholder="Nhập vào" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 p-0 m-0 px-3 pb-2">
          <div className="search-name-sku row p-0 h-100 m-0">
            <span name="" id="" className="col-md-2 p-0 m-0 bg-none d-flex align-items-center">
              Đã bán
              </span>
            <div className="col-md-10 p-0 m-0">
              <div className="row p-0 m-0 align-items-center">
                <input id="sold-from" className="col-5 input-search-category input-change-border bg-none form-control" type="number" placeholder="Nhập vào" />
                <div className="col-2 text-center"> - </div>
                <input id="sold-to" className="col-5 input-search-category input-change-border bg-none form-control" type="number" placeholder="Nhập vào" />
              </div>
            </div>
          </div>
        </div> 
      </>
    );
  }
}

export default topProduct
