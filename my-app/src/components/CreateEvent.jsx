import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import Flatpickr from "react-flatpickr";

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    type: "",
    date: "",
    quota: "",
    description: ""
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
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        <input
          name="name"
          placeholder="Event Name"
          onChange={handleChange}
          value={note.name}
        />
        <input
          name="type"
          placeholder="Event Type"
          onChange={handleChange}
          value={note.type}
        />
        <input type="date" onChange={handleChange} />

        <input
          name="quota"
          placeholder="Quota"
          onChange={handleChange}
          value={note.quota}
        />
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={note.description}
        />
        <input type="submit" onClick={submitNote} />
      </form>
    </div>
  );
}

export default CreateArea;
