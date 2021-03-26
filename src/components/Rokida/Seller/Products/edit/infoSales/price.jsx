import { Component } from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class price extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: ''
    }
  }

  componentDidMount() {
    this.props.setInputFilterNumber(document.getElementById("price"), function(value) { return /^\d*$/.test(value) })
  }
  

  handleChagePrice = async (event) => {
    await this.setState({
      price: event.target.value
    })
    this.props.price(this.state.price)
  }

  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>{textAddProduct.price}</span>
          </div>
          <div className="col-md-9">
            <input id='price' onChange={this.handleChagePrice} value={this.state.price} type="text" placeholder="Nhập vào" className="form-control" />
            {
              (this.props.validPrice === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.priceInvalid}</p>
              : ''
            }
          </div>
        </div>
      </>
    );
  }
}

export default price
