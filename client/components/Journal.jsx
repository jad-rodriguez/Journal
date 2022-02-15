import React, { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'

import { addNewEntry } from '../actions'

function Journal () {
  // const [dateCreated, setDateCreated] = useState(new Date())  
  const [title, setTitle] = useState('')
  const [newEntry, setNewEntry] = useState('')
  

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntryObj = {
      // created: dateCreated,
      created: Date.now(),
      title: title,
      paragraphs: newEntry
    }

    dispatch(addNewEntry(newEntryObj))
    // setDateCreated(new Date())
    setTitle('')
    setNewEntry('')
  }

  return (
    <>
      <h1>Welcome to your Journal!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="calendar" className="form-label">Today's Date: </label>
            <input type="date" id="dateCreated" value={dateCreated} onChange={e => setDateCreated(e.target.value)}/> */}
            <label htmlFor='title'>Title: </label>
            <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="journalEntry" className="form-label">What do you wanna write today?</label>
            <input type="text" className="entry-field" id="journalEntry" value={newEntry} onChange={e => setNewEntry(e.target.value)} />
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Journal
