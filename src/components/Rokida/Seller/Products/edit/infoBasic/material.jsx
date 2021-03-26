import { Component } from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class material extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueMaterial: 'null',
      valid: false
    }
  }
  handleChangeMaterial = async (event) => {
    await this.setState({
      valueMaterial: event.target.value
    })
    await this.props.valueMaterial(this.state.valueMaterial)
    if (this.state.valueMaterial === 'null') {
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
            <span>{textAddProduct.material}</span>
          </div>
          <div className="col-md-9">
            <select value={(this.props.materialBasic !== null && this.props.materialBasic !== undefined) ? this.props.materialBasic : 'null'} onChange={this.handleChangeMaterial} name="" id="" className="form-control">
              <option value="null">--Chất liệu--</option>
              <option value="day">Dây</option>
              <option value="vai">Vải</option>
            </select>
            {
              ((this.state.valid === true) || this.props.validMaterial === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.materialInvalid}</p>
              : ''
            }
          </div>
        </div>
      </>
    );
  }
}

export default material
