import { Component } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from "react-router-dom"

class Item extends Component {
  render() {
    return (
      <>
        <FaAngleRight className="text-primary" />
        <Link className="nav-link px-1" to={this.props.href}>{this.props.name}</Link>
      </>
    );
  }
}


class Links extends Component {
  render() {
    var data = {
      name: this.props.name,
      link: this.props.link
    }
    var items = []
    data.link.forEach((element, index) => {
      items.push(<Item key={index} name={element.name} href={element.href} />)
    });
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0 align-items-center">
          <Link className="nav-link pl-0 pr-1" to='/'>Trang chủ</Link>
            {items}
          </div>
        </div>
      </>
    );
  }
}

export default Links
