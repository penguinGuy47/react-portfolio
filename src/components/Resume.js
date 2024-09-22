import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Header from './Header';

const Resume = () => {
  return (
    <div>
      <Header />
      {/* Resume Section */}
      <section id="resume" className="py-5">
        <Container className="d-flex justify-content-center">
          <img src="/images/Resume-KL.png" alt="resume" className="img-fluid" />
        </Container>
      </section>
    </div>
  );
};

export default Resume;
