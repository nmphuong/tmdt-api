import { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

import Loader from '../Loading/spinner.jsx'

import addressStore from '../../../../stores/address.store'

class modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.data.name,
      phone: this.props.data.phone,
      city: this.props.data.city,
      district: this.props.data.district,
      wards: this.props.data.wards,
      address: this.props.data.address,
      default: (this.props.data.default === 1) ? true : false,
      pick_up_address: (this.props.data.pick_up_address === 1) ? true : false,
      delivery_address: (this.props.data.delivery_address === 1) ? true : false,
      required_name: false,
      required_phone: false,
      required_detail_address: false,
      loader: false
    }
  }

  updateAddress = async () => {
    if (this.state.name === '') {
      await this.setState({
        required_name: true
      })
    }
    if (this.state.phone === '') {
      await this.setState({
        required_phone: true
      })
    }
    if (this.state.address === '') {
      await this.setState({
        required_detail_address: true
      })
    }
    if (this.state.required_name === false && this.state.required_phone === false && this.state.required_detail_address === false) {
      if (window.confirm('Bạn có chắc chắn muốn cập nhật địa này?')) {
        await this.setState({
          loader: true
        })
        const addressInfo = {
          name: this.state.name,
          phone: this.state.phone,
          city: this.state.city,
          district: this.state.district,
          wards: this.state.wards,
          address: this.state.address,
          default: (this.state.default === true) ? 1 : 0,
          pick_up_address: (this.state.pick_up_address === true) ? 1 : 0,
          delivery_address: (this.state.delivery_address === true) ? 1 : 0
        }
        await addressStore.updateAddress(addressInfo, this.props.data.id)
        .then(async (res) => {
          if (res.data === false) {
            await this.setState({
              loader: false
            })
          } else {
            this.props.hideModel()
            this.props.getAllAddress()
            // await this.props.hiddenModelAddSuccess(true)
            // await this.props.getMyCard()
          }
        })
        .catch(async (err) => {
          await this.setState({
            loader: false
          })
          console.log(err)
        })
        await this.setState({
          loader: false
        })
      }
    }
  }

  render() {
    return (
      <>
      {this.state.loader === true ? <Loader /> : ''}
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="font-weight-bold m-0">
              Chỉnh Sửa Địa Chỉ
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="body-add-address">
          <div className="row p-0 m-0">
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Họ &amp; Tên</p>
              <input onChange={
                async (event) => {
                  await this.setState({
                    name: event.target.value
                  })
                  if (this.state.name === '') {
                    await this.setState({
                      required_name: true
                    })
                  } else {
                    await this.setState({
                      required_name: false
                    })
                  }
                }
              } value={this.state.name} className="form-control" placeholder="Nhập vào" />
              {
                (this.state.required_name) 
                ? <p className="mb-1 text-danger">Vui lòng nhập họ tên của bạn</p>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Số điện thoại</p>
              <input onChange={
                async (event) => {
                  await this.setState({
                    phone: event.target.value
                  })
                  if (this.state.phone === '') {
                    await this.setState({
                      required_phone: true
                    })
                  } else {
                    await this.setState({
                      required_phone: false
                    })
                  }
                }
              } value={this.state.phone} className="form-control" placeholder="Nhập vào" />
              {
                (this.state.required_phone) 
                ? <p className="mb-1 text-danger">Vui lòng nhập số điện thoại của bạn</p>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Tỉnh/Thành Phố</p>
              <select onChange={
                (event) => {
                  this.setState({
                    city: event.target.value
                  })
                }
              } value={this.state.city} name="" id="" className="form-control">
                <option value="TP.Hồ Chí Minh">TP.Hồ Chí Minh</option>
                <option value="TP.Hà Nội">TP.Hà Nội</option>
              </select>
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Quận/Huyện</p>
              <select onChange={
                (event) => {
                  this.setState({
                    district: event.target.value
                  })
                }
              } value={this.state.district} name="" id="" className="form-control">
                <option value="Gò Vấp">Gò Vấp</option>
                <option value="Bình Thạnh">Bình Thạnh</option>
              </select>
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Phường/Xã</p>
              <select onChange={
                (event) => {
                  this.setState({
                    wards: event.target.value
                  })
                }
              } value={this.state.wards} name="" id="" className="form-control">
                <option value="Phường 9">Phường 9</option>
                <option value="Phường 8">Phường 8</option>
              </select>
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <p className="mb-1">Địa chỉ chi tiết</p>
              <textarea onChange={
                async (event) => {
                  await this.setState({
                    address: event.target.value
                  })
                  if (this.state.address === '') {
                    await this.setState({
                      required_detail_address: true
                    })
                  } else {
                    await this.setState({
                      required_detail_address: false
                    })
                  }
                }
              } value={this.state.address} name="" id="" className="form-control" rows="5" placeholder="Số nhà, tên đường, v.v.."></textarea>
              {
                (this.state.required_detail_address) 
                ? <p className="mb-1 text-danger">Vui lòng nhập đầy đủ địa chỉ của bạn</p>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-4">
              <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0">
                  {
                    (this.props.data.default === 1  )
                    ? <input disabled checked type="checkbox" className="" />
                    : <input onChange={
                      () => {
                        this.setState({
                          default: !this.state.default
                        })
                      }
                    } defaultChecked={this.state.default} type="checkbox" className="" />
                  }
                  <label className="ml-2" htmlFor="">Đặt làm địa chỉ mặc định</label>
                </div>
                <div className="col-12 p-0 m-0">
                  {
                    (this.props.data.pick_up_address === 1  )
                    ? <input disabled checked type="checkbox" className="" />
                    : <input onChange={
                      () => {
                        this.setState({
                          pick_up_address: !this.state.pick_up_address
                        })
                      }
                    } defaultChecked={this.state.pick_up_address} type="checkbox" className="" />
                  }
                  <label className="ml-2" htmlFor="">Đặt làm địa chỉ lấy hàng</label>
                </div>
                <div className="col-12 p-0 m-0">
                  {
                    (this.props.data.delivery_address === 1 )
                    ? <input disabled checked type="checkbox" className="" />
                    : <input onChange={
                      () => {
                        this.setState({
                          delivery_address: !this.state.delivery_address
                        })
                      }
                    } defaultChecked={this.state.delivery_address} type="checkbox" className="" />
                  }
                  <label className="ml-2" htmlFor="">Đặt làm địa chỉ nhận hàng</label>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModel} id="cancel-edit-address" variant="outline-dark">
            Hủy
        </Button>
          <Button onClick={this.updateAddress} variant="warning">
            Lưu
        </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default modal
