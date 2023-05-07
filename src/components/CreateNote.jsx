import LinearProgress from "@mui/material/LinearProgress";
import { React } from "react";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
export default CreateNote;
