import React from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class branch extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      valueSelectBranch: 'null',
      valid: false
    }
  }

  handleChangeBranchSelect = async (event) => {
    await this.setState({
      valueSelectBranch: event.target.value
    })
    await this.props.valueSelectBranch(this.state.valueSelectBranch)
    if (this.state.valueSelectBranch === 'null') {
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
      <div>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>{textAddProduct.branch}</span>
          </div>
          <div className="col-md-9">
            <select name="" id="select-branch" onChange={this.handleChangeBranchSelect} value={(this.props.branchBasic !== undefined && this.props.branchBasic !== null) ? this.props.branchBasic : 'null'} className="form-control">
              <option value="null">--Thương hiệu--</option>
              <option value="no branch">No Brand</option>
              <option value="adidas">Adidas</option>
            </select>
            {
              ((this.state.valid === true) || this.props.validBranch === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.branchInvalid}</p>
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

export default branch
