// Import Component React
import { Component } from 'react'
// Import font boostrap
// Import Component
import Loader from '../../../components/Rokida/Seller/Loading/spinner.jsx'
import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'
import Footer from '../../../components/Rokida/Seller/Orders/components/footer.jsx'
import StepOrder from '../../../components/Rokida/Seller/Orders/components/stepOrder.jsx'
import { dataComponent } from './data.js'

class all extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: false,
      dataOrder: []
    }
  }
  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        <Links link={dataComponent.link_order_refund} />
        <StepOrder button={false} columnAction={true} dataTable={this.state.dataOrder} active='refund' submenu={false} data={dataComponent.data} />
        <div className="col-12">
          <div className="row p-0 m-0 bg-dark text-white py-2">
            <p className="h4 text-center col-12 p-0 mx-0">Comming Soon</p>
            <p className="text-center col-12 p-0 mx-0">Features in development please wait...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default all
