import { Component } from 'react'

import { FaTimes } from 'react-icons/fa'

import { messageErrorAddProduct } from '../../../../../../../include/language/vi'

class classifyOne extends Component {

  constructor(props) {
    super(props)
    this.state = {
      valueKeys: '',
      valueValues: ''
    }
  }

  componentDidMount() {
  }
  

  handleChangeValuekeyClassify = async(event) => {
    await this.setState({
      valueKeys: event.target.value
    })
    this.props.valueKeysClassifyOne(this.state.valueKeys)
  }
  
  handleChangeValueClassify = async(event) => {
    await this.setState({
      valueValues: event.target.value
    })
    this.props.valueValuesClassifyOne(this.state.valueValues)
  }

  render() {
    return (
      <>
        <div className="col-12 p-0 m-0 py-2">
          <div className="row p-0 m-0 position-relative">
            <FaTimes onClick={this.props.hideClassifyFunction} className="position-absolute r-0 t-0" style={{ 'zIndex': '1', 'cursor': 'pointer', 'fontSize': '1em' }} />
            <div className="col-md-3 text-align-right">
              <span>Nhóm phân loại 1</span>
            </div>
            <div className="col-md-9 bg-input-show rounded">
              <div className="col-12 p-0 m-0 py-2">
                <div className="row py-2">
                  <div className="col-12 d-flex">
                    <div className="col-lg-3 text-align-right">
                      <span className="text-nowrap">Tên nhóm phân loại&nbsp;</span>
                    </div>
                    <div className="col-lg-9">
                      <input id="key-classify-one" onChange={this.handleChangeValuekeyClassify} value={this.state.valueKeys} type="text" placeholder="Nhập tên Nhóm phân loại hàng, ví dụ: màu sắc, kích thước v.v" className="form-control" />
                      {
                        (this.props.validKeyClassify === true)
                        ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.nameClassifyOneInvalid}</p>
                        : ''
                      }
                    </div>
                  </div>
                </div>
                <div id="classify-1" className="row py-2">
                  <div className="col-12 d-flex pb-2">
                    <div className="col-lg-3 text-align-right">
                      <span className="text-nowrap">Phân loại hàng&nbsp;</span>
                    </div>
                    <div className="col-lg-9">
                      <input id="value-classify-one" onChange={this.handleChangeValueClassify} value={this.state.valueValues} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                      {
                        (this.props.validValueClassify === true)
                        ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.warehosueInvalid}</p>
                        : ''
                      }
                    </div>
                  </div>
                  {/* <div className="col-12 d-flex pb-2">
                    <div className="col-lg-3 text-align-right">
                      <span className="text-nowrap">Phân loại hàng&nbsp;</span>
                    </div>
                    <div className="col-lg-9">
                      <input id={'value-classify-1'} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                    </div>
                  </div> */}
                </div>
                <div className="row py-2">
                  <div className="col-12 d-flex">
                    <div className="col-lg-3 text-align-right"></div>
                    <div className="col-lg-9">
                      <div className="div-btn-type-product rounded">
                        <div className="btn bg-none w-100">
                          <span>+ Đã thêm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default classifyOne
