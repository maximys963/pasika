import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import '../.././styles/mainMenu.css'


class MainMenu extends Component {
    render() {
        return (
            <div className="menu-container" style={{zIndex: 4}} >
                <h2>
                     <NavLink onClick={this.props.pasikaAnimation}
                              id="pasika" style={{textDecoration: 'none', color: 'white'}}
                              to="/">PASIKA
                     </NavLink>
                </h2>
                <p id="magazine" style={{textDecoration: 'none', color: 'white' }}>magazine</p>
                <ul className='menu'>
                    <li  onClick={this.props.artAnimation}>
                        <NavLink className="main-menu-item"
                                 to="/art"
                                 style={{textDecoration: 'none', color: 'white'}}>ART
                        </NavLink>
                    </li>
                    <li onClick={this.props.fashionAnimation}>
                        <NavLink className="main-menu-item"
                                 to="/fashion"
                                 style={{textDecoration: 'none', color: 'white'}}>FASHION
                        </NavLink>
                    </li>
                    <li onClick={this.props.musicAnimation}>
                        <NavLink className="main-menu-item"
                                 to="/music"
                                 style={{textDecoration: 'none', color: 'white'}}>MUSIC
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


export default MainMenu;