import React from "react";
import NoteCard from "./NoteCard";

type Note = {
  id: number;
  content: string;
};
type NoteListProps = {
  initialCards: Note[];
  onDelete: (id: number) => void;
};
const NoteList: React.FC<NoteListProps> = ({ initialCards, onDelete }) => {
  return (
    <div className='cards'>
      {initialCards.map((card) => (
        <NoteCard
          key={card.id}
          content={card.content}
          onDelete={() => onDelete(card.id)}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default NoteList;
