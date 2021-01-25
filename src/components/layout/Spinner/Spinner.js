import React from 'react'
import spinner from './Spinner.gif'
import './spinner.css'

function Spinner() {
    return (
        <div className="sss">
            <img src={spinner}
                 style={{ width:"200px", margin:"auto", display:"block" }}
                className="fp-loader"
                 alt='Loading...' />
        </div>
    )
}

export default Spinner
