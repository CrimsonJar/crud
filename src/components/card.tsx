import React from "react";

type CardProps = {
  id: number;
  content: string;
  onDelete: (id: number) => void;
};

const Card: React.FC<CardProps> = ({ id, content, onDelete }) => {
  return (
    <div className='card '>
      <div className='card-body'>
        <h5 className='card-title'>Card {id}</h5>
        <p className='card-text'>{content}</p>
        <div className='del-btn'>
          <button onClick={() => onDelete(id)} className='btn btn-danger '>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
