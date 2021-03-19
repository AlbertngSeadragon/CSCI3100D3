import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.date}</p>
      <p>{props.quota}</p>
      <p>{props.description}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
