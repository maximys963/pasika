import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
const Title = styled.h1`
margin-bottom: 0;
`



const ArrowContainer = styled.div`
width: 100%;
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

const Information = styled.p`
width: 100%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
`;

const Container = styled.div`
position: absolute;
top: 150px;
right: 5px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center ;
justify-content: flex-end;
font-family: 'Montserrat', sans-serif;
@media (max-width:320px){
    margin-top:145px;
    right: 0;
    justify-content: center;
    
    }
`;

const ContentContainer = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media (max-width:320px){
    width: 95%
    align-items: center;
     }

`;


class HoneyDew extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            infromationArr: [
                '     The world is full of art. Each of us rides on the swing of life in attempt to feel it,\n' +
                '                    find it, touch it. Artists find their wings when they jump off the swing and start their own way.\n' +
                '                    They take this dangerous step, so that we could hold the breath of beauty.\n' +
                '                    Inspired by unique ideas, modern artists work for different purposes, they have different desires,\n' +
                '                    different visions, their voices are heard from many parts of the planet (and even more).\n' +
                '                    But all of them fly to our common house. And this house is Art. This is an improvised PASIKA,\n' +
                '                    where instead of the bees - the best artists of our time,\n' +
                '                    where  instead of honey - contemporary artworks, and there are no beekeepers at all.',

                ' In this column we want to learn more about the artists who surprise us with their vision.\n' +
                '                    We want to communicate with personalities whose works have already begun to speak with our hearts.\n' +
                '                    Honeydew - the artist of the month. Modern artist. Infinite artist!'
            ]
        };
        this.ChangePageUp = this.ChangePageUp.bind(this);
        this.ChangePageDown = this.ChangePageDown.bind(this);
        };

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
                <ContentContainer>
                <Title>Honeydew</Title>
                <Information>
                    {this.state.infromationArr.slice(this.state.currentPage, this.state.currentPage+1).map((element)=>(
                        <div>
                            {element}
                        </div>
                    ))}
                </Information>
                    <ArrowContainer>
                        <ArrowLeft src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageDown} />
                        <ArrowRight src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageUp} />
                    </ArrowContainer>
                </ContentContainer>
            </Container>
        );
    }
}

HoneyDew.propTypes = {};

export default HoneyDew;