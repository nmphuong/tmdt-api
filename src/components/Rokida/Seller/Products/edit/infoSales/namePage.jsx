import { Component } from 'react'

import { textAddProduct } from '../../../../../../include/language/vi'

class namePage extends Component {
  render() {
    return (
      <>
        <div className="p-0 py-3">
          <p className="h5 font-weight-bold">{textAddProduct.nameProductSeller}</p>
        </div>
      </>
    );
  }
}

export default namePage
