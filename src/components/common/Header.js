import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-container">
                <div className="header-content">
                    <div>Nandi Sewa Sansthan</div>
                    <div className="hindi-text">परोSपि हितवान् बन्धु</div>
                    </div>
                <div className="button-container">
                    <div><button className="btn btn-light button-donate"><Link className="donate-link" to="/donate">Donate Now</Link></button> </div>
                    <div className="volunteer-button-container"><button className="btn btn-danger button-volunteer"><Link className="volunteers-link" to="/volunteers">Become a volunteer</Link></button></div>
                </div>
            </div>
         );
    }
}
 
export default Header;