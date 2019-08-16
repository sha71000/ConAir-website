import React from 'react';
import './Home.css';
import Slideshow from './Slideshow.js';
import Footer from'./Foot.js';
const Home=props=>(
    <div className='home'>
        <div className='innerdiv'>
        <h2><b>Our Products</b></h2>
        <br />
        <br />

        <p>We, Con Air Equipments Pvt. Ltd., engaged in manufacturing, supplying and exporting a wide assortment of  Garage Equipment and Pneumatic Tools. These products are manufactured by our experienced team of professionals using optimum quality raw material tested on well-defined parameters procured from the certified vendors of the market. Our products are widely demanded by the who are associated with varied automobile, textile, defense, transport, mining, food & beverages, chemicals, textiles, electronics, telecommunications industries. Owing to the easy availability in varied sizes, patterns, dimensions and for its rigid construction, low maintenance, compact design, corrosion resistance and longer service life, this range is widely acknowledged in the market. Our product range also includes Washing Lifts, Small Compressors, Power Tools, Low Pressure Compressors, High Pressure Compressors, Air Tools and Air Compressors.
        </p>
        <br />
        <br />
        <Slideshow /> 

        

   
        </div>

        <div className='video'>
            <h2>Corporate Video</h2>
           <iframe classname='map2'width="50%" height="450" src="https://www.youtube.com/embed/Sab7Qosbw-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Footer />
    </div>



);

export default Home;