import React from 'react'

import AvatarShop from './components/infoShop/avatarShop.jsx'
import InfoShop from './components/infoShop/infoShop.jsx'
import PreviewShop from './components/infoShop/previewShop.jsx'

class infoShop extends React.Component {
  render() {
    return (
      <>
        <div className="row px-0 py-3 mx-0 mt-0 mb-3" style={{ "background": "rgb(244, 244, 244)" }}>
          <div className="col-lg-4">
            <div className="row p-0 m-0">
              <AvatarShop data={this.props.data} />
              <InfoShop data={this.props.data} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row p-0 m-0">
              <PreviewShop data={this.props.data} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default infoShop
