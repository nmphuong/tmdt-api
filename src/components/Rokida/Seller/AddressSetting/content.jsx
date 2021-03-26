import React from 'react'

import * as FontFa from 'react-icons/fa'

import ModalAdd from './modalAdd.jsx'
import ModalEdit from './modalEditAddress.jsx'
import Loader from '../Loading/spinner.jsx'

import addressStore from '../../../../stores/address.store'

import { Modal } from 'react-bootstrap'

class contentPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      show_1: false,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      loader: false,
      data: []
    }
  }

  componentDidMount() {
    this.getAllAddress()
  }

  ShowAddModal = async () => {
    await this.setState({
      show: true
    })
    document.getElementById('cancel-add-address').addEventListener('click', this.hideAddModal)
  }

  hideAddModal = async () => {
    this.setState({
      show: false
    })
  }

  ShowEditModal_1 = async () => {
    await this.setState({
      show_1: true
    })
    document.getElementById('cancel-edit-address').addEventListener('click', this.hideEditModal1)
  }

  hideEditModal_1 = async () => {
    this.setState({
      show_1: false
    })
  }

  ShowEditModal_2 = async () => {
    await this.setState({
      show_2: true
    })
    document.getElementById('cancel-edit-address').addEventListener('click', this.hideEditModal1)
  }

  hideEditModal_2 = async () => {
    this.setState({
      show_2: false
    })
  }

  ShowEditModal_3 = async () => {
    await this.setState({
      show_3: true
    })
    document.getElementById('cancel-edit-address').addEventListener('click', this.hideEditModal1)
  }

  hideEditModal_3 = async () => {
    this.setState({
      show_3: false
    })
  }

  ShowEditModal_4 = async () => {
    await this.setState({
      show_4: true
    })
    document.getElementById('cancel-edit-address').addEventListener('click', this.hideEditModal1)
  }

  hideEditModal_4 = async () => {
    this.setState({
      show_4: false
    })
  }

  ShowEditModal_5 = async () => {
    await this.setState({
      show_5: true
    })
    document.getElementById('cancel-edit-address').addEventListener('click', this.hideEditModal1)
  }

  hideEditModal_5 = async () => {
    this.setState({
      show_5: false
    })
  }

  getAllAddress = async () => {
    await this.setState({
      loader: true
    })
    await addressStore.getAllAddress()
      .then(async (res) => {
        if (res.data === false) {
          await this.setState({
            loader: false
          })
        } else {
          await this.setState({
            data: res.data,
            loader: false
          })
        }
      })
      .catch(async (err) => {
        await this.setState({
          loader: false
        })
        console.log(err)
      })
  }

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.hideAddModal}>
          <ModalAdd getAllAddress={this.getAllAddress} hideModel={this.hideAddModal} />
        </Modal>
        <div className="d-flex justify-content-between">
          <div className="name-page">
            <p className="font-weight-bold h4">
              Địa Chỉ
            </p>
            <p className="text-name text-secondary">
              Quản lý việc vận chuyển và địa chỉ giao hàng của bạn
            </p>
          </div>
          <div className="btn-add-address">
            {
              (this.state.data.length < 5)
                ? <button onClick={this.ShowAddModal} id="add-address" className="btn btn-danger"><FontFa.FaPlus />&nbsp;Thêm địa chỉ mới</button>
                : ''
            }
          </div>
        </div>
        <hr className="mb-2 w-100" />
        {
          (this.state.data.length >= 1)
            ?
            <div>
              <div className="row p-0 m-0">
                <div className="col-lg-1"><FontFa.FaMapMarkerAlt /></div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Họ	&amp; Tên</p>
                    </div>
                    <div className="col-lg-9">
                      <p className="font-weight-bold">{this.state.data[0].name}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Số điện thoại</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[0].phone} </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Địa chỉ</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[0].address}</p>
                      <p>{this.state.data[0].wards}</p>
                      <p>{this.state.data[0].district}</p>
                      <p>{this.state.data[0].city}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-end">
                    {
                      (this.state.data[0].default === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-danger">Mặc định</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[0].pick_up_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-warning">Giao hàng</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[0].delivery_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-success">Nhận hàng</div>
                        </div>
                        : ''
                    }
                    <div className="col-12 d-flex justify-content-end text-right">
                      <button onClick={this.ShowEditModal_1} className="btn bg-none text-primary">Sửa</button>
                    </div>
                    <div className="col-12 d-flex justify-content-end text-right">
                      {
                        (this.state.data[0].default !== 1 && this.state.data[0].pick_up_address !== 1 && this.state.data[0].delivery_address !== 1)
                          ? <button onClick={
                            async () => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa địa này?')) {
                                await this.setState({
                                  loader: true
                                })
                                await addressStore.deleteAddress(this.state.data[0].id)
                                  .then(async (res) => {
                                    if (res.data === false) {
                                      await this.setState({
                                        loader: false
                                      })
                                    } else {
                                      await this.getAllAddress()
                                      await this.setState({
                                        loader: false
                                      })
                                    }
                                  })
                                  .catch(async (err) => {
                                    await this.setState({
                                      loader: false
                                    })
                                    console.log(err)
                                  })
                              }
                            }
                          } className="btn bg-none text-primary">Xóa</button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show_1} onHide={this.hideEditModal_1}>
                <ModalEdit getAllAddress={this.getAllAddress} hideModel={this.hideEditModal_1} data={this.state.data[0]} />
              </Modal>
              <hr className="my-2" />
            </div>
            : ''
        }
        {
          (this.state.data.length >= 2)
            ?
            <div>
              <div className="row p-0 m-0">
                <div className="col-lg-1"><FontFa.FaMapMarkerAlt /></div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Họ	&amp; Tên</p>
                    </div>
                    <div className="col-lg-9">
                      <p className="font-weight-bold">{this.state.data[1].name}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Số điện thoại</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[1].phone} </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Địa chỉ</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[1].address}</p>
                      <p>{this.state.data[1].wards}</p>
                      <p>{this.state.data[1].district}</p>
                      <p>{this.state.data[1].city}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-end">
                    {
                      (this.state.data[1].default === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-danger">Mặc định</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[1].pick_up_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-warning">Giao hàng</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[1].delivery_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-success">Nhận hàng</div>
                        </div>
                        : ''
                    }
                    <div className="col-12 d-flex justify-content-end text-right">
                      <button onClick={this.ShowEditModal_2} className="btn bg-none text-primary">Sửa</button>
                    </div>
                    <div className="col-12 d-flex justify-content-end text-right">
                      {
                        (this.state.data[1].default !== 1 && this.state.data[1].pick_up_address !== 1 && this.state.data[1].delivery_address !== 1)
                          ? <button onClick={
                            async () => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa địa này?')) {
                                await this.setState({
                                  loader: true
                                })
                                await addressStore.deleteAddress(this.state.data[1].id)
                                  .then(async (res) => {
                                    if (res.data === false) {
                                      await this.setState({
                                        loader: false
                                      })
                                    } else {
                                      await this.getAllAddress()
                                      await this.setState({
                                        loader: false
                                      })
                                    }
                                  })
                                  .catch(async (err) => {
                                    await this.setState({
                                      loader: false
                                    })
                                    console.log(err)
                                  })
                              }
                            }
                          } className="btn bg-none text-primary">Xóa</button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show_2} onHide={this.hideEditModal_2}>
                <ModalEdit getAllAddress={this.getAllAddress} hideModel={this.hideEditModal_2} data={this.state.data[1]} />
              </Modal>
              <hr className="my-2" />
            </div>
            : ''
        }
        {
          (this.state.data.length >= 3)
            ?
            <div>
              <div className="row p-0 m-0">
                <div className="col-lg-1"><FontFa.FaMapMarkerAlt /></div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Họ	&amp; Tên</p>
                    </div>
                    <div className="col-lg-9">
                      <p className="font-weight-bold">{this.state.data[2].name}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Số điện thoại</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[2].phone} </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Địa chỉ</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[2].address}</p>
                      <p>{this.state.data[2].wards}</p>
                      <p>{this.state.data[2].district}</p>
                      <p>{this.state.data[2].city}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-end">
                    {
                      (this.state.data[2].default === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-danger">Mặc định</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[2].pick_up_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-warning">Giao hàng</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[2].delivery_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-success">Nhận hàng</div>
                        </div>
                        : ''
                    }
                    <div className="col-12 d-flex justify-content-end text-right">
                      <button onClick={this.ShowEditModal_3} className="btn bg-none text-primary">Sửa</button>
                    </div>
                    <div className="col-12 d-flex justify-content-end text-right">
                      {
                        (this.state.data[2].default !== 1 && this.state.data[2].pick_up_address !== 1 && this.state.data[2].delivery_address !== 1)
                          ? <button onClick={
                            async () => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa địa này?')) {
                                await this.setState({
                                  loader: true
                                })
                                await addressStore.deleteAddress(this.state.data[2].id)
                                  .then(async (res) => {
                                    if (res.data === false) {
                                      await this.setState({
                                        loader: false
                                      })
                                    } else {
                                      await this.getAllAddress()
                                      await this.setState({
                                        loader: false
                                      })
                                    }
                                  })
                                  .catch(async (err) => {
                                    await this.setState({
                                      loader: false
                                    })
                                    console.log(err)
                                  })
                              }
                            }
                          } className="btn bg-none text-primary">Xóa</button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show_3} onHide={this.hideEditModal_3}>
                <ModalEdit getAllAddress={this.getAllAddress} hideModel={this.hideEditModal_3} data={this.state.data[2]} />
              </Modal>
              <hr className="my-2" />
            </div>
            : ''
        }
        {
          (this.state.data.length >= 4)
            ?
            <div>
              <div className="row p-0 m-0">
                <div className="col-lg-1"><FontFa.FaMapMarkerAlt /></div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Họ	&amp; Tên</p>
                    </div>
                    <div className="col-lg-9">
                      <p className="font-weight-bold">{this.state.data[3].name}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Số điện thoại</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[3].phone} </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Địa chỉ</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[3].address}</p>
                      <p>{this.state.data[3].wards}</p>
                      <p>{this.state.data[3].district}</p>
                      <p>{this.state.data[3].city}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-end">
                    {
                      (this.state.data[3].default === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-danger">Mặc định</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[3].pick_up_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-warning">Giao hàng</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[3].delivery_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-success">Nhận hàng</div>
                        </div>
                        : ''
                    }
                    <div className="col-12 d-flex justify-content-end text-right">
                      <button onClick={this.ShowEditModal_4} className="btn bg-none text-primary">Sửa</button>
                    </div>
                    <div className="col-12 d-flex justify-content-end text-right">
                      {
                        (this.state.data[3].default !== 1 && this.state.data[3].pick_up_address !== 1 && this.state.data[3].delivery_address !== 1)
                          ? <button onClick={
                            async () => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa địa này?')) {
                                await this.setState({
                                  loader: true
                                })
                                await addressStore.deleteAddress(this.state.data[3].id)
                                  .then(async (res) => {
                                    if (res.data === false) {
                                      await this.setState({
                                        loader: false
                                      })
                                    } else {
                                      await this.getAllAddress()
                                      await this.setState({
                                        loader: false
                                      })
                                    }
                                  })
                                  .catch(async (err) => {
                                    await this.setState({
                                      loader: false
                                    })
                                    console.log(err)
                                  })
                              }
                            }
                          } className="btn bg-none text-primary">Xóa</button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show_4} onHide={this.hideEditModal_4}>
                <ModalEdit getAllAddress={this.getAllAddress} hideModel={this.hideEditModal_4} data={this.state.data[3]} />
              </Modal>
              <hr className="my-2" />
            </div>
            : ''
        }
        {
          (this.state.data.length >= 5)
            ?
            <div>
              <div className="row p-0 m-0">
                <div className="col-lg-1"><FontFa.FaMapMarkerAlt /></div>
                <div className="col-lg-9">
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Họ	&amp; Tên</p>
                    </div>
                    <div className="col-lg-9">
                      <p className="font-weight-bold">{this.state.data[4].name}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Số điện thoại</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[4].phone} </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-lg-3">
                      <p>Địa chỉ</p>
                    </div>
                    <div className="col-lg-9">
                      <p>{this.state.data[4].address}</p>
                      <p>{this.state.data[4].wards}</p>
                      <p>{this.state.data[4].district}</p>
                      <p>{this.state.data[4].city}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-end">
                    {
                      (this.state.data[4].default === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-danger">Mặc định</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[4].pick_up_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-warning">Giao hàng</div>
                        </div>
                        : ''
                    }
                    {
                      (this.state.data[4].delivery_address === 1)
                        ?
                        <div className="col-12 d-flex justify-content-end text-right pb-2">
                          <div className="d-flex text-nowrap m-0 align-items-center p-1 text-white bg-success">Nhận hàng</div>
                        </div>
                        : ''
                    }
                    <div className="col-12 d-flex justify-content-end text-right">
                      <button onClick={this.ShowEditModal_5} className="btn bg-none text-primary">Sửa</button>
                    </div>
                    <div className="col-12 d-flex justify-content-end text-right">
                      {
                        (this.state.data[4].default !== 1 && this.state.data[4].pick_up_address !== 1 && this.state.data[4].delivery_address !== 1)
                          ? <button onClick={
                            async () => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa địa này?')) {
                                await this.setState({
                                  loader: true
                                })
                                await addressStore.deleteAddress(this.state.data[4].id)
                                  .then(async (res) => {
                                    if (res.data === false) {
                                      await this.setState({
                                        loader: false
                                      })
                                    } else {
                                      await this.getAllAddress()
                                      await this.setState({
                                        loader: false
                                      })
                                    }
                                  })
                                  .catch(async (err) => {
                                    await this.setState({
                                      loader: false
                                    })
                                    console.log(err)
                                  })
                              }
                            }
                          } className="btn bg-none text-primary">Xóa</button>
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show_5} onHide={this.hideEditModal_5}>
                <ModalEdit getAllAddress={this.getAllAddress} hideModel={this.hideEditModal_5} data={this.state.data[4]} />
              </Modal>
              <hr className="my-2" />
            </div>
            : ''
        }
      </>
    );
  }
}

export default contentPage
