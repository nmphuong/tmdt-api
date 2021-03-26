import { Component } from 'react'
import '../../../assets/Rokida/css/SellerStyle/style/index.css'
import '../../../assets/Rokida/css/SellerStyle/style/product.css'
import '../../../assets/Rokida/css/SellerStyle/style/shipping.css'
import '../../../assets/Rokida/css/SellerStyle/style/profile.css'
import Bar from './Navbars/index.jsx'
import Content from './Orders/index.jsx'

class Index extends Component {

  componentDidMount() {
    console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;")
    console.log("%cThis is a feature of the developer browser. Please do not paste the code into your browser to avoid losing your account and money.", "color: yellow; font-family: sans-serif; font-size: 1.5em;")
    console.log('%cSee https://rokida.com/info for more details.', "color: yellow; font-family: sans-serif; font-size: 1.5em;")
  }
  
  render() {
    return (
      <>
        <Bar />
        <Content />
      </>
    );
  }
}

export default Index
