import { Component } from 'react'

import TopBar from './components/topbar.jsx'

class Index extends Component {
  render() {
    return (
      <>
        <div className="top-menu bg-danger py-2">
          <div className="row p-0 m-0">
            <TopBar />
          </div>
        </div>
      </>
    );
  }
}

export default Index
