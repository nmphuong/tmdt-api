import { Component } from 'react'
import { Tabs, Tab, Dropdown } from 'react-bootstrap'
import Table from './table.jsx'
import Form from './form.jsx'

class Fillter extends Component {
  render() {
    return (
      <>
        <div key="fillter" className="col-12 px-0 pb-2">
          <div className="row justify-content-end p-0 m-0">
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Ngày xác nhận đặt đơn: Gần - Xa
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Gần</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Xa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </>
    )
  }
}

class SubMenu extends Component {
  render() {
    var items = []
    var subMenu = {
      data: this.props.dataSub
    }
    if (this.props.submenu === true) {
      subMenu.data.forEach((element, index) => {
        items.push(
        <Tab key={index} eventKey={element.event_key} title={element.title}>
          <Table thead={this.props.thead} data={element.dataRefund} />
        </Tab>)
      })
    }
    return (
      <>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          {items}
        </Tabs>
      </>
    );
  }
}

class stepShipping extends Component {
  render() {
    var dataTab = {
      data: this.props.data
    }
    var menuParentItems = []
    var sub = []
    var thead = ['Sản phẩm', 'Tổng cộng', "Trạng thái", 'Đếm ngược', 'Vận chuyển']
    if (this.props.submenu === true) {
      sub.push(<SubMenu key="ship" thead={thead} submenu={this.props.submenu} dataSub={this.props.dataSub} />)
      dataTab.data.forEach((element, index) => {
        menuParentItems.push(
        <Tab key={index} eventKey={element.event_key} title={element.title}>
          <Form />
          <Fillter />
          {sub}
        </Tab>)
      })
    } else {
      dataTab.data.forEach((element, index) => {
        menuParentItems.push(
        <Tab key={index} eventKey={element.event_key} title={element.title}>
          <Form />
          <Fillter />
          <Table thead={thead} data={element.dataRefund} />
        </Tab>)
      })
    }
    return (
      <>
      <div className="col-12">
        <div className="row p-0 m-0 table-responsive">
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
            {menuParentItems}
          </Tabs>
          </div>
        </div>
      </>
    )
  }
}

export default stepShipping
