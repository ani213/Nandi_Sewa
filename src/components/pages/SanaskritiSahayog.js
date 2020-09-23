import React, { Component } from 'react'
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json";
import "./samarpan.css"
import Slider from '../common/Slider';
import slide1 from "./images/Sanskriti/sanskriti1.jpg";
import slide2 from "./images/Sanskriti/sanskriti2.jpg"
import slide3 from "./images/Sanskriti/sanskriti3.jpg"
import slide4 from "./images/Sanskriti/sanskriti4.jpg"

class SanaskritiSahayog extends Component {
    state = {  }
    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3},{photo:slide4},]
        return (
            <div>
            <Header />
            <Menubar navs={navData.navs}/>
            <div>
                    <Slider slides={slides}/>
                </div>
            <div className="samarpan-main-container">
                 <h2 className="samarpan-content-heading">Sanskritik Sahyog :</h2>
                <p className="samarpan-content-parra">For a better indian society organize and take part in such organization  of cultural promotion and tradition.</p>
            </div>
        </div>
          );
    }
}
 
export default SanaskritiSahayog;