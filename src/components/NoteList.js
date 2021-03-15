import React, { useContext, useState, useEffect } from "react";
import { CrudContext } from "../contexts/CrudContext";
import NoteTemplate from "./NoteTemplate";

export default function NoteList() {
  const [clearInput, sendNoteHandler, fetchData] = useContext(CrudContext);

  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    fetchData(setNoteList);
  }, []);

  return (
    <div>
      <h2>NoteList</h2>

      {noteList ? (
        noteList.map((note, index) => {
          return <NoteTemplate note={note.note} id={note.id} key={index} />;
        })
      ) : (
        <h1>no todo</h1>
      )}
    </div>
  );
}
