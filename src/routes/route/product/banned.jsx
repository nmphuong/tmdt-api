import { Component } from 'react'
// Import component other
import Links from '../../../components/Rokida/Seller/Orders/Link/Links.jsx'
import Footer from '../../../components/Rokida/Seller/Orders/components/footer.jsx'

// 
import { Nav } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom'

// Import component
import ProductBannedAction from '../../../components/Rokida/Seller/Products/components/banned/action.jsx'
import ProductBannedDeleted from '../../../components/Rokida/Seller/Products/components/banned/deleted.jsx'

// Import data
import { dataComponent } from './data'

class banned extends Component {
  render() {
    var nav_link = []
    dataComponent.data.forEach((element, index) => {
      nav_link.push(
      <Nav.Item key={index} className="py-2">
        <Link className={((element.event_key === 'banned') ? 'active' : "") + " nav-link link-step font-weight-bold pb-3 " + element.classLink} to={element.href}>{element.title}</Link>
      </Nav.Item>
      )
    })
    var tabs = []
    tabs.push(
      <Nav className="nav-link-step col-12" key='banned'>
        {nav_link}
      </Nav>
    )
    return (
      <>
        <Links link={dataComponent.link_product_banned} />
        <div className='row p-0 m-0'>
          <div className='pagination col-12 p-0 m-0'>
            <div className="fillter col-12 p-0 m-0">
              <div className="row p-0 m-0">
                {tabs}
                <div className='col-12'>
                  <div className="count-product">
                    <span className="h4 font-weight-bold">0 Product</span>
                  </div>
                  <Switch>
                    <Route exact path="/portal/sale/product/banned/action">
                      <ProductBannedAction data={dataComponent.dataBannedProduct} active="action" />
                    </Route>
                    <Route exact path="/portal/sale/product/banned/deleted">
                      <ProductBannedDeleted data={dataComponent.dataBannedProduct} active="deleted" />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default banned
