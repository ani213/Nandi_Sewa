import React, { Component } from 'react'
import Header from '../common/Header';
import navData from "./config.json";
import Menubar from '../common/Menubar';
import "./nandisamarth.css";
import Slider from '../common/Slider';
import slide1 from "./images/NandiSamarth/nandisamarth1.jpg"
import slide2 from "./images/NandiSamarth/nandisamarth2.jpg"
import slide3 from "./images/NandiSamarth/nandisamarth3.jpg"
import slide4 from "./images/NandiSamarth/nandisamarth4.jpg"
import slide5 from "./images/NandiSamarth/nandisamarth5.jpg"
import slide6 from "./images/NandiSamarth/nandisamarth6.jpg"
import slide7 from "./images/NandiSamarth/nandisamarth7.jpg"
import slide8 from "./images/NandiSamarth/nandisamarth8.jpg"
import slide9 from "./images/NandiSamarth/nandisamarth9.jpg"
import slide10 from "./images/NandiSamarth/nandisamarth10.jpg"
import slide11 from "./images/NandiSamarth/nandisamarth11.jpg"


class NandiSamarth extends Component {
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
                <div>
                <div className="nandisamarth-main-container">
                     <h2 className="nandisamarth-content-heading">Nandi Samarth:</h2>
                    <p className="nandisamarth-content-parra">To Provide easy loans to poor vendors so as to start their livelihood and small business.</p>
                </div>
                </div>
            </div>
         );
    }
}
 
export default NandiSamarth;