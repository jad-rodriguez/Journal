import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const NavGroup = styled.nav`
  float: right;
`

const NavLink = styled(Link)`
  margin-right: 30px;
`

function Nav () {
  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff (e) {
    e.preventDefault()
    return logout()
    // console.log('log off')
  }

  function handleRegister (e) {
    e.preventDefault()
    return loginWithRedirect({
          redirectUri:`${window.location.origin}/register` 
      })
    // console.log('register')
  }

  function handleSignIn (e) {
    e.preventDefault()
    return loginWithRedirect()
    // console.log('sign in')
  }

  return (
    <>
      <NavGroup>
        <NavLink to='/'><button className="button-56" role="button">Home</button></NavLink>
        <IfAuthenticated>
          <a href='/' onClick={handleLogoff}><button className="button-56" role="button">Logoff</button></a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href='/' onClick={handleRegister}><button className="button-56" role="button">Register</button></a>
          <a href='/' onClick={handleSignIn}><button className="button-56" role="button">Sign in</button></a>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Nav










// import React, { useState } from 'react'
// // import { Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


// function Nav () {
//     const [show, setShow] = useState(false)
//     const handleClose = () => setShow(false)
//     const handleShow = () => setShow(true)

//   return (
//     <>
//       {/* <Button variant="primary" onClick={handleShow}>
//         Nav
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Journal</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body> */}
//             <Link to='/'>
//                 <button>
//                     Home
//                </button>
//             </Link>
//         {/* </Offcanvas.Body>
//       </Offcanvas> */}
//     </>
//   )
// }

// export default Nav