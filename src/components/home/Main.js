import React from 'react'
import MoviesContainer from './MoviesContainer'
import './main.css'
import CommingSoon from './CommingSoon'

function Main() {
    return (
        <div className="container">
            <div className="coming-movies-container">
                <h5 className="headline">The Most Anticipated Movies Coming in 2021</h5>
                <CommingSoon />
            </div>
        </div>
    )
}

export default Main
