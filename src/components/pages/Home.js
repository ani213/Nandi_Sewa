import React, { Component } from 'react';
import Menubar from '../common/Menubar';
import "./home.css"
import navData from "./config.json"
import Header from '../common/Header';
import Slider from '../common/Slider';
import slide1 from "../common/images/Slide2.jpeg";
import slide2 from "../common/images/Slide3.jpeg";
import slide3 from "../common/images/Slide4.jpeg";


class Home extends Component {
    state = {  }
    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3}]
        return ( 
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div className="home-slide-container">
                    <Slider slides={slides}/>
                </div>
                <div className="main-container">
                    <h2 className="content-heading">Vision and Mission of NSS:</h2>
                    <p className="content-parra">To empower the economically challenged and underprivileged workforce 
                        through employment, business and livelihood.</p>
                    <p className="content-parra">Other charity and social work to bring parity and happiness in the society 
                        and community regardless of their caste and religion.</p>
                    <p className="content-parra">Identify, nurture and promote scholars and bright student of the society. Help them to achieve
                         their academic excellence through best education and institution.</p>        
                </div>
            </div>
         );
    }
}
 
export default Home;