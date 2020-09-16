import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

class Menubar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' bsPrefix="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto link-container">
                {this.props.navs && this.props.navs.map((ele,index)=>{
                    return (
                        <div>
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
                               </div>:<Link className="link" to={ele.to} key={index} >{ele.title}</Link>}
                        </div>
                    )
                })}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
         );
    }
}
 
export default Menubar;