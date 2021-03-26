import React from 'react'
import { Link } from 'react-router-dom'

import productStore from '../../../../../../../../stores/product.store'

class controlProduct extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // 
    }
  }

  changeRegimeProduct = async () => {
    var hideShow = ''
    if (this.props.data.hidden === 1)
      hideShow = 'hiện'
    else hideShow = 'ẩn'
    if (window.confirm('Bạn có chắc chắn muốn ' + hideShow + ' sản phẩm này?')) {
      await productStore.regimeProduct(this.props.data.id).then(async (res) => {
        await this.props.reloadData()
      }).catch(async (e) => {
        console.log(e)
      })
    }
  }

  render() {
    return (
      <>
        <div className="col-12 p-0 m-0">
          <div className="row p-0 m-0">
            <button onClick={this.changeRegimeProduct} className="btn btn-danger ml-0 mr-2 my-2">{(this.props.data.hidden === 1) ? 'Hiện' : 'Ẩn'} sản phẩm</button>
            <Link id={this.props.data.id} className="btn btn-info ml-0 mr-2 my-2" to={'/portal/sale/product/edit/' + this.props.data.id}>Sửa thông tin</Link>
            <button onClick={this.props.deleteProduct} className="btn btn-danger ml-0 mr-2 my-2">Xóa sản phẩm</button>
          </div>
        </div>
      </>
    )
  }
}

export default controlProduct
