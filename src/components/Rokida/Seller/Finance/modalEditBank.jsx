import { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

import bankStore from '../../../../stores/bank.store'

import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

class modal extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteCard = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản ngân hàng này?')) {
      await this.setState({
        loader: true
      })
      await bankStore.deleteCard(this.props.data.id)
        .then(async (res) => {
          if (res.data === false) {
            alert('Hệ thống đang bảo trì vui lòng chờ')
            await this.setState({
              loader: false
            })
          } else {
            await this.setState({
              loader: false
            })
            await this.props.hiddenModelAddSuccess(false)
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

  defaultCard = async () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt tài khoản ngân hàng này làm mặt định?')) {
      await this.setState({
        loader: true
      })
      await bankStore.defaultCard(this.props.data.id)
        .then(async (res) => {
          if (res.data === false) {
            alert('Hệ thống đang bảo trì vui lòng chờ')
            await this.setState({
              loader: false
            })
          } else {
            await this.setState({
              loader: false
            })
            await this.props.hiddenModelAddSuccess(false)
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

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="font-weight-bold m-0">
              Tài khoản ngân hàng
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-0 m-0">
            <div className="col-6">
              <p className="mb-1 title-card-x-bank">Tên chủ tài khoản (Viết in hoa, không dấu - NGUYEN VAN A)</p>
              <p className="mb-3 text-uppercase">{this.props.data.user_name_bank}</p>
              <p className="mb-1 title-card-x-bank">Số tài khoản</p>
              <p className="mb-3">**** {this.props.data.account_number.substring(this.props.data.account_number.length - 4, this.props.data.account_number.length)}</p>
            </div>
            <div className="col-6">
              <p className="mb-1 title-card-x-bank">Tên Ngân hàng</p>
              <p className="mb-3">{this.props.data.name_bank}</p>
              <p className="mb-1 title-card-x-bank">Khu vực</p>
              <p className="mb-3">{this.props.data.area}</p>
              <p className="mb-1 title-card-x-bank">Tên chi nhánh ngân hàng (Theo thông tin trên sao kê)</p>
              <p className="mb-3">{this.props.data.bank_branch}</p>
            </div>
          </div>
        </Modal.Body>
        {
          (this.props.data.default_bank === 1)
            ?
            ''
            :
            <Modal.Footer>
              <Button onClick={this.deleteCard} id="save-bank" className="px-5" variant="light">
                Xóa
            </Button>
              <Button onClick={this.defaultCard} id="save-bank" className="px-5" variant="light">
                Đặt làm mặt định
            </Button>
            </Modal.Footer>
        }
      </>
    );
  }
}

export default modal
