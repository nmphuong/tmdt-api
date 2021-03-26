import { Component } from 'react'

// Import font boostrap
import { FaAngleLeft, FaAngleRight, FaEllipsisH } from 'react-icons/fa'

// Import component other
import Loader from '../../../components/Rokida/Seller/Loading/spinner.jsx'
import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'
import ComponentProduct from '../../../components/Rokida/Seller/Products/index.jsx'
import Footer from '../../../components/Rokida/Seller/Orders/components/footer.jsx'

// Import Pagination
import ReactPaginate from 'react-paginate'

// Import data
import { dataComponent } from './data'

// Import variable default
import { OFFSET_DEFAULT, LIMIT_DEFAULT } from '../../../include/default'

// Import API
import productStore from '../../../stores/product.store'

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
      data: [],
      pageNumberCount: 1,
      loader: true,
      offset: OFFSET_DEFAULT,
      limit: LIMIT_DEFAULT,
      searchName: '',
      sku: '',
      productCode: '',
      category: '',
      stockMin: '',
      stockMax: '',
      soldMin: '',
      soldMax: '',
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
    var categorySearch = document.getElementById('category-search').value
    var wareHouseFromSearch = document.getElementById('ware-house-from').value
    var wareHouseToSearch = document.getElementById('ware-house-to').value
    var soldFromSearch = document.getElementById('sold-from').value
    var soldToSearch = document.getElementById('sold-to').value
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
      category: categorySearch,
      stockMin: wareHouseFromSearch,
      stockMax: wareHouseToSearch,
      soldMin: soldFromSearch,
      soldMax: soldToSearch
    })
    this.getData()
  }

  resetKeyWord = async () => {
    document.getElementById('search-type').value = 'name'
    document.getElementById('search-name').value = ''
    document.getElementById('category-search').value = ''
    document.getElementById('ware-house-from').value = ''
    document.getElementById('ware-house-to').value = ''
    document.getElementById('sold-from').value = ''
    document.getElementById('sold-to').value = ''
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
    query.category = this.state.category
    query.stockMin = this.state.stockMin
    query.stockMax = this.state.stockMax
    query.soldMin = this.state.soldMin
    query.soldMax = this.state.soldMax
    
    await productStore.getAllProduct(query).then(async (res) => {
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
          sku: item.sku,
          category: item.cate_id.name,
          price: item.price,
          warehouse: item.warehouse,
          consumed: item.consumed,
          columnAction: columnAction
        })
      })
      await this.setState({ 
        data: array,
        totalProduct: res.pageCount,
        loader: false
      })
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <>
      {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_product_all} />
        <div className='row p-0 m-0'>
          <div className='pagination col-12 p-0 m-0'>
            <div className="fillter col-12 p-0 m-0">
              <div className="row p-0 m-0">
                <ComponentProduct totalProduct={this.state.totalProduct} data={this.state.data} thead={dataComponent.theadProducAll} active="all" columnAction={true} />
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
        </div>
        <Footer />
      </>
    );
  }
}

export default all
