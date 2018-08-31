import React, { Component } from 'react';
import "./mainPage.css"


class MainPage extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const artAnimation = () => {
           const music = document.getElementById('music');
           music.style.width = '100%';
        };

        return (
            <div className="main-page-container" >
                <div className="menu-container" style={{zIndex: 1}} >
                    <h2>PASIKA</h2>
                    <p>MAGAZINE</p>
                    <ul className='menu'>
                        <li onClick={artAnimation}><a>ART</a></li>
                        <li><a>FASHION</a></li>
                        <li><a>MUSIC</a></li>
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
                    <div className="music-container" id="music" style={{zIndex: -3}}> </div>
                    <div className="art-container" style={{zIndex: -3}}> </div>
                </div>
                <div className="social-container">
                    <a href='https://www.instagram.com/pasikamagazine/'><img className="insta" src={require(".././icons/INSTA.svg")} style={{zIndex: 1}}/></a>
                    <a><img className="facebook" src={require(".././icons/FACE.svg")} style={{zIndex: 1}} /></a>
                </div>




            </div>
        );
    }
}

export default MainPage;