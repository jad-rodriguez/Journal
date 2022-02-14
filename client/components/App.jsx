import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


import Home from './Home'
import Journal from './Journal'
import ShowEntries from './ShowEntries'
import Nav from './Nav'


function App () {  
  return (
    <>
      {/* <div> */}
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/journal' element={<Journal />}/>
          <Route path='/entries' element={<ShowEntries />}/>
        </Routes>
      {/* </div> */}
    </>
  )
}

export default App
