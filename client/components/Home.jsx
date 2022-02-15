import React from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

import Quotes from './Quotes'
import { getAllEntries } from '../actions'



function Home () {
  const dispatch = useDispatch()

  return (
    <>
      <h1>Welcome to your Journal!</h1>
      <div>
        <div>
          <Link to='/journal'>
            <button>Write something today!</button>
          </Link>
        </div>
       
        <div>
          <Link to='/entries'>
            <button onClick={() => dispatch(getAllEntries())}>Show Your Journal Entries</button>
          </Link>
        </div> 
        <div>
          <Quotes />
        </div>
      </div>
    </>
  )
}

export default Home
