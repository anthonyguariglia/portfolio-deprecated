import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Title = props => {
  return (
    <>
      <Container fluid className='title-page'>
        <Row className='filler-div'>
          <Col></Col>
        </Row>
        <Row>
          <Col className='title'>
            <h1 className='name'>Anthony</h1>
            <h1 className='last-name'>Guariglia</h1>
            <div className='subheading'>
              <p>Software Developer | Electrical Engineer</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <nav className='nav-bar'>
              <li className='nav-items'>PROJECTS</li>
              <li className='bullet'>.</li>
              <li className='nav-items'>RESUME</li>
              <li className='bullet'>.</li>
              <li className='nav-items'>CONTACT</li>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='filler-div'></div>
          </Col>
        </Row>
        <Row className='half-filler-div'>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Title
