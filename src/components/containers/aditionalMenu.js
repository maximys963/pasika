import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class AditionalMenu extends Component{
    render(){
        return (
            <div className="additional-menu"
                 id="additional-menu"
                 style={{zIndex: 2}}>
                <img onClick={this.props.menuMove}
                     className="additional-menu-icon"
                     src={require("../.././icons/Button menu light.svg")}
                     style={{zIndex: 3}} />
                <ul className="additional-menu-items">
                    <li><NavLink
                        onClick={this.props.pasikaAnimation}
                        to='/aboutus'
                        style={{textDecoration: 'none', color: 'white'}}
                        className="additional-menu-link" >ABOUT US</NavLink></li>
                    <li><NavLink
                        onClick={this.props.pasikaAnimation}
                        to='/issues'
                        style={{textDecoration: 'none', color: 'white'}}
                        className="additional-menu-link" >ISSUES</NavLink></li>
                    <li><NavLink
                        onClick={this.props.pasikaAnimation}
                        to='/submitting'
                        style={{textDecoration: 'none', color: 'white'}}
                        className="additional-menu-link" >SUBMITTING</NavLink></li>
                    <li><NavLink
                        onClick={this.props.pasikaAnimation}
                        to='/honeydew'
                        style={{textDecoration: 'none', color: 'white'}}
                        className="additional-menu-link" >HONEYDEW</NavLink></li>
                    <li><NavLink
                        onClick={this.props.pasikaAnimation}
                        to='/contacts'
                        style={{textDecoration: 'none', color: 'white'}}
                        className="additional-menu-link" >CONTACTS</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default AditionalMenu;