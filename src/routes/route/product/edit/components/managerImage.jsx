import { Component } from 'react'

import { messageErrorAddProduct } from '../../../../../include/language/vi'

class managerImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      srcImageAvatar: '',
      srcImage1: '',
      srcImage2: '',
      srcImage3: '',
      srcImage4: '',
      srcImage5: '',
      srcImage6: '',
      srcImage7: '',
      srcImage8: '',
      srcVideo: '',
      srcImageClassify1: '',
      dataImageVideo: {},
      dataImageAvatar: '',
      dataImage1: '',
      dataImage2: '',
      dataImage3: '',
      dataImage4: '',
      dataImage5: '',
      dataImage6: '',
      dataImage7: '',
      dataImage8: '',
      dataVideo: '',
      dataImageClassify1: '',
      dataImageClassify2: ''
    }
  }
  sendDataImage = async () => {
    this.setState({
      dataImageVideo: {
        dataImageAvatar: this.state.dataImageAvatar,
        dataImage1: this.state.dataImage1,
        dataImage2: this.state.dataImage2,
        dataImage3: this.state.dataImage3,
        dataImage4: this.state.dataImage4,
        dataImage5: this.state.dataImage5,
        dataImage6: this.state.dataImage6,
        dataImage7: this.state.dataImage7,
        dataImage8: this.state.dataImage8,
        dataVideo: this.state.dataVideo,
        dataClassify1: this.state.dataImageClassify1,
        dataClassify2: this.state.dataImageClassify2
      }
    })
  }

  handleImageAvatar = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImageAvatar: reader.result,
        dataImageAvatar: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage1 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage1: reader.result,
        dataImage1: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage2 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage2: reader.result,
        dataImage2: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage3 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage3: reader.result,
        dataImage3: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage4 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage4: reader.result,
        dataImage4: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage5 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage5: reader.result,
        dataImage5: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage6 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage6: reader.result,
        dataImage6: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage7 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage7: reader.result,
        dataImage7: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImage8 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImage8: reader.result, 
        dataImage8: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleVideo = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcVideo: reader.result,
        dataVideo: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  handleImageClassify1 = async (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    await reader.readAsDataURL(file)
    reader.onloadend = async () => {
      await this.setState({
        srcImageClassify1: reader.result,
        dataImageClassify1: file
      });
      await this.sendDataImage()
      this.props.imageSelected(this.state.dataImageVideo)
    }
  }
  render() {
    return (
      <>
        <div id="div-manager-image" className="py-3">
          <div className="bg-white bg-white-box-shadow p-2">
            <div className="p-0 py-3">
              <p className="h5 font-weight-bold">
                Quản lý hình ảnh
                        </p>
            </div>
            <div className="px-4">
              {/* Image product */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>Hình ảnh sản phẩm</span>
                </div>
                <div className="col-md-9 p-0 div-input-name-product position-relative">
                  <div className="row p-0 m-0">
                    {/* Ảnh bìa */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                      <label htmlFor="image-avatar">
                        {(this.state.srcImageAvatar === '')
                          ?
                          <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          :
                          <img alt="" className='label-photo-input' src={this.state.srcImageAvatar} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImageAvatar(e)} name="file" id="image-avatar" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>* Ảnh bìa</span>
                        {
                          (this.props.validCoverAvatar === true)
                          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.imgCoverAvtInvalid}</p>
                          : ''
                        }
                      </div>
                    </div>
                    {/* Ảnh 1 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-1">
                        {(this.state.srcImage1 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage1} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage1(e)} name="photo" id="image-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>* Ảnh 1</span>
                        {
                          (this.props.validImage === true)
                          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.imgOneInvalid}</p>
                          : ''
                        }
                      </div>
                    </div>
                    {/* Ảnh 2 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-2">
                        {(this.state.srcImage2 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage2} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage2(e)} name="photo" id="image-2" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 2</span>
                      </div>
                    </div>
                    {/* Ảnh 3 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-3">
                        {(this.state.srcImage3 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage3} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage3(e)} name="photo" id="image-3" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 3</span>
                      </div>
                    </div>
                    {/* Ảnh 4 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-4">
                        {(this.state.srcImage4 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage4} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage4(e)} name="photo" id="image-4" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 4</span>
                      </div>
                    </div>
                    {/* Ảnh 5 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-5">
                        {(this.state.srcImage5 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage5} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage5(e)} name="photo" id="image-5" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 5</span>
                      </div>
                    </div>
                    {/* Ảnh 6 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-6">
                        {(this.state.srcImage6 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage6} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage6(e)} name="photo" id="image-6" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 6</span>
                      </div>
                    </div>
                    {/* Ảnh 7 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-7">
                        {(this.state.srcImage7 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage7} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage7(e)} name="photo" id="image-7" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 7</span>
                      </div>
                    </div>
                    {/* Ảnh 8 */}
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="image-8">
                        {(this.state.srcImage8 === '')
                          ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          : <img alt="" className='label-photo-input' src={this.state.srcImage8} />
                        }
                      </label>
                      <div>
                        <input accept="image/*" onChange={(e) => this.handleImage8(e)} name="photo" id="image-8" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Ảnh 8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {(this.props.showClassify === true)
                ?
                <div className="row py-2">
                  <div className="col-md-3 text-align-right">
                    <span>Hình ảnh phân loại sản phẩm 1</span>
                  </div>
                  <div className="col-md-9 p-0 div-input-name-product position-relative">
                    <div className="row p-0 m-0">
                      <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
                        <label htmlFor="image-classify-1">
                          {(this.state.srcImageClassify1 === '')
                            ?
                            <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                              <span className="d-flex align-items-center">+</span>
                            </div>
                            :
                            <img alt="" className='label-photo-input' src={this.state.srcImageClassify1} />
                          }
                        </label>
                        <div>
                          <input accept="image/*" onChange={(e) => this.handleImageClassify1(e)} name="file" id="image-classify-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                        </div>
                        <div>
                          <span>Ảnh phân loại 1</span>
                        </div>
                      </div>
                    </div>
                    {
                      (this.props.validImgClassify === true)
                      ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.imgClassifyOneInvalid}</p>
                      : ''
                    }
                  </div>
                </div>
                :
                ''
              }
              {/* Video */}
              <div className="row py-2">
                <div className="col-md-3 text-align-right">
                  <span>Video sản phẩm</span>
                </div>
                <div className="col-md-9 p-0 div-input-name-product position-relative">
                  <div className="row p-0 m-0">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
                      <label htmlFor="video">
                        {(this.state.srcVideo === '')
                          ?
                          <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                            <span className="d-flex align-items-center">+</span>
                          </div>
                          :
                          <video width="100" height="100" controls>
                            <source src={this.state.srcVideo} type="video/mp4" />
                          </video>
                        }
                      </label>
                      <div>
                        <input accept="video/*" onChange={(e) => this.handleVideo(e)} name="photo" id="video" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
                      </div>
                      <div>
                        <span>Video bìa</span>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-7">
                      <ol className="col-12 m-0">
                        <li>Kích thước: Tối đa 30Mb, độ phân giải không vượt quá 1280x1280px</li>
                        <li>Độ dài: 10s-60s</li>
                        <li>Định dạng: MP4 (không hỗ trợ vp9)</li>
                      </ol>
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

export default managerImage
