import './Home.css';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Hero from './Hero';
import Card from './Card';
import authService from '../../services/authService';
import {Link} from 'react-router-dom';

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
                  <button className="btn" id="button" >Get Started</button>
                </a>) : 
                (<Link to="/Signup">
                  <button className="btn" id="button">Get Started</button>
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
                src='https://www.flaticon.com/svg/vstatic/svg/857/857418.svg?token=exp=1618032303~hmac=18a8033d24dbe19bbd523e1c3219f4e3'
                label='Sport' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/1478/1478942.svg?token=exp=1618032453~hmac=90049d875586f5296e8b4d958f2b849a'
                label='Seminar' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/3090/3090731.svg?token=exp=1618032492~hmac=1749d007fa8aeefc075f5bcea3733489'
                label='Cultural' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/1179/1179069.svg?token=exp=1618032542~hmac=27196eacdda73c8ff802b68403897f11'
                label='Entertainment' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/2786/2786289.svg?token=exp=1618032573~hmac=61e1b4e1a882f69c091945114fcbbf9e'
                label='Wellness' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/3094/3094069.svg?token=exp=1618032638~hmac=93058141b7f2fc0ccb6417eb5be3ad3b'
                label='Music' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/2790/2790315.svg?token=exp=1618032668~hmac=bc94ee4ab7af5815b30ff6ab6b777b7f'
                label='E-sports' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/1589/1589592.svg?token=exp=1618032759~hmac=89ce9b3173cd9d69bdf3ce2259e66e00'
                label='Career' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/1042/1042339.svg?token=exp=1618032928~hmac=d86550ef3b9010f85704a0e43f0b4b4d'
                label='Photography' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/3449/3449605.svg?token=exp=1618033556~hmac=32bd7454477725f53d04af4bcfc7ec4b'
                label='Webinar' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/4345/4345684.svg?token=exp=1618033074~hmac=6e3baa65aa8725315caddc6539c1e191'
                label='College' path='/'/>
            </Col>
            <Col className='cards__items' sm={3} md={2}>
              <Card src='https://www.flaticon.com/svg/vstatic/svg/1055/1055683.svg?token=exp=1618033153~hmac=d4854f80fa85c44ff5c2541cd47de762'
                label='ITSC' path='/'/>
            </Col>
        </Row>
      </div>
      <div className="home-container3">
        <h1 style={{fontFamily: 'Ubuntu, sans-serif'}}>Home page 3</h1>
      </div>
    </div>
  );
}
export default Home;