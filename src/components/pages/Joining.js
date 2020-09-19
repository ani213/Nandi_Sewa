import React, { Component } from 'react'
import Menubar from '../common/Menubar';
import navData from "./config.json"
import "./joining.css"
import Header from '../common/Header';

class Joining extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div className="joining-main-container">
                    <p className="joining-content-parra">NSS Ambassadors</p>
                    <p className="joining-content-parra">Corporate members</p>
                    <p className="joining-content-parra">Annual Membership</p>
                    <p className="joining-content-parra">Lifetime membership</p>
                </div>                
            </div>
         );
    }
}
 
export default Joining;