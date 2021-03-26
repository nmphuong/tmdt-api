import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
// import { FaChevronDown, FaShippingFast } from 'react-icons/fa'
import * as FaFont from 'react-icons/fa'
import { Link } from "react-router-dom"

class Item extends Component {
  render() {
    return (
      <li>
        <Link className="nav-link text-dark" to={this.props.href}>{this.props.name}</Link>
      </li>
    );
  }
}


class MenuDetail extends Component {
  constructor (props) {
    super(props)
    this.divRef = React.createRef()
  }
  render() {
    var data = {
      name: this.props.name,
      link: this.props.link,
      icon: this.props.icon
    }
    var items = []
    data.link.forEach((element, index) => {
      items.push(<Item key={index} name={element.name} href={element.href} />)
    });
    const icon = React.createElement(FaFont[data.icon])
    return (
      <>
        <div ref={this.divRef} className="w-100 py-1">
          < Accordion defaultActiveKey = "1" >
            <div ref={this.divRef} className="side">
              <div ref={this.divRef} className="side">
                <div ref={this.divRef} className="d-flex align-items-center">
                  <Accordion.Toggle className="btn btn-sidebar-menu-left text-left pr-2 w-100 px-0" variant="link" eventKey="0">
                    <div ref={this.divRef} className="title">
                      <span className="font-weight-bold">
                        {icon} &nbsp;{data.name}
                      </span>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Toggle className="btn btn-sidebar-menu-left text-right" variant="link" eventKey="0">
                    <FaFont.FaChevronDown />
                  </Accordion.Toggle>
                </div>
              </div>
                <Accordion.Collapse eventKey="0">
                <div ref={this.divRef} className="content">
                  <ul className="ul-sidebar navbar-nav">
                    {items}
                  </ul>
                </div>
                </Accordion.Collapse>
            </div>
          </Accordion >
        </div>
      </>
    );
  }
}

export default MenuDetail
