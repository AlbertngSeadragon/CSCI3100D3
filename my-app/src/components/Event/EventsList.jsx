import React, { Component } from 'react'
import api from '../api'
import EventItem from './EventItem.jsx';

function getParameterByName(url = window.location.href) {
    var i = url.length - 1;
    var n = '';
    while (n != '/') {
        n = url.charAt(i);
        i = i - 1;
    }
    return url.substring(i + 2);
}

class EventsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            isLoading: false,
            typeofEvent: '',
        };
    }

    componentDidMount = async () => {
        var type = getParameterByName();
        console.log(type);

        if (type.match("EventsList")) {

            this.setState({ isLoading: true })

            await api.getAllEvents().then(events => {
                this.setState({
                    events: events.data.data,
                    isLoading: false,
                })
            })
        }
        else {
            await api.getEvents(type).then(events => {
                this.setState({
                    events: events.data.data,
                    isLoading: false,
                })
            })
        }
    }

    render() {
        const { events, isLoading } = this.state
        const eventsList = events.map(events =>
            <EventItem key={events._id} events={events} />
        );
        return (
            <div className="eventList">
                {eventsList}
            </div>
        );

    }
}

export default EventsList