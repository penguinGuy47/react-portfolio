import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    const formElement = e.currentTarget;
    e.preventDefault();
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Handle form submission
      setShowAlert(true);
      setForm({ name: '', email: '', message: '' });
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="mb-4">Contact Me</h2>
      {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        Your message has been sent!
      </Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            required 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={form.name} 
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            required 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={form.email} 
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            required 
            as="textarea" 
            rows={3} 
            placeholder="Your message" 
            name="message" 
            value={form.message} 
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Send
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
