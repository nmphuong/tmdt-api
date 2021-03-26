import { Component } from 'react'

import NamePage from '../../../../../components/Rokida/Seller/Products/edit/infoSales/namePage.jsx'
import Price from '../../../../../components/Rokida/Seller/Products/edit/infoSales/price.jsx'
import Warehouse from '../../../../../components/Rokida/Seller/Products/edit/infoSales/warehouse.jsx'
import ClassificationGoods from '../../../../../components/Rokida/Seller/Products/edit/infoSales/classificationGoods.jsx'
import BuyMoreDiscounts from '../../../../../components/Rokida/Seller/Products/edit/infoSales/buyMoreDiscounts.jsx'

class informationSales extends Component {
  constructor(props){
    super(props)
    this.state = {
      showClassify: false,
      keyClassify1: '',
      keyClassify2: '',
      valueClassify1: '',
      valueClassify2: '',
      priceClassify1: '',
      priceClassify2: '',
      warehouseClassify1: '',
      warehouseClassify2: '',
      skuClassify1: '',
      skuClassify2: '',
      imgClassify1: '',
      imgClassify2: '',
      data: {}
    }
  }

  componentDidMount() {
    this.props.setInputFilterNumber(document.getElementById("priceClassify"), function(value) { return /^\d*$/.test(value) })
    this.props.setInputFilterNumber(document.getElementById("warehouseClassify"), function(value) { return /^\d*$/.test(value) })
  }

  classifyData = async () => {
    var data = {
      keyClassify1: this.state.keyClassify1,
      keyClassify2: this.state.keyClassify2,
      valueClassify1: this.state.valueClassify1,
      valueClassify2: this.state.valueClassify2,
      priceClassify1: this.state.priceClassify1,
      priceClassify2: this.state.priceClassify2,
      warehouseClassify1: this.state.warehouseClassify1,
      warehouseClassify2: this.state.warehouseClassify2,
      skuClassify1: this.state.skuClassify1,
      skuClassify2: this.state.skuClassify2,
      imgClassify1: this.state.imgClassify1,
      imgClassify2: this.state.imgClassify2
    }
    await this.setState({
      data: data
    })
    this.props.classifyData(this.state.data)
  }

  render() {
    return (
      <>
        <div id="div-seller-information" className="py-3">
          <div className="bg-white bg-white-box-shadow p-2">
            {/* Name Page */}
            <NamePage />
            <div className="px-4">
              {/* Price product */}
              {
              (this.props.showClassifyBasic === false) 
                ? <Price setInputFilterNumber={this.props.setInputFilterNumber} validPrice={this.props.validPrice} price={(price) => {this.props.price(price)}} /> 
                : '' 
              }
              {/* Warehouse product  */}
              {
                (this.props.showClassifyBasic === false) 
                ? <Warehouse setInputFilterNumber={this.props.setInputFilterNumber} validWarehouse={this.props.validWarehouse} warehouse={(warehouse) => {this.props.warehouse(warehouse)}} /> 
                : '' 
              }
              {/* Type product */}
              <ClassificationGoods
                showClassifyBasic={this.props.showClassifyBasic}
                validKeyClassify={this.props.validKeyClassify}
                validValueClassify={this.props.validValueClassify}
                validPriceClassify={this.props.validPriceClassify}
                validWarehouseClassify={this.props.validWarehouseClassify}
                validSkuClassify={this.props.validSkuClassify}
                classify1Value={this.props.classify1Value}
                classify2Value={this.props.classify2Value}
                classify1Key={this.props.classify1Key}
                classify2Key={this.props.classify2Key}
                classify1Price={this.props.classify1Price}
                classify2Price={this.props.classify2Price}
                classify1Warehouse={this.props.classify1Warehouse}
                classify2Warehouse={this.props.classify2Warehouse}
                classify1Sku={this.props.classify1Sku}
                classify2Sku={this.props.classify2Sku}
                showClassification={
                  async (show) => { 
                    await this.setState({showClassify: show})
                    this.props.showImgClassify(show) 
                  }
                }
                valueClassify1={async (valueClassify1) => {
                  await this.setState({
                    valueClassify1: valueClassify1
                  })
                  this.classifyData()
                }}
                keyClassify1={async(keyClassify1) => {
                  await this.setState({
                    keyClassify1: keyClassify1
                  })
                  this.classifyData()
                }}
                valueClassify2={async(valueClassify2) => {
                  await this.setState({
                    valueClassify2: valueClassify2
                  })
                  this.classifyData()
                }}
                keyClassify2={async(keyClassify2) => {
                  await this.setState({
                    keyClassify2: keyClassify2
                  })
                  this.classifyData()
                }}
                priceChangeClassify1={async(priceChangeClassify1) => {
                  await this.setState({
                    priceClassify1: priceChangeClassify1
                  })
                  this.classifyData()
                }}
                warehouseClassify1={async(warehouseClassify1) => {
                  await this.setState({
                    warehouseClassify1: warehouseClassify1
                  })
                  this.classifyData()
                }}
                skuClassify1={async(skuClassify1) => {
                  await this.setState({
                    skuClassify1: skuClassify1
                  })
                  this.classifyData()
                }}
              />
              {/* Buy multiple promotion :)) */}
              <BuyMoreDiscounts 
                setInputFilterNumber={this.props.setInputFilterNumber}
                dataByMoreDiscount={(data) => {this.props.dataByMoreDiscount(data)}}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default informationSales
