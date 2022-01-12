import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = props => {
  return (
    <Container fluid className='about'>
      <Row className='filler-div'>
      </Row>
      <Row className='filler-div'>
        <Col><p className='about-text'>About Me</p></Col>
      </Row>
      <Row>
        <Col className='about-me'>
          <Row className='about-me-text'>
            <p>
              Hello! I am a software developer who leverages a wide background
              of skills to deliver effective and efficient solutions to complex
              problems. With a background in electrical engineering, I am a
              skilled debugger who emphasizes attention to detail and risk
              mitigation. I am an avid problem-solver and use a creative
              problem-solving methodology to find both rapid and robust
              solutions to difficult tasks. I welcome new challenges and enjoy
              collaborating with team members to find the best solution. Most of
              all, I’m a personable and collaborative employee who puts team
              success above personal gain, and strive to be an essential member
              of any team I’m a part of.
            </p>
          </Row>
          <Row className='about-me-text'>
            <img className='about-me-image' src='https://i.imgur.com/yCZcw4O.jpg' />
          </Row>
        </Col>
      </Row>
      <Row className='filler-div'>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default About
