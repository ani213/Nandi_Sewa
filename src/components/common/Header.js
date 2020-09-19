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
                    <div><Link className="donate-link" to="/donate"><button className="btn btn-light button-donate">Donate Now</button></Link></div>
                    <div className="volunteer-button-container"><Link className="volunteers-link" to="/volunteers"><button className="btn btn-danger button-volunteer">Become a volunteer</button></Link></div>
                </div>
            </div>
         );
    }
}
 
export default Header;