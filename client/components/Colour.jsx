import React, { useState } from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

function Colour () {
    const [colour1, setColour1] = useState({width: "100px", height: "300px", backgroundColor: randomHexColor()})
    const [colour2, setColour2] = useState({width: "100px", height: "300px", backgroundColor: randomHexColor()})
    const [colour3, setColour3] = useState({width: "100px", height: "300px", backgroundColor: randomHexColor()})

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setColour1({
            ...colour1,
            backgroundColor: randomHexColor()
        })
        setColour2({
            ...colour1,
            backgroundColor: randomHexColor()
        })
        setColour3({
            ...colour1,
            backgroundColor: randomHexColor()
        })
    }

    // Can use Array.From and only use 1 div
    // Can go further to have JSON data file to generate palletes
    setInterval(handleSubmit, 2000)

    return (
        <>
            <div className='container'>
                <div style={colour1}></div>
                <div style={colour2}></div>
                <div style={colour3}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Generate</button>
            </form>
        </>
    )
}

export default Colour