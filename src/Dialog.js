import React, { Component} from 'react';

import './dialog.css';


class Dialog extends React.Component{
    constructor(props){
        super(props);
    this.state={
        Name:'fvf',
        email:'',
        message:'',

    }
}
    handleName=(e)=>{
        this.setState({Name:e.target.value})
    }

    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }

    handleMessage=(e)=>{
        this.setState({message:e.target.value})
    }



    render(){
        return(
    <div className='dial'>
       <form>
           <label>Name </label>
           <input type='text' value={this.state.Name} onChange={this.handleName}/>
           <br />
           <br />

           <label>Email: </label>
           <input type='email' value={this.state.email} onChange={this.handleEmail}/>
           <br />
           <br />

           <label>Message</label>
           <br />
           <br />
           <textarea cols='35'rows='15' value={this.state.message} onChange={this.handleMessage}></textarea>

           <br />
           <br />
           <button type='submit'>Send</button>
           <button type='cancel'>Cancel</button>


       </form>
    </div>
        );
    }

}

export default Dialog;