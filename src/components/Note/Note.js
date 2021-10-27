import React, { useState } from "react";
import { GithubPicker } from 'react-color';



export default function Note(props) {

  const [editNote, setEditNote] = useState(false);

  const [newNote, setNewNote] = useState({title:"", content:""});

  const [noteInput, setNoteInput] = useState({title:"", content:""});
  
  const [color, setColor] = useState("");

  
  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  const handleEdit = () => {
    setEditNote(true);
  };

  const handleChangeTitle = (event) => {
    setNoteInput(
      (prevValue) => ({
        ...prevValue,
        title:event.target.value
      })
    );
  }
  
  const handleChangeContent = (event) => {
    setNoteInput(
      (prevValue) => ({
        ...prevValue,
        content:event.target.value
      })
    );
  }

 
  const hadleSave = () => {
   
    setNewNote({title: noteInput.title, content: noteInput.content});

    setEditNote(false);
  }

  const handleSaveColor = (color) => {
    setColor(color.hex);
  };


  return (
    <div className='note' style={{backgroundColor: color}}>
      <h1>{editNote || newNote.title !== "" ? newNote.title : props.title}</h1>
      <p>{editNote || newNote.content !== "" ? newNote.content : props.content}</p>
      
      {editNote ? 
        <div>
          <input onChange={handleChangeTitle} value={noteInput.title} className="inputChangeContent" />
          <input onChange={handleChangeContent} value={noteInput.content} className="inputChangeContent" />
          
          <GithubPicker className="colorPickerSize" color={color} onChangeComplete={ handleSaveColor } />
          
          <button onClick={hadleSave} className="btnNote">SAVE</button>
        </div> : null
      }
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleEdit} className="btnNote">EDIT</button>
    </div>
  );
}