import { Component } from 'react'
import $ from 'jquery'
import { BrowserRouter as Router } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

import RouterView from '../../../../routes/index.jsx' 

import SideBar from '../Sidebars/index.jsx'

class Index extends Component {
  componentDidMount () {
    $("#menu-toggle").click(function(e) {
      e.preventDefault()
      $("#wrapper").toggleClass("toggled")
    })
  }
  render() {
    return (
      <Router>
        {(window.location.pathname.split("/").pop() === 'login' || window.location.pathname.split("/").pop() === 'register' || window.location.pathname.split("/").pop() === 'forgot-password') 
        ? <div className="col-12 container contain-tab-menu">
            <RouterView />
          </div>
        : <div id="wrapper">
          <div id="sidebar-wrapper">
            <div className="bg-sidebar">
              <div className="container px-4">
                <SideBar />
              </div>
            </div>
          </div>
          <div id="page-content-wrapper 0">
            <div className="container-fluid 0">
              <div className="row">
                <div className="col-lg-12 p-0 d-menu-toggle">
                  <a href="#menu-toggle" className="btn" id="menu-toggle"><FaBars /></a>
                </div>
                <div className="col-12 container contain-tab-menu">
                  <RouterView />
                </div>
              </div>
            </div>
          </div>
        </div>}
      </Router>
    )
  }
}

export default Index
