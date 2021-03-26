import React from 'react'

import { FaStar, FaShippingFast, FaMoneyBill, FaCartPlus } from 'react-icons/fa'

class infoProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nunberBuyProduct: 1,
      warehouse: this.props.data.warehouse
    }
  }

  render() {
    var classifyOne = []
    var keyOne = ''
    var classifyTwo = []
    var keyTwo = ''
    this.props.data.classify.forEach((element, index) => {
      if ((classifyOne.length === 0 && classifyTwo.length === 0) || element.classify_key === keyOne) {
        keyOne = element.classify_key
        if (element.classify_image === null) {
          classifyOne.push(
            <button key={index} className="btn btn-outline-danger px-3 mb-1 mx-1">{element.classify_value}</button>
          )
        } else {
          classifyOne.push(
            <button key={index} onClick={() => {this.props.srcImageClassify(element.classify_image)}} className="btn btn-outline-danger px-3 mb-1 mx-1">{element.classify_value}</button>
          )
        }
      } else {
        keyTwo = element.classify_key
        classifyTwo.push(
          <button key={index} className="btn btn-outline-danger px-3 mb-1 mx-1">{element.classify_value}</button>
        )
      }
    })
    var price = []
    if (this.props.data.price === null) {
      var min = 0, max = 0
      var arrayClassifyOne = []
      for(let i = 0; i < this.props.data.classify.length; i++) {
        if (this.props.data.classify[i].classify_key === this.props.data.classify[0].classify_key) {
          arrayClassifyOne.push(this.props.data.classify[i].classify_value)
        }
      }
      if (arrayClassifyOne.length === 1) {
        price.push(
          <span key="price-sig-o" className="h2">{this.props.data.classify[0].classify_price.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</span>
        )
      } else {
        for(let i = 0; i < arrayClassifyOne.length; i++) {
          if (i === 0) {
            min = this.props.data.classify[i].classify_price
            max = this.props.data.classify[i].classify_price
          } else {
            if (this.props.data.classify[i].classify_price > max) {
              max = this.props.data.classify[i].classify_price
            }
            if (this.props.data.classify[i].classify_price < min) {
              min = this.props.data.classify[i].classify_price
            }
          }
        }
        price.push(
          <span key="db-price-t" className="h2">{min.toLocaleString('en-US', { style: 'currency', currency: 'VND' })} - {max.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</span>
        )
      }
    }
    return (
      <>
        <div className="col-lg-6">
          <div className="row p-0 m-0">
            <div className="col-12 pb-2">
              <span className="title font-weight-bold h5">
                {this.props.data.name}
              </span>
            </div>
            <div className="col-12 pb-2">
              <div className="row p-0 m-0">
                <div className="col-4">
                  <span>4.8 <FaStar className="start-ratting" /><FaStar className="start-ratting" /><FaStar className="start-ratting" /><FaStar className="start-ratting" /><FaStar className="start-ratting" /></span>
                </div>
                <div className="col-4">
                  <span>946 đánh giá</span>
                </div>
                <div className="col-4">
                  <span>2,5k đã bán</span>
                </div>
              </div>
            </div>
            <div className="col-12 pb-2 bg-price text-white d-flex align-items-center">
              <div className="p-0 m-0 py-2 text-danger">
                {
                  (this.props.data.classify.length === 0)
                  ? <span className="h2">{parseInt(this.props.data.price).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</span>
                  : price
                }
              </div>
            </div>
            <div className="col-12 pb-2 pt-2 px-0">
              <div className="row p-0 m-0 pb-2">
                <div className="col-lg-3">
                  <span>Vận chuyển</span>
                </div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-5 d-flex">
                      <span><FaShippingFast style={{ "color": "#00bfa5" }} /></span>&nbsp;
                    <span>Vận chuyển tới</span>
                    </div>
                    <div className="col-lg-7">
                      <span>Địa chỉ giao hàng đến</span>
                    </div>
                    <div className="col-lg-5 d-flex">
                      <span><FaMoneyBill style={{ "color": "#00bfa5" }} /></span>&nbsp;
                    <span>Phí vận chuyển</span>
                    </div>
                    <div className="col-lg-7">
                      <span>0đ - 30.000d</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              (classifyOne.length > 0)
              ?
              <div className="col-12 pb-2">
                <div className="row p-0 m-0 pb-2">
                  <div className="col-lg-3">
                    {keyOne}
                  </div>
                  <div className="col-lg-9">
                    {classifyOne}
                  </div>
                </div>
              </div>
              : ''
            }
            {
              (classifyTwo.length > 0)
              ? 
              <div className="col-12 pb-2">
                <div className="row p-0 m-0 pb-2">
                  <div className="col-lg-3">
                    {keyTwo}
                  </div>
                  <div className="col-lg-9">
                    {classifyTwo}
                  </div>
                </div>
              </div>
              : ''
            }
            <div className="col-12 pb-2">
              <div className="row p-0 m-0 pb-2">
                <div className="col-lg-3">
                  Số Lượng
              </div>
                <div className="col-lg-9 d-flex">
                  {
                    (this.state.nunberBuyProduct <= 1)
                      ?
                      <button className="disabled px-3 py-1 bg-white rounded-left border">-</button>
                      :
                      <button className="px-3 py-1 bg-white rounded-left border" onClick={() => {
                        this.setState({
                          nunberBuyProduct: this.state.nunberBuyProduct - 1
                        })
                      }}>-</button>
                  }
                  <button className="px-4 py-1 bg-white border-top border-bottom border-right-0 border-left-0">{this.state.nunberBuyProduct}</button>
                  {
                    (this.state.nunberBuyProduct >= this.state.warehouse)
                    ? <button className="disabled px-3 py-1 bg-white rounded-right border">+</button>
                    :
                    <button className="px-3 py-1 bg-white rounded-right border" onClick={() => {
                      this.setState({
                        nunberBuyProduct: this.state.nunberBuyProduct + 1
                      })
                    }}>+</button>
                  }
                  &nbsp;&nbsp;{this.state.warehouse} sản phẩm có sẵn
              </div>
              </div>
            </div>
            <div className="col-12 pb-2">
              <div className="row p-0 m-0">
                <button className="btn btn-warning mb-1"><FaCartPlus style={{ "color": "#00bfa5" }} /> Thêm vào giỏ hàng</button>&nbsp;&nbsp;
              <button className="btn btn-danger mb-1">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default infoProduct
