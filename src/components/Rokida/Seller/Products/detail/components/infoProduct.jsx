import React from 'react'

import ImageComponent from './components/infoProduct/image.jsx'
import InfoProduct from './components/infoProduct/infoProduct.jsx'

class infoProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: null
    }
  }
  
  componentDidMount() {
    console.log(this.props.data)
  }
  render() {
    return (
      <>
        <div className="row px-0 py-3 mx-0 mt-0 mb-3" style={{ "background": "rgb(244, 244, 244)" }}>
          <ImageComponent srcSetNull={() => {this.setState({src: null})}} src={this.state.src} data={this.props.data} />
          <InfoProduct srcImageClassify={(event) => {this.setState({src: event})}} data={this.props.data} />
        </div>
      </>
    )
  }
}

export default infoProduct
