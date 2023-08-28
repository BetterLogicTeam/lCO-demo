import React, { useState } from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from  "../Assets/logoo.png"
import Landing_page from '../Landing_page/Landing_page';
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className='main_header'>
        <Navbar collapseOnSelect expand="lg" >
      <Container className="main_navBAr">
        <Navbar.Brand className='main_logo_img' href="#home">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <div className="bg_overlay"></div>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <span className='d-block d-lg-none' onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
        <Navbar.Collapse id="responsive-navbar-nav"  className={show ? "show":""}>
          <Nav className="me-auto">
            <Nav.Link href="#features" className='header_link'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='header_link'>About Us</Nav.Link>
            <Nav.Link href="#pricing" className='header_link'>Audit</Nav.Link>
            <Nav.Link href="#pricing" className='header_link'>Roadmap</Nav.Link>
            <Nav.Link href="#pricing" className='header_link'>Tokenomics</Nav.Link>
            <Nav.Link href="#pricing" className='header_link'>Community</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='header_link'>BUY NOW</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='header_link'>
            WhitePaper
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Landing_page/>
    
    </div>
  )
}
