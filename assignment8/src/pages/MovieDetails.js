import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <br />
      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;