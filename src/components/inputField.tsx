import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type InputFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputForm: React.FC<InputFormProps> = ({
  handleSubmit,
  inputValue,
  setInputValue,
}) => {
  return (
    <Form onSubmit={handleSubmit} className='mb-3'>
      <Form.Group controlId='formInput' as='div'>
        <div>
          <Form.Label>New note</Form.Label>
          <Form.Control
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Enter text'
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </div>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
