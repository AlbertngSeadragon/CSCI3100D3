import React, { Component } from 'react'
import api from '../api'
import { FormControl, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import {
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from "@material-ui/core";
import authHeader from '../../services/auth-header';
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

const sportList = [
    "Badminton",
    "Tennis",
    "Volleyball",
    "Basketball",
    "Baseball",
    "Running",
    "Table tennis",
    "Football",
    "Soccer"
];

class EventsInsert extends Component {
    constructor(props) {
        super(props)

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

    handleChange = async e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleIncludeEvent = async () => {
        const { eventName, eventType, date, quota, description, img, location } = this.state
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
            <Grid container justify="center" className="marginX-1">
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
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <FormControl
                                            fullWidth={true}
                                            variant="outlined"
                                            margin="normal"
                                        >
                                            <InputLabel id="demo-simple-select-filled-label">
                                                Type of Sport
                                </InputLabel>
                                            <Select
                                                label="Type of Sport *"
                                                name="eventType"
                                                type="name"
                                                value={eventType}
                                                onChange={this.handleChange}
                                                sportList={sportList}
                                            >
                                                <MenuItem value={eventType}>
                                                    <em>Choose Sport Type</em>
                                                </MenuItem>
                                                {sportList.map((sport) => {
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
                                                label="Number of Player *"
                                                placeholder="2-100 Players"
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