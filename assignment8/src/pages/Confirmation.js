import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const { name, email, mobile, movie } = location.state || {};

  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation-box">
      <h1>🎉 Booking Confirmed!</h1>

      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Movie:</strong> {movie}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
    </div>
  );
}

export default Confirmation;