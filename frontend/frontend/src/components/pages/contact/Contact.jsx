import React from "react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaTag, FaComments } from "react-icons/fa";
import './Contact.css';

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");

  //Handling the form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Preparation of the data to be sent to the backend.
    const formData = { name, email, message, subject, status };

    try {
      // Send a POST request to your backend endpoint
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully");
        // Optionally clear form fields:
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Message failed to send Successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };
  
  return (
    <div className="contact-container">
      <div className="container">
        <section className="contact-hero">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">I'd love to hear from you. Let's create something amazing together.</p>
        </section>
        
        <div className="contact-form-container">
          <div className="contact-form">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">Fill out the form below and I'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit}>
              <div className="contact-input">
                <FaUser className="contact-icon" />
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-input">
                <FaEnvelope className="contact-icon" />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="contact-input">
                <FaTag className="contact-icon" />
                <input
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="contact-input">
                <FaComments className="contact-icon" />
                <textarea
                  value={message}
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-button">Send Message</button>
              {status && <p className={`contact-status ${status.includes("successfully") ? "success" : status.includes("failed") || status.includes("Error") ? "error" : ""}`}>{status}</p>}
            </form>
          </div>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>emarube89@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Location</h3>
              <p>Nakuru, Kenya  </p>
            </div>
            <div className="contact-info-item">
              <h3>Social</h3>
              <div className="contact-social-links">
                <a href="https://github.com/marube2005" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/elvis-marube-499bbb299/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/ElvisMarub44524" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
