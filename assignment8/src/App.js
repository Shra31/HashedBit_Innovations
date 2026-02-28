import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import Confirmation from "./pages/Confirmation";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;