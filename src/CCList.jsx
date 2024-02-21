import React, { Component } from "react";
import FCInput from "./FCInput";
import FCList from "./FCList";

export default class CCList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      grade: "",
      name: "",
    };
  }

  handleGradeChange = (e) => {
    this.setState({ grade: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddClick = () => {
    let pattern = /^[a-zA-Z]*$/;
    if (!pattern.test(this.state.name)) {
      console.log("Name should only be letters!");
      return;
    }
    let grade = parseFloat(this.state.grade);
    if (isNaN(grade)) {
      console.log("Grade should be a number");
      return;
    }
    if (grade > 100 || grade < 0) {
      console.log("Grade should be between 0 and 100");
      return;
    }
    let newPeople = [...this.state.people, { grade: this.state.grade, name: this.state.name, editing: false, editName: null }];
    this.setState({ people: newPeople });
  };

  delPersonOut = (index) => {
    let newPeople = [...this.state.people.slice(0, index), ...this.state.people.slice(index + 1)];
    this.setState({ people: newPeople });
  };

  editPersonOut = (index) => {
    let newPeople = this.state.people.map((person, i) => {
      if (i === index) {
        return { ...person, editing: true };
      }
      return person;
    });
    this.setState({ people: newPeople });
  };


  savePersonOut = (index) => {
    let newPeople = this.state.people.map((person, i) => {
      if (i === index) {
        if (person.editName === null) {
          return { ...person, editing: false };
        }
        return { ...person, name: person.editName, editing: false, editName: null };
      }
      return person;
    });
    this.setState({ people: newPeople });
  };

  tempNameChange = (e, index) => {
    let newPeople = this.state.people.map((person, i) => {
      if (i === index) {
        return { ...person, editName: e.target.value };
      }
      return person;
    });
    this.setState({ people: newPeople });
  };




  render() {
    return (
      <div>
        <FCInput
          onGradeChange={this.handleGradeChange}
          onNameChange={this.handleNameChange}
          onAddClick={this.handleAddClick}
        />
        <br />
        <FCList
          people={this.state.people}
          DelPeopleIn={this.delPersonOut}
          EditPersonIn={this.editPersonOut}
          SavePersonIn={this.savePersonOut}
          TempName={this.tempNameChange}
        />
      </div>
    );
  }
}
