import './App.css';
import { Component } from 'react';
import Person from './component/Person';
class App extends Component {
  render(){
  return (
    <>
      <div className="App">
        <h1>This is my first ReactJS app, Please don't ...</h1> 
        <Person name="Tedu1" age="14"/>
        <Person name="Tedu2" age="15"/>
        <Person name="Tedu3" age="16"/>
        <Person name="Tedu4" age="17">My hobbies: teaching</Person>
        <Person name="Tedu5" age="17">My hobbies: teaching</Person>
        
      </div>
<h1>No meaning</h1>
       <p>Des</p>
    </>
  );
  }
} 

export default App;
 