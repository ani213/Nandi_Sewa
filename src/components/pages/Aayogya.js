import React, { Component } from 'react';
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import navData from "./config.json"


class Aayogya extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Header />
                <Menubar navs={navData.navs}/>
                <div>
                    
                </div>
            </div>
        );
    }
}
 
export default Aayogya;