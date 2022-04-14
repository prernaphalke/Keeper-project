import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title :"",
    content : ""
});

function handleChange(event)
{
 const {name, value } = event.target;

 setNote(prevNote => { 
   return {
     ...prevNote,
     [name]:value 
    };
  });
}

function submitNote(event) {
  // whenever onclick on button an event gets triggered and the default behavior of the page is to refresh the page 
  // to stop this beahavior we use 
  props.onAdd(note);
   setNote(
     {
       title :"",
       content :""
     });
  event.preventDefault();
}

// setNote() i submitNote after we submit our note we should clear out the area so 
// that we can get a blank space for netx adding material


  return (
    <div>
      <form className="create-note">
        <input name="title"  onChange={handleChange} 
        value ={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value ={note.content} placeholder = "Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

// create a constant note and function setNote
// add these value of title and content in the input sector
// onChange  call function handleChange 
