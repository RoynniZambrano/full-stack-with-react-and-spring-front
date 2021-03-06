
import React, { Component } from 'react';
import FirstComponent, {SecondComponent}  from './components/learning-examples/FirstComponent'
import ThirdComponent  from './components/learning-examples/ThirdComponent'
import Counter  from './components/counter/Counter'
import TodoApp  from './components/todo/TodoApp'
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter></Counter>*/}
        <TodoApp></TodoApp>
      </div>
    );
  }
}


class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        My hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}




export default App;