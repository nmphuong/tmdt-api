import { Component } from 'react'

// Import component
import StepProduct from './components/stepProduct.jsx'
import { dataComponent } from '../../../../routes/route/product/data'

class index extends Component {
  
  render() {
    return (
      <>
        <StepProduct totalProduct={this.props.totalProduct} thead={this.props.thead} button={false} columnAction={this.props.columnAction} dataTable={this.props.data} active={this.props.active} submenu={false} data={dataComponent.data} />
      </>
    )
  }
}

export default index
