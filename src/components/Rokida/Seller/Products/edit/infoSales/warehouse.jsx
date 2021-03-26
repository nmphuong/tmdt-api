import { Component } from 'react'

import { messageErrorAddProduct, textAddProduct } from '../../../../../../include/language/vi'

class warehouse extends Component {
  constructor(props) {
    super(props)
    this.state ={
      warehouse: ''
    }
  }

  componentDidMount() {
    this.props.setInputFilterNumber(document.getElementById("warehouse"), function(value) { return /^\d*$/.test(value) })
  }
  

  handleChnageWarehouse = async (event) => {
    await this.setState({
      warehouse: event.target.value
    })
    this.props.warehouse(this.state.warehouse)
  }
  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            <span>{textAddProduct.warehouse}</span>
          </div>
          <div className="col-md-9">
            <input id="warehouse" onChange={this.handleChnageWarehouse} value={this.state.warehouse} type="text" placeholder="Nhập vào" className="form-control" />
            {
              (this.props.validWarehouse === true)
              ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.warehosueInvalid}</p>
              : ''
            }
          </div>
        </div>
      </>
    );
  }
}

export default warehouse
