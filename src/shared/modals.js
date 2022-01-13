import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

export const SpotiFeedModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SpotiFeed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h3 className='modaltitle'>
                A news-feed style display of your Spotify data
              </h3>
            </Col>
          </Row>
          <Row className='modal-text-content'>
            <p>
              SpotiFeed provides a way for Spotify users to see the recent uploads of their followed artists in a news-feed style display. Once signed in, the app allows the user to log into their Spotify account and then pulls their followed artists, finds their most recent singles and albums, and displays them in descending chronological order.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist' src='https://i.imgur.com/kPM1FaV.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              Once the most recent tracks have been pulled, the user is able to create their own playlists to store their favorite tracks. They can name their playlists as they like, add and remove songs and albums as they please, and their playlists will remain unchanged as their recent uploads evolve over time.
            </p>
          </Row>
          <Row>
            <Col className='small-images col-3'>
              <img className='playlist-aside' src='https://i.imgur.com/LWIqCFx.png' />
            </Col>
            <Col className='small-images col-9'>
              <img className='playlist' src='https://i.imgur.com/gXgFsth.png' />
            </Col>
          </Row>
          <Row className='modal-bottom-text-content'>
            <p>
              The end result is an app that lets users stay up-to-date with their favorite artists without the hassle of checking in on them one at a time.
            </p>
            <p className='note'>
              Note: Because SpotiFeed is still an app in development, each Spotify user&apos;s email must be registered before use. To get around this, I&apos;ve created a &apos;dummy&apos; Spotify account that can be used for testing, or you can reach out and I&apos;ll add your email to the list! Shoot me a message via the &apos;Contact&apos; section to learn more.
            </p><p className='note-alt'>
              Account email: spotifeed.user@gmail.com
            </p><p className='note-alt'>
              Account password: Sp0t!f33d
            </p>
          </Row>
          <Row className='links'>
            <Col>
              <button className='deployedSite' onClick={() => window.open('https://anthonyguariglia.github.io/SpotiFeed-Client/')}>
                <span>Deployed Site</span><img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
              </button>
            </Col>
            <Col>
              <button className='gitHubLink' onClick={() => window.open('https://github.com/anthonyguariglia/SpotiFeed-Client')}>
                <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span>GitHub Link</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const TicTacToeModal = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tic Tac Toe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h3 className='modaltitle'>
                A fresh take on a classic doodle-game
              </h3>
            </Col>
          </Row>
          <Row className='modal-text-content'>
            <p>
            This application creates a playable and responsive version of the common doodle-game of Tic Tac Toe. The game allows a user to play against themself or a friend and visually select the square on which they would like to make their move, while subsequently seeing the UI update with the symbol and space of their choice.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme' src='https://i.imgur.com/QrMCxuF.png' />
            </Col>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme stacked' src='https://i.imgur.com/sAGKYrj.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              Additionally, the user can choose to play against a  person or a computer. If the computer is selected, the user can then choose to play against one of two difficulties, and then select their desired symbol.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme' src='https://i.imgur.com/fHgz4yn.png' />
            </Col>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme stacked' src='https://i.imgur.com/M0O7DC1.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              As a style touch, the user can select their desired theme by clicking the color wheel in the top left corner, and choosing the color scheme they like most. The game will immediately update to reflect their selection.
            </p>
          </Row>
          <Row>
            <Col className='small-images col-6'>
              <img className='playlist-aside theme' src='https://i.imgur.com/aDxivUF.png' />
            </Col>
            <Col className='small-images col-6'>
              <img className='playlist theme' src='https://i.imgur.com/uQcu4gC.png' />
            </Col>
          </Row>
          <Row className='links'>
            <Col>
              <button className='deployedSite' onClick={() => window.open('https://anthonyguariglia.github.io/game-project/')}>
                <span>Deployed Site</span><img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
              </button>
            </Col>
            <Col>
              <button className='gitHubLink' onClick={() => window.open('https://github.com/anthonyguariglia/game-project')}>
                <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span>GitHub Link</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
