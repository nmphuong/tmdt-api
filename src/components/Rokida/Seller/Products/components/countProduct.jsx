import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

class countProduct extends Component {
  render() {
    return (
      <>
        <div className="col-12 p-0 m-0 pt-3 px-3">
          <div className="row p-0 m-0 justify-content-between">
            <div>
              <span className="h4 font-weight-bold">{this.props.totalProduct} Product</span>
            </div>
            <div>
              <button className="btn btn-danger">
                <Link className="nav-link text-white p-0" to='/portal/sale/product/add/category'><FaPlus />&nbsp;Thêm 1 sản phẩm mới</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default countProduct
