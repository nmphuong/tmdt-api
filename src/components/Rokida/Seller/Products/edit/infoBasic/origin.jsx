import { Component } from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class origin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueOrigin: 'null',
      valid: false
    }
  }

  handleChangeValueOriginSelect = async (event) => {
    await this.setState({
      valueOrigin: event.target.value
    })
    await this.props.valueOrigin(this.state.valueOrigin)
    if (this.state.valueOrigin === 'null') {
      await this.setState({
        valid: true
      })
    } else {
      await this.setState({
        valid: false
      })
    }
  }

  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>{textAddProduct.origin}</span>
          </div>
          <div className="col-md-9">
            <select value={(this.props.originBasic !== null && this.props.originBasic !== undefined) ? this.props.originBasic : 'null'} onChange={this.handleChangeValueOriginSelect} name="" id="" className="form-control">
              <option value="null">--Xuất xứ--</option>
              <option value="viet nam">Việt Nam</option>
            </select>
            {
              ((this.state.valid === true) || this.props.validOrigin === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.originInvalid}</p>
              : ''
            }
          </div>
        </div>
      </>
    );
  }
}

export default origin
