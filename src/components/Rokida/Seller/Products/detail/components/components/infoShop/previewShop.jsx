import React from 'react'

class previewShop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      created_account: ''
    }
  }

  componentDidMount() {
    this.caculateCeratedAccount()
  }
  
  caculateCeratedAccount = async () => {
    var timeStampCreated = new Date(this.props.data.shop.created_at).getTime()
    var dateCreated = new Date(timeStampCreated).getDate()
    var monthCreated = new Date(timeStampCreated).getMonth() + 1
    var yearCreated = new Date(timeStampCreated).getFullYear()
    var nowDate = new Date().getDate()
    var nowMonth = new Date().getMonth() + 1
    var nowYear = new Date().getFullYear()
    if (nowYear - yearCreated === 0) {
      if (nowMonth - monthCreated === 0) {
        await this.setState({
          created_account: (nowDate) + ' ngày trước'
        })
      } else if (nowMonth - monthCreated === 1) {
        if (monthCreated === 1 || monthCreated === 3 || monthCreated === 5 || monthCreated === 7 || monthCreated === 8 || monthCreated === 10 || monthCreated === 12) {
          await this.setState({
            created_account: (nowDate + (31 - dateCreated)) + ' ngày trước'
          })
        } else if (monthCreated === 2) {
          await this.setState({
            created_account: (nowDate + (28 - dateCreated)) + ' ngày trước'
          })
        } else {
          await this.setState({
            created_account: (nowDate + (30 - dateCreated)) + ' ngày trước'
          })
        }
      } else {
        await this.setState({
          created_account: (nowMonth - monthCreated) + ' tháng trước'
        })
      }
    } else {
      var numMonth = 0
      for (var i = nowYear; i >= yearCreated; i--) { // Year
        if (i === yearCreated) {
          numMonth += (12 - monthCreated)
        } else if (i < nowYear && i > yearCreated) {
          numMonth += 12
        } else {
          numMonth += nowMonth
        }
      }
      await this.setState({
        created_account: numMonth + ' tháng trước'
      })
    }
  }

  render() {
    return (
      <>
        <div className="col-lg-3 px-2">
          <span className="text-secondary">Đánh Giá</span>&nbsp;&nbsp;<span>
            {
              (this.props.data.shop.numberRate >= 1000)
              ? (this.props.data.shop.numberRate / 1000).toFixed(1) + 'K'
              : this.props.data.shop.numberRate
            }
          </span>
        </div>
        <div className="col-lg-5 px-2">
          <span className="text-secondary">Tỉ Lệ Phản Hồi</span>&nbsp;&nbsp;<span>{this.props.data.shop.percentFeedback}%</span>
        </div>
        <div className="col-lg-4 px-2">
          <span className="text-secondary">Tham Gia</span>&nbsp;&nbsp;<span>
            {this.state.created_account}
          </span>
        </div>
        <div className="col-lg-3 px-2">
          <span className="text-secondary">Sản Phẩm</span>&nbsp;&nbsp;<span>{this.props.data.author.numberProduct}</span>
        </div>
        <div className="col-lg-5 px-2">
          <span className="text-secondary">Thời Gian Phản Hồi</span>&nbsp;&nbsp;<span>trong vài giờ</span>
        </div>
        <div className="col-lg-4 px-2">
          <span className="text-secondary">Người Theo Dõi</span>&nbsp;&nbsp;<span>
            {
              (this.props.data.shop.numberFollower >= 1000)
              ? (this.props.data.shop.numberFollower / 1000).toFixed(1) + 'K'
              : this.props.data.shop.numberFollower
            }
          </span>
        </div>
      </>
    )
  }
}

export default previewShop
