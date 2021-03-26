import { Component } from 'react'
import { Nav } from 'react-bootstrap'
import Table from '../../Orders/components/table.jsx'
// import Form from '../../Orders/components/form'

import TopProduct from './topProduct.jsx'
import Button from  './button.jsx'
import CountProduct from './countProduct.jsx'

import { Link } from 'react-router-dom'

class BatchDelivery extends Component {
  render() {
    return (
      <>
        <button id={this.props.id} className={"btn " + this.props.class }>
          <Link className={this.props.classLink + " nav-link"} to={this.props.href}>{this.props.text}</Link>
        </button>
      </>
    )
  }
}

class stepProduct extends Component {
  render() {
    var dataTab = {
      data: this.props.data
    }
    var nav_link = []
    var thead = this.props.thead
    dataTab.data.forEach((element, index) => {
      nav_link.push(
      <Nav.Item key={index} className="py-2">
        <Link className={((this.props.active === element.event_key) ? 'active' : "") + " nav-link link-step font-weight-bold pb-3 " + element.classLink} to={element.href}>{element.title}</Link>
      </Nav.Item>
      )
    })
    var batchDelivery = []
    if (this.props.button !== undefined && this.props.button === true) {
      this.props.dataButton.forEach((element, index) => {
        batchDelivery.push(
          <BatchDelivery key={index} id={element.id} text={element.text} class={element.class} href={element.href} classLink={element.classLink} />
        )
      });
    }
    var dataContent = []
    dataTab.data.forEach((element, index) => {
      if (this.props.active === element.event_key) {
        dataContent.push(
          <div className="col-12" key={index}>
            {/* <Form /> */}
            <div className="col-12 px-0 pb-2">
              <div className="row justify-content-end p-0 m-0">
                {batchDelivery}
              </div>
            </div>
            <Table columnAction={this.props.columnAction} thead={thead} data={this.props.dataTable} />
          </div>
        )
      }
    })
    var activeTab = 'all'
    if (this.props.active !== undefined || this.props.active !== null || this.props.active !== '') {
      activeTab = this.props.active
    }
    var tabs = []
    tabs.push(
      <Nav className="nav-link-step col-12" key={activeTab}>
        {nav_link}
      </Nav>
    )
    return (
      <>
        <div className="col-12 p-0 m-0">
          <div className="row p-0 m-0">
            {tabs}
            <TopProduct />
            <Button />
            <CountProduct totalProduct={this.props.totalProduct} />
          </div>
          <div className="row p-0 m-0 table-responsive">
            {dataContent}
          </div>
        </div>
      </>
    )
  }
}

export default stepProduct
