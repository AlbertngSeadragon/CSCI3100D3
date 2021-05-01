import React, { Component } from 'react'
import api from '../api'
import { FormControl, TextField, Grid, Card, CardContent, Typography, InputLabel, Select, MenuItem } from "@material-ui/core";
import styled from 'styled-components'

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const eventList = [
    "Sport",
    "Seminar",
    "Cultural",
    "Entertainment",
    "Wellness",
    "Music",
    "E-sports",
    "Career",
    "Photography",
    "Webinar",
    "College",
    "Others"
];

class EventsInsert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventName: "",
            eventType: "",
            date: "",
            quota: "",
            description: "",
            img: "",
            location: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleIncludeEvent = this.handleIncludeEvent.bind(this);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //define array payload with event details for event insertion using api.insertEvent function
    handleIncludeEvent = async (e) => {
        e.preventDefault();
        const { eventName, eventType, date, quota, description, img, location } = this.state;
        const payload = { eventName, eventType, date, quota, description, img, location }

        await api.insertEvent(payload).then(res => {
            window.alert(`Event created successfully`)
            this.setState({
                eventName: "",
                eventType: "",
                date: "",
                quota: "",
                description: "",
                img: "",
                location: ""
            })
        })
    }

    render() {
        const { eventName, eventType, date, quota, description, img, location } = this.state
        return (
            <Grid container justify="center" className="marginX-1" style={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h3" component="h1" align="center" gutterBottom>
                                Host Your Event
                                    </Typography>
                            <form>
                                <FormControl fullWidth={true} margin="normal">
                                    <TextField
                                        label="Event Name *"
                                        placeholder=""
                                        name="eventName"
                                        type="text"
                                        value={eventName}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                <Grid container spacing={3} style={{ textAlign: "start" }}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth={true} variant="outlined" margin="normal">
                                            <InputLabel id="demo-simple-select-filled-label">
                                                Type of Event
                                                    </InputLabel>
                                            <Select
                                                label="Type of Event *"
                                                name="eventType"
                                                type="name"
                                                value={eventType}
                                                onChange={this.handleChange}
                                                eventList={eventList}
                                            >
                                                <MenuItem value={eventType}
                                                >
                                                    <em>Choose Event Type</em>
                                                </MenuItem>
                                                {eventList.map((sport) => {
                                                    return (
                                                        <MenuItem key={sport} value={sport}>
                                                            {sport}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth={true} margin="normal">
                                            <TextField
                                                label="Quota *"
                                                placeholder="2-100 Participants"
                                                name="quota"
                                                type="number"
                                                value={quota}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <FormControl fullWidth={true} margin="normal">
                                    <TextField
                                        label="Image URL"
                                        placeholder="EX: https://unsplash.com/photos/-JzHSIzNYnU"
                                        name="img"
                                        type="name"
                                        value={img}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                <FormControl fullWidth={true} margin="normal">
                                    <TextField
                                        label="Location"
                                        placeholder="EX: West 96th Street, New York, NY 10025"
                                        name="location"
                                        type="name"
                                        value={location}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                <FormControl margin="normal">
                                    <TextField
                                        type="date"
                                        name="date"
                                        value={date}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                <FormControl fullWidth={true} margin="normal">
                                    <TextField
                                        label="Description"
                                        placeholder="Details about this event"
                                        name="description"
                                        type="name"
                                        value={description}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                <Button
                                    className="primary-color marginB-2"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    onClick={this.handleIncludeEvent}
                                >
                                    Submit
                                    </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default EventsInsert