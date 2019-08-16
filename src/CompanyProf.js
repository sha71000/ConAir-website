import React from 'react';
import './companypro.css';
import Footer from './Foot.js';
const CompanyProf=props=>(

    <div className='company'>
        <div className='company-content'>
            <div className='left'>
            <p>We, Con Air Equipments Pvt. Ltd., engaged in manufacturing, supplying and exporting a wide assortment of  Garage Equipment and Pneumatic Tools. These products are manufactured by our experienced team of professionals using optimum quality raw material tested on well-defined parameters procured from the certified vendors of the market. Our products are widely demanded by the who are associated with varied automobile, textile, defense, transport, mining, food & beverages, chemicals, textiles, electronics, telecommunications industries. Owing to the easy availability in varied sizes, patterns, dimensions and for its rigid construction, low maintenance, compact design, corrosion resistance and longer service life, this range is widely acknowledged in the market. Our product range also includes Washing Lifts, Small Compressors, Power Tools, Low Pressure Compressors, High Pressure Compressors, Air Tools and Air Compressors.</p>
            </div>

            <div className='right'>
               
               <div className='one'>
                   <h3>About Company</h3>
                   <i className='fas fa-dollar-sign'> Turnover </i><p>100000</p>

                   <i className='fas fa-city'> Location</i><p> Mumbai,India</p>


                  

               </div>
               <div className='two'>
                   <br />
                   <br />
                   <i className='fas fa-users'> Employees</i><p>1000</p>
                   <i className='fas fa-calendar-times'> Date of estblmt</i><p>1998</p>


               </div>



            </div>

        </div>    

        <div className='space'>

        </div>
        <div className='containerTeam'>

            <div className='team'>
                <h3>
                    Our Team
                </h3>
                <p>
   
                   We are assisted by a team of dedicated and skilled professionals who possess sound experience of the industry. Our professionals are hired by us only after they had passed in the varied recruitment test on the basis of their skills in the respective domain.</p>
    
                   <p>
                       In our team, we have the following members:</p>
                       <br />
                       

    
                   <p>>Engineers</p>
                   <p>>Technicians</p>
                   <p>>Quality analysts</p>
                   <p>>Research associates</p>
                   <p>>sales & marketing personnel</p>
                   <br />
                   <br />
                   
    
                   <p>All the professionals associated with us work in close coordination with each other at different stages of production in order to ensure smooth and effective production of the offered products. The main objective of our professionals is to enhance the quality of our range of products and thereby maximize client satisfaction. Furthermore, to keep our entire team updated with with the latest advancements of the industry, we arrange routine workshops and training sessions on regular interval of times.</p>
                   
            </div>

            <div className='teampic'>
                <img className='teams' src= {require('./images/Unknown.jpg')}/>
            </div>

        </div>
        <Footer />
        
        
    </div>

);

export default CompanyProf;