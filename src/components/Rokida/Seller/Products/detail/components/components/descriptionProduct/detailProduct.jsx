import React from 'react'

import * as FontFa from 'react-icons/fa'

class detailProduct extends React.Component {
  render() {
    var category = []
    this.props.data.cate_id.forEach((element, index) => {
      category.push(
        <span key={index}>&nbsp;<FontFa.FaChevronRight style={{'fontSize': '1em'}} /> {element.name}&nbsp;</span>
      )
    })
    var warehouse = []
    if (this.props.data.warehouse === null) {
      var arrayClassifyOne = []
      for(let i = 0; i < this.props.data.classify.length; i++) {
        if (this.props.data.classify[i].classify_key === this.props.data.classify[0].classify_key) {
          arrayClassifyOne.push(this.props.data.classify[i].classify_value)
        }
      }
      if (arrayClassifyOne.length === 1) {
        warehouse.push(
          <span key="classify_warehouse_i">{this.props.data.classify[0].classify_value}: {this.props.data.classify[0].classify_warehouse}</span>
        )
      } else {
        for(let i = 0; i < arrayClassifyOne.length; i++) {
          warehouse.push(
            <p key={"classify_warehouse_e_" + i} className="mb-1">{this.props.data.classify[i].classify_value}: {this.props.data.classify[i].classify_warehouse}</p>
          )
        }
      }
    }
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0">
            <div className="col-12 px-2">
              <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="col-12 p-2 m-0 bg-white">
                    <span className="title-detail-product text-uppercase">
                      chi tiết sản phẩm
                  </span>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3 p-0 m-0">
                      <span>Danh mục</span>
                    </div>
                    <div className="col-lg-9 p-0 m-0">
                      <span>Rokida{category}</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3 p-0 m-0">
                      <span>Thương hiệu</span>
                    </div>
                    <div className="col-lg-9 p-0 m-0">
                      <span>{this.props.data.metaProduct.branch}</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3 p-0 m-0">
                      <span>Kho hàng</span>
                    </div>
                    <div className="col-lg-9 p-0 m-0">
                      {
                        (this.props.data.warehouse !== null) 
                        ? <span>{this.props.data.warehouse}</span>
                        : warehouse
                      }
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3 p-0 m-0">
                      <span>Gửi từ</span>
                    </div>
                    <div className="col-lg-9 p-0 m-0">
                      <span>
                        {
                          (this.props.data.shop.shop_address !== null)
                          ? this.props.data.shop.shop_address
                          : 'Chưa cập nhật'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default detailProduct
