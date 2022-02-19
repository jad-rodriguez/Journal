import React, { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Form, Col, Button, Modal, Container, Row } from 'react-bootstrap'

import { addNewEntry } from '../actions'

function Journal () {
  const token = useSelector(globalState => globalState.user.token)
  
  const [title, setTitle] = useState('')
  const [newEntry, setNewEntry] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntryObj = {
      // created: dateCreated,
      created: Date.now(),
      title: title,
      paragraphs: newEntry
    }

    dispatch(addNewEntry(newEntryObj, token))
    // setDateCreated(new Date())
    handleShow()
    setTitle('')
    setNewEntry('')
  }

  return (
    <>
      <Container fluid="md">
        <Row>
          <h3>What do you wanna write today?</h3>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write here...</Form.Label>
                <Form.Control as="textarea" rows={8} onChange={e => setNewEntry(e.target.value)}/>
              </Form.Group>

              <Button variant="primary" onClick={handleSubmit}>
                  Save
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Journal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Journal entry has been saved!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleSubmit, handleClose}>
                      Save Changes
                    </Button> */}
                  </Modal.Footer>
                </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
        
    </>
  )
}

export default Journal
