import React from'react';
import './todoinput.css';
export default class Todoinput extends React.Component{

    constructor(props){
        super(props)

        this.state={value:'Enter items you are interested in'}
        this.handleChange=this.handleChange.bind(this);
        this.addTodo=this.addTodo.bind(this);

    }

    handleChange(e){
        this.setState({value:e.target.value});

    }

    addTodo(todo){
        
        this.props.addTodo(todo);
        this.setState({value:''});
        
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button className='addbutton' onClick={()=>this.addTodo(this.state.value)}>Add</button>
            </div>
 

        );
    }


















}