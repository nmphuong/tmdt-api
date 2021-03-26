import { Component } from 'react'
import { Link } from 'react-router-dom'

class THead extends Component {
  render() {
    var data = this.props.thead
    var items = []
    data.forEach((element, index) => {
      items.push(<th className="white-space-nowrap" key={index}>{element}</th>)
    });
    return (
      <>
        <thead className="">
          <tr>
            {items}
          </tr>
        </thead>
      </>
    );
  }
}

class ButtonAct extends Component {
  render() {
    var dtButton = []
    this.props.dtButtonAct.forEach((element, index) => {
      dtButton.push(
        <div key={index} className="p-1">
          {
            (element.button !== undefined && element.button === true)
            ? <span id={element.id} className={element.classLink + " nav-link"}>{element.text}</span>
            : <Link id={element.id} className={"btn nav-link " + element.classLink} to={element.href}>{element.text}</Link>
          }
        </div>
      )
    })
    return (
      <>
        {dtButton}
      </>
    );
  }
}


class TBody extends Component {
  render() {
    var items = []
    var keys = Object.keys(this.props.data)
    for(var i = 0; i < this.props.numColumns; i++) {
      let key = keys[i]
      if (this.props.columAct === true && i === (this.props.numColumns - 1)) {
        items.push(
        <td key={i} className="align-middle">
            <ButtonAct dtButtonAct={this.props.data[key]} />
        </td>
        )
      }
      else {
        var dataString = []
        if (Array.isArray(this.props.data[key]) === true) {
          for (var j = 0; j < this.props.data[key].length; j++) {
            var element = <p key={j} className="m-0">• {this.props.data[key][j]}</p>
            dataString.push(element)
          }
        } else {
          dataString.push(<p key="dt-tb" className="m-0">{this.props.data[key]}</p>)
        }
        items.push(<td key={i} className="align-middle">
          {dataString}
        </td>
        )
      }
    }
    return (
      <>
        <tr>{items}</tr>
      </>
    );
  }
}

class table extends Component {
  render() {
    var dataRefund = {
      data: this.props.data
    }
    var items = []
    var columnAction = false
    if (this.props.columnAction !== undefined) {
      columnAction = this.props.columnAction
    }
    dataRefund.data.forEach((element, index) => {
      items.push(<TBody columAct={columnAction} key={index} numColumns={this.props.thead.length} data={element} />)
    });
    var thead = <THead thead={this.props.thead} />
    return (
      <>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            {thead}
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default table
