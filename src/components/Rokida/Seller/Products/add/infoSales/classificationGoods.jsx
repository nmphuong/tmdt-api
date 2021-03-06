import { Component } from 'react'

// Import Component
import ClassifyOriginal from './classifyGoods/classifyOriginal.jsx'
import ClassifyOriginalOne from './classifyGoods/classifyOne.jsx'
import ClassifyOriginalTwo from './classifyGoods/classifyTwo.jsx'

import { messageErrorAddProduct } from '../../../../../../include/language/vi'

class classificationGoods extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showClassify: false,
      numberClassify: 0,
      htmlClassify: [],
      valuesClassify1: [],
      valuesClassify2: [],
      keysClassifyOne: '',
      valuesClassifyOne: '',
      keysClassifyTwo: '',
      valuesClassifyTwo: '',
      priceForAll: '',
      warehouseForAll: '',
      skuForAll: '',
      applyForAll: false
    }
  }

  addDivClassify = async () => {
    this.setState({
      numberClassify: this.state.numberClassify + 1
    })
  }

  showClassifyFunction = async () => {
    await this.setState({
      showClassify: true
    })
    this.props.showClassification(this.state.showClassify)
  }

  hideClassifyFunction = async () => {
    await this.setState({
      showClassify: false
    })
    this.props.showClassification(this.state.showClassify)
  }

  handleChangePriceForAll = async(event) => {
    await this.setState({
      priceForAll: event.target.value
    })
  }

  handleChangeWarehouseForAll = async(event) => {
    await this.setState({
      warehouseForAll: event.target.value
    })
  }

  handleChangeSkuForAll = async(event) => {
    await this.setState({
      skuForAll: event.target.value
    })
  }

  ApplyForAll = async () => {
    this.setState({
      applyForAll: true
    })
  }

  render() {
    return (
      <>
        <div className="row py-2">
          {(this.state.showClassify === false)
            ? <ClassifyOriginal showClassifyFunction={this.showClassifyFunction} />
            : <>
              <ClassifyOriginalOne
                valueValuesClassifyOne={(valuesOne) => {
                  this.setState({valuesClassifyOne: valuesOne})
                  this.props.valueClassify1(valuesOne)
                }}
                valueKeysClassifyOne={(keysOne) => {
                  this.setState({keysClassifyOne: keysOne})
                  this.props.keyClassify1(keysOne)
                }}
                hideClassifyFunction={this.hideClassifyFunction}
                validKeyClassify={this.props.validKeyClassify}
                validValueClassify={this.props.validValueClassify}
                />
              {/* // --------------------------------------------- */}
              {(this.state.numberClassify === 1)
                ?
                <ClassifyOriginalTwo 
                  valueValuesClassifyTwo={(valuesTwo) => {
                    this.setState({valuesClassifyTwo: valuesTwo})
                    this.props.valueClassify2(valuesTwo)
                  }}
                  valueKeysClassifyTwo={(keysTwo) => {
                    this.setState({keysClassifyTwo: keysTwo})
                    this.props.keyClassify2(keysTwo)
                  }} />
                // --------------------------------------------------------------
                : ''
              }
              {/* {(this.state.numberClassify < 1)
                ?
                <div className="col-12 p-0 m-0 py-2">
                  <div className="row p-0 m-0">
                    <div className="col-md-3 text-align-right">
                      <span>Nh??m ph??n lo???i {this.state.numberClassify + 1}</span>
                    </div>
                    <div className="col-md-9">
                      <div onClick={this.addDivClassify} className="div-btn-type-product rounded">
                        <div className="btn bg-none w-100">
                          <span>+ Th??m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : ''} */}
              {/*  */}
              {/* <div className="col-12 p-0 m-0 py-2">
                <div className="row p-0 m-0">
                  <div className="col-md-3 text-align-right">
                    <span>M???o thi???t l???p ph??n lo???i h??ng </span>
                  </div>
                  <div className="col-md-9 p-0 m-0">
                    <div className="rounded">
                      <div className="btn bg-none w-100 p-0 m-0">
                        <div className="row p-0 m-0">
                          <div className="col-md-7 pb-2">
                            <div className="row p-0 m-0">
                              <div className="col m-0 p-0">
                                <input onChange={this.handleChangePriceForAll} value={this.state.priceForAll} type="text" className="form-control" placeholder="Gi??" />
                              </div>
                              <div className="col m-0 p-0">
                                <input onChange={this.handleChangeWarehouseForAll} value={this.state.warehouseForAll} type="text" className="form-control" placeholder="Kho h??ng" />
                              </div>
                              <div className="col m-0 p-0">
                                <input onChange={this.handleChangeSkuForAll} value={this.state.skuForAll} type="text" className="form-control" placeholder="SKU ph??n lo???i" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <button onClick={this.ApplyForAll} className="w-100 btn btn-danger">
                              ??p d???ng cho t???t c??? ph??n lo???i
                                    </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-12 p-0 m-0 py-2">
                <div className="row p-0 m-0">
                  <div className="col-md-3 text-align-right">
                    <span>Danh s??ch ph??n lo???i h??ng </span>
                  </div>
                  <div className="col-md-9">
                    <div className="rounded">
                      <div className="btn bg-none w-100 p-0 m-0">
                        <div className="row p-0 m-0">
                          <div className="col-md-12 p-0 m-0">
                            <div className="row p-0 m-0">
                              <div className="col-12 p-0 m-0 table-responsive">
                                <table className="table-striped table-bordered table text-center">
                                  <thead className="thead-light">
                                    {(this.state.numberClassify >= 1)
                                      ? <tr>
                                          <th>{(this.state.keysClassifyOne !== '') ? this.state.keysClassifyOne : 'T??n'}</th>
                                          <th>{(this.state.keysClassifyTwo !== '') ? this.state.keysClassifyTwo : 'T??n'}</th>
                                          <th>Gi??</th>
                                          <th>Kho h??ng</th>
                                          <th>SKU ph??n lo???i</th>
                                        </tr>
                                      : <tr>
                                          <th>{(this.state.keysClassifyOne !== '') ? this.state.keysClassifyOne : 'T??n'}</th>
                                          <th>Gi??</th>
                                          <th>Kho h??ng</th>
                                          <th>SKU ph??n lo???i</th>
                                        </tr>
                                    }
                                  </thead>
                                  <tbody>
                                    {(this.state.numberClassify < 1) ?
                                      <tr>
                                        <td>
                                          <div>{(this.state.valuesClassifyOne !== '') ? this.state.valuesClassifyOne : 'Lo???i'}</div>
                                          {/* <hr className="w-100 my-1" />
                                          <div>Lo???i</div> */}
                                        </td>
                                        <td><input id="priceClassify" type="number" onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/></td>
                                        <td><input id="warehouseClassify" type="number" onChange={(event) => {this.props.warehouseClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/></td>
                                        <td><input onChange={(event) => {this.props.skuClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0" type="text"/></td>
                                      </tr>
                                      :
                                      <tr>
                                        <td>
                                          <div>Lo???i</div>
                                          <hr className="w-100 my-1" />
                                          <div>Lo???i</div>
                                        </td>
                                        <td>
                                          <div>Lo???i</div>
                                          <hr className="w-100 my-1" />
                                          <div>Lo???i</div>
                                        </td>
                                        <td>
                                          <div></div>
                                          <hr className="w-100 my-1" />
                                          <div></div>
                                        </td>
                                        <td>0</td>
                                        <td>ASDFGHJKLKJHGF</td>
                                      </tr>
                                    }
                                  </tbody>
                                </table>
                                {
                                  (this.props.validPriceClassify === true || this.props.validWarehouseClassify === true || this.props.validSkuClassify === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.priceClassifyOneInvalid}</p>
                                  : ''
                                }
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
          }
        </div>
      </>
    );
  }
}

export default classificationGoods
