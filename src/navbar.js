import React from 'react';
import './toolbar.css';
import DToggleButton from './DrawerToggleButton';
import SendButton from'./SendEmail.js';
import {Link} from 'react-router-dom';

const Navbar=props=>(
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
            
            <div className='toolbar_logo'>
            
                <img src='https://3.imimg.com/data3/KY/MC/MY-2527458/con-air-equipments-pvt-ltd-logo-120x120.png' />
                <h1>ConAir Equipments Private Limited</h1>
            </div>
            
            <div className='toolbar_navigation_items'>
            
            
                <ul>
                
                    <li className='yo'><DToggleButton click={props.drawerClickHandler}/><a href='#'>Products</a></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='CompanyProf'>Company Profile</Link></li>
                    <li><Link to='Contactpage'>Contact Us</Link></li>
                    <div className='space'></div>
                    <SendButton click={props.Dclick}/>
                </ul>
                

            </div>
        </nav>
    </header>
);


export default Navbar ;