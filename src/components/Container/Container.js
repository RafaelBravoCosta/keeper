import React, { useState } from "react";

import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";

export default function Container() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

/*    const editNote = (id) => {
      setNotes((prevNotes) => {
        return prevNotes.map((note, index) => {
          return index == id;
        });
      });
  };
*/

  return (
    <div>
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            //editNote={editNote}
          />
        );
      })}
    </div>
  );
}
