import React, { Component } from 'react';
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
                    <div><button className="btn btn-light button-donate">Donate Now</button> </div>
                    <div className="volunteer-button-container"><button className="btn btn-danger button-volunteer">Become a volunteer</button></div>
                </div>
            </div>
         );
    }
}
 
export default Header;