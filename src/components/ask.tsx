import React from "react";
import axios from "axios";

const NotesComponent = () => {
  const getNotes = () => {
    axios
      .get("http://localhost:7070/notes")
      .then((response: { data: string }) => {
        console.log(response.data); // Обработка ответа от сервера
      })
      .catch((error: string) => {
        console.error("Error fetching notes:", error);
      });
  };

  return <button onClick={getNotes}>Get Notes</button>;
};

export default NotesComponent;
