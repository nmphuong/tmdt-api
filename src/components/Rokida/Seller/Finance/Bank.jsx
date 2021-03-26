import React from 'react'

import { FaUniversity, FaRegCheckCircle, FaPlus } from 'react-icons/fa'

import ModalAdd from './modalAddBank.jsx'
import ModalEdit from './modalEditBank.jsx'

import { Modal } from 'react-bootstrap'

import bankStore from '../../../../stores/bank.store'

import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

class HtmlCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={() => { this.setState({ show: false }) }}>
        <ModalEdit hiddenModelAddSuccess={async (event) => {
          await this.setState({show: event})
          this.props.getMyCard()
      }} data={this.props.data} />
      </Modal>
        <div className="w-100 p-0 m-0">
          <div id={this.props.id} onClick={() => { this.setState({show: true}) }} className="row p-0 m-0 rounded card-bank card-bank-elm-hv">
            <div className="col-12 p-0 m-0 bg-dark height-card-bank-header d-flex justify-content-center align-items-end">
              <span className="font-weight-bold text-uppercase text-white">{this.props.namebank}</span>
            </div>
            <div className="col-12 p-0 m-0 bg-white height-card-bank-body">
              <div className="d-flex p-3">
                <div className="icon-bank rounded d-flex justify-content-center align-items-center text-white">
                  <FaUniversity />
                </div>
                <div className="info px-3">
                  <p className="mb-1" style={{ 'color': '#00bfa5' }}><FaRegCheckCircle />&nbsp;Đã kiểm tra</p>
                  <p className="mb-1 text-dark number-bank-card">**** {this.props.accountnumber.substring(this.props.accountnumber.length - 4, this.props.accountnumber.length)}</p>
                  <br />
                  <span className="mb-1 text-dark text-uppercase name-bank-card">{this.props.usernamebank}&nbsp;&nbsp;</span>
                  {
                    (this.props.defaultbank === 1)
                    ? <span className="mb-1 text-uppercase default-bg px-2 py-1 rounded text-nowrap" style={{ 'color': '#00bfa5' }}>Mặc định</span>
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Bank extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      data: [],
      loader: true,
      showModalEdit: false
    }
  }

  componentDidMount() {
    this.getMyCard()
  }

  getMyCard = async () => {
    await this.setState({
      loader: true
    })
    await bankStore.getMyCards()
      .then(async (res) => {
        var array = []
        res.data.forEach(async (element, index) => {
          let data = {
            id: element.id,
            user_name_bank: element.user_name_bank,
            account_number: element.account_number,
            name_bank: element.name_bank,
            area: element.area,
            bank_branch: element.bank_branch,
            default_bank: element.default_bank
          }
          array.push(
            <div className="col-lg-4 px-1 py-4" key={index}>
              <HtmlCard getMyCard={this.getMyCard} data={data} id={element.id} namebank={element.name_bank} accountnumber={element.account_number} usernamebank={element.user_name_bank} defaultbank={element.default_bank} />
            </div>
          )
        })
        await this.setState({
          loader: false,
          data: array
        })
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

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={() => { this.setState({ show: false }) }}>
          <ModalAdd getMyCard={this.getMyCard} hiddenModelAddSuccess={async (event) => { this.setState({ show: false }) }} />
        </Modal>
        <div className="row p-0 m-0">
          <div className="col-12 p-0 m-0">
            <p className="h4 font-weight-bold">Tài khoản ngân hàng</p>
          </div>
          <div className="col-12 p-0 m-0">
            <div className="row p-0 m-0">
              {/*  */}
              <div onClick={() => { this.setState({ show: true }) }} className="col-lg-3 mx-1 rounded add-card h-100 w-100 d-flex justify-content-center position-relative" style={{ 'minHeight': '170px' }}>
                <div className="text-add-card-bank text-center position-absolute">
                  <FaPlus />
                  <p className="d-flex text-nowrap">Thêm Tài Khoản Ngân Hàng</p>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="row p-0 m-0">
              {this.state.data}
              {/*  */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Bank
