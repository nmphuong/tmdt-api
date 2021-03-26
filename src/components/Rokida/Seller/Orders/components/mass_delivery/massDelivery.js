import { Component } from 'react'
import { Tabs, Tab, Form } from 'react-bootstrap'
// import { FaSearch } from 'react-icons/fa'
import Table from '../table.jsx'

class massDelivery extends Component {
  render() {
    var thead = ['Sản phẩm', 'ID Đơn hàng', "Người mua", 'Đơn vị vận chuyển', 'Trạng thái đơn hàng']
    var data = []
    return (
      <>
        <div className="col-12">
          <div className="row p-0 m-0">
            <div className="col-lg-12 px-0 py-1 m-0">
              <span className="font-weight-bold">
                Chọn Ngày/In Phiếu Giao Hàng Loạt
              </span>
              <p>Chọn ngày giao hàng và in phiếu giao hàng cho nhiều đơn mỗi lần</p>
            </div>
            <div className="col-12 px-0 py-1 m-0">
              <div className="row p-0 m-0">
                <Tabs defaultActiveKey="waiting-delivery" id="uncontrolled-tab-example">
                  <Tab eventKey="waiting-delivery" title="Chờ giao hàng">
                    <div className="row m-0 p-0">
                      <div className="col-lg-4 p-0 m-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Lọc đơn:</Form.Label>
                          <Form.Control as="select">
                            <option>VNPost Tiết Kiệm</option>
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="col-12 p-0 m-0">
                        <div className="row p-0 m-0">
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Loại đơn hàng:</Form.Label>
                              <Form.Control as="select">
                                <option>Tất cả</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Tiến độ xử lý:</Form.Label>
                              <Form.Control as="select">
                                <option>Tất cả</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Sắp xếp theo:</Form.Label>
                              <Form.Control as="select">
                                <option>Ngày xác nhận đặt đơn: Xa - Gần</option>
                                <option>Ngày xác nhận đặt đơn: Gần - Xa</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 p-0 m-0">
                        <Table thead={thead} data={data} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="promissory-note" title="Tạo phiếu">
                  <div className="row m-0 p-0">
                      <div className="col-lg-4 p-0 m-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Lọc đơn:</Form.Label>
                          <Form.Control as="select">
                            <option>VNPost Tiết Kiệm</option>
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="col-12 p-0 m-0">
                        <div className="row p-0 m-0">
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Loại đơn hàng:</Form.Label>
                              <Form.Control as="select">
                                <option>Tất cả</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Tiến độ xử lý:</Form.Label>
                              <Form.Control as="select">
                                <option>Tất cả</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                          <div className="col pl-0">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Sắp xếp theo:</Form.Label>
                              <Form.Control as="select">
                                <option>Ngày xác nhận đặt đơn: Xa - Gần</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 p-0 m-0">
                        <Table thead={thead} data={data} />
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default massDelivery
