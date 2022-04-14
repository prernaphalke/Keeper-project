import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);


  // to trigger a function that can pass the note in sonct in createArea
  // backover to the app.jsx and to that we pass a function 
  
  // create a function addnote add this receives a prop note
  //this addNote id going to add as a value in props in createArea

   function addNote(newNote)
    {
       setNotes(prevNotes => {
         return [...prevNotes , newNote];
       });
    }
   
//we have to pass the index of the note that should deleted
  function deleteNote(id){
    setNotes(prevNotes => {
      return  prevNotes.filter((noteItem, index)=>
      {
            return index !== id ;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map( (noteItem , index) => {
        return (<Note 
        key ={index}
        id ={index}
        title ={noteItem.title} 
        content ={noteItem.content}
          onDelete={deleteNote}
        />);
      })}
      
      <Footer />
    </div>
  );
}

export default App;
  

