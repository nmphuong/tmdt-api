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
    var itemClassify = []
    if (this.props.classify1Key !== undefined && this.props.classify1Key !== null) {
      var keys = 0
      for (let index = 0; index < this.props.classify1Key.length; index++) {
        for (let index2 = 0; index2 < this.props.classify2Key.length; index2++) {
          if (index2 === 0) {
            itemClassify.push(
              <tr key={keys}>
                <td className="align-middle" rowSpan={this.props.classify2Key.length}>{this.props.classify1Value[index]}</td>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Value[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Price[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Warehouse[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="text" value={this.props.classify2Sku[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
              </tr>
            )
          } else {
            itemClassify.push(
              <tr key={keys}>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Value[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Price[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="number" value={this.props.classify2Warehouse[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
                <td>
                  <input id="priceClassify" type="text" value={this.props.classify2Sku[index2]} onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/>
                </td>
              </tr>
            )
          }
          keys++
        }
      }
    }
    return (
      <>
        <div className="row py-2">
          {(this.props.showClassifyBasic === false)
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
                classify1Value={this.props.classify1Value}
                classify1Key={this.props.classify1Key}
                classify1Price={this.props.classify1Price}
                classify1Warehouse={this.props.classify1Warehouse}
                classify1Sku={this.props.classify1Sku}
                />
              {/* // --------------------------------------------- */}
              {(this.state.numberClassify === 0)
                ?
                <ClassifyOriginalTwo 
                  classify2Value={this.props.classify2Value}
                  classify2Key={this.props.classify2Key}
                  classify2Price={this.props.classify2Price}
                  classify2Warehouse={this.props.classify2Warehouse}
                  classify2Sku={this.props.classify2Sku}
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
              <div className="col-12 p-0 m-0 py-2">
                <div className="row p-0 m-0">
                  <div className="col-md-3 text-align-right">
                    <span>Danh sách phân loại hàng </span>
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
                                    <tr>
                                      {
                                        (this.props.classify1Key.length > 0)
                                        ? <th>{this.props.classify1Key[0]}</th>
                                        : null
                                      }
                                      {
                                        (this.props.classify2Key.length > 0)
                                        ? <th>{this.props.classify2Key[0]}</th>
                                        : null
                                      }
                                      <th>Giá</th>
                                      <th>Kho hàng</th>
                                      <th>SKU phân loại</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {itemClassify}
                                    {/* {(this.state.numberClassify < 1) ?
                                      <tr>
                                        <td>
                                          <div>{(this.state.valuesClassifyOne !== '') ? this.state.valuesClassifyOne : 'Loại'}</div> */}
                                          {/* <hr className="w-100 my-1" />
                                          <div>Loại</div> */}
                                        {/* </td>
                                        <td><input id="priceClassify" type="number" onChange={(event) => {this.props.priceChangeClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/></td>
                                        <td><input id="warehouseClassify" type="number" onChange={(event) => {this.props.warehouseClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0"/></td>
                                        <td><input onChange={(event) => {this.props.skuClassify1(event.target.value)}} className="h-100 w-100 bg-none border-0" type="text"/></td>
                                      </tr>
                                      :
                                      <tr>
                                        <td>
                                          <div>Loại</div>
                                          <hr className="w-100 my-1" />
                                          <div>Loại</div>
                                        </td>
                                        <td>
                                          <div>Loại</div>
                                          <hr className="w-100 my-1" />
                                          <div>Loại</div>
                                        </td>
                                        <td>
                                          <div></div>
                                          <hr className="w-100 my-1" />
                                          <div></div>
                                        </td>
                                        <td>0</td>
                                        <td>ASDFGHJKLKJHGF</td>
                                      </tr>
                                    } */}

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
