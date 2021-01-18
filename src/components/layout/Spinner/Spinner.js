import React from 'react'
import spinner from './Spinner.gif'

function Spinner() {
    return (
        <div className="fp-container">
            <img src={spinner}
                 style={{ width:"200px", margin:"auto", display:"block" }}
                className="fp-loader"
                 alt='Loading...' />
        </div>
    )
}

export default Spinner
