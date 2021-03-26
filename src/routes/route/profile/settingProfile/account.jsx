import React, { Component } from 'react'
// 
import Links from '../../../../components/Rokida/Seller/Orders/Link/Links.jsx'
// 
import { dataComponent } from './data'
// 
import Loader from '../../../../components/Rokida/Seller/Loading/spinner.jsx'

import SettingAccount from '../../../../components/Rokida/Seller/Profile/index.jsx'

class account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: false
    }
  }
  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_setting_account} />
        <div className='row p-0 m-0'>
          <div className='pagination col-12 p-0 m-0'>
            <div className="fillter col-12 p-0 m-0">
              <div className="row p-0 m-0">
                <SettingAccount />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default account
