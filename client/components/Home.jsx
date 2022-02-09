import React from 'react'
 
import { Link } from 'react-router-dom'
import Quotes from './Quotes'



function Home () {  
  return (
    <>
      <h1>Welcome to your Journal!</h1>
      <div>
        <Link to='/journal'>Write something today!</Link>
        <div>
          <Quotes />
        </div>
      </div>
    </>
  )
}

export default Home
