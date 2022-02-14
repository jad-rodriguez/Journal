import React, { useState } from 'react'
// import { Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Nav () {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Nav
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Journal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> */}
            <Link to='/'>
                <button>
                    Home
               </button>
            </Link>
        {/* </Offcanvas.Body>
      </Offcanvas> */}
    </>
  )
}

export default Nav