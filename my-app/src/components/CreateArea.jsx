import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { FormControl, TextField } from "@material-ui/core";
import {InputLabel, Select, MenuItem} from "@material-ui/core";
import {withRouter} from 'react-router-dom';

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

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    type: "",
    date: "",
    quota: "",
    description: "",
    image: "",
    place: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      name: "",
      type: "",
      date: "",
      quota: "",
      description: "",
      image: "",
      place: ""
    });
    event.preventDefault();
    props.history.push('/eventsList');
  }

  return (
    <div className="mainform">
      <Grid container justify="center" className="marginX-1">
        <Grid item xs={12} sm={8} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h3" component="h1" align="center" gutterBottom>
                Host Your Event
              </Typography>
              <form onSubmit={submitNote}>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    label="Event Name *"
                    placeholder=""
                    name="name"
                    type="name"
                    value={note.name}
                    onChange={handleChange}
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
                        name="type"
                        type="name"
                        value={note.type}
                        onChange={handleChange}
                        sportList={sportList}
                      >
                        <MenuItem value={note.type}>
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
                        value={note.quota}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    label="Image URL"
                    placeholder="EX: https://unsplash.com/photos/-JzHSIzNYnU"
                    name="image"
                    type="name"
                    value={note.image}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    label="Location"
                    placeholder="EX: West 96th Street, New York, NY 10025"
                    name="place"
                    type="name"
                    value={note.place}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <TextField
                    type="date"
                    name="date"
                    value={note.date}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                  <TextField
                    label="Description"
                    placeholder="Details about this event"
                    name="description"
                    type="name"
                    value={note.description}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  className="primary-color marginB-2"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick = {submitNote}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(CreateArea);
