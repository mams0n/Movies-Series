import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './moviecard.css'

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5 moviecard-container">
        <div className="card card-body movie-card bg-dark text-center h-100 d-flex flex-column">
          <img height='315px' className="w-100 mb-2 movie-poster" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary details-button mt-auto" to={'/movie/' + movie.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;