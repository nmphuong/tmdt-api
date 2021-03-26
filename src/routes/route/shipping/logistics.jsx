import { Component } from 'react'
// 
import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'
// 
import { dataComponent } from './data'
// 
// Import component other
import Loader from '../../../components/Rokida/Seller/Loading/spinner.jsx'
// 
import SettingShipping from '../../../components/Rokida/Seller/Shipping/shippingSetting.jsx'

// Import API
import shippingStore from '../../../stores/shipping.store'

class logistics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true,
      data: []
    }
  }
  componentDidMount() {
    this.getData()
  }

  // Get api
  getData = async() => {
    await this.setState({ 
      loader: true
    })
    await shippingStore.getAllShipping().then(async (res) => {
      var array = []
      this.setState({ pageNumberCount: res.pageCount })
      await res.data.forEach(item => {
        array.push({
          id: item.id,
          name: item.name,
          description: item.description,
          slug: item.name.replaceAll(' ', '-').toLowerCase(),
          key: item.name.replaceAll(' ', '_').toLowerCase(),
          cod: item.cod,
          maximumWeight: item.maximum_weight,
          minimumWeight: item.minimum_weight,
          shopActiveShipping: item.ShopActiveShipping,
          shopCodShipping: item.ShopCodShipping,
          shopPrioritizeShipping: item.ShopPrioritizeShipping
        })
      })
      await this.setState({ 
        data: array,
        loader: false
      })
    }).catch(e => {
      console.log(e)
    })
  }
  
  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_product_all} />
        <div className='row p-0 m-0'>
          <div className='pagination col-12 p-0 m-0'>
            <div className="fillter col-12 p-0 m-0">
              <div className="row p-0 m-0">
                <SettingShipping getData={this.getData} data={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default logistics
