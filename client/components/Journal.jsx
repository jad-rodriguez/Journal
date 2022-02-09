import React from 'react'

function Journal () {  

  

  return (
    <>
      <h1>Welcome to your Journal!</h1>
      <div>
        <form>
          <div>
            <label htmlFor="calendar" className="form-label">Today's Date:</label>
            <input type="date" id="mainCalendar" name="calendar" />
          </div>
          <div>
            <label htmlFor="journalEntry" className="form-label">What do you wanna write today?</label>
            <input type="text" className="entry-field" id="journalEntry" name="journal" />
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
