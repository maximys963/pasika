import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class SocialBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            jarActive: false
        }

    }
    render() {
        return (
            <div className="social-container">
                <NavLink
                    onClick={this.props.fashionAnimation}
                    onMouseOver={()=>{this.setState({ jarActive: true })}}
                    onMouseLeave={()=>{this.setState({ jarActive: false })}}
                    to="/registration">
                    <img
                        className="social-icons" id="hive"
                        src={require(`../.././icons/${this.state.jarActive ? 'jar_p2.svg' : 'jar_p1.svg'}`)}/></NavLink>
                <div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://www.instagram.com/pasikamagazine/'>
                        <img
                            className="social-icons"
                            src={require("../.././icons/INSTA.svg")}
                            style={{zIndex: 1}}/>
                    </a>
                    <a>
                        <img
                            className="social-icons"
                            src={require("../.././icons/FACE.svg")}
                            style={{zIndex: 1}} />
                    </a>
                </div>
            </div>
        );
    }
}


export default SocialBar;