import { Component } from 'react'

import '../../../../assets/Rokida/css/SellerStyle/style/addProduct.css'

import * as FontFa from 'react-icons/fa'

import { Spinner } from 'react-bootstrap'
// Import API
import categoryStore from '../../../../stores/category.store'

// Import Router Dom
import { Link } from 'react-router-dom'

class category extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lenghtNameProduct: 0,
      parent: 0,
      itemLVO: [],
      itemLVT: [],
      itemLVTH: [],
      data: [],
      textCategoryO: [],
      textCategoryT: [],
      textCategoryTH: [],
      textCategory1: '',
      textCategory2: '',
      textCategory3: '',
      valueNameProduct: '',
      idCateorySelected: 1
    }
  }

  componentDidMount() {
    this.getDataId()
  }

  addEvenent() {
    var elements = document.getElementsByClassName('btn-item-category')
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', this.setParent)
    }
  }

  // Get api with id
  getDataId = async () => {
    var query = {}
    query.parent = this.state.parent
    await categoryStore.getAllCategory(query).then(async (res) => {
      await this.setState({
        data: res.data
      })
      this.setElement()
      this.addEvenent()
    }).catch(e => {
      console.log(e)
    })
  }

  // Get api with search 
  getDataSearch = async () => {
    var query = {}
    query.search = document.getElementById('search-category').value
    await categoryStore.getAllCategory(query).then(async (res) => {
      await this.setState({
        data: res.data
      })
      this.setElement()
      this.addEvenent()
      var elems1 = document.querySelectorAll(".btn-item-category")
      elems1.forEach.call(elems1, function (el) {
        el.classList.remove("active")
      });
      this.setState({
        textCategoryO: '',
        textCategoryT: '',
        textCategoryTH: ''
      })
    }).catch(e => {
      console.log(e)
    })
  }

  setParent = async (event) => {
    if (event.target.className.indexOf('order-1') !== -1) {
      var elems1 = document.querySelectorAll(".order-1")
      elems1.forEach.call(elems1, function (el) {
        el.classList.remove("active")
      });
      this.setState({
        itemLVT: [],
        itemLVTH: [],
        textCategoryO: [<span key="1">{event.target.textContent}</span>],
        textCategoryT: [],
        textCategoryTH: [],
        textCategory1: event.target.textContent,
        textCategory2: '',
        textCategory3: ''
      })
    } else if (event.target.className.indexOf('order-2') !== -1) {
      var elems2 = document.querySelectorAll(".order-2")
      elems2.forEach.call(elems2, function (el) {
        el.classList.remove("active")
      });
      this.setState({
        itemLVTH: [],
        textCategoryT: [<span key="2">&nbsp;<FontFa.FaAngleRight />&nbsp;{event.target.textContent}</span>],
        textCategoryTH: [],
        textCategory2: event.target.textContent,
        textCategory3: ''
      })
    } else if (event.target.className.indexOf('order-3') !== -1) {
      var elems3 = document.querySelectorAll(".order-3")
      elems3.forEach.call(elems3, function (el) {
        el.classList.remove("active")
      });
      this.setState({
        textCategoryTH: [<span key="3">&nbsp;<FontFa.FaAngleRight />&nbsp;{event.target.textContent}</span>],
        textCategory3: event.target.textContent
      })
    }
    document.getElementById(event.target.id).classList.add('active')
    this.setState({
      parent: event.target.id
    })
    this.getDataId()
  }

  setElement = async () => {
    var item = []
    var order = 0
    this.state.data.forEach((element, index) => {
      item.push(
        <button key={index} id={element.id} className={"order-" + element.order + " btn-item-category btn my-1 w-100 text-nowrap text-left"}>
          {element.name}
        </button>
      )
      order = element.order
    })
    if (order === 1)
      this.setState({
        itemLVO: item,
        itemLVT: [],
        itemLVTH: []
      })
    if (order === 2)
      this.setState({
        itemLVT: item,
        itemLVTH: []
      })
    if (order === 3)
      this.setState({
        itemLVTH: item
      })
  }

  onChangeNameProduct = async (event) => {
    this.setState({
      valueNameProduct: event.target.value,
      lenghtNameProduct: event.target.value.length
    })
  }

  setNameAndCategory = async () => {
    localStorage.setItem('j6VDAJXFnY-name-new-product', this.state.valueNameProduct)
    var arrayCategory = {
      category1: this.state.textCategory1,
      category2: this.state.textCategory2,
      category3: this.state.textCategory3,
      idCategorySelect: this.state.parent
    }
    localStorage.setItem('j6VDAJXFnY-category-new-product', JSON.stringify(arrayCategory))
  }

  render() {
    return (
      <>
        <div className="main mh-100">
          <div className="mh-100">
            <div className="mh-100">
              <div className="row p-0 m-0 position-relative">
                <div className="contain container-fluid">
                  <div className="bg-main col-12">
                    {/* Section 1 tile page */}
                    <div className="title py-3">
                      <p className="h4 font-weight-bold">
                        Thêm 1 sản phẩm mới
                      </p>
                      <p>
                        Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.
                      </p>
                      <hr className="bg-dark mb-2 mt-3" />
                    </div>
                    {/* Section 2 input name product */}
                    <div className="name-product py-3">
                      <div className="col-12 p-0 m-0">
                        <div>
                          <label htmlFor="" className="text-nowrap">
                            Tên sản phẩm:&nbsp;
                          </label>
                        </div>
                        <div className="div-input-name-product position-relative">
                          <input onChange={this.onChangeNameProduct} value={this.state.valueNameProduct} minLength="10" maxLength="120" type="text" placeholder="Nhập vào" className="input-name-product form-control" />
                          <span className="length-character-input-name-product position-absolute">
                            {this.state.lenghtNameProduct}/120
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Section 3 Select category */}
                    <div className="div-select-category py-3">
                      <div className="col-12 p-0 m-0">
                        {/* Search name category */}
                        <div className="search-category">
                          <div className="row p-0 m-0">
                            <div className="col-lg-6 p-0 m-0">
                              <div className="w-100 position-relative">
                                <input onKeyPress={event => {if (event.key === 'Enter') {this.getDataSearch()}}} id="search-category" type="text" placeholder="Nhập tên ngành hàng" className="input-name-category form-control" />
                                <button onClick={this.getDataSearch} className="text-secondary button-search-name-category position-absolute bg-none border-0">
                                  <FontFa.FaSearch />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Select name category */}
                        <div className="div-select-category">
                          <div className="row p-0 m-0">
                            <div className="col-12 p-0 m-0">
                              <div id="div-category-select" className="div-category-select d-flex p-0 m-0 py-4">
                                <div className="col category-parent p-0">
                                  <div className="category w-100">
                                    {(this.state.itemLVO.length === 0)
                                    ? <div className="w-100 text-center">
                                        <Spinner animation="border" variant="dark" size="md" />
                                      </div>
                                    : this.state.itemLVO
                                    }
                                  </div>
                                </div>
                                <div className="col category-child-1 p-0">
                                  <div className="category">
                                    {this.state.itemLVT}
                                  </div>
                                </div>
                                <div className="col category-child-2 p-0">
                                  <div className="category">
                                    {this.state.itemLVTH}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Selected show */}
                    <div className="div-selected-show py-3">
                      <span className="span-selected-show">
                        <span>Đã chọn&nbsp;:&nbsp;</span>&nbsp;<span className="text-danger">{this.state.textCategoryO}&nbsp;{this.state.textCategoryT}&nbsp;{this.state.textCategoryTH}</span>
                      </span>
                    </div>
                    {/* Button continute */}
                    <div className="div-button-continute py-3">
                      {((this.state.itemLVO.length > 0 && this.state.textCategoryO.length === 0) || (this.state.itemLVT.length > 0 && this.state.textCategoryT.length === 0) || (this.state.itemLVTH.length > 0 && this.state.textCategoryTH.length === 0) || this.state.valueNameProduct.length < 10)
                        ? <p disabled className="btn-disabled disabled btn btn-danger">
                          Tiếp theo
                        </p>
                        : 
                        <Link onClick={this.setNameAndCategory} to="/portal/sale/product/add/product-detail" className="btn btn-danger">Tiếp theo</Link>
                        // <Link to={{pathname: "/portal/sale/product/add/product-detail", params: {nameProduct: this.state.valueNameProduct, categoryO: this.state.textCategoryO, categoryT: this.state.textCategoryT, categoryTH: this.state.textCategoryTH}}} className="btn btn-danger">Tiếp theo</Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default category
