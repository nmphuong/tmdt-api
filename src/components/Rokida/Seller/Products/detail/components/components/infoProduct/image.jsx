import React from 'react'

class image extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      src: (this.props.data !== null) ? this.props.data.image[0] : '',
      srcClassify: this.props.src
    }
  }
  
  render() {
    var images = []
    if (this.props.data !== null) {
      this.props.data.image.forEach((element, index) => {
        images.push(
          <div className="col-3" key={index}>
            <img className="lst-img-child" onClick={(event) => {
              this.setState({ src: event.target.src }) 
              this.props.srcSetNull(null)
            }} src={element} alt="" />
          </div>
        )
      })
    }
    return (
      <>
        <div className="col-lg-6">
          <div className="row p-0 m-0">
            <div id="image_avtar_product" className="col-12 d-flex justify-content-center">
              {
                (this.props.src === null)
                ? <img className="lst-img-child" src={this.state.src} alt="" />
                : <img className="lst-img-child" src={this.props.src} alt="" />
              }
            </div>
            <div className="col-12">
              <div id="lst_image_product" className="p-0 pt-2 m-0 d-flex">
                {images}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default image
