import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Hero from './Hero';
import Card from './Card';
import authService from '../../services/authService';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  const currentUser = authService.getCurrentUser();
  return (
    <div style={{scrollBehavior:"smooth"}}>
      <div className="home-container">
        <Container id="container">
          <Row>
            <Col sm={12} md={6} id="heroCol">
              <h1 style={{fontFamily: 'Ubuntu, sans-serif'}}>Welcome to Univent</h1>
              <h5 style={{fontFamily: 'Ubuntu, sans-serif', color: 'GrayText'}}>Platform specially designed for university and students to organize and manage social events</h5>
              <h5 style={{fontFamily: 'Ubuntu, sans-serif', color: 'GrayText'}}>Let`s hop in</h5>
              {currentUser ? (
                <a href="#discover" id="getStarted">
                  <button id="getStartedBtn" >Get Started</button>
                </a>) : 
                (<Link to="/Signup">
                  <button id="getStartedBtn">Get Started</button>
                </Link>
              )}
            </Col>
            <Col sm={12} md={6}>
              <Hero />
            </Col>
          </Row>
        </Container>
      </div>  
      <div className="home-container2">
        <a id="discover"><h1 style={{fontFamily: 'Ubuntu, sans-serif'}}>Discover events by category</h1></a>
        <Row>
            <Col className='cards__items' sm={3} md={2}>
              <Card
                src={process.env.PUBLIC_URL + '/image/sports.png'}
                label='Sport' path='/EventsList/Sport'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/seminar.png'}
                label='Seminar' path='/EventsList/Seminar'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/unity.png'}
                label='Cultural' path='/EventsList/Cultural'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/movies.png'}
                label='Entertainment' path='/EventsList/Entertainment'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/healthcare.png'}
                label='Wellness' path='/EventsList/Wellness'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/music.png'}
                label='Music' path='/EventsList/Music'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/headphones.png'}
                label='E-sports' path='/EventsList/E-sports'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/promotion.png'}
                label='Career' path='/EventsList/Career'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/camera.png'}
                label='Photography' path='/EventsList/Photography'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/online-class.png'}
                label='Webinar' path='/EventsList/Webinar'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/college.png'}
                label='College' path='/EventsList/College'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src={process.env.PUBLIC_URL + '/image/layers.png'}
                label='Others' path='/EventsList/Others'/>
            </Col>
        </Row>
      </div>
    </div>
  );
}
export default Home;