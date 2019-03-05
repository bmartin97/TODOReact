import React, {Component} from 'react';
import Draggable from 'react-draggable'; 
import './AddPanel.css';

class AddPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            goal: "",
            details: "",
            color: "#49ff77",
        }
        this.add = this.props.add.bind(this);
    }
    changeName = (e) => {
        this.setState({ name: e.target.value });
    }
    changeGoal = (e) => {
        this.setState({ goal: e.target.value });
    }
    changeDetails = (e) => {
        this.setState({ details: e.target.value });
    }
    changeColor = (e) => {
        this.setState({ color: e.target.value});
    }
    resetFields = () => {
        this.setState({ name: "", goal: "", details: "", color: "#49ff77" });
    }
    buttonClick = (add) => {
        const {name, goal, details, color} = this.state;
        if(name !== ""){
            this.add(name, goal, details, color);
            this.resetFields();
        } else {
            alert("Task name required!");
        }
        
        
    }
    render(){
        return(
            <Draggable handle="header">  
                <span>
                    <div id="add-panel-container">
                        <header className="header">Add Task!</header>
                        <section className="flex column" id="create-new-task">
                            <input type="text" placeholder="Name" onChange={this.changeName} value={this.state.name}/>
                            <input type="text" placeholder="Goal" onChange={this.changeGoal} value={this.state.goal}/>
                            <textarea cols="40" rows="5" placeholder="Details" onChange={this.changeDetails} value={this.state.details}/>
                            <span>
                                <label>Color: </label>
                                <input type="color" onChange={this.changeColor} value={this.state.color}/>
                                <label id="hexCode" style={{ color: this.state.color }}>{this.state.color}</label>
                            </span>
                            <button onClick={() => this.buttonClick()}>Add</button>
                        </section>
                    </div>
                </span>
            </Draggable>
        );
    }
}
export default AddPanel;