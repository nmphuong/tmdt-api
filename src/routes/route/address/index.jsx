import React from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

import { dataComponent } from './data'

// import NamePage from '../../../components/Rokida/Seller/AddressSetting/namePage.jsx'
import ContentPage from '../../../components/Rokida/Seller/AddressSetting/content.jsx'

class index extends React.Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_setting_address} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            {/* <NamePage /> */}
            <hr className="mb-2 w-100" />
            <ContentPage />
          </div>
        </div>
      </>
    )
  }
}

export default index
