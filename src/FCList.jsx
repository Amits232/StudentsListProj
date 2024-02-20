import React from "react";

const FCList = ({ people, DelPeopleIn, EditPersonIn, SavePersonIn, TempName }) => {

  if (people.length > 0) {
    return (
      <div>
        Students List:
        <ul style={{ listStyle: "none" }}>
          {people.map((person, index) => (
            <li key={index}>
              {index + 1} - <br /> Name: {!person.editing ? person.name : <input onChange={(e) => TempName(e, index)} type="text" placeholder={person.name} />} <br /> Grade: {person.grade} <br />
              <button style={{ marginRight: "10px" }} onClick={() => DelPeopleIn(index)}>X</button>
              {person.editing ? <button onClick={() => SavePersonIn(index)}>Save</button> : <button onClick={() => EditPersonIn(index)}>Edit</button>}
              <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  else
    return (<div></div>)
}
export default FCList;
