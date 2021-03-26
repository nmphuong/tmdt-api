import { Component } from 'react'

// Import component other
import Loader from '../../../../../components/Rokida/Seller/Loading/spinner.jsx'

// Import API
import shippingStore from '../../../../../stores/shipping.store'

import { messageErrorAddProduct } from '../../../../../include/language/vi'

class shipping extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loader: true,
      data: [],
      lstShipping: [],
      idShipping: [],
      valueFeesShipping: [],
      weight: null,
      height: null,
      length: null,
      width: null,
      shippingData: {}
    }
  }

  componentDidMount() {
    this.getShippingChannel()
    this.setInputOnLyNumberPlus()
  }

  setInputOnLyNumberPlus = async () => {
    await this.props.setInputFilterNumber(document.getElementById("weight"), function(value) { return /^\d*$/.test(value) })
    await this.props.setInputFilterNumber(document.getElementById("height"), function(value) { return /^\d*$/.test(value) })
    await this.props.setInputFilterNumber(document.getElementById("lenght"), function(value) { return /^\d*$/.test(value) })
    await this.props.setInputFilterNumber(document.getElementById("width"), function(value) { return /^\d*$/.test(value) })
  }

  getShippingChannel = async () => {
    await shippingStore.getShippingShop().then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        array.push({
          id: item.id,
          name: item.name,
          description: item.description,
          slug: item.name.replaceAll(' ', '-').toLowerCase(),
          key: item.name.replaceAll(' ', '_').toLowerCase(),
          cod: item.cod,
          maximumWeight: item.maximum_weight,
          minimumWeight: item.minimum_weight,
          recipe: item.recipe
        })
      })
      await this.setState({
        loader: false,
        lstShipping: array
      })
      this.createElementFeesShip(array)
    }).catch(e => {
      console.log(e)
    })
  }

  onChangeShipping = async (event) => {
    var array = this.state.idShipping
    var arrayFees = this.state.valueFeesShipping
    await this.setState({
      idShipping: [],
      valueFeesShipping: []
    })
    if (array.indexOf(event.target.id) !== -1) {
      await array.splice((array.indexOf(event.target.id)), 1)
    } else {
      await array.push(event.target.id)
    }
    if (arrayFees.indexOf(event.target.value) !== -1) {
      await arrayFees.splice((arrayFees.indexOf(event.target.value)), 1)
    } else {
      await arrayFees.push(event.target.value)
    }
    await this.setState({
      idShipping: array,
      valueFeesShipping: arrayFees
    })
    this.props.dataShipping(this.state.idShipping, this.state.valueFeesShipping)
  }

  createElementFeesShip = async (array) => {
    var items = []
    await array.forEach((element, index) => {
      items.push(
        <div key={index} className={"row p-0 m-0" + ((index % 2 === 0) ? ' event-div-shipping-fees' : ' odd-div-shipping-fees')}>
          <div className="basic-user col-lg-7">
            <p className="">
              {element.name}&nbsp;(Tối đa: {element.maximumWeight}g)
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <p></p>
          </div>
          <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-lg-1 col-md-6 justify-content-end col-md-2">
            <input disabled onChange={this.onChangeShipping} type="checkbox" className="custom-control-input" id={element.id} />
            <label disabled className="disabled custom-control-label" htmlFor={element.id}>
            </label>
          </div>
        </div>
      )
    })
    this.setState({
      data: items
    })
  }

  setValueFeesShipping = async () => {
    var elem = []
    await this.setState({
      data: []
    })
    await this.state.lstShipping.forEach((element, index) => {
      elem.push(
        <div key={index} className={"row p-0 m-0" + ((index % 2 === 0) ? ' event-div-shipping-fees' : ' odd-div-shipping-fees')}>
          <div className="basic-user col-lg-7">
            <p className="">
              {element.name}&nbsp;(Tối đa: {element.maximumWeight}g)
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <p>
              {
                (this.state.weight === '' || this.state.weight === null)
                  ? ''
                  : ((parseInt(this.state.weight) > parseInt(element.maximumWeight))
                    ? "Quá cân nặng"
                    : ((element.recipe * this.state.weight)).toLocaleString('en-US', {style : 'currency', currency : 'VND'})
                  )
              }
            </p>
          </div>
            {
              (this.state.weight === '' || this.state.weight === null)
                ? ''
                : ((parseInt(this.state.weight) > parseInt(element.maximumWeight))
                  ? 
                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-lg-1 col-md-6 justify-content-end col-md-2">
                    <input disabled onChange={this.onChangeShipping} type="checkbox" className="custom-control-input" id={element.id} />
                    <label className="disabled custom-control-label" htmlFor={element.id}></label>
                  </div>
                  : 
                  <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-lg-1 col-md-6 justify-content-end col-md-2">
                    <input value={(element.recipe * this.state.weight).toFixed(0)} onChange={this.onChangeShipping} type="checkbox" className="custom-control-input" id={element.id} />
                    <label className="custom-control-label" htmlFor={element.id}></label>
                  </div>
                )
            }
        </div>
      )
    })
    await this.setState({
      data: elem
    })
  }

  onChangeWeight = async (event) => {
    var objectShippingWeight = this.state.shippingData
    objectShippingWeight.weight = event.target.value
    await this.setState({
      weight: event.target.value,
      shippingData: objectShippingWeight
    })
    await this.setValueFeesShipping()
    this.props.dataDetailShipping(this.state.shippingData)
  }

  onChangeLength = async (event) => {
    var objectShippingLength = this.state.shippingData
    objectShippingLength.length = event.target.value
    await this.setState({
      length: event.target.value,
      shippingData: objectShippingLength
    })
    this.props.dataDetailShipping(this.state.shippingData)
  }

  onChangeHeight = async (event) => {
    var objectShippingHeight = this.state.shippingData
    objectShippingHeight.height = event.target.value
    await this.setState({
      height: event.target.value,
      shippingData: objectShippingHeight
    })
    this.props.dataDetailShipping(this.state.shippingData)
  }

  onChangeWidth = async (event) => {
    var objectShippingWidth = this.state.shippingData
    objectShippingWidth.width = event.target.value
    await this.setState({
      width: event.target.value,
      shippingData: objectShippingWidth
    })
    this.props.dataDetailShipping(this.state.shippingData)
  }

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <div id="div-shipping" className="py-3">
          <div className="bg-white bg-white-box-shadow p-2">
            <div className="p-0 py-3">
              <p className="h5 font-weight-bold">
                Vận chuyển
                  </p>
            </div>
            <div className="px-4">
              {/* Name product */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>* Cân nặng (Sau khi đóng gói)</span>
                </div>
                <div className="col-md-9 div-input-name-product position-relative">
                  <input id="weight" onChange={this.onChangeWeight} type="text" placeholder="Nhập vào" className="input-name-product form-control" />
                  <span className="length-character-input-name-product-new position-absolute">
                    gr
                      </span>
                  {
                    (this.props.validWeight === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.weightInvalid}</p>
                    : ''
                  }
                </div>
              </div>
              {/* Description product */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>* Kích thước đóng gói (Phí vận chuyển thực tế sẽ thay đổi nếu bạn nhập sai kích thước) </span>
                </div>
                <div className="col-md-3 div-input-name-product position-relative pb-2">
                  <input id="width" onChange={this.onChangeWidth} type="text" placeholder="Rộng" className="input-name-product form-control" />
                  <span className="length-character-input-name-product-new position-absolute">
                    cm
                      </span>
                  {
                    (this.props.validWidth === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.widthInvalid}</p>
                    : ''
                  }
                </div>
                <div className="col-md-3 div-input-name-product position-relative pb-2">
                  <input id="lenght" onChange={this.onChangeLength} type="text" placeholder="Dài" className="input-name-product form-control" />
                  <span className="length-character-input-name-product-new position-absolute">
                    cm
                      </span>
                  {
                    (this.props.validLength === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.lengthInvalid}</p>
                    : ''
                  }
                </div>
                <div className="col-md-3 div-input-name-product position-relative pb-2">
                  <input id="height" onChange={this.onChangeHeight} type="text" placeholder="Cao" className="input-name-product form-control" />
                  <span className="length-character-input-name-product-new position-absolute">
                    cm
                      </span>
                  {
                    (this.props.validHeight === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.heightInvalid}</p>
                    : ''
                  }
                </div>
              </div>
              {/* Name product */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>Phí vận chuyển</span>
                </div>
                <div className="col-md-12 div-input-name-product position-relative">
                  {/* <a href="#1">
                    <button className="btn btn-danger">
                      Kích hoạt đơn vị vận chuyển
                        </button>
                  </a> */}
                  <div className="col-lg-12 user align-items-center p-0 m-0" style={{ 'background': '#f0f0f0' }}>
                    {this.state.data}
                  </div>
                  {
                    (this.props.validShippingChannel === true)
                    ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.shippingInvalid}</p>
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default shipping
