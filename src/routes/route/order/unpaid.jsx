// Import Component React
import { Component } from 'react'
// Import font boostrap
import { FaAngleLeft, FaAngleRight, FaEllipsisH } from "react-icons/fa"
// Import Component
import Loader from '../../../components/Rokida/Seller/Loading/spinner.jsx'
import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'
import Footer from '../../../components/Rokida/Seller/Orders/components/footer.jsx'
import StepOrder from '../../../components/Rokida/Seller/Orders/components/stepOrder.jsx'
import { dataComponent, BUTTON_ORDER_ALL } from './data.js'
// Import Pagination
import ReactPaginate from 'react-paginate'
// Import API
import orderStore from '../../../stores/order.store'
// Import variable default
import { OFFSET_DEFAULT, LIMIT_DEFAULT } from '../../../include/default'

// User pagination
const Pagination = (props) => {
  return (
    <ReactPaginate
      previousLabel={<FaAngleLeft />}
      nextLabel={<FaAngleRight />}
      breakLabel={<FaEllipsisH />}
      breakClassName={'break-me'}
      pageCount={props.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={props.handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  )
}

class unpaid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true,
      dataOrder: [],
      buttonOrderAll: BUTTON_ORDER_ALL,
      pageNumberCount: 1,
      offset: OFFSET_DEFAULT, 
      limit: LIMIT_DEFAULT,
      search: '',
      date_from: '1975-01-01',
      date_to: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
  }
  // Event click item pagination
  handlePageClicked = async (data) => {
    let selected = data.selected
    let limit = this.state.limit
    await this.setState({
      loader: true,
      offset: selected * limit
    })
    this.getData()
  }
  componentDidMount() {
    this.getData()
    this.addEventButtonSearch()
  }
  addEventButtonSearch () {
    document.getElementById('button-search-form').addEventListener('click', this.getKeyWord)
    document.getElementById('search-input').addEventListener('keypress', this.getKeyWordEnter)
    document.getElementById('button-search-date-form').addEventListener('click', this.getDate)
  }
  cancelAllOrder = async () => {
    if (window.confirm('Bạn có chắc chắn muốn từ chối tất cả đơn hàng?')) {
      orderStore.cancelAllOrder().then(async (res) => {
        window.location.href = '/portal/sale/order/cancel'
      })
    }
  }
  getKeyWordEnter = async (target) => {
    if (target.charCode === 13) {
      this.getKeyWord()
    }
  }
  getKeyWord = async () => {
    var keyWord = document.getElementById('search-input').value
    await this.setState({
      search: keyWord,
      loader: true
    })
    this.getData()
  }
  getDate = async () => {
    var date_from = document.getElementById('input-search-date-from').value
    var date_to = document.getElementById('input-search-date-to').value
    await this.setState({
      date_from: date_from,
      date_to: date_to,
      loader: true
    })
    this.getData()
  }
  acceptProduct = async (id) => {
    console.log(id)
  }

  setEventDelivery = async () => {
    var elements = document.getElementsByClassName('order-accept')
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', this.aceptOrder)
    }
  }

  aceptOrder = async (event) => {
    if (window.confirm('Bạn có chắc chắn muốn tiến hành giao đơn hàng này?')) {
      await this.setState({
        loader: true
      })
      await orderStore.deliveryOrder(event.target.id).then(async (res) => {
        if (res.data === true) {
          await this.getData()
        } else {
          await this.setState({
            loader: false
          })
          alert('Hệ thống đang bảo trì mong bạn thông cảm!')
        }
        await this.setState({
          loader: false
        })
      }).catch(e => {
        console.log(e)
      })
    }
  }
  
  // Get api
  getData = async () => {
    await this.setState({
      loader: true
    })
    var query = {}
    query.offset = this.state.offset
    query.limit = this.state.limit
    query.search = this.state.search
    query.date_from = this.state.date_from
    query.date_to = this.state.date_to
    orderStore.getOrderUnpaid(query).then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        var name = []
        item.order_detail.forEach(element => {
          name.push(element.product.name)
        })
        array.push({
          order_code: item.order_code,
          name: name,
          total_bill: item.total_bill,
          status: (item.status_order === 0) ? "Chờ xác nhận" : (item.status_order === 1) ? 'Đang chờ nhận hàng' : (item.status_order === 2) ? 'Đã nhận hàng' : (item.status_order === 3) ? 'Đang giao hàng' : (item.status_order === 4) ? 'Đã giao hàng' : 'Hủy đơn',
          created: new Date(item.created_at).getDate() + '-' + (new Date(item.created_at).getMonth() + 1) + '-' + new Date(item.created_at).getFullYear() + ' ' + new Date(item.created_at).getHours() + ':' + new Date(item.created_at).getMinutes() + ':' + new Date(item.created_at).getSeconds(),
          columnAction: [
            {
              button: false,
              id: item.id,
              classLink: 'btn-success text-white order-detail-' + item.id,
              href: '/portal/sale/order/detail/' + item.id,
              text: 'Xem'
            },
            {
              button: true,
              id: item.id,
              classLink: 'btn btn-primary text-white order-accept order-accept-' + item.id,
              href: '/portal/sale/order/accept-order/' + item.id,
              text: 'Giao'
            }
          ]
        })
      })
      if (array.length === 0) {
        BUTTON_ORDER_ALL.forEach(element => {
          element.disabled = 'disabled'
          element.classLink = element.classLink + ' disabled'
        })
        await this.setState({ buttonOrderAll: BUTTON_ORDER_ALL })
      } else {
        document.getElementById('button-cancel-all-order').addEventListener('click', this.cancelAllOrder)
      }
      await this.setState({ dataOrder: array })
      await this.setEventDelivery()
      this.setState({ loader: false })
    }).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_order_unpaid} />
        <StepOrder dataButton={this.state.buttonOrderAll} button={true} dataTable={this.state.dataOrder} columnAction={true} active="unpaid" submenu={false} data={dataComponent.data} />
        {Math.ceil(this.state.pageNumberCount / this.state.limit) > 1 ? <div className="col-12">
          <div className="row p-0 m-0">
            <div className="pagination col-12">
              <Pagination pageCount={Math.ceil(this.state.pageNumberCount / this.state.limit)} handlePageClick={this.handlePageClicked} />
            </div>
          </div>
        </div> : ''}
        <Footer />
      </>
    )
  }
}

export default unpaid
