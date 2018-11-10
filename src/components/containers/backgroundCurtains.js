import React, {Component} from 'react';
import '../../styles/backgroundCurtains.css'

class BackgroundCurtains extends Component {
    render() {
        return (
            <div>
                <div
                       className="fashion-container"
                       style={{zIndex: -4}}/>
                <div
                       className="curtains-music-container" id="curtains-music-container"
                       style={{zIndex: this.props.zIndexMusic}}>
                    <div
                        className="music-container" id="music"
                        style={{zIndex: this.props.zIndexMusic, width: this.props.musicBlockWidth}}/>
                    <div
                        className="music-brace" id="music-brace"
                        style={{zIndex: this.props.zIndexMusic}}/>
                </div>
                <div    className="curtains-art-container" id="curtains-art-container"
                        style={{zIndex:this.props.zIndexArt}}>
                    <div
                        className="art-container" id="art"
                        style={{zIndex:this.props.zIndexArt, width: this.props.artBlockWidth}}/>
                    <div
                        className="art-brace" id="art-brace"
                        style={{zIndex:this.props.zIndexArt}}/>
                </div>
            </div>
        );
    }
}


export default BackgroundCurtains;