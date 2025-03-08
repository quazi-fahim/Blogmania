import React, { useState } from "react";
import {Box} from "@chakra-ui/react"
import './index.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt="100px">
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

        <label>Phone (Optional)</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />

        <label>Subject</label>
        <select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">Select Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
        </select>

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message..." required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
    </Box>
  );
};

export default ContactForm;
