import React, { Component } from 'react'
import Header from '../common/Header';
import navData from "./config.json";
import Menubar from '../common/Menubar';
import "./protsahan.css";
import Slider from '../common/Slider';
import slide1 from "./images/Protsahan/protsahan1.jpg"
import slide2 from "./images/Protsahan/protsahan2.jpg"
import slide3 from "./images/Protsahan/protsahan3.jpg"
import slide4 from "./images/Protsahan/protsahan4.jpg"
import slide5 from "./images/Protsahan/protsahan5.jpg"
import slide6 from "./images/Protsahan/protsahan6.jpg"
import slide7 from "./images/Protsahan/protsahan7.jpg"
import slide8 from "./images/Protsahan/protsahan8.jpg"
import slide9 from "./images/Protsahan/protsahan9.jpg"
import slide10 from "./images/Protsahan/protsahan10.jpg"
import slide11 from "./images/Protsahan/protsahan11.jpg"
import slide12 from "./images/Protsahan/protsahan12.jpg"
import slide13 from "./images/Protsahan/protsahan13.jpg"
import slide14 from "./images/Protsahan/protsahan14.jpg"
import slide15 from "./images/Protsahan/protsahan15.jpg"
import slide16 from "./images/Protsahan/protsahan16.jpg"
import slide17 from "./images/Protsahan/protsahan17.jpg"
import slide18 from "./images/Protsahan/protsahan18.jpg"
import slide19 from "./images/Protsahan/protsahan19.jpg"
import slide20 from "./images/Protsahan/protsahan20.jpg"
import slide21 from "./images/Protsahan/protsahan21.jpg"
import slide22 from "./images/Protsahan/protsahan22.jpg"
import slide23 from "./images/Protsahan/protsahan23.jpg"
import slide24 from "./images/Protsahan/protsahan24.jpg"
import slide25 from "./images/Protsahan/protsahan25.jpg"
import slide26 from "./images/Protsahan/protsahan26.jpg"
import slide27 from "./images/Protsahan/protsahan27.jpg"
import slide28 from "./images/Protsahan/protsahan28.jpg"
import slide29 from "./images/Protsahan/protsahan29.jpg"
import slide30 from "./images/Protsahan/protsahan30.jpg"
import slide31 from "./images/Protsahan/protsahan31.jpg"

class Protsahan extends Component {
    state = {  }
    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3},{photo:slide4},{photo:slide5},{photo:slide6},
            {photo:slide7},{photo:slide8},{photo:slide9},{photo:slide10},{photo:slide11},{photo:slide12},{photo:slide13},
            {photo:slide14},{photo:slide15},{photo:slide16},{photo:slide17},{photo:slide18},{photo:slide19},{photo:slide20},
            {photo:slide21},{photo:slide22},{photo:slide23},{photo:slide24},{photo:slide25},{photo:slide26},{photo:slide27},
            {photo:slide28},{photo:slide29},{photo:slide30},{photo:slide31},
        ]
        return ( 
            <div>
                 <Header />
                <Menubar navs={navData.navs}/>
                <div>
                    <Slider slides={slides}/>
                </div>
                <div className="protsahan-main-container">
                     <h2 className="protsahan-content-heading">Protsahan :</h2>
                    <p className="protsahan-content-parra">It is an initiative to encourage bright young minds and competitive students to set standards for others in the society.</p>
                </div>
            </div>
         );
    }
}
 
export default Protsahan;