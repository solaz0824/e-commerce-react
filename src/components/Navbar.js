import React from 'react'
import { withRouter } from 'react-router-dom'
import {Navbar, NavDropdown, Nav, FormControl, Form } from 'react-bootstrap'


const HeaderNavbar = (props) => {
  const path = props.location.pathname

  

  return (

    <Navbar bg="light" expand="lg">
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
      <Nav.Link className='ml-5' href="/">New</Nav.Link>
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









    // <div style={styles.navStyles}>
    //   <button onClick={()=>props.changeVisibility()}>open/close</button>

    //       <NavLink
    //         exact
    //         style={styles.default}
    //         activeStyle={styles.active}
    //         to={'/'} >
    //         Home
    //     </NavLink>
    //     <NavLink
    //         exact
    //         style={{color:'red'}}
    //         activeStyle={styles.active}
    //         to={'/sale'} >
    //         Sale
    //     </NavLink>
    //     <NavLink
    //         exact
    //         style={styles.default}
    //         activeStyle={styles.active}
    //         to={'/new'} >
    //         New
    //     </NavLink>
    //     <NavLink
    //         exact
    //         style={styles.default}
    //         activeStyle={styles.active}
    //         to={'/clothes'} >
    //         Clothes
    //     </NavLink>


    // </div>)


export default withRouter(HeaderNavbar)


// const styles = {
// navStyles: {
//     width: '100%',
//     height: '5vh',
//     backgroundColor: 'black',
//     color:'whitesmoke',
//     display: 'flex',
//     alignItems: "center",
//     justifyContent: "space-around",
//     fontSize: '15px',
//     position: 'sticky',
//     top: '0px',
//     fontFamily: 'serif'
// },
// active: {
//     color: "darkgrey"
// },
// default: {
//     textDecoration: "none",
//     color: "whitesmoke"
// }

// }
