import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
        <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="detailed" className="nav-link">Detailed</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="login" className="nav-link">Login</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="register" className="nav-link">Register</Link>
        </Nav.Item>
        
      </Nav>
    </div>
  )
}

export default Navigation
