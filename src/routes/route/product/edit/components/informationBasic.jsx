import { Component } from 'react'

// Import Component
import NameProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/nameProduct.jsx'
import DescriptionProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/description.jsx'
import CategoryProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/category.jsx'
import BranchProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/branch.jsx'
import MaterialProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/material.jsx'
import OriginProduct from '../../../../../components/Rokida/Seller/Products/edit/infoBasic/origin.jsx'
// import material from '../../../../../components/Rokida/Seller/Products/add/infoBasic/material.jsx'
// import classifyOriginal from '../../../../../components/Rokida/Seller/Products/add/infoSales/classifyGoods/classifyOriginal.jsx'

class informationBasic extends Component {
  render() {
    return (
      <>
        <div id="div-basic-information" className="py-3">
          <div className="bg-white bg-white-box-shadow p-2">
            <div className="p-0 py-3">
              <p className="h5 font-weight-bold">Thông tin cơ bản</p>
            </div>
            <div className="px-4">
              {/* ----------------------- BASIC FASHION BOY ----------------------- */}
              {/* Name product */}
              <NameProduct nameProdBasic={this.props.nameProdBasic} validateProduct={(validate) => {this.props.validateProduct(validate)}} valueProductName={(name) => {this.props.valueProductName(name)}} />
              {/* Description product */}
              <DescriptionProduct descriptionBasic={this.props.descriptionBasic} validateProduct={(validate) => {this.props.validateProduct(validate)}} description={(des) => {this.props.description(des)}}/>
              {/* Category product */}
              <CategoryProduct categoryBasic={this.props.categoryBasic} />
              {/* Branch product */}
              <BranchProduct 
              validBranch={this.props.validBranch} 
              valueSelectBranch={(branch) => {this.props.valueSelectBranch(branch)}}
              branchBasic={this.props.branchBasic}
              />
              {/* Material product */}
              <MaterialProduct 
              validMaterial={this.props.validMaterial} 
              valueMaterial={(material) => {this.props.valueMaterial(material)}}
              materialBasic={this.props.materialBasic}
              />
              {/* Origin product */}
              <OriginProduct 
              validOrigin={this.props.validOrigin} 
              valueOrigin={(origin) => {this.props.valueOrigin(origin)}} 
              originBasic={this.props.originBasic}
              />
              {/* ---------------------- END BASIC FASHION BOY --------------------- */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default informationBasic
