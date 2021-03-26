import { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

import bankStore from '../../../../stores/bank.store'

import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

class modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      govermentId: '',
      user_name_bank: '',
      name_bank: '',
      account_number: '',
      area: '',
      bank_branch: '',
      validUserName: true,
      validGovermentId: true,
      validuserNameBank: true,
      validNameBank: true,
      validAccountNumber: true,
      validArea: true,
      validBankBranch: true,
      loader: false
    }
  }

  addCard = async () => {
    var valid = true
    await this.setState({
      validUserName: true,
      validGovermentId: true,
      validuserNameBank: true,
      validNameBank: true,
      validAccountNumber: true,
      validArea: true,
      validBankBranch: true
    })
    if (this.state.username === '') {
      valid = false
      await this.setState({
        validUserName: false
      })
    }
    if (this.state.govermentId === '') {
      valid = false
      await this.setState({
        validGovermentId: false
      })
    }
    if (this.state.user_name_bank === '') {
      valid = false
      await this.setState({
        validuserNameBank: false
      })
    }
    if (this.state.name_bank === '' || this.state.name_bank === 'null') {
      valid = false
      await this.setState({
        validNameBank: false
      })
    }
    if (this.state.account_number === '') {
      valid = false
      await this.setState({
        validAccountNumber: false
      })
    }
    if (this.state.area === '' || this.state.area === 'null') {
      valid = false
      await this.setState({
        validArea: false
      })
    }
    if (this.state.bank_branch === '') {
      valid = false
      await this.setState({
        validBankBranch: false
      })
    }
    if (valid === true) {
      await this.setState({
        loader: true
      })
      const bankInfo = {
        username: this.state.username,
        govermentId: this.state.govermentId,
        user_name_bank: this.state.user_name_bank,
        name_bank: this.state.name_bank,
        account_number: this.state.account_number,
        area: this.state.area,
        bank_branch: this.state.bank_branch
      }
      await bankStore.addCard(bankInfo)
      .then(async (res) => {
        if (res.data === false) {
          alert('Tài khoản ngân hàng đã tồn tại')
          await this.setState({
            loader: false
          })
        } else {
          await this.props.hiddenModelAddSuccess(true)
          await this.props.getMyCard()
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

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="font-weight-bold m-0">
              Thêm Tài Khoản Ngân Hàng
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="body-add-address">
          <div className="row p-0 m-0">
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Họ &amp; Tên</p>
              <input value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} required className="form-control" placeholder="Nhập vào" />
              {
                (this.state.validUserName === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Số CMND</p>
              <input value={this.state.govermentId} onChange={(event) => {this.setState({govermentId: event.target.value})}} required className="form-control" placeholder="Nhập vào" />
              {
                (this.state.validGovermentId === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Tên chủ tài khoản (Viết in hoa, không dấu - NGUYEN VAN A)</p>
              <input value={this.state.user_name_bank} onChange={(event) => {this.setState({user_name_bank: event.target.value})}} required className="form-control" placeholder="Nhập vào" />
              {
                (this.state.validuserNameBank === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Tên Ngân hàng</p>
              <select onChange={(event) => {this.setState({name_bank: event.target.value})}} name="" id="" className="form-control">
                <option value="null">-- Tên Ngân Hàng---</option>
                <option value="vib">VIB</option>
              </select>
              {
                (this.state.validNameBank === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Số tài khoản</p>
              <input value={this.state.account_number} onChange={(event) => {this.setState({account_number: event.target.value})}} required className="form-control" placeholder="Nhập vào" />
              {
                (this.state.validAccountNumber === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Khu vực</p>
              <select onChange={(event) => {this.setState({area: event.target.value})}} name="" id="" className="form-control">
                <option value="null">-- Khu Vực---</option>
                <option value="tphcm">TP HCM</option>
              </select>
              {
                (this.state.validArea === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
            <div className="col-lg-12 px-0 m-0 pt-2 pb-2">
              <p className="mb-1">Tên chi nhánh ngân hàng (Theo thông tin trên sao kê)</p>
              <input value={this.state.bank_branch} onChange={(event) => {this.setState({bank_branch: event.target.value})}} required className="form-control" placeholder="Nhập vào" />
              {
                (this.state.validBankBranch === false)
                ? <span className="text-danger">* Không được bỏ trống</span>
                : ''
              }
            </div>
            {/*  */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.addCard} id="save-bank" className="px-5" variant="warning">
            Lưu
        </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default modal
