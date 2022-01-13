import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Proficiencies = props => {
  return (
    <Container fluid className='software-proficiencies'>
      <Row className='half-filler-div'>
      </Row>
      <Row className='filler-div'>
        <Col><p className='proficiencies'>Software Proficiencies</p></Col>
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>{<img src='https://icongr.am/devicon/javascript-original.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/jquery-plain-wordmark.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=a64dff' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=a64dff' />}</Col>
        <Col className='logos' />
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>{<img src='https://icongr.am/devicon/github-original-wordmark.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/heroku-original.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/react-original-wordmark.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128' />}</Col>
        <Col className='logos' />
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>{<img src='https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/express-original-wordmark.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/python-original.svg?size=128' />}</Col>
        <Col className='logos'>{<img src='https://icongr.am/devicon/cplusplus-original.svg?size=128' />}</Col>
        <Col className='logos' />
      </Row>
      <Row className='half-filler-div'>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Proficiencies
