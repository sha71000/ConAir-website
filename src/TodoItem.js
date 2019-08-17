import React from 'react';
import './todoitem.css';


export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

    removetodo(id){
        this.props.removeTodo(id);

    }

    render(){
        return(
            <div className='itemcon'>
                <button className='removeTodo' onClick={(e)=>this.removetodo(this.props.id)}>remove</button>{this.props.todo.text}
            </div>

        
           ); }  



        }


