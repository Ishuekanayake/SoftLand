import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from './Images/new.png';


export default function Header() {
  return (
    <div style={{backgroundColor:'#2E719F'}}>
    <Navbar className='header_main container'>
            
        {/* <h1><Navbar.Brand href="/">SoftLand</Navbar.Brand></h1> */}
        <h3><Nav.Link href="/about" style={{color:'white'}}>SoftLand</Nav.Link></h3>
        <Nav className="me-auto flex">
            <h6><Nav.Link href="/" style={{color:'white',marginLeft:400}}>Home</Nav.Link></h6>
            <h6><Nav.Link href="/features" style={{color:'white',marginLeft:24}}>Features</Nav.Link></h6>
            <h6><Nav.Link href="/" style={{color:'white',marginLeft:24}}>Pricing</Nav.Link></h6>
            <h6><Nav.Link href="/" style={{color:'white',marginLeft:24}}>Blog</Nav.Link></h6>
            <h6><Nav.Link href="/" style={{color:'white',marginLeft:24}}>Drop Down</Nav.Link></h6>
            <h6><Nav.Link href="/" style={{color:'white',marginLeft:24}}>Contact Us</Nav.Link></h6>    
        </Nav>
    </Navbar>
    </div>
  )
}