import React, { Component } from 'react';
import "./mainPage.css"


class MainPage extends Component {
    render() {
        return (
            <div className="main-page-container" >
                <div className="menu-container" style={{zIndex: -2}} >
                    <h2>PASIKA</h2>
                    <p>MAGAZINE</p>
                    <ul className='menu'>
                        <li><a >ART</a></li>
                        <li><a >FASHION</a></li>
                        <li><a >MUSIC</a></li>
                    </ul>
                </div>
                <div className="additional-menu" style={{zIndex: -1}}>
                    <img className="additional-menu-icon" src={require(".././icons/Button menu light.svg")} style={{zIndex: -1}} />
                </div>
                <div className="search"  style={{zIndex: -1}} >
                    <img className="search-icon" src={require(".././icons/Search.svg")} style={{zIndex: -1}} />
                </div>
                    <div className="fashion-container" style={{zIndex: -4}}>
                    </div>
                <div className="curtains-container"  style={{zIndex: -3}} >
                    <div className="music-container" style={{zIndex: -3}}> </div>
                    <div className="art-container" style={{zIndex: -3}}> </div>
                </div>




            </div>
        );
    }
}

export default MainPage;