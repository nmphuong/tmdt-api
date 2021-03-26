import { Component } from 'react'

class classifyOriginal extends Component {
  render() {
    return (
      <>
        <div className="col-12 p-0 m-0 py-2">
          <div className="row p-0 m-0">
            <div className="col-md-3 text-align-right">
              <span>Phân loại hàng</span>
            </div>
            <div className="col-md-9">
              <div className="div-btn-type-product rounded">
                <div className="btn bg-none w-100">
                  <span>+ Thêm nhóm phân loại</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default classifyOriginal
