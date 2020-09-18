import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


class Menubar extends Component {
    state = { 
        selectedLink:null
     }
handleClick=(title)=>{
    this.setState({
        selectedLink:title
    })
}
    render() { 
        console.log(this.props.location.pathname)
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" className="nav-bar" sticky='top' bsPrefix="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto link-container">
                {this.props.navs && this.props.navs.map((ele,index)=>{
                    return (
                        <div className={`link-parent ${(ele.to===this.props.location.pathname)?"mobile-selected":""}`}>
                               {(ele.dropdown)?<div>
                                <NavDropdown title={ele.dropdown.title} className="drop-down-container" id="collasible-nav-dropdown">
                                    {
                                        ele.dropdown.child && ele.dropdown.child.map((childs,index)=>{
                                            return(
                                                <NavDropdown.Item href={childs.to} className="drop-down-item">{childs.title}</NavDropdown.Item>
                                            )
                                        })
                                    }
                                </NavDropdown>
                               </div>:<Link className={`link ${(ele.to===this.props.location.pathname)?"selected-link":""}`} to={ele.to} key={index} onClick={()=>this.handleClick(ele.title)}>{ele.title}</Link>}
                        </div>
                    )
                })}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
         );
    }
}
 
export default withRouter(Menubar)