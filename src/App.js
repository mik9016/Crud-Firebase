import Note from "./components/Note";
import NoteList from "./components/NoteList";
import UploadImage from "./components/UploadImage";
import React from 'react'
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <h1>TodoList</h1>

      <Note />
      <hr />
      <NoteList />
      <hr />
      <UploadImage />
    </div>
  );
}

export default App;
