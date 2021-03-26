// Import Component React
import { Component } from 'react'
// Import font boostrap
import { FaAngleLeft, FaAngleRight, FaEllipsisH } from 'react-icons/fa'
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

class all extends Component {
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
  componentDidMount () {
    this.getData()
    this.addEventButtonSearch()
  }
  addEventButtonSearch () {
    document.getElementById('button-search-form').addEventListener('click', this.getKeyWord)
    document.getElementById('search-input').addEventListener('keypress', this.getKeyWordEnter)
    document.getElementById('button-search-date-form').addEventListener('click', this.getDate)
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
  
  // Get api
  getData() {
    var query = {}
    query.offset = this.state.offset
    query.limit = this.state.limit
    query.search = this.state.search
    query.date_from = this.state.date_from
    query.date_to = this.state.date_to
    orderStore.getAllOrder(query).then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        var name = []
        item.order_detail.forEach(element => {
          name.push(element.product.name)
        })
        var columnAction = []
        columnAction = [
          {
            classLink: 'btn-success text-white order-detail-' + item.id,
            href: '/portal/sale/order/detail/' + item.id,
            text: 'Xem'
          }
        ]
        // if (item.status_order === 0) {
        //   columnAction.push({
        //     classLink: 'btn-primary text-white order-accept-' + item.id,
        //     href: '/portal/sale/order/accept-order/' + item.id,
        //     text: 'Giao',
        //     function: this.acceptOrder()
        //   })
        // }
        array.push({
          order_code: item.order_code,
          name: name,
          total_bill: item.total_bill,
          status: (item.status_order === 0) ? 'Chờ xác nhận' : (item.status_order === 1) ? 'Đang chờ nhận hàng' : (item.status_order === 2) ? 'Đã nhận hàng' : (item.status_order === 3) ? 'Đang giao hàng' : (item.status_order === 4) ? 'Đã giao hàng' : 'Hủy đơn',
          created: new Date(item.created_at).getDate() + '-' + (new Date(item.created_at).getMonth() + 1) + '-' + new Date(item.created_at).getFullYear() + ' ' + new Date(item.created_at).getHours() + ':' + new Date(item.created_at).getMinutes() + ':' + new Date(item.created_at).getSeconds(),
          columnAction: columnAction
        })
      })
      this.setState({ dataOrder: array })
      this.setState({ loader: false })
    }).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_order_all} />
        <StepOrder 
          // dataButton={this.state.buttonOrderAll} 
          // button={true} 
          columnAction={true} 
          dataTable={this.state.dataOrder} 
          active='all' 
          submenu={false} 
          data={dataComponent.data} />
        {Math.ceil(this.state.pageNumberCount / this.state.limit) > 1 ? <div className='col-12'>
          <div className='row p-0 m-0'>
            <div className='pagination col-12'>
              <Pagination pageCount={Math.ceil(this.state.pageNumberCount / this.state.limit)} handlePageClick={this.handlePageClicked} />
            </div>
          </div>
        </div> : ''}
        <Footer />
      </>
    )
  }
}

export default all
