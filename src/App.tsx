import React, { useEffect, useState } from "react";
import axios from "axios";
import InputForm from "./components/inputField";
import HeadAndRefresh from "./components/headAndRefresh";
import Card from "./components/card";
import "./App.css";
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
    getNotes();
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
          <div className='head'>
            <HeadAndRefresh onButtonClick={handleButtonClick} />
          </div>
          <InputForm
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div className='cards'>
          {initialCards.map((card) => (
            <Card
              key={card.id}
              content={card.content}
              onDelete={() => handleDeleteCard(card.id)}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
