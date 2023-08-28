import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model_buy.css"
import bnb from "../Assets/bnb.png"
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../Assets/logoo.png"

export default function Model_buy(props) {
  return (
    <div>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='d-flex justify-content-center bg_heder'>
        <Modal.Title id="contained-modal-title-vcenter">
       <p className='excha'> Exchange</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='moedal_body_here'>
      <div>
       <p className='mb-0 text-white mb-1'>selling</p>
       <div className='d-flex gap-3'>
       <div className='selliiiig d-flex'>
        <input type="text" placeholder='Enter Your Amount' className='selling_input' />
        <button className='max_btn'>Max</button>
       </div>
       <div className='sellig d-flex gap-3'>
       <img className='bnb_log' src={bnb} alt="" />
       <Dropdown>
      <Dropdown.Toggle variant="success" className='drop_do' id="dropdown-basic">
       BNB
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">BNB</Dropdown.Item>
        <Dropdown.Item href="#/action-2">USDT</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
       </div>
       </div>
       </div>
      <div className='mt-3'>
       <p className='mb-0 text-white mb-1'>Buying</p>
       <div className='d-flex gap-3'>
       <div className='selliiiig d-flex'>
        <input type="text" placeholder='Enter Your Amount' className='selling_input' />
        <button className='max_btn'>Max</button>
       </div>
       <div className='sellig d-flex align-items-center gap-3'>
       <img className='bnb_log' src={logo} alt="" />
       <p className='mb-0 anthur'>ANTHURIM </p>
  
       </div>
       </div>
       </div>

       <div className='d-flex justify-content-center mt-3' >
        <button className='swap_btm'>Swap</button>
       </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    
    
    </div>
  )
}
