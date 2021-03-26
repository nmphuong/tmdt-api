import { Component } from 'react'

import ProductInfo from './components/infoProduct.jsx'
import ShopInfo from './components/infoShop.jsx'
import DescriptionProduct from './components/descriptionProduct.jsx'
import ControButtonProduct from './components/components/controlAction/controlProduct.jsx'

import productStore from '../../../../../stores/product.store'

import Loader from '../../Loading/spinner.jsx'

import { FaList } from 'react-icons/fa'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loader: true
    }
  }

  componentDidMount() {
    this.getData()
  }


  // Get api
  getData = async () => {
    await this.setState({
      loader: true
    })
    await productStore.getDetailProduct(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)).then(async (res) => {
      await this.setState({
        data: res.data,
        loader: false
      })
    }).catch(async (e) => {
      await this.setState({
        loader: false
      })
      window.location.href = '/portal/sale/product/all'
    })
    await this.setState({
      loader: false
    })
  }

  deleteProduct = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      await this.setState({
        loader: true
      })
      await productStore.deletedProduct(this.state.data.id).then(async (res) => {
        window.location.href = '/portal/sale/product/all'
        await this.setState({
          loader: false
        })
      }).catch(async (e) => {
        console.log(e)
        await this.setState({
          loader: false
        })
      })
      await this.setState({
        loader: false
      })
    }
  }

  render() {
    return (
      <>
        {this.state.loader === true ? <Loader /> : ''}
        {
          (this.state.data !== null)
            ? <ControButtonProduct deleteProduct={this.deleteProduct} reloadData={this.getData} data={this.state.data} />
            : ''
        }
        {
          (this.state.data !== null)
            ? <ProductInfo data={this.state.data} />
            : <div className="w-100 h-100 text-center">
              <FaList style={{'fontSize': '15em', 'color': '#dadada', 'transform': 'rotateX(45deg)'}} />
            </div>
        }
        {
          (this.state.data !== null)
            ? <ShopInfo data={this.state.data} />
            : ''
        }
        {
          (this.state.data !== null)
            ? <DescriptionProduct data={this.state.data} />
            : ''
        }
      </>
    )
  }
}

export default index
