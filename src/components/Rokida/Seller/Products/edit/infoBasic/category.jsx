import React from 'react'

import * as FontFa from 'react-icons/fa'

import { textAddProduct } from '../../../../../../include/language/vi'

class category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    var array = []
    if (this.props.categoryBasic !== null) {
      if (this.props.categoryBasic.category1 !== '') {
        array.push(<span key="1">{this.props.categoryBasic.category1}</span>)
      }
      if (this.props.categoryBasic.category2 !== '') {
        array.push(<span key="2">&nbsp;<FontFa.FaAngleRight />&nbsp;{this.props.categoryBasic.category2}</span>)
      }
      if (this.props.categoryBasic.category3 !== '') {
        array.push(<span key="3">&nbsp;<FontFa.FaAngleRight />&nbsp;{this.props.categoryBasic.category3}</span>)
      }
    }
    var category = [ <div key="4"><p>{array}</p></div> ]
    return (
      <>
        <div className="row py-2">
          <div className="col-md-3 text-align-right">
            {textAddProduct.category}
                    </div>
          <div className="col-md-9 text-danger">
            {category}
          </div>
        </div>
      </>
    )
  }
}

export default category
