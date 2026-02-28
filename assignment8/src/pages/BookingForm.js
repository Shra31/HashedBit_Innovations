import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movies from "../data";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedMovie = movies.find(
    (movie) => movie.id === parseInt(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.mobile) {
      setError("All fields are required");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Mobile number must be 10 digits");
      return;
    }

    setError("");

    navigate("/confirmation", {
      state: {
        ...formData,
        movie: selectedMovie.title,
      },
    });
  };

  return (
    <div className="container">
      <h1>Book Ticket for {selectedMovie.title}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;