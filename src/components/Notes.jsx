import { React, useState } from "react";
import "../Note.css";
import Note from "./Note";
function Notes() {
  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div className="notes">
      <Note />
      <Note />
      <Note />
    </div>
  );
}
export default Notes;
