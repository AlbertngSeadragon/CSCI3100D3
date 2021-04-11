import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardContent, CardActions, Chip, Button, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import CardDeck from 'react-bootstrap/CardDeck';
class EventItem extends Component{
    render(){
        const {events} = this.props;
        
        return(
            <CardDeck style={{float: 'left', marginBottom:'3rem', marginLeft:'3.5rem', marginTop: '1rem', backgroundColor: 'red'}}>
                <Card style={{width: '20rem', backgroundColor: '#dbd3ca'}} >
                    <Link to={`/events/${events._id}`}>
                        <img style={{width: '100%', height: '300px'}} src={events.img}
                        alt="Sport" />
                    </Link>
                    <CardHeader  title={events.eventName} />
                    <CardContent>
                        <Typography  variant="body2" color="textSecondary" component="p">
                            {events.description}
                        </Typography>
                        <Chip icon={<SportsBasketballIcon />} label={events.eventType}/>
                        <Chip icon={<GroupIcon />} label={events.quota}/>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="large" style={{backgroundColor: "#4be369"}} variant="contained" fullWidth  component={Link} to={`/event/${events._id}`}>
                            More Info
                        </Button>
                    </CardActions>
                </Card>
            </CardDeck>
        );
    }
}

export default EventItem;