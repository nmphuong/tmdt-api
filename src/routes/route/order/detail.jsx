import React from 'react'

// import * as  FontFa from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Rokida/Seller/Loading/spinner.jsx'
import StepProgressBar from 'react-step-progress'
import 'react-step-progress/dist/index.css'
// Import API
import orderStore from '../../../stores/order.store'

// Import data

class detail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loader: false,
      data: null
    }
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail = async () => {
    await this.setState({
      loader: true
    })
    await orderStore.getDetailOrder(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(async (res) => {
      await this.setState({
        data: res.data
      })
      await this.setState({
        loader: false
      })
    }).catch(async (e) => {
      await this.setState({
        loader: false
      })
      window.location.href = '/portal/sale/order/all'
    })
    await this.setState({
      loader: false
    })
  }

  cancelOrder = async () => {
    if (window.confirm('Bạn có chắc chắn muốn từ chối đơn hàng này?')) {
      await this.setState({
        loader: true
      })
      await orderStore.cancelOrder(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(async (res) => {
        this.getDetail()
        await this.setState({
          loader: false
        })
      }).catch(async (e) => {
        await this.setState({
          loader: false
        })
      })
      await this.setState({
        loader: false
      })
    }
  }

  acceptOrder = async () => {
    if (window.confirm('Bạn có chắc chắn muốn chấp nhận đơn hàng này?')) {
      await this.setState({
        loader: true
      })
      await orderStore.acceptOrder(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(async (res) => {
        this.getDetail()
        await this.setState({
          loader: false
        })
      }).catch(async (e) => {
        await this.setState({
          loader: false
        })
      })
      await this.setState({
        loader: false
      })
    }
  }

  render() {
    if (this.state.data !== null) {
      var order_product = []
      var totalBill = 0
      for (var i = 0; i < this.state.data.order_detail.length; i++) {
        if (this.state.data.order_detail[i].product_classify.length !== 0) {
          totalBill = totalBill + parseInt(this.state.data.order_detail[i].product_classify[0].classify_price)
        } else {
          totalBill = totalBill + parseInt(this.state.data.order_detail[i].productDetail.price)
        }
        order_product.push(
          <div key={i} className="col-12 m-0 p-0 py-2">
            <div className="row p-0 m-0">
              <div className="col-lg-1 p-0 m-0 py-2 pr-2">
                <img className="w-100" src={this.state.data.order_detail[i].productDetail.thumb} alt=""/>
              </div>
              <div className="col-lg-9 p-0 m-0 py-2">
                <p className="mb-1">
                  {this.state.data.order_detail[i].productDetail.name}
                </p>
                <p className="mb-1 text-secondary">
                  {
                    (this.state.data.order_detail[i].product_classify.length !== 0)
                    ? 
                    (this.state.data.order_detail[i].product_classify.length === 1) ? <span>Phân loại hàng:  {this.state.data.order_detail[i].product_classify[0].classify_value}</span> : <span><span>Phân loại hàng:  {this.state.data.order_detail[i].product_classify[0].classify_value}</span>&nbsp;<span>{this.state.data.order_detail[i].product_classify[1].classify_value}</span></span>
                    : ''
                  }
                </p>
                <p className="mb-1">
                  x 1
                </p>
              </div>
              <div className="col-lg-2 p-0 m-0 py-2">
                <p className="mb-1 text-danger">
                  {
                    (this.state.data.order_detail[i].product_classify.length !== 0)
                    ?
                      parseInt(this.state.data.order_detail[i].product_classify[0].classify_price).toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                    : parseInt(this.state.data.order_detail[i].productDetail.price).toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                  }
                </p>
              </div>
            </div>
          </div>
        )
      }
    }
    return (
      <>
        {
          (this.state.loader === true)
          ? <Loader />
          : 
          (this.state.data !== null)
          ?
          <div className='row p-0 m-0'>
            <div className='pagination col-12 p-0 m-0'>
              <div className="fillter col-12 p-0 m-0">
                <div className="row p-0 m-0">
                  {/*  */}
                  <div className="container-fluid">
                    <div className="col-12 p-0 m-0">
                      <div className="row p-0 m-0">
                        {/* Status and ID */}
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0 justify-content-between">
                            <div className="back">
                              <Link className="btn btn-secondary ml-0 mr-2 my-2" to='/portal/sale/order/all'>TRỞ LẠI</Link>
                              {
                                (this.state.data.status_order === 0) 
                                ? <button onClick={this.cancelOrder} className="btn btn-danger ml-0 mr-2 my-2">Từ chối đơn hàng</button>
                                : ''
                              }
                              {
                                (this.state.data.status_order === 0) 
                                ? <button onClick={this.acceptOrder} className="btn btn-primary ml-0 mr-2 my-2">Đồng ý đơn hàng</button>
                                : ''
                              }
                            </div>
                            <div className="id status">
                              <span><span className="text-warning">ID ĐƠN HÀNG. {this.state.data.order_code}</span>&nbsp;|&nbsp;{this.state.data.status_order_string}</span>
                            </div>
                          </div>
                        </div>
                        {/* Shipping */}
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <span className="h4">
                                Trạng thái đơn hàng
                              </span>
                            </div>
                            <div className="col-12 p-0 m-0 py-2">
                              {
                                (this.state.data.status_order !== 5) 
                                ?
                                <StepProgressBar
                                  startingStep={this.state.data.status_order}
                                  buttonWrapperClass ={'d-none'}
                                  steps={[
                                    {
                                      label: 'Xác nhân đơn hàng',
                                      // subtitle: '',
                                      // name: '',
                                    },
                                    {
                                      label: 'Đang chờ nhận hàng'
                                    },
                                    {
                                      label: 'Đã giao cho đơn vị vân chuyển'
                                    },
                                    {
                                      label: 'Đang giao hàng'
                                    },
                                    {
                                      label: 'Giao hàng thành công'
                                    }
                                  ]}
                                />
                                : 
                                <StepProgressBar
                                  startingStep={0}
                                  buttonWrapperClass ={'d-none'}
                                  steps={[
                                    {
                                      label: 'Đơn hàng đã hủy'
                                    }
                                  ]}
                                />
                              }
                            </div>
                            {
                              (this.state.data.status_order === 4)
                              ?
                              <div className="col-12 m-0 p-3 bg-warning">
                                <span>Đơn hàng này đã hoàn thành.</span>
                              </div>
                              :''
                            }
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <hr className="horizontal-line" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 pb-2">
                          {/* Dia chi nhan hang */}
                          <div className="row p-0 m-0">
                            <div className="col-12 p-2 m-0">
                              <p className='mb-2 h4 font-weight-bold'>Địa chỉ nhận hàng</p>
                              <p className='mb-2 h5'>{this.state.data.user_book.name}</p>
                              <p className='mb-2 h6 text-secondary'>{this.state.data.phone}</p>
                              <p className='mb-2 text-secondary'>{this.state.data.ship_address}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <hr className="horizontal-line" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                        <div className="row p-0 m-0">
                            <div className="col-12 p-2 m-0">
                              <p className='mb-2 h4 font-weight-bold'>Chi tiết vân chuyển</p>
                              <p className='mb-2 h5'>{this.state.data.shipping_channel.name}</p>
                              <p className='mb-2 h6 text-secondary'>{this.state.data.shipping_channel.acronym}</p>
                              <ul className="detail-shipping">
                                {
                                  (this.state.data.status_order >= 1)
                                  ? <li>Người bán chuẩn bị đơn hàng</li>
                                  : ''
                                }
                                {
                                  (this.state.data.status_order >= 1)
                                  ? <li className={(this.state.data.status_order === 1) ? 'text-warning' : ''}>Bàn giao cho đơn vị vận chuyển</li>
                                  : ''
                                }
                                {
                                  (this.state.data.status_order >= 2)
                                  ? <li className={(this.state.data.status_order === 2) ? 'text-warning' : ''}>Đã lấy hàng thành công</li>
                                  : ''
                                }
                                {
                                  (this.state.data.status_order >= 3)
                                  ? <li className={(this.state.data.status_order === 3) ? 'text-warning' : ''}>Đang giao hàng </li>
                                  : ''
                                }
                                {
                                  (this.state.data.status_order >= 4)
                                  ? <li className={(this.state.data.status_order === 4) ? 'text-warning' : ''}>Giao kiện thành công | Ký nhận </li>
                                  : ''
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <hr className="horizontal-line" />
                            </div>
                          </div>
                        </div>
                        {order_product}
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <hr className="horizontal-line" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <table className="w-100 table table-bordered">
                              <tbody className="w-100" style={{'background': '#e4e8eb'}}>
                                <tr className="row p-0 m-0 text-right">
                                  <td className="col-10">Tổng tiền hàng</td>
                                  <td className="col-2">{parseInt(totalBill).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                                <tr className="row p-0 m-0 text-right">
                                  <td className="col-10">Vận chuyển-Standard Express</td>
                                  <td className="col-2">{parseInt(this.state.data.fees_ship).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                                <tr className="row p-0 m-0 text-right">
                                  <td className="col-10">Miễn Phí Vận Chuyển</td>
                                  <td className="col-2">₫255.000</td>
                                </tr>
                                <tr className="row p-0 m-0 text-right">
                                  <td className="col-10">Voucher từ Shop</td>
                                  <td className="col-2">₫0</td>
                                </tr>
                                <tr className="row p-0 m-0 text-right">
                                  <td className="col-10">Tổng số tiền</td>
                                  <td className="col-2 text-danger">
                                    <span className="h4">{parseInt(this.state.data.total_bill).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0 py-2">
                              <hr className="horizontal-line" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 m-0 p-0 py-2">
                          <div className="row p-0 m-0">
                            <table className="w-100 table table-bordered">
                              <tbody className="w-100">
                                <tr className="row p-0 m-0 text-right" style={{'background': '#e4e8eb'}}>
                                  <td className="col-10">Phương thức Thanh toán</td>
                                  <td className="col-2">Thanh toán khi nhận hàng</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          : ''
        }
      </>
    );
  }
}

export default detail
