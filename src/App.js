import React, { Component } from 'react';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: 'Manu',
        age: 29
      },
      {
        id: 3,
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    username: 'russell13192',
    showPersons: false
  }



  // switchNameHandler = (newName) => {
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 28
  //       },
  //       {
  //         name: 'Manu',
  //         age: 29
  //       },
  //       {
  //         name: 'Stephanie',
  //         age: 27
  //       }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };


    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );

      btnClass = classes.red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          // style={style}
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      

        
        {/* <UserInput 
        changed={this.inputChangeHandler}/>
        <UserOutput username={this.state.username}/> */}
      </div>
      // </StyleRoot>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
