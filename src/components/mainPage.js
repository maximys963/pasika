import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MainMenu from './containers/mainMenu';
import AditionalMenu from './containers/aditionalMenu';
import SearchBar from './containers/searchBar'
import SocialBar from './containers/socialBar'
import "../styles/mainPage.css"

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            artBlockWidth: "50%",
           musicBlockWidth: "50%",
           zIndexArt: "-3",
           zIndexMusic: "-2",
           menuIsOpened: true,
           searchIsOpen: false
        }
    }
    render() {
        const musicAnimation = () => {
           const musicBrace =  document.getElementById('music-brace');
           musicBrace.style.display = 'none';
           this.setState({
               zIndexMusic: "-2",
               zIndexArt: "-3",
               musicBlockWidth: "100%",
               artBlockWidth: "0"
           });
        };
        const artAnimation = () => {
            const artBrace = document.getElementById('art-brace');
            artBrace.style.display = 'none';
            this.setState({
                zIndexMusic: "-3",
                zIndexArt: "-2",
                artBlockWidth: "100%",
                musicBlockWidth: "0"
            });
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
                    menu.style.transform = "translateX(0)";
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
                    menu.style.transform = "translateX(-88%)";
                    title.style.color = "black";
                    magazine.style.color = "black";
                    for (let i = 0; i <  menuMenuItems[0].childNodes.length; i++) {
                        menuMenuItems[0].childNodes[i].childNodes[0].style.color = "black"
                    }
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
                    menu.style.transform = "translateX(-88%)";
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
            <div className="main-page-container">
               <MainMenu
                         pasikaAnimation={pasikaAnimation}
                         artAnimation={artAnimation}
                         fashionAnimation={fashionAnimation}
                         musicAnimation={musicAnimation}/>
               <AditionalMenu
                         menuMove={menuMove}
                         pasikaAnimation={pasikaAnimation}/>
               <SearchBar searchMove={searchMove}/>
                <div
                className="fashion-container"
                style={{zIndex: -4}}/>
                <div
                className="curtains-music-container" id="curtains-music-container"
                style={{zIndex: this.state.zIndexMusic}}>
                    <div
                    className="music-container" id="music"
                    style={{zIndex: this.state.zIndexMusic, width: this.state.musicBlockWidth}}/>
                    <div
                    className="music-brace" id="music-brace"
                    style={{zIndex: this.state.zIndexMusic}}/>
                </div>

                <div
                className="curtains-art-container" id="curtains-art-container"
                style={{zIndex:this.state.zIndexArt}}>
                    <div
                    className="art-container" id="art"
                    style={{zIndex:this.state.zIndexArt, width: this.state.artBlockWidth}}/>
                    <div
                    className="art-brace" id="art-brace"
                    style={{zIndex:this.state.zIndexArt}}/>
                </div>
               <SocialBar fashionAnimation={fashionAnimation}/>
                <div className="copyright-container">
                <p className="copyright">(c) 2018 PASIKA magazine. All rights reserved</p>
                </div>
            </div>
        );
    }
}

export default MainPage;