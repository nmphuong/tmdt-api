import React from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class description extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: 'Viết mô tả vào đây',
      validate: false
    }
  }

  componentDidMount() {
    if (this.state.description.length < 10) {
      this.setState({validate: false})
      this.props.validateProduct(this.state.validate)
    } else {
      this.setState({validate: true})
      this.props.validateProduct(this.state.validate)
    }
  }
  

  handleChangeDescription = async (event) => {
    await this.setState({
      description: event.target.value,
    })
    await this.props.description(this.state.description)
    if (this.state.description.length < 10) {
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
            <span>{textAddProduct.description}</span>
          </div>
          <div className="col-md-9 div-input-name-product position-relative">
            <textarea maxLength="3000" minLength="1" onChange={this.handleChangeDescription} value={this.props.descriptionBasic} className="w-100 form-control textarea-description" placeholder="Nhập vào" name="" id="textarea-description" rows="5"></textarea>
            <div className="w-100 text-right">
              <span>{this.state.description.length}/3000</span>
            </div>
            {
              (this.state.description.length < 10)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.description}</p>
              : ''
            }
          </div>
        </div>
      </>
    )
  }
}

export default description
