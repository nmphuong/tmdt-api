import { Component } from 'react'

import '../../../../assets/Rokida/css/SellerStyle/style/addProduct.css'

// Import component
import BasicInformation from './components/informationBasic.jsx'
import SalesInformation from './components/informationSales.jsx'
import ManagerImage from './components/managerImage.jsx'
import Shipping from './components/shipping.jsx'
import OtherInformation from './components/informationOther.jsx'
// import MenuFixedNewProduct from './components/menuFixedNewProduct.jsx'
import Submit from './components/submit.jsx'
import { Modal } from 'react-bootstrap'

import ModalInvalidDataAddProduct from './components/ModalInvalidDataAddProduct.jsx'

import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

// Import Model
// import { Product } from '../../../../model/product'

// import * as FontFa from 'react-icons/fa'

// Import API
import productStore from '../../../../stores/product.store'

class productDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: (JSON.parse(localStorage.getItem('j6VDAJXFnY-category-new-product'))).idCategorySelect,
      nameProd: localStorage.getItem('j6VDAJXFnY-name-new-product'),
      showImgClassify: false,
      coverAvatar: [],
      lstImage: [],
      videoProduct: null,
      description: 'Viết mô tả vào đây',
      price: null,
      warehouse: null,
      sku: null,
      // Meta
      hidden: 0,
      branch: null,
      material: null,
      origin: null,
      book: null,
      status: null,
      user_manual: null,
      img_user_manual: [],
      imgSize: [],
      // Classify
      keyClassify: [],
      valueClassify: [],
      priceClassify: [],
      warehouseClassify: [],
      skuClassify: [],
      imgClassify: [],
      // Shipping
      weight: null,
      width: null,
      height: null,
      length: null,
      // Fees Ship
      feesShip: [],
      shippingChannel: [],
      // BuyMoreDiscount
      from: [],
      to: [],
      priceBMD: [],
      // Validate
      validProduct: true,
      validBranch: false,
      validMaterial: false,
      validOrigin: false,
      validPrice: false,
      validWarehouse: false,
      validKeyClassify: false,
      validValueClassify: false,
      validPriceClassify: false,
      validWarehouseClassify: false,
      validSkuClassify: false,
      validImgClassify: false,
      validCoverAvatar: false,
      validImage: false,
      validWeight: false,
      validWidth: false,
      validHeight: false,
      validLength: false,
      validShippingChannel: false,
      validStatusProduct: false,
      validSKUProduct: false,
      // 
      showModal: false,
      loader: false
    }
  }

  componentDidMount() {
    this.checkDataCategory()
  }
  checkDataCategory = async () => {
    if (localStorage.getItem('j6VDAJXFnY-name-new-product') === null || localStorage.getItem('j6VDAJXFnY-category-new-product') === null) {
      window.location.href = '/portal/sale/product/add/category'
    }
  }

  cancelAddProduct = async () => {
    window.location.href = '/portal/sale/product/add/category'
  }

  saveAndHideProduct = async () => {
    await this.setState({
      hidden: 1
    })
    this.saveAndShowProduct()
  }

  saveAndShowProduct = async () => {
    await this.setState({
      loader: true
    })
    const product = {
      cate_id: this.state.category,
      description: this.state.description,
      name: this.state.nameProd,
      price: this.state.price,
      sku: this.state.sku,
      warehouse: this.state.warehouse,
      thumb: this.state.coverAvatar,
      image: this.state.lstImage,
      video: this.state.videoProduct,
      // 
      branch: this.state.branch,
      material: this.state.material,
      origin: this.state.origin,
      book: this.state.book,
      status: this.state.status,
      user_manual: this.state.user_manual,
      img_user_manual: this.state.img_user_manual,
      imgSize: this.state.imgSize,
      // 
      classify_key: this.state.keyClassify,
      classify_value: this.state.valueClassify,
      classify_warehouse: this.state.priceClassify,
      classify_price: this.state.warehouseClassify,
      classify_sku: this.state.skuClassify,
      classify_image: this.state.imgClassify,
      // 
      discount_from: this.state.from,
      discount_to: this.state.to,
      discount_price: this.state.priceBMD,
      // 
      weight: this.state.weight,
      width: this.state.width,
      length: this.state.height,
      height: this.state.length,
      fees: this.state.feesShip,
      ship_channel_id: this.state.shippingChannel,
      hidden: this.state.hidden
    }
    if (this.state.branch === null) {
      await this.setState({
        validBranch: true
      })
    } else {
      await this.setState({
        validBranch: false
      })
    }
    if (this.state.material === null) {
      await this.setState({
        validMaterial: true
      })
    } else {
      await this.setState({
        validMaterial: false
      })
    }
    if (this.state.origin === null) {
      await this.setState({
        validOrigin: true
      })
    } else {
      await this.setState({
        validOrigin: false
      })
    }
    if (this.state.showImgClassify === false && (this.state.price === null || this.state.price === '')) {
      await this.setState({
        validPrice: true
      })
    } else {
      await this.setState({
        validPrice: false
      })
    }
    if (this.state.showImgClassify === false && (this.state.warehouse === null || this.state.warehouse === '')) {
      await this.setState({
        validWarehouse: true
      })
    } else {
      await this.setState({
        validWarehouse: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.keyClassify.length === 0)) {
      await this.setState({
        validKeyClassify: true
      })
    } else {
      await this.setState({
        validKeyClassify: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.valueClassify.length === 0)) {
      await this.setState({
        validValueClassify: true
      })
    } else {
      await this.setState({
        validValueClassify: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.priceClassify.length === 0)) {
      await this.setState({
        validPriceClassify: true
      })
    } else {
      await this.setState({
        validPriceClassify: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.warehouseClassify.length === 0)) {
      await this.setState({
        validWarehouseClassify: true
      })
    } else {
      await this.setState({
        validWarehouseClassify: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.skuClassify.length === 0)) {
      await this.setState({
        validSkuClassify: true
      })
    } else {
      await this.setState({
        validSkuClassify: false
      })
    }
    if (this.state.showImgClassify === true && (this.state.imgClassify.length === 0)) {
      await this.setState({
        validImgClassify: true
      })
    } else {
      await this.setState({
        validImgClassify: false
      })
    }
    if (this.state.coverAvatar.length === 0) {
      await this.setState({
        validCoverAvatar: true
      })
    } else {
      await this.setState({
        validCoverAvatar: false
      })
    }
    if (this.state.lstImage.length === 0) {
      await this.setState({
        validImage: true
      })
    } else {
      await this.setState({
        validImage: false
      })
    }
    if (this.state.weight === null || this.state.weight === '') {
      await this.setState({
        validWeight: true
      })
    } else {
      await this.setState({
        validWeight: false
      })
    }
    if (this.state.width === null || this.state.width === '') {
      await this.setState({
        validWidth: true
      })
    } else {
      await this.setState({
        validWidth: false
      })
    }
    if (this.state.height === null || this.state.height === '') {
      await this.setState({
        validHeight: true
      })
    } else {
      await this.setState({
        validHeight: false
      })
    }
    if (this.state.length === null || this.state.length === '') {
      await this.setState({
        validLength: true
      })
    } else {
      await this.setState({
        validLength: false
      })
    }
    if (this.state.shippingChannel.length === 0) {
      await this.setState({
        validShippingChannel: true
      })
    } else {
      await this.setState({
        validShippingChannel: false
      })
    }
    if (this.state.status === null || this.state.status === '') {
      await this.setState({
        validStatusProduct: true
      })
    } else {
      await this.setState({
        validStatusProduct: false
      })
    }
    if (this.state.showImgClassify === false && (this.state.sku === null || this.state.sku === '')) {
      await this.setState({
        validSKUProduct: true
      })
    } else {
      await this.setState({
        validSKUProduct: false
      })
    }
    if (this.state.validProduct === true && this.state.validBranch === false && this.state.validMaterial === false && this.state.validOrigin === false && this.state.validPrice === false && this.state.validWarehouse === false && this.state.validKeyClassify === false && this.state.validValueClassify === false && this.state.validPriceClassify === false && this.state.validWarehouseClassify === false && this.state.validSkuClassify === false && this.state.validImgClassify === false && this.state.validCoverAvatar === false && this.state.validImage === false && this.state.validWeight === false && this.state.validWidth === false && this.state.validHeight === false && this.state.validLength === false && this.state.validShippingChannel === false && this.state.validStatusProduct === false && this.state.validSKUProduct === false) {
      await productStore.addProduct(product)
      .then(async (res) => {
        console.log('success')
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      await this.setState({
        showModal: true,
        hidden: 0,
        loader: false
      })
      document.getElementById('cancel-modal-invalid-data').addEventListener('click', this.hideModal)
    }
    if(this.state.hidden === 0) {
      window.location.href = "/portal/sale/product/active"
    } else {
      window.location.href = "/portal/sale/product/unlisted"
    }
  }

  hideModal = async () => {
    await this.setState({
      showModal: false
    })
  }

  dataImage = async (lstImage) => {
    this.setState({
      coverAvatar: [],
      lstImage: [],
      imgClassify: []
    })
    var lstAvt = []
    var lstImg = []
    var img = []
    if (lstImage.dataImageAvatar !== '' && lstImage.dataImageAvatar !== undefined)
      lstAvt.push(lstImage.dataImageAvatar)
    if (lstImage.dataImage1 !== '' && lstImage.dataImage1 !== undefined)
      lstImg.push(lstImage.dataImage1)
    if (lstImage.dataImage2 !== '' && lstImage.dataImage2 !== undefined)
      lstImg.push(lstImage.dataImage2)
    if (lstImage.dataImage3 !== '' && lstImage.dataImage3 !== undefined)
      lstImg.push(lstImage.dataImage3)
    if (lstImage.dataImage4 !== '' && lstImage.dataImage4 !== undefined)
      lstImg.push(lstImage.dataImage4)
    if (lstImage.dataImage5 !== '' && lstImage.dataImage5 !== undefined)
      lstImg.push(lstImage.dataImage5)
    if (lstImage.dataImage6 !== '' && lstImage.dataImage6 !== undefined)
      lstImg.push(lstImage.dataImage6)
    if (lstImage.dataImage7 !== '' && lstImage.dataImage7 !== undefined)
      lstImg.push(lstImage.dataImage7)
    if (lstImage.dataImage8 !== '' && lstImage.dataImage8 !== undefined)
      lstImg.push(lstImage.dataImage8)
    if (lstImage.dataClassify1 !== '' && lstImage.dataClassify1 !== undefined)
      img.push(lstImage.dataClassify1)
    if (lstImage.dataClassify2 !== '' && lstImage.dataClassify2 !== undefined)
      img.push(lstImage.dataClassify2)

    if (lstImage.dataVideo !== '')
      await this.setState({videoProduct: lstImage.dataVideo})
      this.setState({
        coverAvatar: lstAvt,
        lstImage: lstImg,
        imgClassify: img
      })
  }

  dataClassify = async(lstClassify) => {
    await this.setState({
      keyClassify: null,
      valueClassify: null,
      priceClassify: null,
      warehouseClassify: null,
      skuClassify: null
    })
    var key = []
    var value = []
    var price = []
    var warehouse = []
    var sku = []
    if (lstClassify.keyClassify1 !== '')
      key.push(lstClassify.keyClassify1)
    if (lstClassify.keyClassify2 !== '')
      key.push(lstClassify.keyClassify2)
      // 
    if (lstClassify.valueClassify1 !== '')
      value.push(lstClassify.valueClassify1)
    if (lstClassify.valueClassify2 !== '')
      value.push(lstClassify.valueClassify2)
      // 
    if (lstClassify.priceClassify1 !== '')
      price.push(lstClassify.priceClassify1)
    if (lstClassify.priceClassify2 !== '')
      price.push(lstClassify.priceClassify2)
      // 
    if (lstClassify.warehouseClassify1 !== '')
      warehouse.push(lstClassify.warehouseClassify1)
    if (lstClassify.warehouseClassify2 !== '')
      warehouse.push(lstClassify.warehouseClassify2)
      // 
    if (lstClassify.skuClassify1 !== '')
      sku.push(lstClassify.skuClassify1)
    if (lstClassify.skuClassify2 !== '')
      sku.push(lstClassify.skuClassify2)
      // 
    await this.setState({
      keyClassify: key,
      valueClassify: value,
      priceClassify: price,
      warehouseClassify: warehouse,
      skuClassify: sku
    })
  }

  dataBuyMoreDiscount = async(dataMoreDiscount) => {
    await this.setState({
      from: null,
      to: null,
      priceBMD: null
    })

    var fromData = []
    var toData = []
    var priceData = []

    if (dataMoreDiscount.from1 !== '' && dataMoreDiscount.from1 !== undefined) {
      fromData.push(dataMoreDiscount.from1)
    }
    if (dataMoreDiscount.from2 !== '' && dataMoreDiscount.from2 !== undefined) {
      fromData.push(dataMoreDiscount.from2)
    }
    if (dataMoreDiscount.to1 !== '' && dataMoreDiscount.to1 !== undefined) {
      toData.push(dataMoreDiscount.to1)
    }
    if (dataMoreDiscount.to2 !== '' && dataMoreDiscount.to2 !== undefined) {
      toData.push(dataMoreDiscount.to2)
    }
    if (dataMoreDiscount.price1 !== '' && dataMoreDiscount.price1 !== undefined) {
      priceData.push(dataMoreDiscount.price1)
    }
    if (dataMoreDiscount.price2 !== '' && dataMoreDiscount.price2 !== undefined) {
      priceData.push(dataMoreDiscount.price2)
    }

    await this.setState({
      from: fromData,
      to: toData,
      priceBMD: priceData
    })
  }

  dataShipping = async (data) => {
    if (data.weight !== null && data.weight !== undefined) {
      await this.setState({
        weight: data.weight
      })
    }
    if (data.length !== null && data.length !== undefined) {
      await this.setState({
        length: data.length
      })
    }
    if (data.height !== null && data.height !== undefined) {
      await this.setState({
        height: data.height
      })
    }
    if (data.width !== null && data.width !== undefined) {
      await this.setState({
        width: data.width
      })
    }
  }

  setInputFilterNumber = async(textbox, inputFilter) => {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      if (textbox !== null) {
        textbox.addEventListener(event, function() {
          if (inputFilter(this.value)) {
            this.oldValue = this.value
            this.oldSelectionStart = this.selectionStart
            this.oldSelectionEnd = this.selectionEnd
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
          } else {
            this.value = ""
          }
        })
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.loader === true ? <Loader /> : ''}
        <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal} onHide={this.hideModal}>
          <ModalInvalidDataAddProduct />
        </Modal>
        <div className="main mh-100">
          <div className="mh-100">
            <div className="mh-100">
              <div className="row p-0 m-0 position-relative">
                <div className="contain col-md-9 col-lg-10">
                  {/* Basic infomation */}
                  <BasicInformation
                    valueProductName={(name) => {this.setState({nameProd: name})}}
                    valueMaterial={(material) => {this.setState({material: material})}}
                    valueSelectBranch={(branch) => {this.setState({branch: branch})}}
                    valueOrigin={(origin) => {this.setState({origin: origin})}}
                    description={(des) => {this.setState({description: des})}}
                    validateProduct={(validate) => {this.setState({validateProduct: validate})}}
                    validBranch={this.state.validBranch}
                    validMaterial={this.state.validMaterial}
                    validOrigin={this.state.validOrigin}
                  />
                  {/* Seller infomation */}
                  <SalesInformation
                    setInputFilterNumber={this.setInputFilterNumber}
                    validKeyClassify={this.state.validKeyClassify}
                    validValueClassify={this.state.validValueClassify}
                    validPriceClassify={this.state.validPriceClassify}
                    validWarehouseClassify={this.state.validWarehouseClassify}
                    validSkuClassify={this.state.validSkuClassify}
                    validPrice={this.state.validPrice}
                    validWarehouse={this.state.validWarehouse}
                    warehouse={(warehouse) => {this.setState({warehouse: warehouse})}}
                    price={(price) => {this.setState({price: price})}}
                    showImgClassify={(show) => {this.setState({showImgClassify: show})}}
                    classifyData={this.dataClassify}
                    dataByMoreDiscount={this.dataBuyMoreDiscount}
                  />
                  {/* Manager image */}
                  <ManagerImage
                    validCoverAvatar={this.state.validCoverAvatar}
                    validImage={this.state.validImage}
                    validImgClassify={this.state.validImgClassify}
                    showClassify={this.state.showImgClassify}
                    imageSelected={this.dataImage}
                  />
                  {/* Shippping */}
                  <Shipping 
                    setInputFilterNumber={this.setInputFilterNumber}
                    dataShipping={(channel, fees) => {this.setState({
                      shippingChannel: channel,
                      feesShip: fees
                    })}}
                    dataDetailShipping={this.dataShipping}
                    validWeight={this.state.validWeight}
                    validWidth={this.state.validWidth}
                    validHeight={this.state.validHeight}
                    validLength={this.state.validLength}
                    validShippingChannel={this.state.validShippingChannel}
                  />
                  {/* Other information */}
                  <OtherInformation 
                    handleChangeProductBook={(book) => {this.setState({book: book})}}
                    statusProduct={(status) => {this.setState({status: status})}}
                    sku={(sku) => {this.setState({sku: sku})}}
                    showImgClassify={this.state.showImgClassify}
                    validStatusProduct={this.state.validStatusProduct}
                    validSKUProduct={this.state.validSKUProduct}
                  />
                  {/* Submit save product */}
                  <Submit 
                    saveAndShowValid={this.state.validateProduct} 
                    saveAndHideProduct={this.saveAndHideProduct} 
                    saveAndShowProduct={this.saveAndShowProduct} 
                    cancelAddProduct={this.cancelAddProduct}
                  />
                </div>
                {/* <MenuFixedNewProduct /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default productDetail
