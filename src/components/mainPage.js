import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import "./mainPage.css"

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            artBlockWidth: "50%",
           musicBlockWidth: "50%",
           zIndexArt: "-3",
           zIndexMusic: "-2",
           menuIsOpened: false,
           searchIsOpen: false
        }
    }


    render() {
        const musicAnimation = () => {
           const musicBrace =  document.getElementById('music-brace');
           const artBrace = document.getElementById('art-brace');
           musicBrace.style.display = 'none';
           this.setState({
               zIndexMusic: "-2",
               zIndexArt: "-3",
               musicBlockWidth: "100%",
               artBlockWidth: "0"
           });
            // artBrace.style.display = 'block';

        };

        const artAnimation = () => {
            const artBrace = document.getElementById('art-brace');
            const musicBrace =  document.getElementById('music-brace');
            artBrace.style.display = 'none';
            this.setState({
                zIndexMusic: "-3",
                zIndexArt: "-2",
                artBlockWidth: "100%",
                musicBlockWidth: "0"
            });
            // musicBrace.style.display = 'block';

        };

        const fashionAnimation = () =>{
            this.setState({
                musicBlockWidth: "6%",
                artBlockWidth : "6%"
            })
        };
        const pasikaAnimation = () =>{
          this.setState({
              musicBlockWidth: "50%",
              artBlockWidth : "50%"
          })
        };

        const menuMove = () => {
                const menu = document.getElementById('additional-menu');
                const title = document.getElementById('pasika');
                const magazine = document.getElementById('magazine');
                const menuMenuItems = document.getElementsByClassName("menu");


                if(!this.state.menuIsOpened){
                    title.style.color = "white";
                    magazine.style.color = "white";
                    console.log(menuMenuItems[0].childNodes[0].childNodes[0]);
                    for (let i = 0; i <  menuMenuItems[0].childNodes.length; i++) {
                        menuMenuItems[0].childNodes[i].childNodes[0].style.color = "white"
                    }
                    menu.style.transform = "translateX(88%)";
                    // menu.style.zIndex = "-1";
                    this.setState({
                        menuIsOpened: true,
                    });
                    if(this.state.searchIsOpen){
                        const searchBar = document.getElementById("search");
                        searchBar.style.transform = "translateX(0)";
                        this.setState({
                            searchIsOpen: false,
                        });
                    }
                }else{
                    menu.style.transform = "translateX(0)";
                    title.style.color = "black";
                    magazine.style.color = "black";
                    for (let i = 0; i <  menuMenuItems[0].childNodes.length; i++) {
                        menuMenuItems[0].childNodes[i].childNodes[0].style.color = "black"
                    }
                    // menu.style.zIndex = "2";
                    this.setState({
                        menuIsOpened: false,
                    })
                }
        };

        const searchMove  = () =>{
            const searchBar = document.getElementById("search");
            const title = document.getElementById('pasika');
            const magazine = document.getElementById('magazine');
            const menuMenuItems = document.getElementsByClassName("menu");
            const menu = document.getElementById('additional-menu');
            if(!this.state.searchIsOpen){
                title.style.color = "black";
                magazine.style.color = "black";
                for (let i = 0; i <  menuMenuItems[0].childNodes.length; i++) {
                    menuMenuItems[0].childNodes[i].childNodes[0].style.color = "black"
                }
                searchBar.style.transform = "translateX(-790px)";
                this.setState({
                    searchIsOpen: true,
                });
                if(this.state.menuIsOpened){
                    menu.style.transform = "translateX(0)";
                    title.style.color = "black";
                    magazine.style.color = "black";
                    this.setState({
                        menuIsOpened: false
                    })
                }
            }else{
                searchBar.style.transform = "translateX(0)";
                this.setState({
                    searchIsOpen: false,
                })
            }
        };

        return (
            <div className="main-page-container" >
                <div className="menu-container" style={{zIndex: 4}} >
                    <h2 id="pasika" onClick={pasikaAnimation} >PASIKA</h2>
                    <p id="magazine">magazine</p>
                    <ul className='menu'>
                        <li  onClick={artAnimation}><NavLink className="main-menu-item"  to="/art" style={{textDecoration: 'none', color: 'black'}}>ART</NavLink></li>
                        <li  onClick={fashionAnimation}><NavLink className="main-menu-item"  to="/fashion" style={{textDecoration: 'none', color: 'black'}}>FASHION</NavLink></li>
                        <li  onClick={musicAnimation}><NavLink className="main-menu-item" to="/music" style={{textDecoration: 'none', color: 'black'}}>MUSIC</NavLink></li>
                    </ul>
                </div>
                <div className="additional-menu" id="additional-menu" style={{zIndex: 2,}}>
                    <img onClick={menuMove}  className="additional-menu-icon" src={require(".././icons/Button menu light.svg")} style={{zIndex: 3}} />
                    <ul className="additional-menu-items">
                        <li><NavLink onClick={pasikaAnimation} to='/aboutus'  style={{textDecoration: 'none', color: 'white'}} className="additional-menu-link" >ABOUT US</NavLink></li>
                        <li><NavLink onClick={pasikaAnimation} to='/issues'  style={{textDecoration: 'none', color: 'white'}} className="additional-menu-link" >ISSUES</NavLink></li>
                        <li><NavLink onClick={pasikaAnimation} to='/submitting'  style={{textDecoration: 'none', color: 'white'}} className="additional-menu-link" >SUBMITTING</NavLink></li>
                        <li><NavLink onClick={pasikaAnimation} to='/honeydew'  style={{textDecoration: 'none', color: 'white'}} className="additional-menu-link" >HONEYDEW</NavLink></li>
                        <li><NavLink onClick={pasikaAnimation} to='/contacts' style={{textDecoration: 'none', color: 'white'}} className="additional-menu-link" >CONTACTS</NavLink></li>
                    </ul>
                </div>
                <div className="search" id="search" style={{zIndex: 1,}} >
                    <input className="search-input" placeholder="search..."/>
                </div>
                <img onClick={searchMove} className="search-icon" id="search-icon" src={require(".././icons/musica-searcher.svg")} style={{zIndex: 2}} />
                    <div className="fashion-container" style={{zIndex: -4}}>
                    </div>



                <div className="curtains-music-container" id="curtains-music-container"  style={{zIndex: this.state.zIndexMusic}} >
                    <div className="music-container" id="music" style={{zIndex: this.state.zIndexMusic, width: this.state.musicBlockWidth}}> </div>
                    <div className="music-brace" id="music-brace" style={{zIndex: this.state.zIndexMusic}}> </div>
                </div>

                <div className="curtains-art-container" id="curtains-art-container"  style={{zIndex:this.state.zIndexArt}} >
                    <div className="art-container" id="art" style={{zIndex:this.state.zIndexArt, width: this.state.artBlockWidth}}> </div>
                    <div className="art-brace" id="art-brace" style={{zIndex:this.state.zIndexArt}}> </div>
                </div>

                <div className="social-container">
                    <a  target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/pasikamagazine/'><img className="insta" src={require(".././icons/INSTA.svg")} style={{zIndex: 1}}/></a>
                    <a><img className="facebook" src={require(".././icons/FACE.svg")} style={{zIndex: 1}} /></a>
                </div>
                <div className="copyright-container">
                <p className="copyright">(c) PASIKA magazine </p>
                </div>




            </div>
        );
    }
}

export default MainPage;