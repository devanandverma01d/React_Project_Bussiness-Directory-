import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  //1. Hooks area
  //2. Function definition area
  let myLogout=()=>{
    window.localStorage.removeItem('jwt_token');
    window.location.href='/login';
  }
  //3. return statement
  return (
    <>
      <Navbar  expand="sm" className='h-100'>
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
              width="100"
              margin-left="250px"
              height="50"
              className="d-inline-block align-top me-5"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/"><button className="btn btn-primary me-3">Home</button></Link>
            <Link to="/detailed"><button className="btn btn-primary me-3">Detailed</button></Link>
            {
              window.localStorage.getItem('jwt_token')===null &&
              <>
                <Link to="/login"><button className="btn btn-primary me-3">Login</button></Link>
                <Link to="/register"><button className="btn btn-primary me-3">Register</button></Link>
              </>
            }
            {
              window.localStorage.getItem('jwt_token')!==null &&
              <>
                <Link onClick={myLogout}><button className="btn btn-danger me-2">Logout</button></Link>
              </>
            }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation;
