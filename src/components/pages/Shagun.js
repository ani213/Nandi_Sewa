import React, { Component } from 'react';
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json";
import "./shagun.css"
class Shagun extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div className="shagun-main-container">
                     <h2 className="shagun-content-heading">Shagun :</h2>
                    <p className="shagun-content-parra">Support On the occasion of marriage.</p>
                </div>
            </div>
         );
    }
}
 
export default Shagun;