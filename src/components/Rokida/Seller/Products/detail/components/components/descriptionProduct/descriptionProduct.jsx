import React from 'react'

class descriptionProduct extends React.Component {
  render() {
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0">
            <div className="col-12 px-2">
              <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="col-12 p-2 m-0 bg-white">
                    <span className="title-detail-product text-uppercase">
                      mô tả sản phẩm
                  </span>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 pb-2">
                  <div className="row p-0 m-0">
                    <div className="col-lg-12 p-0 m-0" style={{'overflow': 'hidden'}}>
                      <span>
                        {this.props.data.description}
                    </span>
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

export default descriptionProduct
