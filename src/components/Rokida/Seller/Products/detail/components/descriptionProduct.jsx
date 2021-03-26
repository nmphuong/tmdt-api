import React from 'react'

import DetailProduct from './components/descriptionProduct/detailProduct.jsx'
import DescriptionProduct from './components/descriptionProduct/descriptionProduct.jsx'

class descriptionProduct extends React.Component {
  render() {
    return (
      <>
        <div className="row px-0 py-3 mx-0 mt-0 mb-3" style={{ "background": "rgb(244, 244, 244)" }}>
          <DetailProduct data={this.props.data} />
          <DescriptionProduct data={this.props.data} />
        </div>
      </>
    )
  }
}

export default descriptionProduct
