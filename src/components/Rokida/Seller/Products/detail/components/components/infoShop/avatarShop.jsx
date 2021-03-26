import React from 'react'

class avatarShop extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-4 px-2">
          <img style={{ "width": "100px", "height": "100px" }} src={this.props.data.shop.avatar_shop} alt="" className="rounded-circle" />
        </div>
      </>
    )
  }
}

export default avatarShop
