import { Component } from 'react'
// 
import { Accordion, Button, Card } from 'react-bootstrap'
import { FaChevronDown } from 'react-icons/fa'

// Import API
import shippingStore from '../../../../stores/shipping.store'

class shippingUnit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: this.props.data.key,
      loader: false
    }
  }

  activeShipping = async (event) => {
    var id = event.target.id.substring(event.target.id.lastIndexOf('-') + 1, event.target.id.length)
     await this.setState({
        loader: true
      })
    await shippingStore.activeShipping(id).then(async (res) => {
      await this.setState({ 
        loader: false
      })
      await this.props.getData()
    }).catch(e => {
      console.log(e)
    })
  }

  codShipping = async (event) => {
    var idCod = event.target.id.substring(event.target.id.lastIndexOf('-') + 1, event.target.id.length)
     await this.setState({
        loader: true
      })
    await shippingStore.codShipping(idCod).then(async (res) => {
      await this.setState({ 
        loader: false
      })
      await this.props.getData()
    }).catch(e => {
      console.log(e)
    })
  }

  prioritizeShipping = async (event) => {
    var idCod = event.target.id.substring(event.target.id.lastIndexOf('-') + 1, event.target.id.length)
     await this.setState({
        loader: true
      })
    await shippingStore.prioritizeShipping(idCod).then(async (res) => {
      await this.setState({ 
        loader: false
      })
      await this.props.getData()
    }).catch(e => {
      console.log(e)
    })
  }
   
  render() {
    var description = []
    this.props.data.description.forEach((element, index) => {
      description.push(
      <div key={index}>
        <p>{element}</p>
      </div>
      )
    });
    return (
      <div className="py-2">
        <Accordion>
          <Card>
            <Card.Header>
              <div className="col-12">
                <div className="row">
                  <div className="col h-100 d-flex align-items-center">
                    <p className="p-0 m-0">{this.props.data.name}</p>
                  </div>
                  <div className="col text-right">
                    <div className="d-flex justify-content-end h-100 align-items-center">
                      <Accordion.Toggle as={Button} variant="link" className="py-0 p-0" eventKey="0">
                        <FaChevronDown className="text-dark" />
                      </Accordion.Toggle>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">
                  <div className="col-lg-7">
                    {description}
                    <div>
                      <p className="text-secondary" style={{"fontSize": "0.8em"}}>Giới hạn vận chuyển</p>
                      <p>Khối lượng tối đa: {this.props.data.maximumWeight}g</p>
                      <p>Cân nặng tối thiểu: {this.props.data.minimumWeight}g</p>
                    </div>
                  </div>
                  <div className="col-lg-5 p-0">
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0 m-0">
                        <div className="custom-control custom-switch custom-switch-lg px-0">
                          <div className="row p-0 m-0">
                            <div className="col-9">
                              <span>Kích hoạt đơn vị vận chuyển này</span>
                            </div>
                            <div className="col-3">
                              {/* {
                                (this.props.data.shopActiveShipping === true)
                                ? <input checked onChange={this.activeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + '-' + this.props.data.id} />
                                : <input onChange={this.activeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + '-' + this.props.data.id} />
                              } */}
                              <input defaultChecked={this.props.data.shopActiveShipping} onChange={this.activeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + '-' + this.props.data.id} />
                              <label className="custom-control-label" htmlFor={this.props.data.slug + '-' + this.props.data.id}>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {(this.props.data.cod) === 1
                      ? <div className="col-12 p-0 m-0">
                          <div className="custom-control custom-switch custom-switch-lg px-0">
                            <div className="row p-0 m-0">
                              <div className="col-9">
                                <span>Kích hoạt COD</span>
                              </div>
                              <div className="col-3">
                                {/* {
                                  (this.props.data.shopCodShipping === true) 
                                  ? <input checked onChange={this.codShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-cod-" + this.props.data.id} />
                                  : <input onChange={this.codShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-cod-" + this.props.data.id} />
                                } */}
                                <input defaultChecked={this.props.data.shopCodShipping} onChange={this.codShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-cod-" + this.props.data.id} />
                                <label className="custom-control-label" htmlFor={this.props.data.slug + "-cod-" + this.props.data.id}>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      : ''}
                      <div className="col-12 p-0 m-0">
                        <div className="custom-control custom-switch custom-switch-lg px-0">
                          <div className="row p-0 m-0">
                            <div className="col-9">
                              <span>Thiết lập làm đơn vị vận chuyển ưu tiên</span>
                            </div>
                            <div className="col-3">
                              {/* {
                                (this.props.data.shopPrioritizeShipping === true)
                                ? <input checked onChange={this.prioritizeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-prioritize-" + this.props.data.id} />
                                : <input onChange={this.prioritizeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-prioritize-" + this.props.data.id} />
                              } */}
                              <input defaultChecked={this.props.data.shopPrioritizeShipping} onChange={this.prioritizeShipping} type="checkbox" className="custom-control-input" id={this.props.data.slug + "-prioritize-" + this.props.data.id} />
                              <label className="custom-control-label" htmlFor={this.props.data.slug + "-prioritize-" + this.props.data.id} >
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default shippingUnit
