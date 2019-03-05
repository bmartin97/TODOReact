import React, { Component } from 'react';
import Draggable from 'react-draggable'; 
import AddPanel from '../components/AddPanel/AddPanel';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      tasks:[],
    }
  }
  addTask = (task) => {
    let newTask = [...this.state.tasks];
    newTask.push(task);
    console.log(newTask);
    this.setState({tasks: newTask});
  }
  
  getTextColor = (hex) => {
    let rgb = this.hexToRgb(hex);
    let bgColorBrightness = Math.round(((parseInt(rgb.r) * 299) +
      (parseInt(rgb.g) * 587) +
      (parseInt(rgb.b) * 114)) / 1000);
    return (bgColorBrightness > 125) ? 'black' : 'white';
  }
  hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  removeTask = (index) => {
    let newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({tasks: newTasks});
  }


  renderTasks = () => {
    return this.state.tasks.map((task, index) => {
      return(
        <Draggable key={index} handle="header" defaultPosition={{ x: 200, y: 0 }}>
          <div className="task-container">
            <div className="task flex column">
              <header className="header" style={{ backgroundColor: task.Color, color: this.getTextColor(task.Color) }}>{task.Name}</header>
              <label>Goal:</label>
              <p>{task.Goal}</p>
              <label>Details: </label>
              <p>{task.Details}</p>
              <button onClick={() => this.removeTask(index)}>Remove</button>
            </div>
          </div>
        </Draggable>
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <AddPanel add={(Name, Goal, Details, Color) => this.addTask({Name, Goal, Details, Color})}/>
        {this.renderTasks()}
      </React.Fragment>
    );
  }
}

export default App;
