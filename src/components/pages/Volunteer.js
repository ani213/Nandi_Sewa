import React, { Component } from 'react';
import navs from "./config.json";
import Header from '../common/Header';
import Menubar from '../common/Menubar';

class Volunteer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={navs}/>
                <div className="form-main-container">
                    <div className="form-container">
                        <h1 className="text-center">Make a Donation Now !</h1>
                    <form>
                            <div>
                                <div className="input-container">
                                    <label className="donate-fontsize">Name<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Enter Name.."/>
                                </div>
                                <div className="input-container">
                                    <label className="donate-fontsize">Email<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input"  placeholder="Enter Email.."/>
                                </div>
                                <div className="input-container">
                                    <label className="donate-fontsize">Contact<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Enter Phone.."/>
                                </div>
                                <div className="input-container">
                                    <label className="donate-fontsize">I Want to Donate for<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Donate for.."/>
                                </div>
                                <div className="input-container">
                                    <label className="donate-fontsize">How much do you want to donate? (₹)<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Donation Amount in (₹)"/>
                                </div>
                            </div>
                            <div>
                                <div className="pay-button-container">
                                    <button className="btn btn-dark btn-lg pay-button">Pay</button>
                                </div>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Volunteer;