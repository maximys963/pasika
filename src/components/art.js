import React, {Component} from 'react';
import styled from 'styled-components'

const Information = styled.p`
width: 560px;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
 text-align: center;
`;

const Container = styled.div`
position: absolute;
top: 150px;
left: 8px;
right: 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Montserrat', sans-serif;
@media (max-width:320px){
    margin-top:140px;
    left: 0;
    }
`;



class Art extends Component {
    constructor(){
        super();
        this.state = {
            videoCollection:[
                {
                    video: 'https://www.youtube.com/embed/hsPcEjc5nGY',
                    information: ''
                },
                {
                    video: 'https://www.youtube.com/embed/Cd8-9uTqRfo',
                    information: ''
                },
                {
                    video: 'https://www.youtube.com/embed/9JcrpkHLWJo',
                    information: ''
                },
            ],

            videos: ['https://www.youtube.com/embed/hsPcEjc5nGY','https://www.youtube.com/embed/Cd8-9uTqRfo', 'https://www.youtube.com/embed/9JcrpkHLWJo' ],
            currentVideoIndex: 0
        }
    }





    render() {
        const toggleVideoUp = () => {
            if(this.state.currentVideoIndex !== this.state.videoCollection.length -1){
                this.setState({
                    currentVideoIndex: this.state.currentVideoIndex + 1
                })
            }

        };
        const toggleVideoDown = () => {
            if(this.state.currentVideoIndex !== 0){
                this.setState({
                    currentVideoIndex: this.state.currentVideoIndex - 1,
                })
            }

        };
        const VideoContainer = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            `;
        const ArrowLeft = styled.img`
            width: 30px;
            height: 30px;
            transform: scale(-1, 1);
            margin-right: 20px;
            cursor: ${this.state.currentVideoIndex === 0 ? 'arrow' : 'pointer'};
            opacity: ${this.state.currentVideoIndex === 0 ? '0' : '1'};
            `;
        const ArrowRight = styled.img`
            width: 30px;
            height: 30px;
            margin-left: 20px;
             cursor: ${this.state.currentVideoIndex === this.state.videoCollection.length -1 ? 'arrow' : 'pointer'};
            opacity: ${this.state.currentVideoIndex === this.state.videoCollection.length -1 ? '0' : '1'};
            `;

        return (
            <Container>
                <VideoContainer>
                <ArrowLeft src={require(".././icons/right-arrow.svg")} onClick={toggleVideoDown} />
                <iframe width="560" height="315"
                        style={{marginTop: '30px'}}
                        src={this.state.videoCollection[this.state.currentVideoIndex].video} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <ArrowRight src={require(".././icons/right-arrow.svg")} onClick={toggleVideoUp}/>
                </VideoContainer>
                <Information>
                    Director: @elisa_baudoin (Elisa Baudoin)<br/>
                    Actress: @apolloniaorsoni (Apollonia Orsoni)<br/>
                    Music: Sergei Rachmaninov - Prelude in C-Sharp Minor, Op. 3, No. 2 <br/>
                </Information>

            </Container>
        );
    }
}


export default Art;
