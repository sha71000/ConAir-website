import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import Sidedrawer from'./SideDrawer.js';
import Backdrop from './Backdrop.js';
import Dialog from './Dialog.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CompanyProf from './CompanyProf.js';
import Contactpage from './Contactpage.js';
import Home from './Home.js';
import Footer from'./Foot.js';
class App extends React.Component{

  state={
    sideDrawerOpen:false,
    dialogOpen:false

  };


  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};

    });
  
   };
   backdropClickHandler=()=>{
     this.setState({sideDrawerOpen:false});
   }

   dialogClickHandler=()=>{
    this.setState((prevState)=>{
      return{dialogOpen:!prevState.dialogOpen};

    });
  };




   render(){
     let sDrawer;
     let bdrop;
     let diallog;


     if(this.state.sideDrawerOpen){
       sDrawer=<Sidedrawer />
       bdrop=<Backdrop click={this.backdropClickHandler}/>
     }

     if(this.state.dialogOpen){
       diallog=<Dialog />
     }

   return (
    
    <BrowserRouter>
    <div className='main'>
    
         <Navbar drawerClickHandler={this.drawerToggleClickHandler} Dclick={this.dialogClickHandler}/>  

          {diallog}
          {sDrawer}  
            {bdrop}


         
        <Switch>


          <Route exact path='/' component={Home} />
          <Route path='/CompanyProf' component={CompanyProf} />
          <Route path='/Contactpage' component={Contactpage} />
        
        

       
       </Switch>


      
    </div>
    
    


    </BrowserRouter>







  );
}
}

export default App;
