import React from "react";
import Card from "./card";

type NoteCardProps = {
  id: number;
  content: string;
  onDelete: (id: number) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({ id, content, onDelete }) => {
  return (
    <>
      <Card key={id} content={content} onDelete={() => onDelete(id)} id={id} />
    </>
  );
};

export default NoteCard;
