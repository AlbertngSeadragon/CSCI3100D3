import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import api from '../api';

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getTrending().then(events => {
            this.setState({
                events: events.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { events, isLoading } = this.state
        const carousel = events.map(event => 
            <Carousel.Item>
                <Link to="/About">
                    <img
                    className="d-block"
                    style={{width: '100%', height: '300px'}}
                    src={event.img}
                    alt={event.eventName}
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize: '22px'}} className="caption">{event.eventName}</h3>
                        <p style={{fontSize: '15px'}} className="caption">{event.description}</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>);
        return (
            <Carousel className="Carousel" style={{alignItems:'center'}}>
                {carousel}
            </Carousel>
        );
    }
}

export default Hero;