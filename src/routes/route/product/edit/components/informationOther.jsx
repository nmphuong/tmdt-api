import { Component } from 'react'

import { messageErrorAddProduct } from '../../../../../include/language/vi'

class informationOther extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sku: '',
      valueStatusProduct: 'null'
    }
  }

  handleChangeSkuProduct = async (event) => {
    await this.setState({
      sku: event.target.value
    })
    this.props.sku(this.state.sku)
  }

  handleChangeProductBookNo = async () => {
    this.props.handleChangeProductBook(0)
  }

  handleChangeProductBookYes = async () => {
    this.props.handleChangeProductBook(1)
  }

  handleChangeStatusProduct = async (event) => {
    await this.setState({
      valueStatusProduct: event.target.value
    })
    this.props.statusProduct(this.state.valueStatusProduct)
  }

  render() {
    return (
      <>
        <div id="div-other-information" className="py-3">
          <div className="bg-white bg-white-box-shadow p-2">
            <div className="p-0 py-3">
              <p className="h5 font-weight-bold">
                Thông tin khác
                  </p>
            </div>
            <div className="px-4">
              {/* Hàng đặt trước */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>Hàng đặt trước</span>
                </div>
                <div className="d-flex col-md-9 div-input-name-product position-relative">
                  <div className="pr-3 custom-control custom-radio">
                    <input onChange={this.handleChangeProductBookNo} type="radio" id="acept-book-product-no" name="acept-book-product" className="custom-control-input" defaultChecked  />
                    <label className="custom-control-label" htmlFor="acept-book-product-no">Không</label>
                  </div>
                  <div className="pr-3 custom-control custom-radio">
                    <input onChange={this.handleChangeProductBookYes} type="radio" id="acept-book-product-yes" name="acept-book-product" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="acept-book-product-yes">Đồng ý</label>
                  </div>
                </div>
              </div>
              {/* Name product */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>* Tình trạng</span>
                </div>
                <div className="col-md-9 div-input-name-product position-relative">
                  <select value={this.state.valueStatusProduct} onChange={this.handleChangeStatusProduct} name="" className="form-control" id="">
                    <option vlaue="null">--Tình trạng--</option>
                    <option value="new">Mới</option>
                    <option value="used">Đã sử dụng</option>
                  </select>
                  {
                    (this.props.validStatusProduct === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.statusInvalid}</p>
                    : ''
                  }
                </div>
              </div>
              {/* Description product */}
              {(this.props.showImgClassify === false)
              ?
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>* SKU sản phẩm</span>
                </div>
                <div className="col-md-9 div-input-name-product position-relative">
                  <input onChange={this.handleChangeSkuProduct} value={this.state.sku} type="text" placeholder="-" className="form-control" />
                  {
                    (this.props.validSKUProduct === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.skuInvalid}</p>
                    : ''
                  }
                </div>
              </div>
              : ''
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default informationOther
