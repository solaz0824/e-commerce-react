import React from 'react'
import { withRouter } from 'react-router-dom'
import {Navbar, NavDropdown, Nav, FormControl, Form } from 'react-bootstrap'


const HeaderNavbar = (props) => {
  const path = props.location.pathname

  

  return (

    <Navbar bg="light" expand="lg" className='navbar'> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   { 
     path === '/' || path ==='/sale' || path ==='/new' 
     ? <NavDropdown title="Category" id="basic-nav-dropdown">
     {
         props.categories.map((ele, i) => { 
         return <NavDropdown.Item key = {i} onClick={()=>{props.getProductsByCategoryId(ele._id, ele.category)}}>{ele.category}</NavDropdown.Item>
         })
         }
         
       </NavDropdown>
: null 
  }
    
      <Nav.Link className='ml-5' href="/">Home</Nav.Link>
      <Nav.Link className='ml-5' href="/sale">Sale</Nav.Link>
      <Nav.Link className='ml-5' href="/contactus">Contact us</Nav.Link>
    </Nav>
    
    { 
     path === '/' || path ==='/sale' || path ==='/new' 
   ? <Form inline>
      <FormControl onChange={(e)=>props.search(e)} type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
    : null }

  </Navbar.Collapse>
</Navbar>

)}








export default withRouter(HeaderNavbar)


