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
            <h1 className='name'><strong>ANTHONY</strong></h1>
            <h1 className='last-name'><strong>GUARIGLIA</strong></h1>
            <div className='subheading'>
              <p className='title-details'>Software Developer | Electrical Engineer</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <nav className='nav-bar'>
              <li className='nav-items' onClick={() => {
                window.scrollTo(0, 2800)
              }}><a className='project-button' href='#'>PROJECTS</a></li>
              <li className='bullet'>.</li>
              <li className='nav-items'><a className='project-button' href='#'>RESUME</a></li>
              <li className='bullet'>.</li>
              <li className='nav-items' onClick={() => {
                window.scrollTo(0, 3750)
              }}><a className='project-button' href='#'>CONTACT</a></li>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='filler-div title-logo-holder'>
              <a href='https://github.com/anthonyguariglia'><img className='title-logos' src='https://icongr.am/devicon/github-original.svg?size=40' /></a>
              <a href='https://www.linkedin.com/in/anthonyguariglia/' ><img className='title-logos' src='https://i.imgur.com/axzogcf.png'/></a>
            </div>
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
