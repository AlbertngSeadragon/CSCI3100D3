import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardActions, Chip, Button, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';
import CardDeck from 'react-bootstrap/CardDeck';
import './event.css'
import AuthService from "../../services/authService";
import api from '../api';
import { Modal, ModalHeader, ModalBody, ModalFooter, Media, Table } from 'reactstrap';

class EventItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined,
            modal: false,
            hostName: undefined,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    onJoinClick = async (id) => {
        await api.joinEvent(id).then(res => {
            window.alert(`You have joined to the event`)
        })
    }

    getHostName = async (id) => {
        await api.getUserById(id).then(res => {

        })
    }

    render() {
        const { events } = this.props;
        const { currentUser } = this.state;
        return (
            <CardDeck style={{ float: 'left', marginBottom: '3rem', marginLeft: '3.5rem', marginTop: '1rem' }}>
                <Card className='eventItem' style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
                    <Link to={`/events/${events._id}`}>
                        <figure className="eventPic">
                            <img className="eventImg" src={events.img}
                                alt="Event" />
                        </figure>
                    </Link>
                    <CardHeader title={events.eventName} style={{ padding: '0' }} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '10px' }}>
                            {events.description}
                        </Typography>
                        <Chip icon={<CategoryIcon />} label={events.eventType} />
                        <Chip icon={<GroupIcon />} label={events.quota - events.numOfParticipants} style={{ marginLeft: '1rem' }} />
                    </CardContent>
                    <CardActions>
                        <Button size="large" style={{ backgroundColor: "#1888ff", color: "white", width: '100%' }} variant="contained" onClick={this.toggle}>
                            More
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader>{events.eventName}</ModalHeader>
                            <ModalBody>
                                <Media>
                                    <Media left>
                                        <Media object src={events.img} style={{ width: '130px', height: '180px', marginRight: '10px' }} alt="Event image" />
                                    </Media>
                                    <Media body>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" style={{ width: '30%' }}>Host:</th>
                                                    <td>{events.host}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{ width: '30%' }}>Type:</th>
                                                    <td>{events.eventType}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{ width: '30%' }}>Quota:</th>
                                                    <td>{events.quota - events.numOfParticipants}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{ width: '30%' }}>Description:</th>
                                                    <td>{events.description}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Media>
                                </Media>
                                {currentUser ? (
                                    <Button size="large" style={{ backgroundColor: "#1888ff", color: "white", width: 'fit-content', display: 'inline-flex' }} variant="contained" onClick={() => this.onJoinClick(events._id)}>
                                        Join
                                    </Button>) : (
                                    <Link to="/Signup" style={{ textDecoration: 'none' }}>
                                        <Button size="large" style={{ backgroundColor: "#1888ff", color: "white", width: 'fit-content', display: 'inline-flex' }} variant="contained">
                                            Login to Join
                                        </Button>
                                    </Link>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color='secondary' onClick={this.toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </CardActions>
                </Card>
            </CardDeck>
        );
    }
}

export default EventItem;