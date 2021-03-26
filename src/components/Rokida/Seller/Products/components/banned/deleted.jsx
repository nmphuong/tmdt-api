import { Component } from 'react'

import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// 
import Loader from '../../../Loading/spinner.jsx'
import Button from  '../button.jsx'
import Table from '../../../Orders/components/table.jsx'

// 
import { dataComponent } from '../../../../../../routes/route/product/data'

// Import variable default
import { OFFSET_DEFAULT, LIMIT_DEFAULT } from '../../../../../../include/default'

// Import font boostrap
import { FaAngleLeft, FaAngleRight, FaEllipsisH } from 'react-icons/fa'

// Import Pagination
import ReactPaginate from 'react-paginate'

// Import API
import productStore from '../../../../../../stores/product.store'

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

class deleted extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataTable: [],
      columnAction: true,
      pageNumberCount: 1,
      loader: true,
      offset: OFFSET_DEFAULT,
      limit: LIMIT_DEFAULT,
      searchName: '',
      sku: '',
      productCode: '',
      typeInfringes: '',
      totalProduct: 0
    }
  }

  componentDidMount () {
    this.getData()
    this.addEventButtonSearch()
  }

  addEventButtonSearch () {
    document.getElementById('search-product').addEventListener('click', this.getKeyWord)
    document.getElementById('reset-search-product').addEventListener('click', this.resetKeyWord)
  }

  getKeyWord = async () => {
    this.setState({
      loader: true
    })
    var searchType = document.getElementById('search-type').value
    var nameSearch = document.getElementById('search-name').value
    var typeInfringes = document.getElementById('reason-search').value
    if (searchType === 'name') {
      this.setState({
        searchName: nameSearch
      })
    } else {
      this.setState({
        searchName: ''
      })
    }
    if (searchType === 'sku') {
      this.setState({
        sku: nameSearch
      })
    } else {
      this.setState({
        sku: ''
      })
    }
    if (searchType === 'product-code') {
      this.setState({
        productCode: nameSearch
      })
    } else {
      this.setState({
        productCode: ''
      })
    }
    this.setState({
      typeInfringes: typeInfringes
    })
    this.getData()
  }

  resetKeyWord = async () => {
    document.getElementById('search-type').value = 'name'
    document.getElementById('search-name').value = ''
    document.getElementById('reason-search').value = ''
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

  // Get api
  getData = async() => {
    var query = {}
    query.offset = this.state.offset
    query.limit = this.state.limit
    query.name = this.state.searchName
    query.sku = this.state.sku
    query.productCode = this.state.productCode
    query.typeInfringes = this.state.typeInfringes
    
    await productStore.getAllProductBannedDeleted(query).then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        var columnAction = []
        columnAction = [
          {
            classLink: 'btn-success text-white product-detail-' + item.id,
            href: '/portal/sale/product/detail/' + item.id,
            text: 'Xem'
          }
        ]
        array.push({
          name: item.name,
          deleted_time: item.created_at,
          reasonName: item.reason_name,
          suggestions: item.suggestions,
          columnAction: columnAction
        })
      })
      await this.setState({ 
        dataTable: array,
        totalProduct: res.pageCount,
        loader: false
      })
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    var thead = dataComponent.theadProductBannedDeleted
    var nav_link = []
    this.props.data.forEach((element, index) => {
      nav_link.push(
        <Nav.Item key={index} className="py-2">
          <Link className={((element.event_key === this.props.active) ? 'active' : "") + " nav-link link-step font-weight-bold pb-3 " + element.classLink} to={element.href}>{element.title}</Link>
        </Nav.Item>
      )
    })
    var tabs = []
    tabs.push(
      <Nav className="col-12" key='deleted'>
        {nav_link}
      </Nav>
    )
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        {tabs}
        <div className="row justify-content-between">
          <div className="col-lg-6 p-0 m-0 px-3 pb-2">
            <div className="search-name-sku row p-0 m-0">
              <select name="" id="search-type" className="col-lg-3 input-change-border bg-none">
                <option value="name">Tên sản phẩm</option>
                <option value="sku">SKU sản phẩm</option>
                <option value="product-code">Mã sản phẩm</option>
              </select>
              <input id="search-name" className="input-search col-lg-9 input-change-border bg-none form-control" type="text" placeholder="Nhập tên sản phẩm" />
            </div>
          </div>
          <div className="col-lg-5 p-0 m-0 px-3 pb-2">
            <div className="row p-0 m-0 h-100">
              <label className="col-lg-4 p-0 h-100 d-flex align-items-center">Loại vi phạm</label>
              <select name="" id="reason-search" className="col-lg-8 form-control input-change-border bg-none">
                <option value="">--Loại vi phạm--</option>
                <option value="1">Sản phẩm cấm</option>
                <option value="2">Hàng giả, hàng nhái</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <Button />
        </div>
        <div className="row">
          <div className="col-12">
            <p className="h4 font-weight-bold">{this.state.totalProduct} Product</p>
            <Table columnAction={this.state.columnAction} thead={thead} data={this.state.dataTable} />
            <div className="row p-0 m-0">
              {Math.ceil(this.state.pageNumberCount / this.state.limit) > 1 ? <div className='col-12'>
                <div className='row p-0 m-0'>
                  <div className='pagination col-12'>
                    <Pagination pageCount={Math.ceil(this.state.pageNumberCount / this.state.limit)} handlePageClick={this.handlePageClicked} />
                  </div>
                </div>
              </div> : ''}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default deleted
