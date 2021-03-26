import React from 'react'

class submit extends React.Component {
  render() {
    return (
      <>
        <div className="py-3">
          <div className="  p-2">
            <div className="p-0 py-3 row justify-content-end ">
              <button onClick={this.props.cancelAddProduct} id="cancel-add-product" className="btn btn-light mr-2" style={{"border": '1px solid rgb(225, 225, 225)'}}>Hủy</button>
              <button onClick={this.props.saveAndHideProduct} id="cancel-save-and-hide-product" className="btn btn-light mr-2" style={{"border": '1px solid rgb(225, 225, 225)'}}>Lưu &amp; Ẩn</button>
              <button onClick={this.props.saveAndShowProduct} id="cancel-save-and-show-product" className={((this.props.saveAndShowValid === true) ? '' : 'disabled ') + "btn btn-danger mr-2"} style={{"border": '1px solid rgb(220, 53, 69)'}}>Lưu &amp; Hiển thị</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default submit
