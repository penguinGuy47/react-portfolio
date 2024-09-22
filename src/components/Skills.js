import React from 'react';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'Java', proficiency: 80, logo: '/images/javalogo.png' },
    { name: 'Python', proficiency: 75, logo: '/images/pythonlogo.png' },
    { name: 'MySQL', proficiency: 70, logo: '/images/mysql-logo.png' },
    { name: 'JavaScript', proficiency: 66, logo: '/images/jslogo.png' },
    { name: 'Bootstrap', proficiency: 65, logo: '/images/bootstraplogo.png' },
    { name: 'React', proficiency: 65, logo: '/images/reactlogo.png' },
    { name: 'C++', proficiency: 60, logo: '/images/c++logo.png' },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="intro-text my-4 py-4 border-bottom">My Skills</h2>
        {skills.map((skill, index) => (
          <Row key={index} className="align-items-center mb-4">
            <Col xs={2} md={1} className="text-center">
              <Image
                src={skill.logo}
                alt={`${skill.name} Logo`}
                height="30px"
                className="mb-2"
                fluid
              />
            </Col>
            <Col xs={10} md={11}>
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <ProgressBar now={skill.proficiency} />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
