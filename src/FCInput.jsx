import React from "react";

const FCInput = ({ onGradeChange, onNameChange, onAddClick }) => {
  return (
    <div>
      <br />
      Name: <input type="text" onChange={onNameChange} />
      <br /> <br />
      Grade: <input type="number" onChange={onGradeChange} />
      <br /> <br />
      <button onClick={onAddClick}>Add Student</button>
    </div>
  );
};

export default FCInput;
