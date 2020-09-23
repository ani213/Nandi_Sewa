import React, { Component } from 'react';
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json";
import "./samarpan.css"
import Slider from '../common/Slider';
import slide1 from "./images/Samarpan/samarpan1.jpg"
import slide2 from "./images/Samarpan/samarpan2.jpg"
import slide3 from "./images/Samarpan/samarpan3.jpg"
import slide4 from "./images/Samarpan/samarpan4.jpg"
import slide5 from "./images/Samarpan/samarpan5.jpg"
import slide6 from "./images/Samarpan/samarpan6.jpg"
import slide7 from "./images/Samarpan/samarpan7.jpg"
import slide8 from "./images/Samarpan/samarpan8.jpg"
import slide9 from "./images/Samarpan/samarpan9.jpg"
import slide10 from "./images/Samarpan/samarpan10.jpg"
import slide11 from "./images/Samarpan/samarpan11.jpg"


class Samarpan extends Component {
    state = {  }
    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3},{photo:slide4},{photo:slide5},
            {photo:slide6},{photo:slide7},{photo:slide8},{photo:slide9},{photo:slide10},{photo:slide11},
        ]
        return ( 
            <div>
            <Header />
            <Menubar navs={navData.navs}/>
            <div>
                    <Slider slides={slides}/>
            </div>
            <div className="samarpan-main-container">
                 <h2 className="samarpan-content-heading">Samarpan:</h2>
                <p className="samarpan-content-parra">anonymous donation during visit of shrine, temples or religious rituals.</p>
            </div>
        </div>
         );
    }
}
 
export default Samarpan;