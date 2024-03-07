import React from "react";
import InputForm from "./inputField";

type InputFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};
const NoteForm: React.FC<InputFormProps> = ({
  handleSubmit,
  inputValue,
  setInputValue,
}) => {
  return (
    <div>
      <InputForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default NoteForm;
