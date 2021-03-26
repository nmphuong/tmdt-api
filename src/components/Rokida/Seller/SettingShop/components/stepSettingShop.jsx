import { Component } from 'react'

import { Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class stepSettingShop extends Component {
  render() {
    var item = []
    this.props.dataTabName.forEach((element, index) => {
      item.push(
        <Nav.Item key={index} className="py-2">
          <Link className={((this.props.activeTab === element.event_key) ? 'active ': "") + "nav-link link-step font-weight-bold pb-3"} to={element.href}>{element.title}</Link>
        </Nav.Item>
      )
    });
    return (
      <>
        <Nav className="nav-link-step">
          {item}
        </Nav>
      </>
    );
  }
}

export default stepSettingShop
