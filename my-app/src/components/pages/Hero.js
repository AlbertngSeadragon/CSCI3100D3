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

        await api.getAllEvents().then(events => {
            this.setState({
                events: events.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        // const { events, isLoading } = this.state
        // const carousel = events.map(events => 
        //     <Carousel.Item>
        //         <Link to="/About">
        //             <img
        //             className="d-block"
        //             style={{width: '100%', height: '300px'}}
        //             src={events.img}
        //             alt={events.name}
        //             />
        //             <Carousel.Caption>
        //                 <h3 className="caption">{events.name}</h3>
        //                 <p className="caption">{events.description}</p>
        //             </Carousel.Caption>
        //         </Link>
        //     </Carousel.Item>);
        return (
            // {carousel}
            <Carousel className="Carousel">
                <Carousel.Item>
                    <Link to="./About">
                        <img
                        className="d-block"
                        style={{width: '100%', height: '300px'}}
                        src="https://www.cpr.cuhk.edu.hk/wp-content/uploads/resource/videoandphoto/photo-02.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="caption">Fist slide</h3>
                            <p className="caption">Bla bla bla</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="./About">
                        <img
                        className="d-block"
                        style={{width: '100%', height: '300px'}}
                        src="https://www.cpr.cuhk.edu.hk/wp-content/uploads/resource/videoandphoto/photo-02.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="caption">Second slide label</h3>
                            <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="./About">
                        <img
                        className="d-block"
                        style={{width: '100%', height: '300px'}}
                        src="https://www.cpr.cuhk.edu.hk/wp-content/uploads/resource/videoandphoto/photo-03.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="caption">Third slide label</h3>
                            <p className="caption">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Hero;