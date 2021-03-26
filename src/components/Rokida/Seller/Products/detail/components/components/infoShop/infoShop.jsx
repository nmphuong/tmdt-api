import React from 'react'

import * as FontFa from 'react-icons/fa'

class infoShop extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-8">
          <div className="w-100 m-0 p-0">
            <p className="mb-1">{this.props.data.shop.shop_name}</p>
            <p className="mb-1"><FontFa.FaDotCircle style={{'fontSize': '1em', 'color': '#00c560'}} />&nbsp;Online</p>
          </div>
          <div className="w-100 m-0 p-0">
            <button className="btn btn-warning">Chat ngay</button>&nbsp;&nbsp;
                            <button className="btn btn-danger">Xem shop</button>
          </div>
        </div>
      </>
    )
  }
}

export default infoShop
