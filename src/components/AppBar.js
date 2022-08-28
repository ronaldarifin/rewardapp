import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const AppBar = () => {
  return (
   //TOFIX: how to remove the inline style so it will be more clean.
   //FIXED-> https://stackoverflow.com/questions/55625431/warning-validatedomnesting-a-cannot-appear-as-a-descendant-of-a
   <Navbar bg="light" >
      <Navbar.Brand as={Link} to="/">
         Home
      </Navbar.Brand>
      <Nav.Link as={Link} to="/configure">
         Config
      </Nav.Link>
   </Navbar>
  )
}

export default AppBar