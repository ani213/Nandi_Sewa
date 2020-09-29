import React, { Component } from 'react';
import Menubar from '../common/Menubar';
import "./home.css"
import rawData from "./config.json"
import Header from '../common/Header';
import Slider from '../common/Slider';
import slide1 from "./images/Protsahan/protsahan22.jpg"
import slide2 from "./images/Protsahan/protsahan23.jpg"
import slide3 from "./images/Protsahan/protsahan17.jpg"
import memberImage1 from "./images/profile.jpg"
import {Link} from "react-router-dom"
import AOS from 'aos';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import donationpic from "./images/work/donate.png";
import volunteerpic from './images/work/volunteer.png';
import Scholarshippic from './images/work/gift.png';
import child from "./images/work/child.png";
import house from "./images/work/house.png";
import givefood from "./images/work/givefood.png"

class Home extends Component {
    state = {  }
    componentDidMount=()=>{
        AOS.init({
           offset:100,
           delay:20,
           duration:1000,
           easing:"ease-in-out",
           mirror:true,
           once:false,
           // desable:"mobile"
        })
    }  

    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3}]
        return ( 
            <div className="home-main-container">
                <Header />
                <Menubar navs={rawData.navs}/>
                <div className="home-slide-container">
                    <Slider slides={slides}/>
                </div>
                <div className="home-content-container" data-aos="flip-up">
                    <div className="content-1" data-aos="flip-up">
                        <div className="content-container">
                            <h1 className="content-heading-1 text-color-white">GET INVOLVED</h1>
                            <p className="content-parra-1 text-color-white">Make sure you begin with baby steps before you
                             commit to anything big or long term - we call it the ‘tasting sessions’ - attend several
                              rounds and be open to discover
                         something new - about others as well as about yourself.</p>
                        </div>
                    </div>
                    <div className="content-1" data-aos="flip-up">
                    <div className="content-container">
                    <h1 className="content-heading-1 text-color-white">BECOME A VOLUNTEER</h1>
                        <p className="content-parra-1 text-color-white">How can anyone help to Nandi Sewa Sansthan Organization alone, 
                        Nandi Sewa Sansthan Organization is not much able to fulfil it's aim and can't achieve
                         its social goal without you. Here you can Contact to The Nandi Sewa Sansthan Organization.</p>
                         </div>
                    </div>
                    <div className="content-1" data-aos="flip-up">
                    <div className="content-container">
                    <h1 className="content-heading-1 text-color-white">ADOPT A CHILD</h1>
                        <p className="content-parra-1 text-color-white">How can anyone help to Nandi Sewa Sansthan Organization
                         alone, Nandi Sewa Sansthan Organization 
                         is not much able to fulfil it's aim and can't achieve its social goal without you. Here you 
                         can Contact to The Nandi Sewa Sansthan Organization.</p>
                         </div>
                    </div>
                    <div className="content-1" data-aos="flip-up">
                        <div className="content-container">
                            <h1 className="content-heading-1 text-color-white">CALL +91-1234567890</h1>
                            <p className="content-parra-1 text-color-white">How can anyone help to Nandi Sewa Sansthan Organization alone,
                            Nandi Sewa Sansthan Organization is not much able to fulfil it's aim and can't achieve
                        its social goal without you. Here you can Contact to The Nandi Sewa Sansthan Organization.</p>
                        </div>
                    </div>
                </div>
                <div className="main-container" data-aos="flip-right">
                    <h2 className="content-heading">Vision and Mission of NSS:</h2>
                    <p className="content-parra">To empower the economically challenged and underprivileged workforce 
                        through employment, business and livelihood.</p>
                    <p className="content-parra">Other charity and social work to bring parity and happiness in the society 
                        and community regardless of their caste and religion.</p>
                    <p className="content-parra">Identify, nurture and promote scholars and bright student of the society. Help them to achieve
                         their academic excellence through best education and institution.</p>        
                </div>
                <div className="member-main-container">
                    <h1 className="content-heading text-center">Our Members</h1>
                <div className="member-container">
                 { rawData.volunteers && rawData.members.map((ele,index)=>{
                     return(
                            <Card data-aos={`${index%2===0?"fade-down-left":"fade-down-right"}`} key={index}>
                                <CardActionArea>
                                <img  src={memberImage1} alt="profile" className="member-image"/>
                                <CardContent>
                                <Typography gutterBottom variant="h4" component="h3" className="text-center">
                                         {ele.name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h3" className="text-center">
                                         {ele.profile}
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                     )
                 })  
                 }
                 </div>
                </div>
                <div className="home-work-main-container">
                    <h1 className="text-center content-heading-1">What Can We Do?</h1>
                <div className="home-work-container">
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={donationpic}/>
                             <div>
                                 <div className="content-heading">GIVE DONATION</div>
                                 <p className="content-parra">Donations can be received in a variety of 
                                     ways. Some campaigns have a pre-determined amount 
                                     they want to receive.</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={volunteerpic}/>
                             <div>
                                 <div className="content-heading">BECOME A VOLUNTEER</div>
                                 <p className="content-parra">Volunteer abroad for NGO support 
                                 and take on a multitude of tasks to help locals, volunteers
                                  and your NGO at the same time.</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={Scholarshippic}/>
                             <div>
                                 <div className="content-heading">GIVE SCHOLARSHIP</div>
                                 <p className="content-parra">We can Provide The Scholarship For
                                  Child Every year. NGO support and take on 
                                  a multitude of tasks to help locals.</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={child}/>
                             <div>
                                 <div className="content-heading">ADOPT A CHILD</div>
                                 <p className="content-parra">Make sure you begin with baby steps before 
                                 you commit to anything big or long term - we 
                                 call it the ‘tasting sessions’ -</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={house}/>
                             <div>
                                 <div className="content-heading">BUILD HOUSE</div>
                                 <p className="content-parra">We can Provide The Build House For Every Child to Every year. 
                                 NGO support and take on a multitude of tasks to help locals.</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                     <Card data-aos="zoom-out">
                         <CardActionArea>
                         <CardContent className="home-work-content-container">
                             <img src={givefood}/>
                             <div>
                                 <div className="content-heading">GIVE FOOD</div>
                                 <p className="content-parra">We can Provide The Food for Child to Every day. 
                                 NGO support and take on a multitude of tasks to help locals.</p>
                             </div>
                         </CardContent>
                         </CardActionArea>
                     </Card>
                 </div>
                 </div>
                 <div className="home-donation-container"  data-aos="fade-down-left">
                     <div>
                    <h1 className="content-heading-1">Make a Donation Now!</h1>
                    <p className="content-parra">NGOs differ from profit organizations in the sense that their primary goal is to provide help!!</p>
                    </div>
                    <div>
                        <Link className="home-link" to="/donate">Donate Us</Link>
                    </div>
                 </div>
            </div>
         );
    }
}
 
export default Home;