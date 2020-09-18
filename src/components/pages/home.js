import React, { Component } from 'react';
import Menubar from '../common/Menubar';
import "./home.css"
import navs from "./config.json"
import Header from '../common/Header';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={navs}/>
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