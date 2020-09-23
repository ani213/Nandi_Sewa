import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


class Menubar extends Component {
    state = { }

    render() { 
        // console.log(this.props.location.pathname)
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" className="nav-bar" sticky='top' bsPrefix="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto link-container">
                {this.props.navs && this.props.navs.map((ele,index)=>{
                    return (
                        <div className={`link-parent ${(ele.to===this.props.location.pathname)?"mobile-selected":""}`} key={index}>
                               {(ele.dropdown)?<div key={index+"dr"}>
                                <NavDropdown title={ele.dropdown.title} className="drop-down-container" id="collasible-nav-dropdown">
                                    {
                                        ele.dropdown.child && ele.dropdown.child.map((childs,index)=>{
                                            return(
                                                // <NavDropdown.Item href={childs.to} className={`drop-down-item ${(childs.to===this.props.location.pathname)?"selected-dropdown-link":""}`} key={index}>{childs.title}</NavDropdown.Item>
                                              <div key={index+"drop"} className={`drop-link-container ${(childs.to===this.props.location.pathname)?"selected-dropdown-link":""}`}><Link className={`drop-down-item`} to={childs.to}>{childs.title}</Link></div>
                                            )
                                        })
                                    }
                                </NavDropdown>
                               </div>:<Link className={`link ${(ele.to===this.props.location.pathname)?"selected-link":""}`} to={ele.to}>{ele.title}</Link>}
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