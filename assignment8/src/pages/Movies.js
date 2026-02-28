import React from "react";
import { Link } from "react-router-dom";
import movies from "../data";

function Movies() {
  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;