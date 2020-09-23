import React, { Component } from 'react';
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json";
import "./samarpan.css"

class Annakshetra extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header />
            <Menubar navs={navData.navs}/>
            
            <div className="samarpan-main-container">
                 <h2 className="samarpan-content-heading">Annakshetra ( Mass Kitchen ):</h2>
                <p className="samarpan-content-parra">Operating mass kitchen on regular and occasion basis for the events , celebrations and rituals.</p>
            </div>
        </div>
         );
    }
}
 
export default Annakshetra;