import { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

import { FaInfo } from 'react-icons/fa'

class ModalInvalidDataAddProduct extends Component {
  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <FaInfo className="rounded-circle" style={{'padding': '5px', 'border': '1px solid', 'color': 'red'}} />&nbsp;&nbsp;<span className="font-weight-bold">Chú ý</span>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="h5">Bạn vui lòng nhập đầy đủ thông tin sản phẩm</span>
        </Modal.Body>
        <Modal.Footer>
          <Button id="cancel-modal-invalid-data">Đóng</Button>
        </Modal.Footer>
      </>
    )
  }
}

export default ModalInvalidDataAddProduct
