
{/* Image */}
<div id="div-manager-image" className="py-3">
<div className="bg-white bg-white-box-shadow p-2">
  <div className="p-0 py-3">
    <p className="h5 font-weight-bold">Quản lý hình ảnh</p>
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
              {(this.state.srcImageAVT === '' || this.state.srcImageAVT === null)
                ?
                <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                :
                <img alt="" className='label-photo-input' src={this.state.srcImageAVT} />
              }
            </label>
            <div>
              <input onChange={
                async(event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImageAVT: reader.result,
                      dataImageAVT: file
                    })
                  }
                }
              } accept="image/*" name="file" id="image-avatar" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>* Ảnh bìa</span>
            </div>
          </div>
          {/* Ảnh 1*/}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-1">
              {(this.state.srcImage_1 === '' || this.state.srcImage_1 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_1} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_1: reader.result,
                      dataImage_1: file
                    })
                  }
                }
              } name="photo" id="image-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>* Ảnh 1</span>
            </div>
          </div>
          {/* Ảnh 2 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-2">
              {(this.state.srcImage_2 === '' || this.state.srcImage_2 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_2} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_2: reader.result,
                      dataImage_2: file
                    })
                  }
                }
              } name="photo" id="image-2" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 2</span>
            </div>
          </div>
          {/* Ảnh 3 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-3">
              {(this.state.srcImage_3 === '' || this.state.srcImage_3 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_3} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_3: reader.result,
                      dataImage_3: file
                    })
                  }
                }
              } name="photo" id="image-3" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 3</span>
            </div>
          </div>
          {/* Ảnh 4 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-4">
              {(this.state.srcImage_4 === '' || this.state.srcImage_4 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_4} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_4: reader.result,
                      dataImage_4: file
                    })
                  }
                }
              } name="photo" id="image-4" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 4</span>
            </div>
          </div>
          {/* Ảnh 5*/}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-5">
              {(this.state.srcImage_5 === '' || this.state.srcImage_5 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_5} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_5: reader.result,
                      dataImage_5: file
                    })
                  }
                }
              } name="photo" id="image-5" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 5</span>
            </div>
          </div>
          {/* Ảnh 6 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-6">
              {(this.state.srcImage_6 === '' || this.state.srcImage_6 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_6} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_6: reader.result,
                      dataImage_6: file
                    })
                  }
                }
              } name="photo" id="image-6" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 6</span>
            </div>
          </div>
          {/* Ảnh 7 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-7">
              {(this.state.srcImage_7 === '' || this.state.srcImage_7 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_7} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_7: reader.result,
                      dataImage_7: file
                    })
                  }
                }
              } name="photo" id="image-7" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 7</span>
            </div>
          </div>
          {/* Ảnh 8 */}
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 py-2 text-center">
            <label htmlFor="image-8">
              {(this.state.srcImage_8 === '' || this.state.srcImage_8 === null)
                ? <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                  <span className="d-flex align-items-center">+</span>
                </div>
                : <img alt="" className='label-photo-input' src={this.state.srcImage_8} />
              }
            </label>
            <div>
              <input accept="image/*" onChange={
                async (event) => {
                  let reader = new FileReader()
                  let file = event.target.files[0]
                  await reader.readAsDataURL(file)
                  reader.onloadend = async () => {
                    await this.setState({
                      srcImage_8: reader.result,
                      dataImage_8: file
                    })
                  }
                }
              } name="photo" id="image-8" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
            </div>
            <div>
              <span>Ảnh 8</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
    {/* Classify image */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>Hình ảnh phân loại sản phẩm</span>
      </div>
      <div className="col-md-9 p-0 div-input-name-product position-relative">
        <div className="row p-0 m-0">
          {/* image classify 1 */}
          {
            (this.state.numberClassifyOne >= 1)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-1">
                {(this.state.srcImageClassify_1 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_1} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_1: reader.result,
                        dataImageClassify_1: file
                      })
                    }
                  }
                } name="file" id="image-classify-1" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 1 && this.state.valueClassifyOne_1 !== null) ? this.state.valueClassifyOne_1 : "Ảnh phân loại 1"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 2 */}
          {
            (this.state.numberClassifyOne >= 2)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-2">
                {(this.state.srcImageClassify_2 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_2} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_2: reader.result,
                        dataImageClassify_2: file
                      })
                    }
                  }
                } name="file" id="image-classify-2" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 2 && this.state.valueClassifyOne_2 !== null) ? this.state.valueClassifyOne_2 : "Ảnh phân loại 2"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 3 */}
          {
            (this.state.numberClassifyOne >= 3)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-3">
                {(this.state.srcImageClassify_3 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_3} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_3: reader.result,
                        dataImageClassify_3: file
                      })
                    }
                  }
                } name="file" id="image-classify-3" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 3 && this.state.valueClassifyOne_3 !== null) ? this.state.valueClassifyOne_3 : "Ảnh phân loại 3"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 4 */}
          {
            (this.state.numberClassifyOne >= 4)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-4">
                {(this.state.srcImageClassify_4 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_4} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_4: reader.result,
                        dataImageClassify_4: file
                      })
                    }
                  }
                } name="file" id="image-classify-4" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 4 && this.state.valueClassifyOne_4 !== null) ? this.state.valueClassifyOne_4 : "Ảnh phân loại 4"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 5 */}
          {
            (this.state.numberClassifyOne >= 5)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-5">
                {(this.state.srcImageClassify_5 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_5} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_5: reader.result,
                        dataImageClassify_5: file
                      })
                    }
                  }
                } name="file" id="image-classify-5" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 5 && this.state.valueClassifyOne_5 !== null) ? this.state.valueClassifyOne_5 : "Ảnh phân loại 5"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 6 */}
          {
            (this.state.numberClassifyOne >= 6)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-6">
                {(this.state.srcImageClassify_6 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_6} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_6: reader.result,
                        dataImageClassify_6: file
                      })
                    }
                  }
                } name="file" id="image-classify-6" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 6 && this.state.valueClassifyOne_6 !== null) ? this.state.valueClassifyOne_6 : "Ảnh phân loại 6"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 7 */}
          {
            (this.state.numberClassifyOne >= 7)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-7">
                {(this.state.srcImageClassify_7 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_7} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_7: reader.result,
                        dataImageClassify_7: file
                      })
                    }
                  }
                } name="file" id="image-classify-7" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 7 && this.state.valueClassifyOne_7 !== null) ? this.state.valueClassifyOne_7 : "Ảnh phân loại 7"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 8 */}
          {
            (this.state.numberClassifyOne >= 8)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-8">
                {(this.state.srcImageClassify_8 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_8} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_8: reader.result,
                        dataImageClassify_8: file
                      })
                    }
                  }
                } name="file" id="image-classify-8" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 8 && this.state.valueClassifyOne_8 !== null) ? this.state.valueClassifyOne_8 : "Ảnh phân loại 8"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 9 */}
          {
            (this.state.numberClassifyOne >= 9)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-9">
                {(this.state.srcImageClassify_9 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_9} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_9: reader.result,
                        dataImageClassify_9: file
                      })
                    }
                  }
                } name="file" id="image-classify-9" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 9 && this.state.valueClassifyOne_9 !== null) ? this.state.valueClassifyOne_9 : "Ảnh phân loại 9"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 10 */}
          {
            (this.state.numberClassifyOne >= 10)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-10">
                {(this.state.srcImageClassify_10 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_10} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_10: reader.result,
                        dataImageClassify_10: file
                      })
                    }
                  }
                } name="file" id="image-classify-10" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 10 && this.state.valueClassifyOne_10 !== null) ? this.state.valueClassifyOne_10 : "Ảnh phân loại 10"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 11 */}
          {
            (this.state.numberClassifyOne >= 11)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-11">
                {(this.state.srcImageClassify_11 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_11} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_11: reader.result,
                        dataImageClassify_11: file
                      })
                    }
                  }
                } name="file" id="image-classify-11" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 11 && this.state.valueClassifyOne_11 !== null) ? this.state.valueClassifyOne_11 : "Ảnh phân loại 11"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 12 */}
          {
            (this.state.numberClassifyOne >= 12)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-12">
                {(this.state.srcImageClassify_12 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_12} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_12: reader.result,
                        dataImageClassify_12: file
                      })
                    }
                  }
                } name="file" id="image-classify-12" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 12 && this.state.valueClassifyOne_12 !== null) ? this.state.valueClassifyOne_12 : "Ảnh phân loại 12"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 13 */}
          {
            (this.state.numberClassifyOne >= 13)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-13">
                {(this.state.srcImageClassify_13 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_13} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_13: reader.result,
                        dataImageClassify_13: file
                      })
                    }
                  }
                } name="file" id="image-classify-13" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 13 && this.state.valueClassifyOne_13 !== null) ? this.state.valueClassifyOne_13 : "Ảnh phân loại 13"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 14 */}
          {
            (this.state.numberClassifyOne >= 14)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-14">
                {(this.state.srcImageClassify_14 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_14} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_14: reader.result,
                        dataImageClassify_14: file
                      })
                    }
                  }
                } name="file" id="image-classify-14" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 14 && this.state.valueClassifyOne_14 !== null) ? this.state.valueClassifyOne_14 : "Ảnh phân loại 14"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 15 */}
          {
            (this.state.numberClassifyOne >= 15)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-15">
                {(this.state.srcImageClassify_15 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_15} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_15: reader.result,
                        dataImageClassify_15: file
                      })
                    }
                  }
                } name="file" id="image-classify-15" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 15 && this.state.valueClassifyOne_15 !== null) ? this.state.valueClassifyOne_15 : "Ảnh phân loại 15"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 16 */}
          {
            (this.state.numberClassifyOne >= 16)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-16">
                {(this.state.srcImageClassify_16 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_16} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_16: reader.result,
                        dataImageClassify_16: file
                      })
                    }
                  }
                } name="file" id="image-classify-16" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 16 && this.state.valueClassifyOne_16 !== null) ? this.state.valueClassifyOne_16 : "Ảnh phân loại 16"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 17 */}
          {
            (this.state.numberClassifyOne >= 17)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-17">
                {(this.state.srcImageClassify_17 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_17} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_17: reader.result,
                        dataImageClassify_17: file
                      })
                    }
                  }
                } name="file" id="image-classify-17" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 17 && this.state.valueClassifyOne_17 !== null) ? this.state.valueClassifyOne_17 : "Ảnh phân loại 17"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 18 */}
          {
            (this.state.numberClassifyOne >= 18)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-18">
                {(this.state.srcImageClassify_18 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_18} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_18: reader.result,
                        dataImageClassify_18: file
                      })
                    }
                  }
                } name="file" id="image-classify-18" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 18 && this.state.valueClassifyOne_18 !== null) ? this.state.valueClassifyOne_18 : "Ảnh phân loại 18"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 19 */}
          {
            (this.state.numberClassifyOne >= 19)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-19">
                {(this.state.srcImageClassify_19 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_19} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_19: reader.result,
                        dataImageClassify_19: file
                      })
                    }
                  }
                } name="file" id="image-classify-19" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 19 && this.state.valueClassifyOne_19 !== null) ? this.state.valueClassifyOne_19 : "Ảnh phân loại 19"}</span>
              </div>
            </div>
            : ''
          }
          {/* image classify 20 */}
          {
            (this.state.numberClassifyOne >= 20)
            ?
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5 col-2 py-2 text-center">
              <label htmlFor="image-classify-20">
                {(this.state.srcImageClassify_20 !== null)
                  ?
                  <img alt="" className='label-photo-input' src={this.state.srcImageClassify_20} />
                  :
                  <div className="div-btn-type-product label-photo-input d-flex justify-content-center">
                    <span className="d-flex align-items-center">+</span>
                  </div>
                }
              </label>
              <div>
                <input accept="image/*" onChange={
                  async(event) => {
                    let reader = new FileReader()
                    let file = event.target.files[0]
                    await reader.readAsDataURL(file)
                    reader.onloadend = async () => {
                      await this.setState({
                        srcImageClassify_20: reader.result,
                        dataImageClassify_20: file
                      })
                    }
                  }
                } name="file" id="image-classify-20" type="file" placeholder="Nhập vào" className="input-photo-product form-control position-absolute" />
              </div>
              <div>
                <span>{ (this.state.numberClassifyOne >= 20 && this.state.valueClassifyOne_20 !== null) ? this.state.valueClassifyOne_20 : "Ảnh phân loại 20"}</span>
              </div>
            </div>
            : ''
          }
          {/*  */}
        </div>
      </div>
    </div>
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
                  <source src={this.state.data.video} type="video/mp4" />
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
    {/*  */}
  </div>
</div>
</div>
{/* Shipping */}
<div id="div-shipping" className="py-3">
<div className="bg-white bg-white-box-shadow p-2">
  <div className="p-0 py-3">
    <p className="h5 font-weight-bold">
      Vận chuyển
        </p>
  </div>
  <div className="px-4">
    {/* Weight product */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>* Cân nặng (Sau khi đóng gói)</span>
      </div>
      <div className="col-md-9 div-input-name-product position-relative">
        <input id="weight" onChange={
          (event) => {
            this.setState({
              weight: event.target.value
            })
          }
        } value={this.state.weight} type="text" placeholder="Nhập vào" className="input-name-product form-control" />
        <span className="length-character-input-name-product-new position-absolute">
          gr
            </span>
        {
          (this.props.validWeight === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.weightInvalid}</p>
          : ''
        }
      </div>
    </div>
    {/* Size product */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>* Kích thước đóng gói (Phí vận chuyển thực tế sẽ thay đổi nếu bạn nhập sai kích thước) </span>
      </div>
      <div className="col-md-3 div-input-name-product position-relative pb-2">
        <input id="width" onChange={
          (event) => {
            this.setState({
              width: event.target.value
            })
          }
        } value={this.state.width} type="text" placeholder="Rộng" className="input-name-product form-control" />
        <span className="length-character-input-name-product-new position-absolute">
          cm
            </span>
        {
          (this.props.validWidth === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.widthInvalid}</p>
          : ''
        }
      </div>
      <div className="col-md-3 div-input-name-product position-relative pb-2">
        <input onChange={
          (event) => {
            this.setState({
              length: event.target.value
            })
          }
        } value={this.state.length} id="lenght" type="text" placeholder="Dài" className="input-name-product form-control" />
        <span className="length-character-input-name-product-new position-absolute">
          cm
            </span>
        {
          (this.props.validLength === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.lengthInvalid}</p>
          : ''
        }
      </div>
      <div className="col-md-3 div-input-name-product position-relative pb-2">
        <input onChange={
          (event) => {
            this.setState({
              height: event.target.value
            })
          }
        } value={this.state.height} id="height" type="text" placeholder="Cao" className="input-name-product form-control" />
        <span className="length-character-input-name-product-new position-absolute">
          cm
            </span>
        {
          (this.props.validHeight === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.heightInvalid}</p>
          : ''
        }
      </div>
    </div>
    {/* Fees shipping */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>Phí vận chuyển</span>
      </div>
      <div className="col-md-12 div-input-name-product position-relative">
        <div className="col-lg-12 user align-items-center p-0 m-0" style={{ 'background': '#f0f0f0' }}>
          {feesShippings}
        </div>
        {
          (this.props.validShippingChannel === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.shippingInvalid}</p>
          : ''
        }
      </div>
    </div>
  </div>
</div>
</div>
{/* Other */}
<div id="div-other-information" className="py-3">
<div className="bg-white bg-white-box-shadow p-2">
  <div className="p-0 py-3">
    <p className="h5 font-weight-bold">Thông tin khác</p>
  </div>
  <div className="px-4">
    {/* Hàng đặt trước */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>Hàng đặt trước</span>
      </div>
      <div className="d-flex col-md-9 div-input-name-product position-relative">
        {
          (this.state.book === 0)
          ?
          <div className="pr-3 custom-control custom-radio">
            <input onChange={
              async() => {
                await this.setState({
                  book: 0
                })
              }
            } defaultChecked="true" type="radio" id="acept-book-product-no" name="acept-book-product" className="custom-control-input"  />
            <label className="custom-control-label" htmlFor="acept-book-product-no">Không</label>
          </div>
          :
          
          <div className="pr-3 custom-control custom-radio">
            <input onChange={
              async() => {
                await this.setState({
                  book: 0
                })
              }
            } type="radio" id="acept-book-product-no" name="acept-book-product" className="custom-control-input"  />
            <label className="custom-control-label" htmlFor="acept-book-product-no">Không</label>
          </div>
        }
        {
          (this.state.book === 1)
          ?
          <div className="pr-3 custom-control custom-radio">
            <input onChange={
              async() => {
                await this.setState({
                  book: 1
                })
              }
            } defaultChecked="true" type="radio" id="acept-book-product-yes" name="acept-book-product" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="acept-book-product-yes">Đồng ý</label>
          </div>
          :
          <div className="pr-3 custom-control custom-radio">
            <input onChange={
              async() => {
                await this.setState({
                  book: 1
                })
              }
            } type="radio" id="acept-book-product-yes" name="acept-book-product" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="acept-book-product-yes">Đồng ý</label>
          </div>
        }
      </div>
    </div>
    {/* Name product */}
    <div className="row py-2">
      <div className="col-md-3 text-align-right">
        <span>* Tình trạng</span>
      </div>
      <div className="col-md-9 div-input-name-product position-relative">
        <select onChange={
          async(event) => {
            await this.setState({
              status: event.target.value
            })
          }
        } value={this.state.status} name="" className="form-control" id="">
          <option vlaue="null">--Tình trạng--</option>
          <option value="new">Mới</option>
          <option value="used">Đã sử dụng</option>
        </select>
        {
          (this.props.validStatusProduct === true)
          ? <p className="text-danger m-0 mt-1">{messageErrorAddProduct.statusInvalid}</p>
          : ''
        }
      </div>
    </div>
    {/* SKU product */}
    {
      (this.state.showClassify === false)
      ?
      <div className="row py-2">
        <div className="col-md-3 text-align-right">
          <span>* SKU sản phẩm</span>
        </div>
        <div className="col-md-9 div-input-name-product position-relative">
          <input onChange={
            (event) => {
              this.setState({
                sku: event.target.value
              })
            }
          } value={this.state.sku} type="text" placeholder="-" className="form-control" />
        </div>
      </div>
      : ''
    }
  </div>
</div>
</div>
{/* Submit and Save */}
<div className="py-3">
<div className="  p-2">
  <div className="p-0 py-3 row justify-content-end ">
    <Link className="btn btn-info ml-0 mr-2" to={'/portal/sale/product/detail/' + window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}>Hủy</Link>
    <button onClick={this.updateProduct} id="cancel-save-and-hide-product" className="btn btn-light mr-2" style={{"border": '1px solid rgb(225, 225, 225)'}}>Lưu</button>
  </div>
</div>
</div>
{/*  */}