import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slideshow.css';

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <img className='s1' src={require('./images/6.jpg')}/>
          
          
          <div className='spacer2'></div>

          <div className='yos'>
            <h3>
              washing stand
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae feugiat ligula. Nulla in est a diam gravida malesuada. Praesent non efficitur eros. Mauris lobortis vestibulum elit. Ut sodales convallis sem id efficitur. Suspendisse potenti. Phasellus nec porta risus. Pellentesque libero dolor, vehicula eu elementum id, iaculis a lectus. Nunc quis libero pellentesque, condimentum enim sed, interdum sem. Curabitur et diam mauris</p>
          </div>

        </div>




        <div className="each-slide">
        <img className='s1' src={require('./images/5.jpg')}/>
          <div className='spacer2'></div>
          <div className='yos'>
            <h3>
            manual ramp
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae feugiat ligula. Nulla in est a diam gravida malesuada. Praesent non efficitur eros. Mauris lobortis vestibulum elit. Ut sodales convallis sem id efficitur. Suspendisse potenti. Phasellus nec porta risus. Pellentesque libero dolor, vehicula eu elementum id, iaculis a lectus. Nunc quis libero pellentesque, condimentum enim sed, interdum sem. Curabitur et diam mauris</p>
            
           </div>

        </div>




        <div className="each-slide">
        <img className='s1' src={require('./images/7.jpg')}/>
          <div className='spacer2'></div>
          <div className='yos'>
            <h3>
              charging station

            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae feugiat ligula. Nulla in est a diam gravida malesuada. Praesent non efficitur eros. Mauris lobortis vestibulum elit. Ut sodales convallis sem id efficitur. Suspendisse potenti. Phasellus nec porta risus. Pellentesque libero dolor, vehicula eu elementum id, iaculis a lectus. Nunc quis libero pellentesque, condimentum enim sed, interdum sem. Curabitur et diam mauris</p>
            </div>
        </div>
      </Slide>
    )
}

export default Slideshow;