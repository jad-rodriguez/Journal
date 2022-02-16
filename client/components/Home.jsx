import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
// import { useDispatch } from "react-redux"
// import { Link } from 'react-router-dom'

import Quotes from './Quotes'
// import { getAllEntries } from '../actions'



function Home () {
  // const dispatch = useDispatch()

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto"><h1>Welcome to your Journal!</h1></Col>
        </Row>
        <Row>
          <Col md="auto"><Quotes /></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
