import React, { useEffect } from 'react'
import { getAllEntries } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function ShowEntries() {
    const dispatch = useDispatch()
    const entries = useSelector(state => state.journal)
    
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
        <h1>Here are your Journal Entries</h1>
        {entries.map((entry) => {
            return <ul>
                <li key={entry.id}>
                {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                }).format(entry.created)} - {entry.title}
                    {/* {entry.created} - {entry.title} */}
                </li>
                <p>{entry.paragraphs}</p>
            </ul>
        })}
        </>
    )
}

export default ShowEntries