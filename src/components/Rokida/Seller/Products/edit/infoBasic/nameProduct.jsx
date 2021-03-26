import React from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class nameProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueNameProduct: this.props.nameProdBasic,
      validate: false
    }
  }

  componentDidMount() {
    this.setValueBasic()
  }

  handleChangeValueNameProduct = async(event) => {
    await this.setState({
      valueNameProduct: event.target.value
    })
    if (this.state.valueNameProduct.length < 10) {
      this.setState({
        validName: true
      })
    } else {
      this.setState({
        validName: false
      })
    }
    await this.props.valueProductName(this.state.valueNameProduct)
    if (this.state.valueNameProduct.length < 10) {
      await this.setState({validate: false})
      this.props.validateProduct(this.state.validate)
    } else {
      await this.setState({validate: true})
      this.props.validateProduct(this.state.validate)
    }
  }

  setValueBasic = async () => {
    await this.setState({
      valueNameProduct: this.props.nameProdBasic
    })
    if (this.state.valueNameProduct.length < 10) {
      await this.setState({validate: false})
      this.props.validateProduct(this.state.validate)
    } else {
      await this.setState({validate: true})
      this.props.validateProduct(this.state.validate)
    }
  }
  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>{textAddProduct.nameProduct}</span>
          </div>
          <div key="1" className="col-md-9 div-input-name-product position-relative">
            <input minLength="10" maxLength="120" id="name-product" onChange={this.handleChangeValueNameProduct} value={this.props.nameProdBasic} type="text" placeholder="Nhập vào" className="input-name-product form-control" />
            <span className="length-character-input-name-product-new position-absolute">{this.state.valueNameProduct.length}/120</span>
            {
              (this.state.validName === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.nameClassifyOneInvalid}</p>
              : ''
            }
          </div>
        </div>
      </>
    )
  }
}

export default nameProduct
