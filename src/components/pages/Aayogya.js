import React, { Component } from 'react';
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json";
import "./aayogya.css"
import Slider from '../common/Slider';
import slide1 from "./images/Aayogya/aayogya_1.jpg";
import slide2 from "./images/Aayogya/aayogya_2.jpg";
import slide3 from "./images/Aayogya/aayogya_3.jpg";
import slide4 from "./images/Aayogya/aayogya_4.jpg";
import slide5 from "./images/Aayogya/aayogya_5.jpg";
import slide6 from "./images/Aayogya/aayogya_6.jpg";
import slide7 from "./images/Aayogya/aayogya_7.jpg";
import slide8 from "./images/Aayogya/aayogya_8.jpg";
import slide9 from "./images/Aayogya/aayogya_9.jpg";
import slide10 from "./images/Aayogya/aayogya_10.jpg";

class Aayogya extends Component {
    state = {  }
    render() { 
        let slides=[{photo:slide1},
            {photo:slide2},{photo:slide3},{photo:slide4},{photo:slide5},{photo:slide6},{photo:slide7},
            {photo:slide8},{photo:slide9},{photo:slide10},
        ]
        return (  
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div>
                    <Slider slides={slides}/>
                </div>
                <div className="aayogya-main-container">
                     <h2 className="aayogya-content-heading">Aayogya:</h2>
                    <p className="aayogya-content-parra">Helping society for the healthy life and supporting them for medical treatment.</p>
                </div>  
            </div>
        );
    }
}
 
export default Aayogya;