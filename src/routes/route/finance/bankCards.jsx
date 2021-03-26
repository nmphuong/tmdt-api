import React from 'react'

import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'

import { dataComponent } from './data'

import Bank from '../../../components/Rokida/Seller/Finance/Bank.jsx'

import '../../../assets/Rokida/css/SellerStyle/style/bank.css'

class bankCards extends React.Component {
  render() {
    return (
      <>
        <Links link={dataComponent.link_setting_bank_account} />
        <div className="col-12">
          <div className="row p-0 m-0 table-responsive">
            <hr className="mb-2 w-100" />
          </div>
          <Bank />
        </div>
      </>
    )
  }
}

export default bankCards
