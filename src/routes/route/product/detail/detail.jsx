import React from 'react'

import '../../../../assets/Rokida/css/SellerStyle/style/product-detail.css'

import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

import DetailProduct from '../../../../components/Rokida/Seller/Products/detail/index.jsx'

// Import data

class detail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loader: false
    }
  }

  componentDidMount() {
    // dataComponent.link_detail_product[0].href = dataComponent.link_detail_product[0].href + this.props.params.redirectParam
  }

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <div className='row p-0 m-0'>
          <div className='pagination col-12 p-0 m-0'>
            <div className="fillter col-12 p-0 m-0">
              <div className="row p-0 m-0">
                {/*  */}
                <div className="container-fluid">
                  <DetailProduct />
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default detail
