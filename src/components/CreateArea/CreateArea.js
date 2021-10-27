import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { amber } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const FatButton = styled(Fab)({
  backgroundColor: amber[500],
  color: "#fff",
  "&:hover": {
    backgroundColor: amber[400],
    borderColor: amber[400],
  }
});

export default function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [expandedNote, setExpandedNote] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    props.addNote(noteText);
    setNoteText({
      title: "",
      content: "",
    });
  };

  const { title, content } = noteText;
  const amberColor = amber[500];

  return (
    <div>
      <form>
        {expandedNote && (
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Title'
          />
        )}
        <textarea
          name='content'
          value={content}
          row={expandedNote ? "6" : "1"}
          placeholder='Take a note...'
          onChange={handleChange}
          onClick={() => setExpandedNote(true)}
        />
        <Zoom in={expandedNote}>
          <Fab
            aria-label='add'
            color='primary'
            className='addnote-btn'
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
