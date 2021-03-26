import { Component } from 'react'

class classifyTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueKeys: '',
      valueValues: ''
    }
  }

  handleChangeValuekeyClassify = async(event) => {
    await this.setState({
      valueKeys: event.target.value
    })
    this.props.valueKeysClassifyTwo(this.state.valueKeys)
  }

  handleChangeValueClassify = async(event) => {
    await this.setState({
      valueValues: event.target.value
    })
    this.props.valueValuesClassifyTwo(this.state.valueValues)
  }

  render() {
    return (
      <>
        <div className="col-12 p-0 m-0 py-2">
          <div className="row p-0 m-0">
            <div className="col-md-3 text-align-right">
              <span>Nhóm phân loại 2</span>
            </div>
            <div className="col-md-9 bg-input-show rounded">
              <div className="col-12 p-0 m-0 py-2">
                <div className="row py-2">
                  <div className="col-12 d-flex">
                    <div className="col-lg-3 text-align-right">
                      <span className="text-nowrap">Tên nhóm phân loại&nbsp;</span>
                    </div>
                    <div className="col-lg-9">
                      <input onChange={this.handleChangeValuekeyClassify} value={this.state.valueKeys} id={'key-classify-2'} type="text" placeholder="Nhập tên Nhóm phân loại hàng, ví dụ: màu sắc, kích thước v.v" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-12 d-flex pb-2">
                    <div className="col-lg-3 text-align-right">
                      <span className="text-nowrap">Phân loại hàng&nbsp;</span>
                    </div>
                    <div className="col-lg-9">
                      <input onChange={this.handleChangeValueClassify} value={this.state.valueValues} id={'value-classify-2'} type="text" placeholder="Nhập phân loại hàng, ví dụ: Trắng, Đỏ v.v)" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-12 d-flex">
                    <div className="col-lg-3 text-align-right"></div>
                    <div className="col-lg-9">
                      <div className="div-btn-type-product rounded">
                        <div className="btn bg-none w-100">
                          <span>+ Đã thêm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default classifyTwo
