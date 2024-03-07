import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
const App: React.FC = () => {
  type initialCards = {
    id: number;
    content: string;
  };

  const [initialCards, setInitialCards] = useState<initialCards[]>([]);

  const getNotes = () => {
    axios
      .get("http://localhost:7070/notes")
      .then((response) => {
        setInitialCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };
  type Note = {
    id: number;
    content: string;
  };
  const addNote = (newNote: Note) => {
    axios
      .post("http://localhost:7070/notes", newNote, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Note added successfully:", response.data);
        getNotes();
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  };
  const deleteNote = (id: number) => {
    axios
      .delete(`http://localhost:7070/notes/${id}`)
      .then((response) => {
        console.log("Note deleted successfully, and now refreshing...");
        getNotes();
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };
  useEffect(() => {
    getNotes();
  }, []);

  const handleDeleteCard = (id: number) => {
    deleteNote(id);
  };

  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    getNotes();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
    const newNote: Note = { id: 0, content: inputValue };
    addNote(newNote);
    getNotes();
  };

  return (
    <>
      <div className='App'>
        <div>
          <Header onButtonClick={handleButtonClick} />
          <NoteForm
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <NoteList initialCards={initialCards} onDelete={handleDeleteCard} />
      </div>
    </>
  );
};

export default App;
