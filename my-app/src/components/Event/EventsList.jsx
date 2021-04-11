import React, { Component } from 'react'
import api from '../api'
import EventItem from './EventItem.jsx';

class EventsList extends Component {
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
        const { events, isLoading } = this.state
        const eventsList = events.map(events => <EventItem key={events._id} events={events} />);

        return(
            <div className= "eventList">
                {eventsList}
            </div>
        );
        
    }
}

export default EventsList