import React from "react";
import moviesData from "../MoviesData/MoviesData";
import './commingSoon.css'

const CommingSoon = () => {
  return (
    <div className="container">
        {moviesData.map((movie) => (
          <div className="card comming-soon-container">
            <img className="card-img-top" src={movie.image} alt="Card image cap" />
            <div className="card-body">
                <div className="title-date">
              <h5 className="card-title comming-soon-title">
                {movie.title}
              </h5>
              <span className="release-date">Release Date - {movie.releaseDate}</span>
              </div>
              <p className="card-text">
                {movie.describtion}
              </p>
              <a href={movie.imdbLink} className="btn btn-primary" target="_blank">
                Go to IMDB
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommingSoon;
