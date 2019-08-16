import React,{Component}from 'react';
import './contact.css';
import Todoinput from './Todoinput';
import TodoItem from './TodoItem';
class Contactpage extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                
            ],
            nextId:0
        }
        
        this.addTodo=this.addTodo.bind(this);
        this.removeTodo=this.removeTodo.bind(this);
    }

    addTodo(todoText){

        let todos=this.state.todos.slice();
        todos.push({id:this.state.nextId,text:todoText});
        this.setState({
            todos:todos,
            nextId:++this.state.nextId
        });
    }

    removeTodo(id){
        this.setState({
            todos:this.state.todos.filter((todo)=>todo.id!==id)
        })
    
    
    }


    render(){
        return(
    <div className='contact'>
  
        <div className='list'>
            <h2>Request quotation!</h2>
            <Todoinput  addTodo={this.addTodo}/>
            <ul>
                {
                    this.state.todos.map((e)=>{
                        return <TodoItem todo={e} key={e.id} id={e.id} removeTodo={this.removeTodo} />
                    })
                }
            </ul>
            <button className='subt'>Submit</button>
        </div>
        <div className='spacing'></div>



        <div className='flex-container'>
            <div className='d1'><h3>Where are we?</h3></div>
        
             <div classname='d2'>

                 <iframe classname='map' allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269532.74683022336!2d73.83288478271811!3d18.355919271339875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ed30b064dd29%3A0x57985097505f9b7c!2sConair+Equipments+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1562241071366!5m2!1sen!2sin"></iframe>

             </div> 

             <div className='d3'>
                 <h4>Address</h4>
                 <p>1120 kondhwa road,</p>

                 <p>off NH-4</p>
                 <p>Pune 411042,India</p>
             </div>

        </div>

    </div>
        );  

    }

}

export default Contactpage;