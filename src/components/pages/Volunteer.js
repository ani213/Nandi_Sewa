import React, { Component } from 'react';
import rawData from "./config.json"
import Header from '../common/Header';
import Menubar from '../common/Menubar';
import profile from "./images/profile.jpg";
import "./volunteer.css";
import { Form } from 'react-bootstrap';
import photo from "./images/Samarpan/samarpan6.jpg"


class Volunteer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Menubar navs={rawData.navs}/>
                <div className="volunteer-image-main-container">
                    <div className="volunteer-image-container">
                 { rawData.volunteers && rawData.volunteers.map((ele,index)=>{
                     return(
                            <div className="image-container">
                               <img  src={profile} alt="profile" className="volunteer-image"/>
                               <div className="volunteer-image-content">
                                    <div>{ele.name}</div>
                                    <div>{ele.profile}</div>
                               </div>
                            </div>
                     )
                 })  
                 }
                 </div>
                </div>
                <div className="volunteer-main-container">
                <div className="form-container">
                    <div >
                        <h1 className="text-center">Become a Volunteer</h1>
                    <Form>
                            <div className="volunteer-form">
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Name<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Enter Name.."/>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Email<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input"  placeholder="Enter Email.."/>
                                </div>
                                <div className="input-container">
                                    <Form.Label className="volunteer-fontsize form-label">Gender<span>*</span></Form.Label>
                                    <Form.Control as="select"  className="volunteer-select"  custom>
                                           <option className="volunteer-option">Male</option>
                                           <option className="volunteer-option">Female</option>
                                    </Form.Control>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Phone<span>*</span></label>
                                    <input type="text" name="name" required className="form-control input" placeholder="Phone.."/>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">DOB<span>*</span></label>
                                    <input type="text" name="name" data-provide="datepicker" required className="form-control input" placeholder="DD/MM/YYYY"/>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Designation<span>*</span></label>
                                    <input type="text" name="name" data-provide="datepicker" required className="form-control input" placeholder="Enter Designation.."/>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">State</label>
                                    <input type="text" name="name" data-provide="datepicker" required className="form-control input" placeholder="Enter State.."/>
                                </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Address</label>
                                    <input type="text" name="name" data-provide="datepicker" required className="form-control input input-address" placeholder="Your Address.."/>
                                </div>
                            </div>
                                <div className="input-container">
                                    <label className="volunteer-fontsize">Say</label>
                                    <input type="text" name="name" data-provide="datepicker" required className="form-control input input-say" placeholder="What You Say.." />
                                </div>
                                <div className="input-container">
                                    <p className="volunteer-fontsize">Profile Upload</p>
                                    <input type="file" name="photo" className="input-file" />
                                </div>
                            <div>
                                <div className="pay-button-container">
                                    <button className="btn btn-dark btn-block pay-button">resister</button>
                                </div>
                            </div>
                    </Form>
                    </div>
                </div>
                <div className="recent-valunteer-container">
                    <div className="text-center"><h1 className="recent-volunteer-heading">RECENT VOLUNTEERS</h1></div>
                    <div className="recent-valunteer-image-main-container">
                    <div className="recent-valunteer-image-container">
                      <img src={photo} className="recent-valunteer-image"/>
                      <div className="recent-valunteer-image-content">
                          <h2>Aniket Verma</h2>
                          <p className="text-size">Delhi</p>
                      </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Volunteer;