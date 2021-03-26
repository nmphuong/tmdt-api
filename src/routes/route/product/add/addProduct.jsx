import React from 'react'

import '../../../../assets/Rokida/css/SellerStyle/style/addProduct.css'
// Component
// import MenuFixedNewProduct from './components/menuFixedNewProduct.jsx'
import NamePage from '../../../../components/Rokida/Seller/Products/edit/infoSales/namePage.jsx'
// import { Modal } from 'react-bootstrap'
// import ModalInvalidDataAddProduct from './components/ModalInvalidDataAddProduct.jsx'
import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

import { Link } from 'react-router-dom'
// import ClassifyOriginal from '../../../../components/Rokida/Seller/Products/edit/infoSales/classifyGoods/classifyOriginal.jsx'

// Import API
import productStore from '../../../../stores/product.store'
import shippingStore from '../../../../stores/shipping.store'

import { messageErrorAddProduct, textAddProduct } from '../../../../include/language/vi'

import * as FontFa from 'react-icons/fa'

class addProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categorySelected: [],
      data: null,
      dataShipping: null,
      // 
      showModal: false,
      loader: false,
      // 
      name: localStorage.getItem('j6VDAJXFnY-name-new-product'),
      category: (JSON.parse(localStorage.getItem('j6VDAJXFnY-category-new-product'))).idCategorySelect,
      description: null,
      branch: null,
      material: null,
      origin: null,
      price: null,
      warehouse: null,
      numberClassifyOne: 1,
      numberClassifyTwo: 1,
      keyClassifyOne: [null],
      keyClassifyTwo: [null],
      valueClassifyOne_1: null,
      valueClassifyOne_2: null,
      valueClassifyOne_3: null,
      valueClassifyOne_4: null,
      valueClassifyOne_5: null,
      valueClassifyOne_6: null,
      valueClassifyOne_7: null,
      valueClassifyOne_8: null,
      valueClassifyOne_9: null,
      valueClassifyOne_10: null,
      valueClassifyOne_11: null,
      valueClassifyOne_12: null,
      valueClassifyOne_13: null,
      valueClassifyOne_14: null,
      valueClassifyOne_15: null,
      valueClassifyOne_16: null,
      valueClassifyOne_17: null,
      valueClassifyOne_18: null,
      valueClassifyOne_19: null,
      valueClassifyOne_20: null,
      // 
      valueClassifyTwo_1: null,
      valueClassifyTwo_2: null,
      valueClassifyTwo_3: null,
      valueClassifyTwo_4: null,
      valueClassifyTwo_5: null,
      valueClassifyTwo_6: null,
      valueClassifyTwo_7: null,
      valueClassifyTwo_8: null,
      valueClassifyTwo_9: null,
      valueClassifyTwo_10: null,
      valueClassifyTwo_11: null,
      valueClassifyTwo_12: null,
      valueClassifyTwo_13: null,
      valueClassifyTwo_14: null,
      valueClassifyTwo_15: null,
      valueClassifyTwo_16: null,
      valueClassifyTwo_17: null,
      valueClassifyTwo_18: null,
      valueClassifyTwo_19: null,
      valueClassifyTwo_20: null,
      // 
      priceClassify_1: null,
      priceClassify_2: null,
      priceClassify_3: null,
      priceClassify_4: null,
      priceClassify_5: null,
      priceClassify_6: null,
      priceClassify_7: null,
      priceClassify_8: null,
      priceClassify_9: null,
      priceClassify_10: null,
      priceClassify_11: null,
      priceClassify_12: null,
      priceClassify_13: null,
      priceClassify_14: null,
      priceClassify_15: null,
      priceClassify_16: null,
      priceClassify_17: null,
      priceClassify_18: null,
      priceClassify_19: null,
      priceClassify_20: null,
      // 
      warehouseClassify_1: null,
      warehouseClassify_2: null,
      warehouseClassify_3: null,
      warehouseClassify_4: null,
      warehouseClassify_5: null,
      warehouseClassify_6: null,
      warehouseClassify_7: null,
      warehouseClassify_8: null,
      warehouseClassify_9: null,
      warehouseClassify_10: null,
      warehouseClassify_11: null,
      warehouseClassify_12: null,
      warehouseClassify_13: null,
      warehouseClassify_14: null,
      warehouseClassify_15: null,
      warehouseClassify_16: null,
      warehouseClassify_17: null,
      warehouseClassify_18: null,
      warehouseClassify_19: null,
      warehouseClassify_20: null,
      // 
      skuClassify_1: null,
      skuClassify_2: null,
      skuClassify_3: null,
      skuClassify_4: null,
      skuClassify_5: null,
      skuClassify_6: null,
      skuClassify_7: null,
      skuClassify_8: null,
      skuClassify_9: null,
      skuClassify_10: null,
      skuClassify_11: null,
      skuClassify_12: null,
      skuClassify_13: null,
      skuClassify_14: null,
      skuClassify_15: null,
      skuClassify_16: null,
      skuClassify_17: null,
      skuClassify_18: null,
      skuClassify_19: null,
      skuClassify_20: null,
      // 
      bmdFrom_1: null,
      bmdFrom_2: null,
      bmdFrom_3: null,
      bmdFrom_4: null,
      bmdFrom_5: null,
      // 
      bmdTo_1: null,
      bmdTo_2: null,
      bmdTo_3: null,
      bmdTo_4: null,
      bmdTo_5: null,
      // 
      bmdPrice_1: null,
      bmdPrice_2: null,
      bmdPrice_3: null,
      bmdPrice_4: null,
      bmdPrice_5: null,
      // 
      numberBmd: 1,
      // 
      srcImageAVT: null,
      dataImageAVT: 'no change',
      // 
      srcImage_1: null,
      srcImage_2: null,
      srcImage_3: null,
      srcImage_4: null,
      srcImage_5: null,
      srcImage_6: null,
      srcImage_7: null,
      srcImage_8: null,
      // 
      dataImage_1: 'no change',
      dataImage_2: 'no change',
      dataImage_3: 'no change',
      dataImage_4: 'no change',
      dataImage_5: 'no change',
      dataImage_6: 'no change',
      dataImage_7: 'no change',
      dataImage_8: 'no change',
      // 
      srcImageClassify_1: null,
      srcImageClassify_2: null,
      srcImageClassify_3: null,
      srcImageClassify_4: null,
      srcImageClassify_5: null,
      srcImageClassify_6: null,
      srcImageClassify_7: null,
      srcImageClassify_8: null,
      srcImageClassify_9: null,
      srcImageClassify_10: null,
      srcImageClassify_11: null,
      srcImageClassify_12: null,
      srcImageClassify_13: null,
      srcImageClassify_14: null,
      srcImageClassify_15: null,
      srcImageClassify_16: null,
      srcImageClassify_17: null,
      srcImageClassify_18: null,
      srcImageClassify_19: null,
      srcImageClassify_20: null,
      // 
      dataImageClassify_1: 'no change',
      dataImageClassify_2: 'no change',
      dataImageClassify_3: 'no change',
      dataImageClassify_4: 'no change',
      dataImageClassify_5: 'no change',
      dataImageClassify_6: 'no change',
      dataImageClassify_7: 'no change',
      dataImageClassify_8: 'no change',
      dataImageClassify_9: 'no change',
      dataImageClassify_10: 'no change',
      dataImageClassify_11: 'no change',
      dataImageClassify_12: 'no change',
      dataImageClassify_13: 'no change',
      dataImageClassify_14: 'no change',
      dataImageClassify_15: 'no change',
      dataImageClassify_16: 'no change',
      dataImageClassify_17: 'no change',
      dataImageClassify_18: 'no change',
      dataImageClassify_19: 'no change',
      dataImageClassify_20: 'no change',
      srcVideo: null,
      dataVideo: 'no change',
      weight: null,
      height: null,
      width: null,
      length: null,
      feesShip: [],
      shippingChannels: [],
      hidden: 0,
      book: 0,
      status: null,
      sku: null,
      showClassify: false,
      showClassify_1: true,
      showClassify_2: false,
      dataUpdate: null,
      keyClassifyArrayOne: [],
      keyClassifyArrayTwo: [],
      valueClassifyArrayOne: [],
      imageClassifyArrayOne: [],
      priceClassifyArrayOne: [],
      warehouseClassifyArrayOne: [],
      skuClassifyArrayOne: []
    }
  }

  componentDidMount() {
    this.getShippingChannel()
    this.definedCategory()
  }

  // update 
  addProduct = async () => {
    if (this.state.showClassify === true) {
      await this.setState({
        price: null,
        warehouse: null,
        sku: null
      })
      var arrayKeyOne = [], arrayValueOne = [], arrayImageOne = [], arrayPriceOne = [], arrayWarehouseOne = [], arraySkuOne = []
      if (this.state.valueClassifyOne_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_1)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_1)
        arrayWarehouseOne.push(this.state.warehouseClassify_1)
        arrayPriceOne.push(this.state.priceClassify_1)
        if (this.state.dataImageClassify_1 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_1)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_1)
        }
      }
      if (this.state.valueClassifyOne_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_2)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_2)
        arrayWarehouseOne.push(this.state.warehouseClassify_2)
        arrayPriceOne.push(this.state.priceClassify_2)
        if (this.state.dataImageClassify_2 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_2)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_2)
        }
      }
      if (this.state.valueClassifyOne_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_3)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_3)
        arrayWarehouseOne.push(this.state.warehouseClassify_3)
        arrayPriceOne.push(this.state.priceClassify_3)
        if (this.state.dataImageClassify_3 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_3)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_3)
        }
      }
      if (this.state.valueClassifyOne_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_4)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_4)
        arrayWarehouseOne.push(this.state.warehouseClassify_4)
        arrayPriceOne.push(this.state.priceClassify_4)
        if (this.state.dataImageClassify_4 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_4)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_4)
        }
      }
      if (this.state.valueClassifyOne_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_5)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_5)
        arrayWarehouseOne.push(this.state.warehouseClassify_5)
        arrayPriceOne.push(this.state.priceClassify_5)
        if (this.state.dataImageClassify_5 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_5)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_5)
        }
      }
      if (this.state.valueClassifyOne_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_6)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_6)
        arrayWarehouseOne.push(this.state.warehouseClassify_6)
        arrayPriceOne.push(this.state.priceClassify_6)
        if (this.state.dataImageClassify_6 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_6)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_6)
        }
      }
      if (this.state.valueClassifyOne_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_7)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_7)
        arrayWarehouseOne.push(this.state.warehouseClassify_7)
        arrayPriceOne.push(this.state.priceClassify_7)
        if (this.state.dataImageClassify_7 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_7)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_7)
        }
      }
      if (this.state.valueClassifyOne_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_8)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_8)
        arrayWarehouseOne.push(this.state.warehouseClassify_8)
        arrayPriceOne.push(this.state.priceClassify_8)
        if (this.state.dataImageClassify_8 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_8)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_8)
        }
      }
      if (this.state.valueClassifyOne_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_9)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_9)
        arrayWarehouseOne.push(this.state.warehouseClassify_9)
        arrayPriceOne.push(this.state.priceClassify_9)
        if (this.state.dataImageClassify_9 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_9)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_9)
        }
      }
      if (this.state.valueClassifyOne_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_10)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_10)
        arrayWarehouseOne.push(this.state.warehouseClassify_10)
        arrayPriceOne.push(this.state.priceClassify_10)
        if (this.state.dataImageClassify_10 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_10)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_10)
        }
      }
      if (this.state.valueClassifyOne_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_11)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_11)
        arrayWarehouseOne.push(this.state.warehouseClassify_11)
        arrayPriceOne.push(this.state.priceClassify_11)
        if (this.state.dataImageClassify_11 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_11)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_11)
        }
      }
      if (this.state.valueClassifyOne_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_12)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_12)
        arrayWarehouseOne.push(this.state.warehouseClassify_12)
        arrayPriceOne.push(this.state.priceClassify_12)
        if (this.state.dataImageClassify_12 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_12)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_12)
        }
      }
      if (this.state.valueClassifyOne_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_13)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_13)
        arrayWarehouseOne.push(this.state.warehouseClassify_13)
        arrayPriceOne.push(this.state.priceClassify_13)
        if (this.state.dataImageClassify_13 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_13)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_13)
        }
      }
      if (this.state.valueClassifyOne_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_14)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_14)
        arrayWarehouseOne.push(this.state.warehouseClassify_14)
        arrayPriceOne.push(this.state.priceClassify_14)
        if (this.state.dataImageClassify_14 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_14)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_14)
        }
      }
      if (this.state.valueClassifyOne_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_15)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_15)
        arrayWarehouseOne.push(this.state.warehouseClassify_15)
        arrayPriceOne.push(this.state.priceClassify_15)
        if (this.state.dataImageClassify_15 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_15)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_15)
        }
      }
      if (this.state.valueClassifyOne_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_16)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_16)
        arrayWarehouseOne.push(this.state.warehouseClassify_16)
        arrayPriceOne.push(this.state.priceClassify_16)
        if (this.state.dataImageClassify_16 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_16)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_16)
        }
      }
      if (this.state.valueClassifyOne_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_17)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_17)
        arrayWarehouseOne.push(this.state.warehouseClassify_17)
        arrayPriceOne.push(this.state.priceClassify_17)
        if (this.state.dataImageClassify_17 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_17)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_17)
        }
      }
      if (this.state.valueClassifyOne_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_18)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_18)
        arrayWarehouseOne.push(this.state.warehouseClassify_18)
        arrayPriceOne.push(this.state.priceClassify_18)
        if (this.state.dataImageClassify_18 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_18)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_18)
        }
      }
      if (this.state.valueClassifyOne_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_19)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_19)
        arrayWarehouseOne.push(this.state.warehouseClassify_19)
        arrayPriceOne.push(this.state.priceClassify_19)
        if (this.state.dataImageClassify_19 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_19)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_19)
        }
      }
      if (this.state.valueClassifyOne_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_20)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_20)
        arrayWarehouseOne.push(this.state.warehouseClassify_20)
        arrayPriceOne.push(this.state.priceClassify_20)
        if (this.state.dataImageClassify_20 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_20)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_20)
        }
      }
      // 2222222222222222222222222222222222222222222222222222222222222222
      if (this.state.valueClassifyTwo_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_1)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_2)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_3)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_4)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_5)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_6)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_7)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_8)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_9)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_10)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_11)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_12)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_13)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_14)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_15)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_16)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_17)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_18)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_19)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_20)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      await this.setState({
        keyClassifyArrayOne: arrayKeyOne,
        valueClassifyArrayOne: arrayValueOne,
        imageClassifyArrayOne: arrayImageOne,
        priceClassifyArrayOne: arrayPriceOne,
        warehouseClassifyArrayOne: arrayWarehouseOne,
        skuClassifyArrayOne: arraySkuOne,
      })
    } else {
      await this.setState({
        keyClassifyArrayOne: [],
        valueClassifyArrayOne: [],
        imageClassifyArrayOne: [],
        priceClassifyArrayOne: [],
        warehouseClassifyArrayOne: [],
        skuClassifyArrayOne: [],
      })
    }
    var bmdFrom = [], bmdTo = [], bmdPrice = []
    if (this.state.bmdFrom_1 !== null && this.state.bmdTo_1 !== null && this.state.bmdPrice_1 !== null) {
      bmdFrom.push(this.state.bmdFrom_1)
      bmdTo.push(this.state.bmdTo_1)
      bmdPrice.push(this.state.bmdPrice_1)
    }
    if (this.state.bmdFrom_2 !== null && this.state.bmdTo_2 !== null && this.state.bmdPrice_2 !== null) {
      bmdFrom.push(this.state.bmdFrom_2)
      bmdTo.push(this.state.bmdTo_2)
      bmdPrice.push(this.state.bmdPrice_2)
    }
    if (this.state.bmdFrom_3 !== null && this.state.bmdTo_3 !== null && this.state.bmdPrice_3 !== null) {
      bmdFrom.push(this.state.bmdFrom_3)
      bmdTo.push(this.state.bmdTo_3)
      bmdPrice.push(this.state.bmdPrice_3)
    }
    if (this.state.bmdFrom_4 !== null && this.state.bmdTo_4 !== null && this.state.bmdPrice_4 !== null) {
      bmdFrom.push(this.state.bmdFrom_4)
      bmdTo.push(this.state.bmdTo_4)
      bmdPrice.push(this.state.bmdPrice_4)
    }
    if (this.state.bmdFrom_5 !== null && this.state.bmdTo_5 !== null && this.state.bmdPrice_5 !== null) {
      bmdFrom.push(this.state.bmdFrom_5)
      bmdTo.push(this.state.bmdTo_5)
      bmdPrice.push(this.state.bmdPrice_5)
    }
    var lstImage = []
    if (this.state.srcImage_1 !== null) {
      if (this.state.dataImage_1 === 'no change') {
        lstImage.push(this.state.srcImage_1)
      } else {
        lstImage.push(this.state.dataImage_1)
      }
    }
    if (this.state.srcImage_2 !== null) {
      if (this.state.dataImage_2 === 'no change') {
        lstImage.push(this.state.srcImage_2)
      } else {
        lstImage.push(this.state.dataImage_2)
      }
    }
    if (this.state.srcImage_3 !== null) {
      if (this.state.dataImage_3 === 'no change') {
        lstImage.push(this.state.srcImage_3)
      } else {
        lstImage.push(this.state.dataImage_3)
      }
    }
    if (this.state.srcImage_4 !== null) {
      if (this.state.dataImage_4 === 'no change') {
        lstImage.push(this.state.srcImage_4)
      } else {
        lstImage.push(this.state.dataImage_4)
      }
    }
    if (this.state.srcImage_5 !== null) {
      if (this.state.dataImage_5 === 'no change') {
        lstImage.push(this.state.srcImage_5)
      } else {
        lstImage.push(this.state.dataImage_5)
      }
    }
    if (this.state.srcImage_6 !== null) {
      if (this.state.dataImage_6 === 'no change') {
        lstImage.push(this.state.srcImage_6)
      } else {
        lstImage.push(this.state.dataImage_6)
      }
    }
    if (this.state.srcImage_7 !== null) {
      if (this.state.dataImage_7 === 'no change') {
        lstImage.push(this.state.srcImage_7)
      } else {
        lstImage.push(this.state.dataImage_7)
      }
    }
    if (this.state.srcImage_8 !== null) {
      if (this.state.dataImage_8 === 'no change') {
        lstImage.push(this.state.srcImage_8)
      } else {
        lstImage.push(this.state.dataImage_8)
      }
    }
    const data = {
      name: this.state.name,
      description: this.state.description,
      branch: this.state.branch,
      material: this.state.material,
      origin: this.state.origin,
      price: this.state.price,
      warehouse: this.state.warehouse,
      sku: this.state.sku,
      classify_key: this.state.keyClassifyArrayOne,
      classify_value: this.state.valueClassifyArrayOne,
      classify_image: this.state.imageClassifyArrayOne,
      classify_price: this.state.priceClassifyArrayOne,
      classify_warehouse: this.state.warehouseClassifyArrayOne,
      classify_sku: this.state.skuClassifyArrayOne,
      discount_from: bmdFrom,
      discount_to: bmdTo,
      discount_price: bmdPrice,
      ship_channel_id: this.state.shippingChannels,
      fees: this.state.feesShip,
      weight: this.state.weight,
      height: this.state.height,
      length: this.state.length,
      width: this.state.width,
      book: this.state.book,
      status: this.state.status,
      thumb: (this.state.dataImageAVT === 'no change') ? [this.state.srcImageAVT] : [this.state.dataImageAVT],
      image: lstImage
    }
    await this.setState({
      loader: true
    })
    await productStore.updateProduct(data, window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(async (result) => {
      await this.setState({
        loader: false
      })
      console.log(result)
    }).catch(async (e) => {
      await this.setState({
        loader: false
      })
      console.log(e)
    })
  }

  // saveAndHideProduct
  saveAndHideProduct = async () => {
    if (this.state.showClassify === true) {
      await this.setState({
        price: null,
        warehouse: null,
        sku: null
      })
      var arrayKeyOne = [], arrayValueOne = [], arrayImageOne = [], arrayPriceOne = [], arrayWarehouseOne = [], arraySkuOne = []
      if (this.state.valueClassifyOne_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_1)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_1)
        arrayWarehouseOne.push(this.state.warehouseClassify_1)
        arrayPriceOne.push(this.state.priceClassify_1)
        if (this.state.dataImageClassify_1 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_1)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_1)
        }
      }
      if (this.state.valueClassifyOne_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_2)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_2)
        arrayWarehouseOne.push(this.state.warehouseClassify_2)
        arrayPriceOne.push(this.state.priceClassify_2)
        if (this.state.dataImageClassify_2 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_2)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_2)
        }
      }
      if (this.state.valueClassifyOne_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_3)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_3)
        arrayWarehouseOne.push(this.state.warehouseClassify_3)
        arrayPriceOne.push(this.state.priceClassify_3)
        if (this.state.dataImageClassify_3 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_3)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_3)
        }
      }
      if (this.state.valueClassifyOne_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_4)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_4)
        arrayWarehouseOne.push(this.state.warehouseClassify_4)
        arrayPriceOne.push(this.state.priceClassify_4)
        if (this.state.dataImageClassify_4 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_4)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_4)
        }
      }
      if (this.state.valueClassifyOne_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_5)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_5)
        arrayWarehouseOne.push(this.state.warehouseClassify_5)
        arrayPriceOne.push(this.state.priceClassify_5)
        if (this.state.dataImageClassify_5 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_5)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_5)
        }
      }
      if (this.state.valueClassifyOne_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_6)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_6)
        arrayWarehouseOne.push(this.state.warehouseClassify_6)
        arrayPriceOne.push(this.state.priceClassify_6)
        if (this.state.dataImageClassify_6 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_6)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_6)
        }
      }
      if (this.state.valueClassifyOne_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_7)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_7)
        arrayWarehouseOne.push(this.state.warehouseClassify_7)
        arrayPriceOne.push(this.state.priceClassify_7)
        if (this.state.dataImageClassify_7 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_7)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_7)
        }
      }
      if (this.state.valueClassifyOne_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_8)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_8)
        arrayWarehouseOne.push(this.state.warehouseClassify_8)
        arrayPriceOne.push(this.state.priceClassify_8)
        if (this.state.dataImageClassify_8 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_8)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_8)
        }
      }
      if (this.state.valueClassifyOne_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_9)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_9)
        arrayWarehouseOne.push(this.state.warehouseClassify_9)
        arrayPriceOne.push(this.state.priceClassify_9)
        if (this.state.dataImageClassify_9 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_9)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_9)
        }
      }
      if (this.state.valueClassifyOne_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_10)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_10)
        arrayWarehouseOne.push(this.state.warehouseClassify_10)
        arrayPriceOne.push(this.state.priceClassify_10)
        if (this.state.dataImageClassify_10 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_10)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_10)
        }
      }
      if (this.state.valueClassifyOne_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_11)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_11)
        arrayWarehouseOne.push(this.state.warehouseClassify_11)
        arrayPriceOne.push(this.state.priceClassify_11)
        if (this.state.dataImageClassify_11 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_11)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_11)
        }
      }
      if (this.state.valueClassifyOne_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_12)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_12)
        arrayWarehouseOne.push(this.state.warehouseClassify_12)
        arrayPriceOne.push(this.state.priceClassify_12)
        if (this.state.dataImageClassify_12 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_12)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_12)
        }
      }
      if (this.state.valueClassifyOne_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_13)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_13)
        arrayWarehouseOne.push(this.state.warehouseClassify_13)
        arrayPriceOne.push(this.state.priceClassify_13)
        if (this.state.dataImageClassify_13 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_13)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_13)
        }
      }
      if (this.state.valueClassifyOne_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_14)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_14)
        arrayWarehouseOne.push(this.state.warehouseClassify_14)
        arrayPriceOne.push(this.state.priceClassify_14)
        if (this.state.dataImageClassify_14 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_14)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_14)
        }
      }
      if (this.state.valueClassifyOne_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_15)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_15)
        arrayWarehouseOne.push(this.state.warehouseClassify_15)
        arrayPriceOne.push(this.state.priceClassify_15)
        if (this.state.dataImageClassify_15 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_15)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_15)
        }
      }
      if (this.state.valueClassifyOne_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_16)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_16)
        arrayWarehouseOne.push(this.state.warehouseClassify_16)
        arrayPriceOne.push(this.state.priceClassify_16)
        if (this.state.dataImageClassify_16 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_16)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_16)
        }
      }
      if (this.state.valueClassifyOne_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_17)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_17)
        arrayWarehouseOne.push(this.state.warehouseClassify_17)
        arrayPriceOne.push(this.state.priceClassify_17)
        if (this.state.dataImageClassify_17 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_17)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_17)
        }
      }
      if (this.state.valueClassifyOne_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_18)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_18)
        arrayWarehouseOne.push(this.state.warehouseClassify_18)
        arrayPriceOne.push(this.state.priceClassify_18)
        if (this.state.dataImageClassify_18 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_18)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_18)
        }
      }
      if (this.state.valueClassifyOne_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_19)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_19)
        arrayWarehouseOne.push(this.state.warehouseClassify_19)
        arrayPriceOne.push(this.state.priceClassify_19)
        if (this.state.dataImageClassify_19 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_19)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_19)
        }
      }
      if (this.state.valueClassifyOne_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_20)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_20)
        arrayWarehouseOne.push(this.state.warehouseClassify_20)
        arrayPriceOne.push(this.state.priceClassify_20)
        if (this.state.dataImageClassify_20 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_20)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_20)
        }
      }
      // 2222222222222222222222222222222222222222222222222222222222222222
      if (this.state.valueClassifyTwo_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_1)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_2)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_3)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_4)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_5)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_6)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_7)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_8)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_9)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_10)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_11)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_12)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_13)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_14)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_15)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_16)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_17)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_18)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_19)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_20)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      await this.setState({
        keyClassifyArrayOne: arrayKeyOne,
        valueClassifyArrayOne: arrayValueOne,
        imageClassifyArrayOne: arrayImageOne,
        priceClassifyArrayOne: arrayPriceOne,
        warehouseClassifyArrayOne: arrayWarehouseOne,
        skuClassifyArrayOne: arraySkuOne,
      })
    } else {
      await this.setState({
        keyClassifyArrayOne: [],
        valueClassifyArrayOne: [],
        imageClassifyArrayOne: [],
        priceClassifyArrayOne: [],
        warehouseClassifyArrayOne: [],
        skuClassifyArrayOne: [],
      })
    }
    var bmdFrom = [], bmdTo = [], bmdPrice = []
    if (this.state.bmdFrom_1 !== null && this.state.bmdTo_1 !== null && this.state.bmdPrice_1 !== null) {
      bmdFrom.push(this.state.bmdFrom_1)
      bmdTo.push(this.state.bmdTo_1)
      bmdPrice.push(this.state.bmdPrice_1)
    }
    if (this.state.bmdFrom_2 !== null && this.state.bmdTo_2 !== null && this.state.bmdPrice_2 !== null) {
      bmdFrom.push(this.state.bmdFrom_2)
      bmdTo.push(this.state.bmdTo_2)
      bmdPrice.push(this.state.bmdPrice_2)
    }
    if (this.state.bmdFrom_3 !== null && this.state.bmdTo_3 !== null && this.state.bmdPrice_3 !== null) {
      bmdFrom.push(this.state.bmdFrom_3)
      bmdTo.push(this.state.bmdTo_3)
      bmdPrice.push(this.state.bmdPrice_3)
    }
    if (this.state.bmdFrom_4 !== null && this.state.bmdTo_4 !== null && this.state.bmdPrice_4 !== null) {
      bmdFrom.push(this.state.bmdFrom_4)
      bmdTo.push(this.state.bmdTo_4)
      bmdPrice.push(this.state.bmdPrice_4)
    }
    if (this.state.bmdFrom_5 !== null && this.state.bmdTo_5 !== null && this.state.bmdPrice_5 !== null) {
      bmdFrom.push(this.state.bmdFrom_5)
      bmdTo.push(this.state.bmdTo_5)
      bmdPrice.push(this.state.bmdPrice_5)
    }
    var lstImage = []
    if (this.state.srcImage_1 !== null) {
      if (this.state.dataImage_1 === 'no change') {
        lstImage.push(this.state.srcImage_1)
      } else {
        lstImage.push(this.state.dataImage_1)
      }
    }
    if (this.state.srcImage_2 !== null) {
      if (this.state.dataImage_2 === 'no change') {
        lstImage.push(this.state.srcImage_2)
      } else {
        lstImage.push(this.state.dataImage_2)
      }
    }
    if (this.state.srcImage_3 !== null) {
      if (this.state.dataImage_3 === 'no change') {
        lstImage.push(this.state.srcImage_3)
      } else {
        lstImage.push(this.state.dataImage_3)
      }
    }
    if (this.state.srcImage_4 !== null) {
      if (this.state.dataImage_4 === 'no change') {
        lstImage.push(this.state.srcImage_4)
      } else {
        lstImage.push(this.state.dataImage_4)
      }
    }
    if (this.state.srcImage_5 !== null) {
      if (this.state.dataImage_5 === 'no change') {
        lstImage.push(this.state.srcImage_5)
      } else {
        lstImage.push(this.state.dataImage_5)
      }
    }
    if (this.state.srcImage_6 !== null) {
      if (this.state.dataImage_6 === 'no change') {
        lstImage.push(this.state.srcImage_6)
      } else {
        lstImage.push(this.state.dataImage_6)
      }
    }
    if (this.state.srcImage_7 !== null) {
      if (this.state.dataImage_7 === 'no change') {
        lstImage.push(this.state.srcImage_7)
      } else {
        lstImage.push(this.state.dataImage_7)
      }
    }
    if (this.state.srcImage_8 !== null) {
      if (this.state.dataImage_8 === 'no change') {
        lstImage.push(this.state.srcImage_8)
      } else {
        lstImage.push(this.state.dataImage_8)
      }
    }
    const data = {
      name: this.state.name,
      cate_id: this.state.category,
      description: this.state.description,
      branch: this.state.branch,
      material: this.state.material,
      origin: this.state.origin,
      price: this.state.price,
      warehouse: this.state.warehouse,
      sku: this.state.sku,
      classify_key: this.state.keyClassifyArrayOne,
      classify_value: this.state.valueClassifyArrayOne,
      classify_image: this.state.imageClassifyArrayOne,
      classify_price: this.state.priceClassifyArrayOne,
      classify_warehouse: this.state.warehouseClassifyArrayOne,
      classify_sku: this.state.skuClassifyArrayOne,
      discount_from: bmdFrom,
      discount_to: bmdTo,
      discount_price: bmdPrice,
      ship_channel_id: this.state.shippingChannels,
      fees: this.state.feesShip,
      weight: this.state.weight,
      height: this.state.height,
      length: this.state.length,
      width: this.state.width,
      book: this.state.book,
      status: this.state.status,
      thumb: (this.state.dataImageAVT === 'no change') ? [this.state.srcImageAVT] : [this.state.dataImageAVT],
      image: lstImage,
      hidden: 1
    }
    await this.setState({
      loader: true
    })
    await productStore.addProduct(data).then(async (result) => {
      await this.setState({
        loader: false
      })
      window.location.href = '/portal/sale/product/unlisted'
    }).catch(async (e) => {
      await this.setState({
        loader: false
      })
      console.log(e)
    })
  }
  // saveAndShowProduct
  saveAndShowProduct = async () => {
    if (this.state.showClassify === true) {
      await this.setState({
        price: null,
        warehouse: null,
        sku: null
      })
      var arrayKeyOne = [], arrayValueOne = [], arrayImageOne = [], arrayPriceOne = [], arrayWarehouseOne = [], arraySkuOne = []
      if (this.state.valueClassifyOne_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_1)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_1)
        arrayWarehouseOne.push(this.state.warehouseClassify_1)
        arrayPriceOne.push(this.state.priceClassify_1)
        if (this.state.dataImageClassify_1 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_1)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_1)
        }
      }
      if (this.state.valueClassifyOne_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_2)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_2)
        arrayWarehouseOne.push(this.state.warehouseClassify_2)
        arrayPriceOne.push(this.state.priceClassify_2)
        if (this.state.dataImageClassify_2 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_2)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_2)
        }
      }
      if (this.state.valueClassifyOne_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_3)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_3)
        arrayWarehouseOne.push(this.state.warehouseClassify_3)
        arrayPriceOne.push(this.state.priceClassify_3)
        if (this.state.dataImageClassify_3 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_3)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_3)
        }
      }
      if (this.state.valueClassifyOne_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_4)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_4)
        arrayWarehouseOne.push(this.state.warehouseClassify_4)
        arrayPriceOne.push(this.state.priceClassify_4)
        if (this.state.dataImageClassify_4 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_4)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_4)
        }
      }
      if (this.state.valueClassifyOne_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_5)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_5)
        arrayWarehouseOne.push(this.state.warehouseClassify_5)
        arrayPriceOne.push(this.state.priceClassify_5)
        if (this.state.dataImageClassify_5 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_5)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_5)
        }
      }
      if (this.state.valueClassifyOne_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_6)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_6)
        arrayWarehouseOne.push(this.state.warehouseClassify_6)
        arrayPriceOne.push(this.state.priceClassify_6)
        if (this.state.dataImageClassify_6 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_6)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_6)
        }
      }
      if (this.state.valueClassifyOne_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_7)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_7)
        arrayWarehouseOne.push(this.state.warehouseClassify_7)
        arrayPriceOne.push(this.state.priceClassify_7)
        if (this.state.dataImageClassify_7 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_7)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_7)
        }
      }
      if (this.state.valueClassifyOne_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_8)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_8)
        arrayWarehouseOne.push(this.state.warehouseClassify_8)
        arrayPriceOne.push(this.state.priceClassify_8)
        if (this.state.dataImageClassify_8 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_8)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_8)
        }
      }
      if (this.state.valueClassifyOne_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_9)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_9)
        arrayWarehouseOne.push(this.state.warehouseClassify_9)
        arrayPriceOne.push(this.state.priceClassify_9)
        if (this.state.dataImageClassify_9 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_9)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_9)
        }
      }
      if (this.state.valueClassifyOne_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_10)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_10)
        arrayWarehouseOne.push(this.state.warehouseClassify_10)
        arrayPriceOne.push(this.state.priceClassify_10)
        if (this.state.dataImageClassify_10 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_10)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_10)
        }
      }
      if (this.state.valueClassifyOne_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_11)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_11)
        arrayWarehouseOne.push(this.state.warehouseClassify_11)
        arrayPriceOne.push(this.state.priceClassify_11)
        if (this.state.dataImageClassify_11 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_11)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_11)
        }
      }
      if (this.state.valueClassifyOne_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_12)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_12)
        arrayWarehouseOne.push(this.state.warehouseClassify_12)
        arrayPriceOne.push(this.state.priceClassify_12)
        if (this.state.dataImageClassify_12 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_12)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_12)
        }
      }
      if (this.state.valueClassifyOne_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_13)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_13)
        arrayWarehouseOne.push(this.state.warehouseClassify_13)
        arrayPriceOne.push(this.state.priceClassify_13)
        if (this.state.dataImageClassify_13 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_13)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_13)
        }
      }
      if (this.state.valueClassifyOne_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_14)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_14)
        arrayWarehouseOne.push(this.state.warehouseClassify_14)
        arrayPriceOne.push(this.state.priceClassify_14)
        if (this.state.dataImageClassify_14 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_14)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_14)
        }
      }
      if (this.state.valueClassifyOne_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_15)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_15)
        arrayWarehouseOne.push(this.state.warehouseClassify_15)
        arrayPriceOne.push(this.state.priceClassify_15)
        if (this.state.dataImageClassify_15 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_15)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_15)
        }
      }
      if (this.state.valueClassifyOne_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_16)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_16)
        arrayWarehouseOne.push(this.state.warehouseClassify_16)
        arrayPriceOne.push(this.state.priceClassify_16)
        if (this.state.dataImageClassify_16 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_16)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_16)
        }
      }
      if (this.state.valueClassifyOne_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_17)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_17)
        arrayWarehouseOne.push(this.state.warehouseClassify_17)
        arrayPriceOne.push(this.state.priceClassify_17)
        if (this.state.dataImageClassify_17 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_17)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_17)
        }
      }
      if (this.state.valueClassifyOne_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_18)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_18)
        arrayWarehouseOne.push(this.state.warehouseClassify_18)
        arrayPriceOne.push(this.state.priceClassify_18)
        if (this.state.dataImageClassify_18 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_18)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_18)
        }
      }
      if (this.state.valueClassifyOne_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_19)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_19)
        arrayWarehouseOne.push(this.state.warehouseClassify_19)
        arrayPriceOne.push(this.state.priceClassify_19)
        if (this.state.dataImageClassify_19 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_19)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_19)
        }
      }
      if (this.state.valueClassifyOne_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyOne_20)
        arrayKeyOne.push(this.state.keyClassifyOne[0])
        arraySkuOne.push(this.state.skuClassify_20)
        arrayWarehouseOne.push(this.state.warehouseClassify_20)
        arrayPriceOne.push(this.state.priceClassify_20)
        if (this.state.dataImageClassify_20 === 'no change') {
          arrayImageOne.push(this.state.srcImageClassify_20)
        } else {
          arrayImageOne.push(this.state.dataImageClassify_20)
        }
      }
      // 2222222222222222222222222222222222222222222222222222222222222222
      if (this.state.valueClassifyTwo_1 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_1)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_2 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_2)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_3 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_3)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_4 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_4)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_5 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_5)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_6 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_6)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_7 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_7)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_8 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_8)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_9 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_9)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_10 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_10)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_11 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_11)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_12 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_12)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_13 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_13)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_14 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_14)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_15 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_15)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_16 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_16)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_17 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_17)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_18 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_18)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_19 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_19)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      if (this.state.valueClassifyTwo_20 !== null) {
        arrayValueOne.push(this.state.valueClassifyTwo_20)
        arrayKeyOne.push(this.state.keyClassifyTwo[0])
        arraySkuOne.push(null)
        arrayWarehouseOne.push(0)
        arrayPriceOne.push(0)
        arrayImageOne.push(null)
      }
      await this.setState({
        keyClassifyArrayOne: arrayKeyOne,
        valueClassifyArrayOne: arrayValueOne,
        imageClassifyArrayOne: arrayImageOne,
        priceClassifyArrayOne: arrayPriceOne,
        warehouseClassifyArrayOne: arrayWarehouseOne,
        skuClassifyArrayOne: arraySkuOne,
      })
    } else {
      await this.setState({
        keyClassifyArrayOne: [],
        valueClassifyArrayOne: [],
        imageClassifyArrayOne: [],
        priceClassifyArrayOne: [],
        warehouseClassifyArrayOne: [],
        skuClassifyArrayOne: [],
      })
    }
    var bmdFrom = [], bmdTo = [], bmdPrice = []
    if (this.state.bmdFrom_1 !== null && this.state.bmdTo_1 !== null && this.state.bmdPrice_1 !== null) {
      bmdFrom.push(this.state.bmdFrom_1)
      bmdTo.push(this.state.bmdTo_1)
      bmdPrice.push(this.state.bmdPrice_1)
    }
    if (this.state.bmdFrom_2 !== null && this.state.bmdTo_2 !== null && this.state.bmdPrice_2 !== null) {
      bmdFrom.push(this.state.bmdFrom_2)
      bmdTo.push(this.state.bmdTo_2)
      bmdPrice.push(this.state.bmdPrice_2)
    }
    if (this.state.bmdFrom_3 !== null && this.state.bmdTo_3 !== null && this.state.bmdPrice_3 !== null) {
      bmdFrom.push(this.state.bmdFrom_3)
      bmdTo.push(this.state.bmdTo_3)
      bmdPrice.push(this.state.bmdPrice_3)
    }
    if (this.state.bmdFrom_4 !== null && this.state.bmdTo_4 !== null && this.state.bmdPrice_4 !== null) {
      bmdFrom.push(this.state.bmdFrom_4)
      bmdTo.push(this.state.bmdTo_4)
      bmdPrice.push(this.state.bmdPrice_4)
    }
    if (this.state.bmdFrom_5 !== null && this.state.bmdTo_5 !== null && this.state.bmdPrice_5 !== null) {
      bmdFrom.push(this.state.bmdFrom_5)
      bmdTo.push(this.state.bmdTo_5)
      bmdPrice.push(this.state.bmdPrice_5)
    }
    var lstImage = []
    if (this.state.srcImage_1 !== null) {
      if (this.state.dataImage_1 === 'no change') {
        lstImage.push(this.state.srcImage_1)
      } else {
        lstImage.push(this.state.dataImage_1)
      }
    }
    if (this.state.srcImage_2 !== null) {
      if (this.state.dataImage_2 === 'no change') {
        lstImage.push(this.state.srcImage_2)
      } else {
        lstImage.push(this.state.dataImage_2)
      }
    }
    if (this.state.srcImage_3 !== null) {
      if (this.state.dataImage_3 === 'no change') {
        lstImage.push(this.state.srcImage_3)
      } else {
        lstImage.push(this.state.dataImage_3)
      }
    }
    if (this.state.srcImage_4 !== null) {
      if (this.state.dataImage_4 === 'no change') {
        lstImage.push(this.state.srcImage_4)
      } else {
        lstImage.push(this.state.dataImage_4)
      }
    }
    if (this.state.srcImage_5 !== null) {
      if (this.state.dataImage_5 === 'no change') {
        lstImage.push(this.state.srcImage_5)
      } else {
        lstImage.push(this.state.dataImage_5)
      }
    }
    if (this.state.srcImage_6 !== null) {
      if (this.state.dataImage_6 === 'no change') {
        lstImage.push(this.state.srcImage_6)
      } else {
        lstImage.push(this.state.dataImage_6)
      }
    }
    if (this.state.srcImage_7 !== null) {
      if (this.state.dataImage_7 === 'no change') {
        lstImage.push(this.state.srcImage_7)
      } else {
        lstImage.push(this.state.dataImage_7)
      }
    }
    if (this.state.srcImage_8 !== null) {
      if (this.state.dataImage_8 === 'no change') {
        lstImage.push(this.state.srcImage_8)
      } else {
        lstImage.push(this.state.dataImage_8)
      }
    }
    const data = {
      name: this.state.name,
      cate_id: this.state.category,
      description: this.state.description,
      branch: this.state.branch,
      material: this.state.material,
      origin: this.state.origin,
      price: this.state.price,
      warehouse: this.state.warehouse,
      sku: this.state.sku,
      classify_key: this.state.keyClassifyArrayOne,
      classify_value: this.state.valueClassifyArrayOne,
      classify_image: this.state.imageClassifyArrayOne,
      classify_price: this.state.priceClassifyArrayOne,
      classify_warehouse: this.state.warehouseClassifyArrayOne,
      classify_sku: this.state.skuClassifyArrayOne,
      discount_from: bmdFrom,
      discount_to: bmdTo,
      discount_price: bmdPrice,
      ship_channel_id: this.state.shippingChannels,
      fees: this.state.feesShip,
      weight: this.state.weight,
      height: this.state.height,
      length: this.state.length,
      width: this.state.width,
      book: this.state.book,
      status: this.state.status,
      thumb: (this.state.dataImageAVT === 'no change') ? [this.state.srcImageAVT] : [this.state.dataImageAVT],
      image: lstImage,
      hidden: 0
    }
    await this.setState({
      loader: true
    })
    await productStore.addProduct(data).then(async (result) => {
      await this.setState({
        loader: false
      })
      window.location.href = '/portal/sale/product/active'
    }).catch(async (e) => {
      await this.setState({
        loader: false
      })
      console.log(e)
    })
  }

  onChangeShipping = async (event) => {
    var array = this.state.shippingChannels
    var arrayFees = this.state.feesShip
    await this.setState({
      shippingChannels: [],
      feesShip: []
    })
    if (array.indexOf(event.target.id) !== -1) {
      await array.splice((array.indexOf(event.target.id)), 1)
    } else {
      await array.push(event.target.id)
    }
    if (arrayFees.indexOf(event.target.value) !== -1) {
      await arrayFees.splice((arrayFees.indexOf(event.target.value)), 1)
    } else {
      await arrayFees.push(event.target.value)
    }
    await this.setState({
      shippingChannels: array,
      feesShip: arrayFees
    })
  }

  getShippingChannel = async () => {
    await shippingStore.getShippingShop().then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        array.push({
          id: item.id,
          name: item.name,
          description: item.description,
          slug: item.name.replaceAll(' ', '-').toLowerCase(),
          key: item.name.replaceAll(' ', '_').toLowerCase(),
          cod: item.cod,
          maximumWeight: item.maximum_weight,
          minimumWeight: item.minimum_weight,
          recipe: item.recipe
        })
      })
      await this.setState({
        loader: false,
        dataShipping: array
      })
    }).catch(e => {
      console.log(e)
    })
  }

  definedCategory = async () => {
    if (localStorage.getItem('j6VDAJXFnY-name-new-product') === null || localStorage.getItem('j6VDAJXFnY-category-new-product') === null) {
      window.location.href = '/portal/sale/product/add/category'
    } else {
      var dataCategory = JSON.parse(localStorage.getItem('j6VDAJXFnY-category-new-product'))
      var array = []
      if (dataCategory.category1 !== '') {
        array.push(<span key="1">{dataCategory.category1}</span>)
      }
      if (dataCategory.category2 !== '') {
        array.push(<span key="2">&nbsp;<FontFa.FaAngleRight />&nbsp;{dataCategory.category2}</span>)
      }
      if (dataCategory.category3 !== '') {
        array.push(<span key="3">&nbsp;<FontFa.FaAngleRight />&nbsp;{dataCategory.category3}</span>)
      }
      await this.setState({
        categorySelected: [<div key="4"><p>{array}</p></div>],
      })
    }
  }

  render() {
    var dataElementShipping = []
    if(this.state.dataShipping !== null && this.state.dataShipping.length !== 0) {
      this.state.dataShipping.forEach((element, index) => {
        dataElementShipping.push(
          <div key={index} className={"row p-0 m-0" + ((index % 2 === 0) ? ' event-div-shipping-fees' : ' odd-div-shipping-fees')}>
            <div className="basic-user col-lg-7">
              <p className="">
                {element.name}&nbsp;(Tối đa: {element.maximumWeight}g)
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <p>
                {
                  (this.state.weight === '' || this.state.weight === null)
                    ? ''
                    : ((parseInt(this.state.weight) > parseInt(element.maximumWeight))
                      ? "Quá cân nặng"
                      : ((element.recipe * this.state.weight)).toLocaleString('en-US', {style : 'currency', currency : 'VND'})
                    )
                }
              </p>
            </div>
              {
                (this.state.weight === '' || this.state.weight === null)
                  ? ''
                  : ((parseInt(this.state.weight) > parseInt(element.maximumWeight))
                    ? 
                    <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-lg-1 col-md-6 justify-content-end col-md-2">
                      <input disabled onChange={this.onChangeShipping} type="checkbox" className="custom-control-input" id={element.id} />
                      <label className="disabled custom-control-label" htmlFor={element.id}></label>
                    </div>
                    : 
                    <div className="custom-control d-flex custom-switch custom-switch-lg px-0 col-lg-1 col-md-6 justify-content-end col-md-2">
                      <input value={(element.recipe * this.state.weight).toFixed(0)} onChange={this.onChangeShipping} type="checkbox" className="custom-control-input" id={element.id} />
                      <label className="custom-control-label" htmlFor={element.id}></label>
                    </div>
                  )
              }
          </div>
        )
      })
    }
    return (
      <>
        {
          (this.state.loader === true)
            ?
            <Loader />
            : ''
        }
        <div>
          {this.state.loader === true ? <Loader /> : ''}
          {/* <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal} onHide={this.hideModal}>
            <ModalInvalidDataAddProduct />
          </Modal> */}
          <div className="main mh-100">
            <div className="mh-100">
              <div className="mh-100">
                <div className="row p-0 m-0 position-relative">
                  <div className="contain col-md-12 col-lg-12">
                    {/* InfoBasic */}
                    <div id="div-basic-information" className="py-3">
                      <div className="bg-white bg-white-box-shadow p-2">
                        <div className="p-0 py-3">
                          <p className="h5 font-weight-bold">Thông tin cơ bản</p>
                        </div>
                        <div className="px-4">
                          {/* Name */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>{textAddProduct.nameProduct}</span>
                            </div>
                            <div key="1" className="col-md-9 div-input-name-product position-relative">
                              <input minLength="10" maxLength="120" id="name-product" onChange={
                                (event) => {
                                  this.setState({
                                    name: event.target.value
                                  })
                                }
                              } value={this.state.name} type="text" placeholder="Nhập vào" className="input-name-product form-control" />
                              <span className="length-character-input-name-product-new position-absolute">{this.state.name.length}/120</span>
                              {
                                (this.state.name.length < 10)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.nameClassifyOneInvalid}</p>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* Description */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>{textAddProduct.description}</span>
                            </div>
                            <div className="col-md-9 div-input-name-product position-relative">
                              <textarea maxLength="3000" minLength="1" onChange={
                                (event) => {
                                  this.setState({
                                    description: event.target.value
                                  })
                                }
                              } value={this.state.description} className="w-100 form-control textarea-description" placeholder="Nhập vào" name="" id="textarea-description" rows="5"></textarea>
                              <div className="w-100 text-right">
                                {
                                  (this.state.description === null)
                                    ? <span>0/3000</span>
                                    : <span>{this.state.description.length}/3000</span>
                                }
                              </div>
                              {
                                (this.state.description !== null && this.state.description.length < 10)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.description}</p>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* Category */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              {textAddProduct.category}
                            </div>
                            <div className="col-md-9 text-danger">
                              {this.state.categorySelected}
                            </div>
                          </div>
                          {/* Branch */}
                          <div>
                            <div className="row py-2">
                              <div className="col-md-3 text-align-right">
                                <span>{textAddProduct.branch}</span>
                              </div>
                              <div className="col-md-9">
                                <select name="" id="select-branch" onChange={
                                  (event) => {
                                    this.setState({
                                      branch: event.target.value
                                    })
                                  }
                                } value={this.state.branch} className="form-control">
                                  <option value="null">--Thương hiệu--</option>
                                  <option value="no branch">No Brand</option>
                                  <option value="adidas">Adidas</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          {/* Material */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>{textAddProduct.material}</span>
                            </div>
                            <div className="col-md-9">
                              <select onChange={
                                (event) => {
                                  this.setState({
                                    material: event.target.value
                                  })
                                }
                              } value={this.state.material} name="" id="" className="form-control">
                                <option value="null">--Chất liệu--</option>
                                <option value="day">Dây</option>
                                <option value="vai">Vải</option>
                              </select>
                            </div>
                          </div>
                          {/* Origin */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>{textAddProduct.origin}</span>
                            </div>
                            <div className="col-md-9">
                              <select onChange={
                                (event) => {
                                  this.setState({
                                    origin: event.target.value
                                  })
                                }
                              } value={this.state.origin} name="" id="" className="form-control">
                                <option value="null">--Xuất xứ--</option>
                                <option value="viet nam">Việt Nam</option>
                              </select>
                            </div>
                          </div>
                          {/*  */}
                        </div>
                      </div>
                    </div>
                    {/* InfoSales */}
                    <div id="div-seller-information" className="py-3">
                      <div className="bg-white bg-white-box-shadow p-2">
                        {/* Name Page */}
                        <NamePage />
                        <div className="px-4">
                          {/* Price */}
                          {
                            (this.state.showClassify === false)
                              ?
                              <div className="row py-2">
                                <div className="col-md-3 text-align-right">
                                  <span>{textAddProduct.price}</span>
                                </div>
                                <div className="col-md-9">
                                  <input onChange={
                                    (event) => {
                                      this.setState({
                                        price: event.target.value
                                      })
                                    }
                                  } id='price' value={this.state.price} type="text" placeholder="Nhập vào" className="form-control" />
                                  {
                                    (this.props.validPrice === true)
                                      ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.priceInvalid}</p>
                                      : ''
                                  }
                                </div>
                              </div>
                              : ''
                          }
                          {/* Warehouse */}
                          {
                            (this.state.showClassify === false)
                              ?
                              <div className="row py-2">
                                <div className="col-md-3 text-align-right">
                                  <span>{textAddProduct.warehouse}</span>
                                </div>
                                <div className="col-md-9">
                                  <input id="warehouse" onChange={
                                    (event) => {
                                      this.setState({
                                        warehouse: event.target.value
                                      })
                                    }
                                  } value={this.state.warehouse} type="text" placeholder="Nhập vào" className="form-control" />
                                  {
                                    (this.props.validWarehouse === true)
                                      ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.warehosueInvalid}</p>
                                      : ''
                                  }
                                </div>
                              </div>
                              : ''
                          }
                          {/* Classify */}
                          {
                            (this.state.showClassify === false)
                              ?
                              <div className="row py-2">
                                <div className="col-12 p-0 m-0 py-2">
                                  <div className="row p-0 m-0">
                                    <div className="col-md-3 text-align-right">
                                      <span>Phân loại hàng</span>
                                    </div>
                                    <div onClick={
                                      () => {
                                        this.setState({
                                          showClassify: true,
                                          showClassify_1: true,
                                          price: null,
                                          warehouse: null,
                                          sku: null

                                        })
                                      }
                                    } className="col-md-9">
                                      <div className="div-btn-type-product rounded">
                                        <div className="btn bg-none w-100">
                                          <span>+ Thêm nhóm phân loại</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              : ''
                          }
                          {/* // */}
                          {
                            (this.state.showClassify === true)
                              ?
                              <div className="row py-2">
                                {/* <ClassifyOriginal /> */}
                                {/* Classify one */}
                                {
                                  (this.state.numberClassifyOne !== 0 && this.state.showClassify_1 === true)
                                    ?
                                    <div className="col-12 p-0 m-0 py-2">
                                      <div className="row p-0 m-0 position-relative">
                                        <FontFa.FaTimes onClick={
                                          async () => {
                                            await this.setState({
                                              numberClassifyOne: 1,
                                              numberClassifyTwo: 1,
                                              showClassify: false,
                                              showClassify_1: false,
                                              showClassify_2: false
                                            })
                                            await this.setState({
                                              keyClassifyOne: [null],
                                              valueClassifyOne_1: null,
                                              valueClassifyOne_2: null,
                                              valueClassifyOne_3: null,
                                              valueClassifyOne_4: null,
                                              valueClassifyOne_5: null,
                                              valueClassifyOne_6: null,
                                              valueClassifyOne_7: null,
                                              valueClassifyOne_8: null,
                                              valueClassifyOne_9: null,
                                              valueClassifyOne_10: null,
                                              valueClassifyOne_11: null,
                                              valueClassifyOne_12: null,
                                              valueClassifyOne_13: null,
                                              valueClassifyOne_14: null,
                                              valueClassifyOne_15: null,
                                              valueClassifyOne_16: null,
                                              valueClassifyOne_17: null,
                                              valueClassifyOne_18: null,
                                              valueClassifyOne_19: null,
                                              valueClassifyOne_20: null,
                                              keyClassifyTwo: [null],
                                              valueClassifyTwo_1: null,
                                              valueClassifyTwo_2: null,
                                              valueClassifyTwo_3: null,
                                              valueClassifyTwo_4: null,
                                              valueClassifyTwo_5: null,
                                              valueClassifyTwo_6: null,
                                              valueClassifyTwo_7: null,
                                              valueClassifyTwo_8: null,
                                              valueClassifyTwo_9: null,
                                              valueClassifyTwo_10: null,
                                              valueClassifyTwo_11: null,
                                              valueClassifyTwo_12: null,
                                              valueClassifyTwo_13: null,
                                              valueClassifyTwo_14: null,
                                              valueClassifyTwo_15: null,
                                              valueClassifyTwo_16: null,
                                              valueClassifyTwo_17: null,
                                              valueClassifyTwo_18: null,
                                              valueClassifyTwo_19: null,
                                              valueClassifyTwo_20: null,
                                              // 
                                              priceClassify_1: null,
                                              priceClassify_2: null,
                                              priceClassify_3: null,
                                              priceClassify_4: null,
                                              priceClassify_5: null,
                                              priceClassify_6: null,
                                              priceClassify_7: null,
                                              priceClassify_8: null,
                                              priceClassify_9: null,
                                              priceClassify_10: null,
                                              priceClassify_11: null,
                                              priceClassify_12: null,
                                              priceClassify_13: null,
                                              priceClassify_14: null,
                                              priceClassify_15: null,
                                              priceClassify_16: null,
                                              priceClassify_17: null,
                                              priceClassify_18: null,
                                              priceClassify_19: null,
                                              priceClassify_20: null,
                                              // 
                                              warehouseClassify_1: null,
                                              warehouseClassify_2: null,
                                              warehouseClassify_3: null,
                                              warehouseClassify_4: null,
                                              warehouseClassify_5: null,
                                              warehouseClassify_6: null,
                                              warehouseClassify_7: null,
                                              warehouseClassify_8: null,
                                              warehouseClassify_9: null,
                                              warehouseClassify_10: null,
                                              warehouseClassify_11: null,
                                              warehouseClassify_12: null,
                                              warehouseClassify_13: null,
                                              warehouseClassify_14: null,
                                              warehouseClassify_15: null,
                                              warehouseClassify_16: null,
                                              warehouseClassify_17: null,
                                              warehouseClassify_18: null,
                                              warehouseClassify_19: null,
                                              warehouseClassify_20: null,
                                              // 
                                              skuClassify_1: null,
                                              skuClassify_2: null,
                                              skuClassify_3: null,
                                              skuClassify_4: null,
                                              skuClassify_5: null,
                                              skuClassify_6: null,
                                              skuClassify_7: null,
                                              skuClassify_8: null,
                                              skuClassify_9: null,
                                              skuClassify_10: null,
                                              skuClassify_11: null,
                                              skuClassify_12: null,
                                              skuClassify_13: null,
                                              skuClassify_14: null,
                                              skuClassify_15: null,
                                              skuClassify_16: null,
                                              skuClassify_17: null,
                                              skuClassify_18: null,
                                              skuClassify_19: null,
                                              skuClassify_20: null
                                            })
                                          }} className="position-absolute r-0 t-0" style={{ 'zIndex': '1', 'cursor': 'pointer', 'fontSize': '1em' }} />
                                        <div className="col-md-3 text-align-right">
                                          <span>Nhóm phân loại 1</span>
                                        </div>
                                        <div className="col-md-9 bg-input-show rounded">
                                          <div className="col-12 p-0 m-0 py-2">
                                            <div className="row py-2">
                                              <div className="col-12 d-flex">
                                                <div className="col-lg-3 text-align-right">
                                                  <span className="text-nowrap">Tên nhóm phân loại&nbsp;</span>
                                                </div>
                                                <div className="col-lg-9">
                                                  <input id="key-classify-one" onChange={
                                                    (event) => {
                                                      this.setState({
                                                        keyClassifyOne: [event.target.value]
                                                      })
                                                    }
                                                  } value={this.state.keyClassifyOne[0]} type="text" placeholder="Nhập tên Nhóm phân loại hàng, ví dụ: màu sắc, kích thước v.v" className="form-control" />
                                                  {
                                                    (this.props.validKeyClassify === true)
                                                      ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.nameClassifyOneInvalid}</p>
                                                      : ''
                                                  }
                                                </div>
                                              </div>
                                            </div>
                                            <div id="classify-1" className="row py-2">
                                              {/* classify one */}
                                              {
                                                (this.state.numberClassifyOne >= 1)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">Phân loại hàng&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_1: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_1} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 2)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_2: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_2} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 3)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_3: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_3} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 4)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_4: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_4} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 5)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_5: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_5} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 6)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_6: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_6} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 7)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_7: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_7} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 8)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_8: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_8} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 9)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_9: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_9} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 10)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_10: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_10} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 11)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_11: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_11} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 12)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_12: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_12} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 13)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_13: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_13} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 14)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_14: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_14} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 15)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_15: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_15} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 16)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_16: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_16} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 17)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_17: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_17} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 18)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_18: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_18} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 19)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_19: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_19} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyOne >= 20)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyOne_20: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyOne_20} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                            </div>
                                            {
                                              (this.state.numberClassifyOne > 1)
                                                ?
                                                <div className="row py-2">
                                                  <div onClick={
                                                    async () => {
                                                      await this.setState({
                                                        numberClassifyOne: (this.state.numberClassifyOne - 1)
                                                      })
                                                      await this.setState({
                                                        valueClassifyOne_1: (this.state.numberClassifyOne < 1) ? null : this.state.valueClassifyOne_1,
                                                        valueClassifyOne_2: (this.state.numberClassifyOne < 2) ? null : this.state.valueClassifyOne_2,
                                                        valueClassifyOne_3: (this.state.numberClassifyOne < 3) ? null : this.state.valueClassifyOne_3,
                                                        valueClassifyOne_4: (this.state.numberClassifyOne < 4) ? null : this.state.valueClassifyOne_4,
                                                        valueClassifyOne_5: (this.state.numberClassifyOne < 5) ? null : this.state.valueClassifyOne_5,
                                                        valueClassifyOne_6: (this.state.numberClassifyOne < 6) ? null : this.state.valueClassifyOne_6,
                                                        valueClassifyOne_7: (this.state.numberClassifyOne < 7) ? null : this.state.valueClassifyOne_7,
                                                        valueClassifyOne_8: (this.state.numberClassifyOne < 8) ? null : this.state.valueClassifyOne_8,
                                                        valueClassifyOne_9: (this.state.numberClassifyOne < 9) ? null : this.state.valueClassifyOne_9,
                                                        valueClassifyOne_10: (this.state.numberClassifyOne < 10) ? null : this.state.valueClassifyOne_10,
                                                        valueClassifyOne_11: (this.state.numberClassifyOne < 11) ? null : this.state.valueClassifyOne_11,
                                                        valueClassifyOne_12: (this.state.numberClassifyOne < 12) ? null : this.state.valueClassifyOne_12,
                                                        valueClassifyOne_13: (this.state.numberClassifyOne < 13) ? null : this.state.valueClassifyOne_13,
                                                        valueClassifyOne_14: (this.state.numberClassifyOne < 14) ? null : this.state.valueClassifyOne_14,
                                                        valueClassifyOne_15: (this.state.numberClassifyOne < 15) ? null : this.state.valueClassifyOne_15,
                                                        valueClassifyOne_16: (this.state.numberClassifyOne < 16) ? null : this.state.valueClassifyOne_16,
                                                        valueClassifyOne_17: (this.state.numberClassifyOne < 17) ? null : this.state.valueClassifyOne_17,
                                                        valueClassifyOne_18: (this.state.numberClassifyOne < 18) ? null : this.state.valueClassifyOne_18,
                                                        valueClassifyOne_19: (this.state.numberClassifyOne < 19) ? null : this.state.valueClassifyOne_19,
                                                        valueClassifyOne_20: (this.state.numberClassifyOne < 20) ? null : this.state.valueClassifyOne_20
                                                      })
                                                    }
                                                  } className="col-12 d-flex">
                                                    <div className="col-lg-3 text-align-right"></div>
                                                    <div className="col-lg-9">
                                                      <div className="div-btn-type-product rounded">
                                                        <div className="btn bg-none w-100">
                                                          <span><FontFa.FaRegTrashAlt /> Xóa</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                : ""
                                            }
                                            {
                                              (this.state.numberClassifyOne < 20)
                                                ?
                                                <div className="row py-2">
                                                  <div onClick={
                                                    () => {
                                                      this.setState({
                                                        numberClassifyOne: (this.state.numberClassifyOne + 1)
                                                      })
                                                    }
                                                  } className="col-12 d-flex">
                                                    <div className="col-lg-3 text-align-right"></div>
                                                    <div className="col-lg-9">
                                                      <div className="div-btn-type-product rounded">
                                                        <div className="btn bg-none w-100">
                                                          <span>+ Thêm ({this.state.numberClassifyOne}/20)</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                : ""
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Classify two */}
                                {
                                  (this.state.numberClassifyTwo !== 0 && this.state.showClassify_2 === true)
                                    ?
                                    <div className="col-12 p-0 m-0 py-2">
                                      <div className="row p-0 m-0 position-relative">
                                        <FontFa.FaTimes onClick={
                                          async () => {
                                            await this.setState({
                                              numberClassifyTwo: 1,
                                              showClassify_2: false
                                            })
                                            await this.setState({
                                              keyClassifyTwo: [null],
                                              valueClassifyTwo_1: null,
                                              valueClassifyTwo_2: null,
                                              valueClassifyTwo_3: null,
                                              valueClassifyTwo_4: null,
                                              valueClassifyTwo_5: null,
                                              valueClassifyTwo_6: null,
                                              valueClassifyTwo_7: null,
                                              valueClassifyTwo_8: null,
                                              valueClassifyTwo_9: null,
                                              valueClassifyTwo_10: null,
                                              valueClassifyTwo_11: null,
                                              valueClassifyTwo_12: null,
                                              valueClassifyTwo_13: null,
                                              valueClassifyTwo_14: null,
                                              valueClassifyTwo_15: null,
                                              valueClassifyTwo_16: null,
                                              valueClassifyTwo_17: null,
                                              valueClassifyTwo_18: null,
                                              valueClassifyTwo_19: null,
                                              valueClassifyTwo_20: null,
                                              // 
                                              // priceClassify_1: null,
                                              // priceClassify_2: null,
                                              // priceClassify_3: null,
                                              // priceClassify_4: null,
                                              // priceClassify_5: null,
                                              // priceClassify_6: null,
                                              // priceClassify_7: null,
                                              // priceClassify_8: null,
                                              // priceClassify_9: null,
                                              // priceClassify_10: null,
                                              // priceClassify_11: null,
                                              // priceClassify_12: null,
                                              // priceClassify_13: null,
                                              // priceClassify_14: null,
                                              // priceClassify_15: null,
                                              // priceClassify_16: null,
                                              // priceClassify_17: null,
                                              // priceClassify_18: null,
                                              // priceClassify_19: null,
                                              // priceClassify_20: null,
                                              // // 
                                              // warehouseClassify_1: null,
                                              // warehouseClassify_2: null,
                                              // warehouseClassify_3: null,
                                              // warehouseClassify_4: null,
                                              // warehouseClassify_5: null,
                                              // warehouseClassify_6: null,
                                              // warehouseClassify_7: null,
                                              // warehouseClassify_8: null,
                                              // warehouseClassify_9: null,
                                              // warehouseClassify_10: null,
                                              // warehouseClassify_11: null,
                                              // warehouseClassify_12: null,
                                              // warehouseClassify_13: null,
                                              // warehouseClassify_14: null,
                                              // warehouseClassify_15: null,
                                              // warehouseClassify_16: null,
                                              // warehouseClassify_17: null,
                                              // warehouseClassify_18: null,
                                              // warehouseClassify_19: null,
                                              // warehouseClassify_20: null,
                                              // // 
                                              // skuClassify_1: null,
                                              // skuClassify_2: null,
                                              // skuClassify_3: null,
                                              // skuClassify_4: null,
                                              // skuClassify_5: null,
                                              // skuClassify_6: null,
                                              // skuClassify_7: null,
                                              // skuClassify_8: null,
                                              // skuClassify_9: null,
                                              // skuClassify_10: null,
                                              // skuClassify_11: null,
                                              // skuClassify_12: null,
                                              // skuClassify_13: null,
                                              // skuClassify_14: null,
                                              // skuClassify_15: null,
                                              // skuClassify_16: null,
                                              // skuClassify_17: null,
                                              // skuClassify_18: null,
                                              // skuClassify_19: null,
                                              // skuClassify_20: null
                                            })
                                          }
                                        } className="position-absolute r-0 t-0" style={{ 'zIndex': '1', 'cursor': 'pointer', 'fontSize': '1em' }} />
                                        <div className="col-md-3 text-align-right">
                                          <span>Nhóm phân loại 2</span>
                                        </div>
                                        <div className="col-md-9 bg-input-show rounded">
                                          <div className="col-12 p-0 m-0 py-2">
                                            <div className="row py-2">
                                              <div className="col-12 d-flex">
                                                <div className="col-lg-3 text-align-right">
                                                  <span className="text-nowrap">Tên nhóm phân loại&nbsp;</span>
                                                </div>
                                                <div className="col-lg-9">
                                                  <input id="key-classify-one" onChange={
                                                    (event) => {
                                                      this.setState({
                                                        keyClassifyTwo: [event.target.value]
                                                      })
                                                    }
                                                  } value={this.state.keyClassifyTwo[0]} type="text" placeholder="Nhập tên Nhóm phân loại hàng, ví dụ: màu sắc, kích thước v.v" className="form-control" />
                                                  {
                                                    (this.props.validKeyClassify === true)
                                                      ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.nameClassifyOneInvalid}</p>
                                                      : ''
                                                  }
                                                </div>
                                              </div>
                                            </div>
                                            <div id="classify-1" className="row py-2">
                                              {/* Classify Two */}
                                              {
                                                (this.state.numberClassifyTwo >= 1)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">Phân loại hàng&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_1: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_1} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 2)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_2: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_2} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 3)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_3: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_3} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 4)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_4: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_4} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 5)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_5: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_5} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 6)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_6: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_6} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 7)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_7: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_7} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 8)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_8: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_8} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 9)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_9: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_9} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 10)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_10: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_10} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 11)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_11: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_11} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 12)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_12: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_12} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 13)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_13: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_13} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 14)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_14: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_14} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 15)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_15: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_15} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 16)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_16: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_16} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 17)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_17: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_17} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 18)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_18: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_18} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 19)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_19: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_19} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                              {
                                                (this.state.numberClassifyTwo >= 20)
                                                  ?
                                                  <div className="col-12 d-flex pb-2">
                                                    <div className="col-lg-3 text-align-right">
                                                      <span className="text-nowrap">&nbsp;</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                      <input onChange={
                                                        (event) => {
                                                          this.setState({
                                                            valueClassifyTwo_20: event.target.value
                                                          })
                                                        }
                                                      } value={this.state.valueClassifyTwo_20} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                                                    </div>
                                                  </div>
                                                  : ''
                                              }
                                              {/*  */}
                                            </div>
                                            {
                                              (this.state.numberClassifyTwo > 1)
                                                ?
                                                <div className="row py-2">
                                                  <div onClick={
                                                    async () => {
                                                      await this.setState({
                                                        numberClassifyTwo: (this.state.numberClassifyTwo - 1)
                                                      })
                                                      await this.setState({
                                                        valueClassifyTwo_1: (this.state.numberClassifyTwo < 1) ? null : this.state.valueClassifyTwo_1,
                                                        valueClassifyTwo_2: (this.state.numberClassifyTwo < 2) ? null : this.state.valueClassifyTwo_2,
                                                        valueClassifyTwo_3: (this.state.numberClassifyTwo < 3) ? null : this.state.valueClassifyTwo_3,
                                                        valueClassifyTwo_4: (this.state.numberClassifyTwo < 4) ? null : this.state.valueClassifyTwo_4,
                                                        valueClassifyTwo_5: (this.state.numberClassifyTwo < 5) ? null : this.state.valueClassifyTwo_5,
                                                        valueClassifyTwo_6: (this.state.numberClassifyTwo < 6) ? null : this.state.valueClassifyTwo_6,
                                                        valueClassifyTwo_7: (this.state.numberClassifyTwo < 7) ? null : this.state.valueClassifyTwo_7,
                                                        valueClassifyTwo_8: (this.state.numberClassifyTwo < 8) ? null : this.state.valueClassifyTwo_8,
                                                        valueClassifyTwo_9: (this.state.numberClassifyTwo < 9) ? null : this.state.valueClassifyTwo_9,
                                                        valueClassifyTwo_10: (this.state.numberClassifyTwo < 10) ? null : this.state.valueClassifyTwo_10,
                                                        valueClassifyTwo_11: (this.state.numberClassifyTwo < 11) ? null : this.state.valueClassifyTwo_11,
                                                        valueClassifyTwo_12: (this.state.numberClassifyTwo < 12) ? null : this.state.valueClassifyTwo_12,
                                                        valueClassifyTwo_13: (this.state.numberClassifyTwo < 13) ? null : this.state.valueClassifyTwo_13,
                                                        valueClassifyTwo_14: (this.state.numberClassifyTwo < 14) ? null : this.state.valueClassifyTwo_14,
                                                        valueClassifyTwo_15: (this.state.numberClassifyTwo < 15) ? null : this.state.valueClassifyTwo_15,
                                                        valueClassifyTwo_16: (this.state.numberClassifyTwo < 16) ? null : this.state.valueClassifyTwo_16,
                                                        valueClassifyTwo_17: (this.state.numberClassifyTwo < 17) ? null : this.state.valueClassifyTwo_17,
                                                        valueClassifyTwo_18: (this.state.numberClassifyTwo < 18) ? null : this.state.valueClassifyTwo_18,
                                                        valueClassifyTwo_19: (this.state.numberClassifyTwo < 19) ? null : this.state.valueClassifyTwo_19,
                                                        valueClassifyTwo_20: (this.state.numberClassifyTwo < 20) ? null : this.state.valueClassifyTwo_20,
                                                        // 
                                                        priceClassify_1: (this.state.numberClassifyTwo < 1) ? null : this.state.priceClassify_1,
                                                        priceClassify_2: (this.state.numberClassifyTwo < 2) ? null : this.state.priceClassify_2,
                                                        priceClassify_3: (this.state.numberClassifyTwo < 3) ? null : this.state.priceClassify_3,
                                                        priceClassify_4: (this.state.numberClassifyTwo < 4) ? null : this.state.priceClassify_4,
                                                        priceClassify_5: (this.state.numberClassifyTwo < 5) ? null : this.state.priceClassify_5,
                                                        priceClassify_6: (this.state.numberClassifyTwo < 6) ? null : this.state.priceClassify_6,
                                                        priceClassify_7: (this.state.numberClassifyTwo < 7) ? null : this.state.priceClassify_7,
                                                        priceClassify_8: (this.state.numberClassifyTwo < 8) ? null : this.state.priceClassify_8,
                                                        priceClassify_9: (this.state.numberClassifyTwo < 9) ? null : this.state.priceClassify_9,
                                                        priceClassify_10: (this.state.numberClassifyTwo < 10) ? null : this.state.priceClassify_10,
                                                        priceClassify_11: (this.state.numberClassifyTwo < 11) ? null : this.state.priceClassify_11,
                                                        priceClassify_12: (this.state.numberClassifyTwo < 12) ? null : this.state.priceClassify_12,
                                                        priceClassify_13: (this.state.numberClassifyTwo < 13) ? null : this.state.priceClassify_13,
                                                        priceClassify_14: (this.state.numberClassifyTwo < 14) ? null : this.state.priceClassify_14,
                                                        priceClassify_15: (this.state.numberClassifyTwo < 15) ? null : this.state.priceClassify_15,
                                                        priceClassify_16: (this.state.numberClassifyTwo < 16) ? null : this.state.priceClassify_16,
                                                        priceClassify_17: (this.state.numberClassifyTwo < 17) ? null : this.state.priceClassify_17,
                                                        priceClassify_18: (this.state.numberClassifyTwo < 18) ? null : this.state.priceClassify_18,
                                                        priceClassify_19: (this.state.numberClassifyTwo < 19) ? null : this.state.priceClassify_19,
                                                        priceClassify_20: (this.state.numberClassifyTwo < 20) ? null : this.state.priceClassify_20,
                                                        // 
                                                        warehouseClassify_1: (this.state.numberClassifyTwo < 1) ? null : this.state.warehouseClassify_1,
                                                        warehouseClassify_2: (this.state.numberClassifyTwo < 2) ? null : this.state.warehouseClassify_2,
                                                        warehouseClassify_3: (this.state.numberClassifyTwo < 3) ? null : this.state.warehouseClassify_3,
                                                        warehouseClassify_4: (this.state.numberClassifyTwo < 4) ? null : this.state.warehouseClassify_4,
                                                        warehouseClassify_5: (this.state.numberClassifyTwo < 5) ? null : this.state.warehouseClassify_5,
                                                        warehouseClassify_6: (this.state.numberClassifyTwo < 6) ? null : this.state.warehouseClassify_6,
                                                        warehouseClassify_7: (this.state.numberClassifyTwo < 7) ? null : this.state.warehouseClassify_7,
                                                        warehouseClassify_8: (this.state.numberClassifyTwo < 8) ? null : this.state.warehouseClassify_8,
                                                        warehouseClassify_9: (this.state.numberClassifyTwo < 9) ? null : this.state.warehouseClassify_9,
                                                        warehouseClassify_10: (this.state.numberClassifyTwo < 10) ? null : this.state.warehouseClassify_10,
                                                        warehouseClassify_11: (this.state.numberClassifyTwo < 11) ? null : this.state.warehouseClassify_11,
                                                        warehouseClassify_12: (this.state.numberClassifyTwo < 12) ? null : this.state.warehouseClassify_12,
                                                        warehouseClassify_13: (this.state.numberClassifyTwo < 13) ? null : this.state.warehouseClassify_13,
                                                        warehouseClassify_14: (this.state.numberClassifyTwo < 14) ? null : this.state.warehouseClassify_14,
                                                        warehouseClassify_15: (this.state.numberClassifyTwo < 15) ? null : this.state.warehouseClassify_15,
                                                        warehouseClassify_16: (this.state.numberClassifyTwo < 16) ? null : this.state.warehouseClassify_16,
                                                        warehouseClassify_17: (this.state.numberClassifyTwo < 17) ? null : this.state.warehouseClassify_17,
                                                        warehouseClassify_18: (this.state.numberClassifyTwo < 18) ? null : this.state.warehouseClassify_18,
                                                        warehouseClassify_19: (this.state.numberClassifyTwo < 19) ? null : this.state.warehouseClassify_19,
                                                        warehouseClassify_20: (this.state.numberClassifyTwo < 20) ? null : this.state.warehouseClassify_20,
                                                        // 
                                                        skuClassify_1: (this.state.numberClassifyTwo < 1) ? null : this.state.skuClassify_1,
                                                        skuClassify_2: (this.state.numberClassifyTwo < 2) ? null : this.state.skuClassify_2,
                                                        skuClassify_3: (this.state.numberClassifyTwo < 3) ? null : this.state.skuClassify_3,
                                                        skuClassify_4: (this.state.numberClassifyTwo < 4) ? null : this.state.skuClassify_4,
                                                        skuClassify_5: (this.state.numberClassifyTwo < 5) ? null : this.state.skuClassify_5,
                                                        skuClassify_6: (this.state.numberClassifyTwo < 6) ? null : this.state.skuClassify_6,
                                                        skuClassify_7: (this.state.numberClassifyTwo < 7) ? null : this.state.skuClassify_7,
                                                        skuClassify_8: (this.state.numberClassifyTwo < 8) ? null : this.state.skuClassify_8,
                                                        skuClassify_9: (this.state.numberClassifyTwo < 9) ? null : this.state.skuClassify_9,
                                                        skuClassify_10: (this.state.numberClassifyTwo < 10) ? null : this.state.skuClassify_10,
                                                        skuClassify_11: (this.state.numberClassifyTwo < 11) ? null : this.state.skuClassify_11,
                                                        skuClassify_12: (this.state.numberClassifyTwo < 12) ? null : this.state.skuClassify_12,
                                                        skuClassify_13: (this.state.numberClassifyTwo < 13) ? null : this.state.skuClassify_13,
                                                        skuClassify_14: (this.state.numberClassifyTwo < 14) ? null : this.state.skuClassify_14,
                                                        skuClassify_15: (this.state.numberClassifyTwo < 15) ? null : this.state.skuClassify_15,
                                                        skuClassify_16: (this.state.numberClassifyTwo < 16) ? null : this.state.skuClassify_16,
                                                        skuClassify_17: (this.state.numberClassifyTwo < 17) ? null : this.state.skuClassify_17,
                                                        skuClassify_18: (this.state.numberClassifyTwo < 18) ? null : this.state.skuClassify_18,
                                                        skuClassify_19: (this.state.numberClassifyTwo < 19) ? null : this.state.skuClassify_19,
                                                        skuClassify_20: (this.state.numberClassifyTwo < 20) ? null : this.state.skuClassify_20
                                                      })
                                                    }
                                                  } className="col-12 d-flex">
                                                    <div className="col-lg-3 text-align-right"></div>
                                                    <div className="col-lg-9">
                                                      <div className="div-btn-type-product rounded">
                                                        <div className="btn bg-none w-100">
                                                          <span><FontFa.FaRegTrashAlt /> Xóa</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                : ""
                                            }
                                            {
                                              (this.state.numberClassifyTwo <= 20)
                                                ?
                                                <div className="row py-2">
                                                  <div onClick={
                                                    () => {
                                                      this.setState({
                                                        numberClassifyTwo: (this.state.numberClassifyTwo + 1)
                                                      })
                                                    }
                                                  } className="col-12 d-flex">
                                                    <div className="col-lg-3 text-align-right"></div>
                                                    <div className="col-lg-9">
                                                      <div className="div-btn-type-product rounded">
                                                        <div className="btn bg-none w-100">
                                                          <span>+ Thêm ({this.state.numberClassifyTwo}/20)</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                : ''
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    :
                                    <div className="col-12 p-0 m-0 py-2">
                                      <div className="row py-2">
                                        <div onClick={
                                          () => {
                                            this.setState({
                                              showClassify_2: true
                                            })
                                          }
                                        } className="col-12 d-flex">
                                          <div className="col-lg-3 text-align-right"></div>
                                          <div className="col-lg-9">
                                            <div className="div-btn-type-product rounded">
                                              <div className="btn bg-none w-100">
                                                <span>+ Thêm nhóm phân loại</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                }
                                {/* Table classify */}
                                {
                                  (this.state.showClassify_1 === true)
                                    ?
                                    <div className="col-12 p-0 m-0 py-2">
                                      <div className="row p-0 m-0">
                                        <div className="col-md-3 text-align-right">
                                          <span>Danh sách phân loại hàng </span>
                                        </div>
                                        <div className="col-md-9">
                                          <div className="rounded">
                                            <div className="btn bg-none w-100 p-0 m-0">
                                              <div className="row p-0 m-0">
                                                <div className="col-md-12 p-0 m-0">
                                                  <div className="row p-0 m-0">
                                                    <div className="col-12 p-0 m-0 table-responsive">
                                                      <table className="table-strhiped table-bordered table text-center">
                                                        <thead className="thead-light">
                                                          <tr>
                                                            <th>
                                                              {
                                                                (this.state.keyClassifyOne[0] !== null && this.state.keyClassifyOne[0] !== '') ? this.state.keyClassifyOne[0] : 'Tên'
                                                              }
                                                            </th>
                                                            <th>Giá</th>
                                                            <th>Kho hàng</th>
                                                            <th>SKU phân loại</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          {
                                                            (this.state.numberClassifyOne >= 1)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_1}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_1: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_1} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_1: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_1} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_1: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_1} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 2)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_2}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_2: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_2} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_2: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_2} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_2: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_2} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 3)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_3}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_3: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_3} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_3: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_3} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_3: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_3} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 4)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_4}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_4: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_4} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_4: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_4} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_4: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_4} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {/*  */}
                                                          {
                                                            (this.state.numberClassifyOne >= 5)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_5}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_5: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_5} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_5: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_5} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_5: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_5} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 6)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_6}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_6: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_6} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_6: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_6} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_6: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_6} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 7)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_7}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_7: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_7} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_7: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_7} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_7: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_7} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 8)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_8}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_8: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_8} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_8: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_8} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_8: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_8} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 9)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_9}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_9: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_9} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_9: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_9} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_9: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_9} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 10)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_10}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_10: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_10} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_10: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_10} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_10: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_10} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {/*  */}
                                                          {
                                                            (this.state.numberClassifyOne >= 11)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_11}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_11: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_11} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_11: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_11} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_11: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_11} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 12)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_12}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_12: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_12} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_12: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_12} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_12: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_12} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 13)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_13}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_13: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_13} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_13: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_13} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_13: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_13} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 14)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_14}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_14: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_14} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_14: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_14} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_14: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_14} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 15)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_15}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_15: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_15} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_15: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_15} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_15: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_15} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 16)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_16}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_16: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_16} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_16: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_16} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_16: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_16} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 17)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_17}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_17: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_17} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_17: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_17} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_17: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_17} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 18)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_18}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_18: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_18} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_18: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_18} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_18: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_18} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 19)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_19}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_19: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_19} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_19: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_19} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_19: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_19} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                          {
                                                            (this.state.numberClassifyOne >= 20)
                                                              ?
                                                              <tr>
                                                                <td>
                                                                  {this.state.valueClassifyOne_20}
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        priceClassify_20: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.priceClassify_20} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="number" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        warehouseClassify_20: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.warehouseClassify_20} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                                <td>
                                                                  <input type="text" onChange={
                                                                    (event) => {
                                                                      this.setState({
                                                                        skuClassify_20: event.target.value
                                                                      })
                                                                    }
                                                                  } value={this.state.skuClassify_20} className="h-100 w-100 bg-none border-0" />
                                                                </td>
                                                              </tr>
                                                              : null
                                                          }
                                                        </tbody>
                                                      </table>
                                                      {
                                                        (this.props.validPriceClassify === true || this.props.validWarehouseClassify === true || this.props.validSkuClassify === true)
                                                          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.priceClassifyOneInvalid}</p>
                                                          : ''
                                                      }
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/*  */}
                              </div>
                              : ''
                          }
                          <div className="row py-2">
                            {/* Buy more discount */}
                            <div className="col-12 p-0 m-0 py-2">
                              <div className="row py-2">
                                <div className="col-md-3 text-align-right">
                                  <span>Mua nhiều giảm giá</span>
                                </div>
                                <div className="col-md-9 d-none">
                                  <div className="div-btn-type-product rounded">
                                    <div className="btn bg-none w-100">
                                      <span>+ Thêm khoảng giá</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-9 bg-input-show rounded">
                                  <div className="col-12 p-0 m-0 py-2">
                                    <div className="row">
                                      <div className="col">
                                        <span>Từ (sản phẩm)</span>
                                      </div>
                                      <div className="col">
                                        <span>Đến (sản phẩm)</span>
                                      </div>
                                      <div className="col">
                                        <span>Đơn giá</span>
                                      </div>
                                    </div>
                                    {/*  */}
                                    {
                                      (this.state.numberBmd >= 1)
                                        ?
                                        <div className="row py-2">
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdFrom_1: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdFrom_1} placeholder="Từ (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdTo_1: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdTo_1} placeholder="Đến (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdPrice_1: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdPrice_1} placeholder="Đơn giá" className="form-control" />
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                    {
                                      (this.state.numberBmd >= 2)
                                        ?
                                        <div className="row py-2">
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdFrom_2: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdFrom_2} placeholder="Từ (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdTo_2: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdTo_2} placeholder="Đến (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdPrice_2: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdPrice_2} placeholder="Đơn giá" className="form-control" />
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                    {
                                      (this.state.numberBmd >= 3)
                                        ?
                                        <div className="row py-2">
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdFrom_3: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdFrom_3} placeholder="Từ (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdTo_3: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdTo_3} placeholder="Đến (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdPrice_3: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdPrice_3} placeholder="Đơn giá" className="form-control" />
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                    {
                                      (this.state.numberBmd >= 4)
                                        ?
                                        <div className="row py-2">
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdFrom_4: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdFrom_4} placeholder="Từ (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdTo_4: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdTo_4} placeholder="Đến (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdPrice_4: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdPrice_4} placeholder="Đơn giá" className="form-control" />
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                    {
                                      (this.state.numberBmd >= 5)
                                        ?
                                        <div className="row py-2">
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdFrom_5: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdFrom_5} placeholder="Từ (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdTo_5: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdTo_5} placeholder="Đến (sản phẩm)" className="form-control" />
                                          </div>
                                          <div className="col">
                                            <input type="text" onChange={
                                              (event) => {
                                                this.setState({
                                                  bmdPrice_5: event.target.value
                                                })
                                              }
                                            } value={this.state.bmdPrice_5} placeholder="Đơn giá" className="form-control" />
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                  </div>
                                  {
                                    (this.state.numberBmd > 1)
                                      ?
                                      <div className="col-12 p-0 m-0 py-2">
                                        <div className="div-btn-type-product rounded">
                                          <div onClick={
                                            async () => {
                                              await this.setState({
                                                numberBmd: (this.state.numberBmd - 1)
                                              })
                                              this.setState({
                                                bmdFrom_1: (this.state.numberBmd < 1) ? null : this.state.bmdFrom_1,
                                                bmdFrom_2: (this.state.numberBmd < 2) ? null : this.state.bmdFrom_2,
                                                bmdFrom_3: (this.state.numberBmd < 3) ? null : this.state.bmdFrom_3,
                                                bmdFrom_4: (this.state.numberBmd < 4) ? null : this.state.bmdFrom_4,
                                                bmdFrom_5: (this.state.numberBmd < 5) ? null : this.state.bmdFrom_5,
                                                // 
                                                bmdTo_1: (this.state.numberBmd < 1) ? null : this.state.bmdTo_1,
                                                bmdTo_2: (this.state.numberBmd < 2) ? null : this.state.bmdTo_2,
                                                bmdTo_3: (this.state.numberBmd < 3) ? null : this.state.bmdTo_3,
                                                bmdTo_4: (this.state.numberBmd < 4) ? null : this.state.bmdTo_4,
                                                bmdTo_5: (this.state.numberBmd < 5) ? null : this.state.bmdTo_5,
                                                // 
                                                bmdPrice_1: (this.state.numberBmd < 1) ? null : this.state.bmdPrice_1,
                                                bmdPrice_2: (this.state.numberBmd < 2) ? null : this.state.bmdPrice_2,
                                                bmdPrice_3: (this.state.numberBmd < 3) ? null : this.state.bmdPrice_3,
                                                bmdPrice_4: (this.state.numberBmd < 4) ? null : this.state.bmdPrice_4,
                                                bmdPrice_5: (this.state.numberBmd < 5) ? null : this.state.bmdPrice_5,
                                              })
                                            }
                                          } className="btn bg-none w-100">
                                            <span><FontFa.FaRegTrashAlt /> Xóa</span>
                                          </div>
                                        </div>
                                      </div>
                                      : ""
                                  }
                                  {
                                    (this.state.numberBmd < 5)
                                      ?
                                      <div className="col-12 p-0 m-0 py-2">
                                        <div className="div-btn-type-product rounded">
                                          <div onClick={
                                            () => {
                                              this.setState({
                                                numberBmd: (this.state.numberBmd + 1)
                                              })
                                            }
                                          } className="btn bg-none w-100">
                                            <span>+ Thêm khoảng giá ({this.state.numberBmd}/5)</span>
                                          </div>
                                        </div>
                                      </div>
                                      : ""
                                  }
                                  <p className="fontSize-0-8em"><FontFa.FaInfoCircle />  {textAddProduct.buyMoreDiscount}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Image */}
                    <div id="div-manager-image" className="py-3">
                      <div className="bg-white bg-white-box-shadow p-2">
                        <div className="p-0 py-3">
                          <p className="h5 font-weight-bold">Quản lý hình ảnh</p>
                        </div>
                        <div className="px-4">
                          {/* Image product */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>Hình ảnh sản phẩm</span>
                            </div>
                            <div className="col-md-9 p-0 div-input-name-product position-relative">
                              <div className="row p-0 m-0">
                                {/* Ảnh bìa */}
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                  <label htmlFor="image-avatar">
                                    {(this.state.srcImageAVT === '' || this.state.srcImageAVT === null)
                                      ?
                                      <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                        <span className="d-flex align-items-center">+</span>
                                      </div>
                                      :
                                      <img alt="" className='label-photo-input' src={this.state.srcImageAVT} />
                                    }
                                  </label>
                                  <div>
                                    <input onChange={
                                      async (event) => {
                                        let reader = new FileReader()
                                        let file = event.target.files[0]
                                        await reader.readAsDataURL(file)
                                        reader.onloadend = async () => {
                                          await this.setState({
                                            srcImageAVT: reader.result,
                                            dataImageAVT: file
                                          })
                                        }
                                      }
                                    } accept="image/*" name="file" id="image-avatar" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                  </div>
                                  <div>
                                    <span>* Ảnh bìa</span>
                                  </div>
                                </div>
                                {/* Ảnh 1*/}
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                  <label htmlFor="image-1">
                                    {(this.state.srcImage_1 === '' || this.state.srcImage_1 === null)
                                      ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                        <span className="d-flex align-items-center">+</span>
                                      </div>
                                      : <img alt="" className='label-photo-input' src={this.state.srcImage_1} />
                                    }
                                  </label>
                                  <div>
                                    <input accept="image/*" onChange={
                                      async (event) => {
                                        let reader = new FileReader()
                                        let file = event.target.files[0]
                                        await reader.readAsDataURL(file)
                                        reader.onloadend = async () => {
                                          await this.setState({
                                            srcImage_1: reader.result,
                                            dataImage_1: file
                                          })
                                        }
                                      }
                                    } name="photo" id="image-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                  </div>
                                  <div>
                                    <span>* Ảnh 1</span>
                                  </div>
                                </div>
                                {/* Ảnh 2 */}
                                {
                                  (this.state.srcImage_1 !== null && this.state.srcImage_1 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-2">
                                        {(this.state.srcImage_2 === '' || this.state.srcImage_2 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_2} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_2: reader.result,
                                                dataImage_2: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-2" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 2</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 3 */}
                                {
                                  (this.state.srcImage_2 !== null && this.state.srcImage_2 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-3">
                                        {(this.state.srcImage_3 === '' || this.state.srcImage_3 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_3} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_3: reader.result,
                                                dataImage_3: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-3" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 3</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 4 */}
                                {
                                  (this.state.srcImage_3 !== null && this.state.srcImage_3 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-4">
                                        {(this.state.srcImage_4 === '' || this.state.srcImage_4 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_4} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_4: reader.result,
                                                dataImage_4: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-4" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 4</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 5*/}
                                {
                                  (this.state.srcImage_4 !== null && this.state.srcImage_4 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-5">
                                        {(this.state.srcImage_5 === '' || this.state.srcImage_5 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_5} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_5: reader.result,
                                                dataImage_5: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-5" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 5</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 6 */}
                                {
                                  (this.state.srcImage_5 !== null && this.state.srcImage_5 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-6">
                                        {(this.state.srcImage_6 === '' || this.state.srcImage_6 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_6} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_6: reader.result,
                                                dataImage_6: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-6" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 6</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 7 */}
                                {
                                  (this.state.srcImage_6 !== null && this.state.srcImage_6 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-7">
                                        {(this.state.srcImage_7 === '' || this.state.srcImage_7 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_7} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_7: reader.result,
                                                dataImage_7: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-7" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 7</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/* Ảnh 8 */}
                                {
                                  (this.state.srcImage_7 !== null && this.state.srcImage_7 !== '')
                                    ?
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                      <label htmlFor="image-8">
                                        {(this.state.srcImage_8 === '' || this.state.srcImage_8 === null)
                                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                            <span className="d-flex align-items-center">+</span>
                                          </div>
                                          : <img alt="" className='label-photo-input' src={this.state.srcImage_8} />
                                        }
                                      </label>
                                      <div>
                                        <input accept="image/*" onChange={
                                          async (event) => {
                                            let reader = new FileReader()
                                            let file = event.target.files[0]
                                            await reader.readAsDataURL(file)
                                            reader.onloadend = async () => {
                                              await this.setState({
                                                srcImage_8: reader.result,
                                                dataImage_8: file
                                              })
                                            }
                                          }
                                        } name="photo" id="image-8" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                      </div>
                                      <div>
                                        <span>Ảnh 8</span>
                                      </div>
                                    </div>
                                    : ''
                                }
                                {/*  */}
                              </div>
                            </div>
                          </div>
                          {/* Classify image */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>Hình ảnh phân loại sản phẩm</span>
                            </div>
                            <div className="col-md-9 p-0 div-input-name-product position-relative">
                              {
                                (this.state.showClassify === true)
                                  ?
                                  <div className="row p-0 m-0">
                                    {/* image classify 1 */}
                                    {
                                      (this.state.numberClassifyOne >= 1)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-1">
                                            {(this.state.srcImageClassify_1 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_1} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_1: reader.result,
                                                    dataImageClassify_1: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 1 && this.state.valueClassifyOne_1 !== null) ? this.state.valueClassifyOne_1 : "Ảnh phân loại 1"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 2 */}
                                    {
                                      (this.state.numberClassifyOne >= 2)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-2">
                                            {(this.state.srcImageClassify_2 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_2} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_2: reader.result,
                                                    dataImageClassify_2: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-2" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 2 && this.state.valueClassifyOne_2 !== null) ? this.state.valueClassifyOne_2 : "Ảnh phân loại 2"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 3 */}
                                    {
                                      (this.state.numberClassifyOne >= 3)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-3">
                                            {(this.state.srcImageClassify_3 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_3} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_3: reader.result,
                                                    dataImageClassify_3: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-3" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 3 && this.state.valueClassifyOne_3 !== null) ? this.state.valueClassifyOne_3 : "Ảnh phân loại 3"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 4 */}
                                    {
                                      (this.state.numberClassifyOne >= 4)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-4">
                                            {(this.state.srcImageClassify_4 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_4} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_4: reader.result,
                                                    dataImageClassify_4: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-4" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 4 && this.state.valueClassifyOne_4 !== null) ? this.state.valueClassifyOne_4 : "Ảnh phân loại 4"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 5 */}
                                    {
                                      (this.state.numberClassifyOne >= 5)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-5">
                                            {(this.state.srcImageClassify_5 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_5} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_5: reader.result,
                                                    dataImageClassify_5: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-5" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 5 && this.state.valueClassifyOne_5 !== null) ? this.state.valueClassifyOne_5 : "Ảnh phân loại 5"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 6 */}
                                    {
                                      (this.state.numberClassifyOne >= 6)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-6">
                                            {(this.state.srcImageClassify_6 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_6} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_6: reader.result,
                                                    dataImageClassify_6: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-6" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 6 && this.state.valueClassifyOne_6 !== null) ? this.state.valueClassifyOne_6 : "Ảnh phân loại 6"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 7 */}
                                    {
                                      (this.state.numberClassifyOne >= 7)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-7">
                                            {(this.state.srcImageClassify_7 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_7} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_7: reader.result,
                                                    dataImageClassify_7: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-7" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 7 && this.state.valueClassifyOne_7 !== null) ? this.state.valueClassifyOne_7 : "Ảnh phân loại 7"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 8 */}
                                    {
                                      (this.state.numberClassifyOne >= 8)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-8">
                                            {(this.state.srcImageClassify_8 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_8} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_8: reader.result,
                                                    dataImageClassify_8: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-8" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 8 && this.state.valueClassifyOne_8 !== null) ? this.state.valueClassifyOne_8 : "Ảnh phân loại 8"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 9 */}
                                    {
                                      (this.state.numberClassifyOne >= 9)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-9">
                                            {(this.state.srcImageClassify_9 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_9} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_9: reader.result,
                                                    dataImageClassify_9: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-9" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 9 && this.state.valueClassifyOne_9 !== null) ? this.state.valueClassifyOne_9 : "Ảnh phân loại 9"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 10 */}
                                    {
                                      (this.state.numberClassifyOne >= 10)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-10">
                                            {(this.state.srcImageClassify_10 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_10} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_10: reader.result,
                                                    dataImageClassify_10: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-10" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 10 && this.state.valueClassifyOne_10 !== null) ? this.state.valueClassifyOne_10 : "Ảnh phân loại 10"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 11 */}
                                    {
                                      (this.state.numberClassifyOne >= 11)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-11">
                                            {(this.state.srcImageClassify_11 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_11} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_11: reader.result,
                                                    dataImageClassify_11: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-11" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 11 && this.state.valueClassifyOne_11 !== null) ? this.state.valueClassifyOne_11 : "Ảnh phân loại 11"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 12 */}
                                    {
                                      (this.state.numberClassifyOne >= 12)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-12">
                                            {(this.state.srcImageClassify_12 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_12} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_12: reader.result,
                                                    dataImageClassify_12: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-12" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 12 && this.state.valueClassifyOne_12 !== null) ? this.state.valueClassifyOne_12 : "Ảnh phân loại 12"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 13 */}
                                    {
                                      (this.state.numberClassifyOne >= 13)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-13">
                                            {(this.state.srcImageClassify_13 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_13} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_13: reader.result,
                                                    dataImageClassify_13: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-13" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 13 && this.state.valueClassifyOne_13 !== null) ? this.state.valueClassifyOne_13 : "Ảnh phân loại 13"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 14 */}
                                    {
                                      (this.state.numberClassifyOne >= 14)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-14">
                                            {(this.state.srcImageClassify_14 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_14} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_14: reader.result,
                                                    dataImageClassify_14: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-14" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 14 && this.state.valueClassifyOne_14 !== null) ? this.state.valueClassifyOne_14 : "Ảnh phân loại 14"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 15 */}
                                    {
                                      (this.state.numberClassifyOne >= 15)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-15">
                                            {(this.state.srcImageClassify_15 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_15} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_15: reader.result,
                                                    dataImageClassify_15: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-15" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 15 && this.state.valueClassifyOne_15 !== null) ? this.state.valueClassifyOne_15 : "Ảnh phân loại 15"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 16 */}
                                    {
                                      (this.state.numberClassifyOne >= 16)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-16">
                                            {(this.state.srcImageClassify_16 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_16} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_16: reader.result,
                                                    dataImageClassify_16: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-16" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 16 && this.state.valueClassifyOne_16 !== null) ? this.state.valueClassifyOne_16 : "Ảnh phân loại 16"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 17 */}
                                    {
                                      (this.state.numberClassifyOne >= 17)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-17">
                                            {(this.state.srcImageClassify_17 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_17} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_17: reader.result,
                                                    dataImageClassify_17: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-17" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 17 && this.state.valueClassifyOne_17 !== null) ? this.state.valueClassifyOne_17 : "Ảnh phân loại 17"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 18 */}
                                    {
                                      (this.state.numberClassifyOne >= 18)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-18">
                                            {(this.state.srcImageClassify_18 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_18} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_18: reader.result,
                                                    dataImageClassify_18: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-18" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 18 && this.state.valueClassifyOne_18 !== null) ? this.state.valueClassifyOne_18 : "Ảnh phân loại 18"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 19 */}
                                    {
                                      (this.state.numberClassifyOne >= 19)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-19">
                                            {(this.state.srcImageClassify_19 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_19} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_19: reader.result,
                                                    dataImageClassify_19: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-19" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 19 && this.state.valueClassifyOne_19 !== null) ? this.state.valueClassifyOne_19 : "Ảnh phân loại 19"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/* image classify 20 */}
                                    {
                                      (this.state.numberClassifyOne >= 20)
                                        ?
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                                          <label htmlFor="image-classify-20">
                                            {(this.state.srcImageClassify_20 !== null)
                                              ?
                                              <img alt="" className='label-photo-input' src={this.state.srcImageClassify_20} />
                                              :
                                              <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                                <span className="d-flex align-items-center">+</span>
                                              </div>
                                            }
                                          </label>
                                          <div>
                                            <input accept="image/*" onChange={
                                              async (event) => {
                                                let reader = new FileReader()
                                                let file = event.target.files[0]
                                                await reader.readAsDataURL(file)
                                                reader.onloadend = async () => {
                                                  await this.setState({
                                                    srcImageClassify_20: reader.result,
                                                    dataImageClassify_20: file
                                                  })
                                                }
                                              }
                                            } name="file" id="image-classify-20" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                          </div>
                                          <div>
                                            <span>{(this.state.numberClassifyOne >= 20 && this.state.valueClassifyOne_20 !== null) ? this.state.valueClassifyOne_20 : "Ảnh phân loại 20"}</span>
                                          </div>
                                        </div>
                                        : ''
                                    }
                                    {/*  */}
                                  </div>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* Video */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>Video sản phẩm</span>
                            </div>
                            <div className="col-md-9 p-0 div-input-name-product position-relative">
                              <div className="row p-0 m-0">
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                                  <label htmlFor="video">
                                    {(this.state.srcVideo === '' || this.state.srcVideo === null)
                                      ?
                                      <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                                        <span className="d-flex align-items-center">+</span>
                                      </div>
                                      :
                                      <video width="100" height="100" controls>
                                        <source src={this.state.srcVideo} type="video/mp4" />
                                      </video>
                                    }
                                  </label>
                                  <div>
                                    <input accept="video/*" onChange={
                                      async (event) => {
                                        let reader = new FileReader()
                                        let file = event.target.files[0]
                                        await reader.readAsDataURL(file)
                                        reader.onloadend = async () => {
                                          await this.setState({
                                            srcVideo: reader.result,
                                            dataVideo: file
                                          })
                                        }
                                      }
                                    } name="photo" id="video" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                                  </div>
                                  <div>
                                    <span>Video bìa</span>
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-9 col-md-7">
                                  <ol className="col-12 m-0">
                                    <li>Kích thước: Tối đa 30Mb, độ phân giải không vượt quá 1280x1280px</li>
                                    <li>Độ dài: 10s-60s</li>
                                    <li>Định dạng: MP4 (không hỗ trợ vp9)</li>
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*  */}
                        </div>
                      </div>
                    </div>
                    {/* Shipping */}
                    <div id="div-shipping" className="py-3">
                      <div className="bg-white bg-white-box-shadow p-2">
                        <div className="p-0 py-3">
                          <p className="h5 font-weight-bold">
                            Vận chuyển
                            </p>
                        </div>
                        <div className="px-4">
                          {/* Weight product */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>* Cân nặng (Sau khi đóng gói)</span>
                            </div>
                            <div className="col-md-9 div-input-name-product position-relative">
                              <input id="weight" onChange={
                                (event) => {
                                  this.setState({
                                    weight: event.target.value
                                  })
                                }
                              } value={this.state.weight} type="text" placeholder="Nhập vào" className="input-name-product form-control" />
                              <span className="length-character-input-name-product-new position-absolute">
                                gr
                                </span>
                              {
                                (this.props.validWeight === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.weightInvalid}</p>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* Size product */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>* Kích thước đóng gói (Phí vận chuyển thực tế sẽ thay đổi nếu bạn nhập sai kích thước) </span>
                            </div>
                            <div className="col-md-3 div-input-name-product position-relative pb-2">
                              <input id="width" onChange={
                                (event) => {
                                  this.setState({
                                    width: event.target.value
                                  })
                                }
                              } value={this.state.width} type="text" placeholder="Rộng" className="input-name-product form-control" />
                              <span className="length-character-input-name-product-new position-absolute">
                                cm
                                </span>
                              {
                                (this.props.validWidth === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.widthInvalid}</p>
                                  : ''
                              }
                            </div>
                            <div className="col-md-3 div-input-name-product position-relative pb-2">
                              <input onChange={
                                (event) => {
                                  this.setState({
                                    length: event.target.value
                                  })
                                }
                              } value={this.state.length} id="lenght" type="text" placeholder="Dài" className="input-name-product form-control" />
                              <span className="length-character-input-name-product-new position-absolute">
                                cm
                                </span>
                              {
                                (this.props.validLength === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.lengthInvalid}</p>
                                  : ''
                              }
                            </div>
                            <div className="col-md-3 div-input-name-product position-relative pb-2">
                              <input onChange={
                                (event) => {
                                  this.setState({
                                    height: event.target.value
                                  })
                                }
                              } value={this.state.height} id="height" type="text" placeholder="Cao" className="input-name-product form-control" />
                              <span className="length-character-input-name-product-new position-absolute">
                                cm
                                </span>
                              {
                                (this.props.validHeight === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.heightInvalid}</p>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* Fees shipping */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>Phí vận chuyển</span>
                            </div>
                            <div className="col-md-12 div-input-name-product position-relative">
                              <div className="col-lg-12 user align-items-center p-0 m-0" style={{ 'background': '#f0f0f0' }}>
                              {
                                (this.state.dataShipping !== null && this.state.dataShipping.length !== 0)
                                ?
                                dataElementShipping
                                : ''
                              }
                              </div>
                              {
                                (this.props.validShippingChannel === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.shippingInvalid}</p>
                                  : ''
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Other */}
                    <div id="div-other-information" className="py-3">
                      <div className="bg-white bg-white-box-shadow p-2">
                        <div className="p-0 py-3">
                          <p className="h5 font-weight-bold">Thông tin khác</p>
                        </div>
                        <div className="px-4">
                          {/* Hàng đặt trước */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>Hàng đặt trước</span>
                            </div>
                            <div className="d-flex col-md-9 div-input-name-product position-relative">
                              <div className="pr-3 custom-control custom-radio">
                                <input onChange={
                                        async() => {
                                          await this.setState({
                                            book: 0
                                          })
                                        }
                                      } type="radio" id="acept-book-product-no" name="acept-book-product" className="custom-control-input" defaultChecked  />
                                <label className="custom-control-label" htmlFor="acept-book-product-no">Không</label>
                              </div>
                              <div className="pr-3 custom-control custom-radio">
                                <input onChange={
                                        async() => {
                                          await this.setState({
                                            book: 1
                                          })
                                        }
                                      } type="radio" id="acept-book-product-yes" name="acept-book-product" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="acept-book-product-yes">Đồng ý</label>
                              </div>
                            </div>
                          </div>
                          {/* Name product */}
                          <div className="row py-2">
                            <div className="col-md-3 text-align-right">
                              <span>* Tình trạng</span>
                            </div>
                            <div className="col-md-9 div-input-name-product position-relative">
                              <select onChange={
                                async (event) => {
                                  await this.setState({
                                    status: event.target.value
                                  })
                                }
                              } value={this.state.status} name="" className="form-control" id="">
                                <option vlaue="null">--Tình trạng--</option>
                                <option value="new">Mới</option>
                                <option value="used">Đã sử dụng</option>
                              </select>
                              {
                                (this.props.validStatusProduct === true)
                                  ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.statusInvalid}</p>
                                  : ''
                              }
                            </div>
                          </div>
                          {/* SKU product */}
                          {
                            (this.state.showClassify === false)
                              ?
                              <div className="row py-2">
                                <div className="col-md-3 text-align-right">
                                  <span>* SKU sản phẩm</span>
                                </div>
                                <div className="col-md-9 div-input-name-product position-relative">
                                  <input onChange={
                                    (event) => {
                                      this.setState({
                                        sku: event.target.value
                                      })
                                    }
                                  } value={this.state.sku} type="text" placeholder="-" className="form-control" />
                                </div>
                              </div>
                              : ''
                          }
                        </div>
                      </div>
                    </div>
                    {/* Submit */}
                    <div className="py-3">
                      <div className="  p-2">
                        <div className="p-0 py-3 row justify-content-end ">
                          <Link className="btn btn-info ml-0 mr-2" to='/portal/sale/product/all'>Hủy</Link>
                          <button onClick={this.saveAndHideProduct} id="cancel-save-and-hide-product" className="btn btn-light mr-2" style={{"border": '1px solid rgb(225, 225, 225)'}}>Lưu &amp; Ẩn</button>
                          <button onClick={this.saveAndShowProduct} id="cancel-save-and-show-product" className="btn btn-danger mr-2" style={{"border": '1px solid rgb(220, 53, 69)'}}>Lưu &amp; Hiển thị</button>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  {/* <MenuFixedNewProduct /> */}
                  {/* <MenuFixedNewProduct /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default addProduct
