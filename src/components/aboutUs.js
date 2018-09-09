import React, {Component} from 'react';
import styled from 'styled-components'


const Information = styled.p`
width: 40%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;


`;

const Container = styled.div`
position: absolute;
top: 150px;
left: 8px;
right: 0;
display: flex,
flex-direction: column;
font-family: 'Montserrat', sans-serif;
 
`;
const ArrowContainer = styled.div`
width: 40%;
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
cursor: pointer;
`;
const ArrowRight = styled.img`
width: 30px;
height: 30px;
margin-left: 20px;
cursor: pointer;
`;



class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            infromationArr: ["The name of the magazine - “PASIKA” - is a Ukrainian word, which means - a place, where the bees get the honeydew. This name has philosophical context, in other words - it is a metaphor, which means that our platform is a place of artistic honey. The artists (as the bees) do their masterpieces\n" +
            "                    because of the high mission to show the world their inner world of creativity. The same - the bees make honey, because they love their ability to create an incredible ingredient of high blessing. Both the taste of honeydew and the taste of an artwork are exclusive. That’s why we firmly believe that “PASIKA” is platform\n" +
            "                    of real artists who truly dedicate their lives to art, fashion, music!"," Our aim is to create the powerful European digital magazine - a platform of modern young talents, whose works are so bright and extraordinary that sometimes their creators can be called “the freaks”. We are ready for the experiments and let the whole world see the colors of young artists’ creativity!\n" +
            "                    We want to make it possible for the photographers, directors, artists, illustrators, sculptors, writers, digital creators, and musicians who create fashion, art, music around the world to express themselves and become a family of the fantastic minds exactly here - in “PASIKA”!\n" +
            "                    Want to create your artistic honey in our magazine? Write us!" ],
        };
        this.ChangePageUp = this.ChangePageUp.bind(this);
        this.ChangePageDown = this.ChangePageDown.bind(this);
    }
    ChangePageUp(){
        if(this.state.infromationArr.length-1 !== this.state.currentPage){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }

    }
    ChangePageDown(){
        if(this.state.currentPage > 0){
            this.setState({
                currentPage: this.state.currentPage -1
            })
        }
    }
    render() {
        return (
            <Container>
                <h1>About us</h1>
                <Information>{this.state.infromationArr.slice(this.state.currentPage, this.state.currentPage+1 )}</Information>
                <ArrowContainer>
                    <ArrowLeft src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageDown} />
                    <ArrowRight src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageUp} />
                </ArrowContainer>
            </Container>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;
