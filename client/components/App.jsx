import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import Home from './Home'
import Journal from './Journal'
import ShowEntries from './ShowEntries'
import Nav from './Nav'
import Register from './Register'


function App () { 
  cacheUser(useAuth0) 
  return (
    <>
      {/* <div> */}
        <Nav />
        <Routes>
          {/* <Route path='/' component={Nav} /> */}
          <Route path='/' element={<Home />}/>
          <Route path='/journal' element={<Journal />}/>
          <Route path='/entries' element={<ShowEntries />}/>
          <Route exact path='/register' element={<Register />} />
        </Routes>
      {/* </div> */}
    </>
  )
}

export default App
