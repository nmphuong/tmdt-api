import { Component } from 'react'

import { textAddProduct } from '../../../../../../include/language/vi'

import { FaInfoCircle } from 'react-icons/fa'

class buyMoreDiscounts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      from1: '',
      from2: '',
      to1: '',
      to2: '',
      price1: '',
      price2: '',
      dataBMD: {}
    }
  }

  componentDidMount() {
    this.props.setInputFilterNumber(document.getElementById("bmd-from-one"), function(value) { return /^\d*$/.test(value) })
    this.props.setInputFilterNumber(document.getElementById("bmd-to-one"), function(value) { return /^\d*$/.test(value) })
    this.props.setInputFilterNumber(document.getElementById("bmd-price-one"), function(value) { return /^\d*$/.test(value) })
  }
  

  sendData = async () => {
    await this.setState({
      dataBMD: {
        from1: this.state.from1,
        from2: this.state.from2,
        to1: this.state.to1,
        to2: this.state.to2,
        price1: this.state.price1,
        price2: this.state.price2
      }
    })
    this.props.dataByMoreDiscount(this.state.dataBMD)
  }

  handleChangleFrom1 = async (event) => {
    await this.setState({
      from1: event.target.value
    })
    this.sendData()
  }

  handleChangleTo1 = async (event) => {
    await this.setState({
      to1: event.target.value
    })
    this.sendData()
  }

  handleChanglePrice1 = async (event) => {
    await this.setState({
      price1: event.target.value
    })
    this.sendData()
  }


  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>Mua nhiều giảm giá</span>
          </div>
          <div className="col-md-9 d-none">
            <div className="div-btn-type-product rounded">
              <div className="btn bg-none w-100">
                <span>+ Thêm khoảng giá</span>
              </div>
            </div>
          </div>
          <div className="col-md-9 bg-input-show rounded">
            <div className="col-12 p-0 m-0 py-2">
              <div className="row">
                <div className="col">
                  <span>Từ (sản phẩm)</span>
                </div>
                <div className="col">
                  <span>Đến (sản phẩm)</span>
                </div>
                <div className="col">
                  <span>Đơn giá</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input id="bmd-from-one" onChange={this.handleChangleFrom1} value={this.state.from1} type="text" placeholder="Từ (sản phẩm)" className="form-control" />
                </div>
                <div className="col">
                  <input id="bmd-to-one" onChange={this.handleChangleTo1} value={this.state.to1} type="text" placeholder="Đến (sản phẩm)" className="form-control" />
                </div>
                <div className="col">
                  <input id="bmd-price-one" onChange={this.handleChanglePrice1} vlaue={this.state.price1} type="text" placeholder="Đơn giá" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-12 p-0 m-0 py-2">
              <div className="div-btn-type-product rounded">
                <div className="btn bg-none w-100">
                  <span>+ Thêm khoảng giá</span>
                </div>
              </div>
            </div>
            <p className="fontSize-0-8em"><FaInfoCircle />  {textAddProduct.buyMoreDiscount}</p>
          </div>
        </div>
      </>
    );
  }
}

export default buyMoreDiscounts
