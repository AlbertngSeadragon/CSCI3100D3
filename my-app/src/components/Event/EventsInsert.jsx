import React, { Component } from 'react'
import api from '../api'
import { FormControl, TextField } from "@material-ui/core";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
            <Formik
                initialValues={{
                    eventName: '',
                    eventType: '',
                    quota: '',
                    url: '',
                    date: '',
                    description: ''
                }}
                validationSchema={Yup.object().shape({
                    eventName: Yup.string().required("Event name is required"),
                    eventType: Yup.string().required("Event type is required"),
                    quota: Yup.string().required("Please choose number of participants"),
                    url: Yup.string().required("Image is required"),
                    date: Yup.string().required("Event date is required"),
                    description: Yup.string().required("Event description is required"),
                })}
                onSubmit={fields => {
                    console.log(fields)
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields))
                }}
                render={({ errors, status, touched }) => (
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
                                                className={'form-control' + (errors.eventName && touched.eventName ? ' is-invalid' : '')}
                                            />
                                        </FormControl>
                                        <ErrorMessage name="eventName" component="div" className="invalid-feedback" />
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
                                                            className={'form-control' + (errors.eventType && touched.eventType ? ' is-invalid' : '')}
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
                                                    <ErrorMessage name="eventType" component="div" className="invalid-feedback" />
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
                                                        className={'form-control' + (errors.quota && touched.quota ? ' is-invalid' : '')}
                                                    />
                                                    <ErrorMessage name="quota" component="div" className="invalid-feedback" />
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
                                                className={'form-control' + (errors.img && touched.img ? ' is-invalid' : '')}
                                            />
                                            <ErrorMessage name="img" component="div" className="invalid-feedback" />
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
                                                className={'form-control' + (errors.date && touched.date ? ' is-invalid' : '')}
                                            />
                                            <ErrorMessage name="date" component="div" className="invalid-feedback" />
                                        </FormControl>
                                        <FormControl fullWidth={true} margin="normal">
                                            <TextField
                                                label="Description"
                                                placeholder="Details about this event"
                                                name="description"
                                                type="name"
                                                value={description}
                                                onChange={this.handleChange}
                                                className={'form-control' + (errors.img && touched.img ? ' is-invalid' : '')}
                                            />
                                        </FormControl>
                                        <ErrorMessage name="description" component="div" className="invalid-feedback" />
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
                )}
            />
        )
    }
}

export default EventsInsert