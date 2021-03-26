import React from 'react'

import * as FontFa from 'react-icons/fa'

import { textAddProduct } from '../../../../../../include/language/vi'

class category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: []
    }
  }

  componentDidMount() {
    this.setValueBasic()
  }

  setValueBasic = async () => {
    if (localStorage.getItem('j6VDAJXFnY-name-new-product') === null || localStorage.getItem('j6VDAJXFnY-category-new-product') === null) {
      window.location.href = '/portal/sale/product/add/category'
    } else {
      var dataCategory = JSON.parse(localStorage.getItem('j6VDAJXFnY-category-new-product'))
      var array = []
      if (dataCategory.category1 !== '') {
        array.push(<span key="1">{dataCategory.category1}</span>)
      }
      if (dataCategory.category2 !== '') {
        array.push(<span key="2">&nbsp;<FontFa.FaAngleRight />&nbsp;{dataCategory.category2}</span>)
      }
      if (dataCategory.category3 !== '') {
        array.push(<span key="3">&nbsp;<FontFa.FaAngleRight />&nbsp;{dataCategory.category3}</span>)
      }
      await this.setState({
        category: [ <div key="4"><p>{array}</p></div> ],
      })
    }
  }

  render() {
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            {textAddProduct.category}
                    </div>
          <div className="col-md-9 text-danger">
            {this.state.category}
          </div>
        </div>
      </>
    )
  }
}

export default category
