import React, { useEffect } from 'react'
import { getAllEntries, patchEntry } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap'

function ShowEntries() {
    const dispatch = useDispatch()
    const entries = useSelector(state => state.journal)

    // const [updatedEntry, setUpdatedEntry] = useState()
    
    useEffect(() => {
        dispatch(getAllEntries())
    }, [])

    // This block can convert date to a 'Sun, 02 May 54094 11:04:16' GMT format
    // const convertDate = (num) => {
    //     if (num === NaN) {
    //       return num
    //     }
    //     else {
    //     var date = new Date(num * 1000)
    //       return date.toUTCString() }
    //   }

    return (
        <>
        <Container fluid="md">
            <Row>
                <h3>Here are your Journal Entries</h3>
            </Row>
            <Row>
                <Col>
                    {/* {entries.map((entry) => { */}
                    {/* return */}
                        <Table striped hover>
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Journal Entry</th>
                            </tr>
                        </thead>
                        {entries.map((entry) => { return <tbody>
                            <tr>
                            <td>{new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(entry.created)}</td>
                            <td>{entry.title}</td>
                            <td>{entry.paragraphs}</td>                           
                            </tr>
                        </tbody> })} 
                        </Table>
                     {/* <ul>
                         <li key={entry.id}><strong>Date Created:</strong> {new Intl.DateTimeFormat("en-GB", {
                             year: "numeric",
                             month: "long",
                             day: "2-digit"
                         }).format(entry.created)}
                         <p>
                             <strong>Journal Title:</strong> {entry.title}
                         </p>
                             {entry.created} - {entry.title}
                         </li>
                         <p>{entry.paragraphs}</p>
                     </ul>
                     })}  */}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ShowEntries