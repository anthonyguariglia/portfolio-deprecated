/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Router from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../components/Title'
import About from '../components/About'
import Proficiencies from '../components/Proficiencies'
import SpotiFeed from '../components/SpotiFeed'
import TicTacToe from '../components/TicTacToe'
import PortfolioProject from '../components/Portfolio'
import { SpotiFeedModal, TicTacToeModal, PortfolioModal } from './modals'

const Layout = props => {
  const [spotiFeedModalShow, setSpotiFeedModalShow] = useState(false)
  const [ticTacToeModalShow, setTicTacToeModalShow] = useState(false)
  const [portfolioModalShow, setPortfolioModalShow] = useState(false)

  return (
    <>
      <Title />
      <About />
      <Proficiencies />
      <Container fluid className='projects'>
        <div className='filler-div large-heading'>
          <p className=''>Projects</p>
        </div>
        <Row>

          <Col className='project-box' onClick={() => setPortfolioModalShow(true)} >
            <PortfolioProject />
          </Col>
          <PortfolioModal show={portfolioModalShow} onHide={() => setPortfolioModalShow(false)} />

        </Row>
        <Row>

          <Col className='project-box' onClick={() => setSpotiFeedModalShow(true)} >
            <SpotiFeed />
          </Col>
          <SpotiFeedModal show={spotiFeedModalShow} onHide={() => setSpotiFeedModalShow(false)} />

          <Col className='project-box' onClick={() => setTicTacToeModalShow(true)} >
            <TicTacToe />
          </Col>
          <TicTacToeModal show={ticTacToeModalShow} onHide={() => setTicTacToeModalShow(false)} />

        </Row>
        <Row className='filler-div'></Row>
      </Container>
    </>
  )
}

export default Layout
