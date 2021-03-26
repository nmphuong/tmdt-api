import { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

class form extends Component {
  render() {
    return (
      <>
        <div className="col-12 px-0">
          <div className="row p-0 m-0">
            <div className="col-lg-4 px-0 py-1 m-0">
              <input id="search-input" type="text" placeholder="Tìm kiếm" className="form-control h-100 pr-5" />
              <button id="button-search-form" className="btn border-none bg-none icon-search position-absolute"><FaSearch /></button>
            </div>
            <div className="col-lg-4 p-0 m-0 pb-2"></div>
            <div className="col-lg-4 p-0 m-0 pb-2">
              <div className="fillter-date-from-to row align-items-center px-0 py-1 m-0">
                <div className="input-date-from-to p-0 m-0 col-5">
                  <input id="input-search-date-from" type="date" className="form-control w-100" />
                </div>
                <div className="vertical-line"></div>
                <div className="input-date-from-to p-0 m-0 col-5">
                  <input id="input-search-date-to" type="date" className="form-control w-100" />
                </div>
                <div className="vertical-line"></div>
                <div className="input-date-from-to p-0 m-0 col item-middle text-center h-100">
                <button id="button-search-date-form" className="btn border-none bg-none icon-search position-absolute"><FaSearch /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default form
