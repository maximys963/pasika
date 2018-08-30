import React, { Component } from 'react';
import "./mainPage.css"


class MainPage extends Component {
    render() {
        return (
            <div className="main-page-container">
                <div className="menu-container" >
                    <h2>PASIKA</h2>
                    <p>MAGAZINE</p>
                    <ul className='menu'>
                        <li><a >ART</a></li>
                        <li><a >FASHION</a></li>
                        <li><a >MUSIC</a></li>
                    </ul>
                </div>

                <div className="fashion-container" style={{zIndex: -2}}>
                </div>
                <div className="art-container" style={{zIndex: -1}}>

                </div>
                <div className="music-container" style={{zIndex: -2}}>

                </div>

            </div>
        );
    }
}

export default MainPage;