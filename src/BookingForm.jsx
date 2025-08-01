import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateTime: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, dateTime: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.dateTime) {
      alert("Please select a date and time.");
      return;
    }

    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nDate & Time: ${formData.dateTime.toLocaleString()}`
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "auto" }}>
      <div>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          Email: <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          Select Date & Time (AM/PM): <br />
          <DatePicker
            selected={formData.dateTime}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Click to select date & time"
            required
          />
        </label>
      </div>

      <button type="submit" style={{ marginTop: 15 }}>
        Submit
      </button>
    </form>
  );
}

export default BookingForm;


