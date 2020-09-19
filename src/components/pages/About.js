import React, { Component } from 'react';
import "./about.css"
import navData from "./config.json"
import Menubar from '../common/Menubar';
import Header from '../common/Header';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div className="about-main-container">
                    <p className="about-content-parra">Founded in 2019 under the society registration act 21, 1860 ( Reg No. ALL/02344/2019-2020) with 
                        the initiative of Shri Nand Gopal Gupta Nandi and Smt. 
                        Abhilasha Gupta Nandi in the city Prayagraj .</p>
                    <p className="about-content-parra">Both are active in social welfare and public philanthropy since last 15 years. Apart from their political portfolio and government duties they have assumed social service and charity as routine life soon after marriage.</p> 
                    <p className="about-content-parra">“Nandi”; a popular couple in the politics of Uttar Pradesh for their welfare activities and highly public engagements in daily life, 
                        had decided to segregate welfare activities from politics and make it a complete vision for the rest part of the life. </p>
                    <p className="about-content-parra">Nandi Sewa Sansthan (NSS) is founded to fulfill that dream of Nandi family and empower the society for a healthy and happy life. </p>      
                </div>
            </div>
         );
    }
}
 
export default About;