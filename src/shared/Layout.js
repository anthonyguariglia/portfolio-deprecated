/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Router from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../components/Title'
import About from '../components/About'
import Proficiencies from '../components/Proficiencies'
import SpotiFeed from '../components/SpotiFeed'
import TicTacToe from '../components/TicTacToe'

const Layout = props => {
  return (
    <>
      <Title />
      <About />
      <Proficiencies />
      <SpotiFeed />
      <TicTacToe />
    </>
  )
}

export default Layout
