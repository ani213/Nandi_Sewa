import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-container">
                <div className="header-content">
                    <div className="header-content-container">
                    <span><CallIcon fontSize="large"/>+91-1234567890</span>
                    <span className="header-space"><MailOutlineIcon fontSize="large"/>admin@nandisewa.org,</span>
                    <span className="header-space"><MailOutlineIcon fontSize="large"/>member@nandisewa.org</span>
                    <span className="header-space">Nandi Sewa Sansthan</span></div>
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