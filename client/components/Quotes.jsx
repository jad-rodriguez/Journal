import React, { useEffect, useState } from 'react'

import { getQuotes } from '../api'

function Quotes () {
    const [quotes, setQoutes] = useState({})

useEffect(() => {
    getQuotes()
    .then(quotes => {
        setQoutes({quotes: quotes.content, author: quotes.author})
    })
    .catch(err => {
        console.log(err.message)
    })
}, [])    

return (
    <>
    <div>
        <div>
            <p>{quotes.quotes}</p>
        </div>
        <div>
            <p>{quotes.author}</p>
        </div>
    </div>
    </>
    )
}

export default Quotes


