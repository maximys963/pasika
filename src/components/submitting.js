import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SubTitle = styled.div`
width: 40%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
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



const Information = styled.p`
width: 40%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
`;

const Container = styled.div`
display: flex,
flex direction: column;
font-family: 'Montserrat', sans-serif;
 position: absolute;
    top: 150px;
    left: 8px;
    right: 0;
`;

class Submitting extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            infromationArr: [
                {title: "IMAGE REQUIREMENTS",
                 text:" IMAGE REQUIREMENTS\n" +
                "                    7-10 photos, 3-10 images.\n" +
                "                    JPG or TIF format.\n" +
                "                    At least 1500 pixels on the longest side.\n" +
                "                    MAX 2048 pixels on the longest side.\n" +
                "                    Must be exclusive and unpublished.\n" +
                "                    Please, write the team credits with your Instagram handles in the description if you want them added.\n" +
                "\n"
               },
                {title: "GUIDELINES",
                 text: "We prioritize exclusive and unpublished editorials. When approved, the editorial is published within a month. If you would like to be published in Online version of PASIKA Magazine (Instagram), you can send us even your recent or old works (both published and unpublished), but we keep the right to choose which photos are appropriate for the conception of PASIKA. \n" +
                 "If you want to create the project specially for an issue - send us your portfolio. We will analyze your style and give you more information about the theme of an issue. \n" +
                 "If you want to create the video content for our YouTube channel - tell us about your ideas in a written form with the mood board of a project. "
                },
                {
                    title: "By submitting materials you agree PASIKA’s following terms and conditions:",
                    text: "1. The artist owns all the rights, including copyright, necessary to submit his or her works to PASIKA Magazine and I understand that I am granting PASIKA the rights to use them in the following ways:\n" +
                    "• to publish in online and/or in digital format \n" +
                    "• to publish it on social media (FB, Twitter, Instagram, etc) and on the PASIKA Magazine’s website, which shall include the artist’s name.\n" +
                    "2. I consent to indemnify PASIKA against any claim, demand, action or other proceedings against PASIKA’s arising out of the use of the  work and related to any inaccurate statements.\n"

                },
                {
                    text:`3. All the artists who create the projects for Web version of PASIKA Magazine get free digital issue. 
                         4. Participants who have modeled or posed in the photo or video project have assigned all relevant rights to the artist.
                         5.I understand that submission does not mean acceptance; and that all submissions are subjected to review. 
                         Please allow 2 days for us to respond. We try our very best to answer every submission, and will definitely review every email that is sent through. 
                         If we don’t get back within a week please accept our apologies, but the project isn’t quite right for the conception of PASIKA.`
                }
            ]
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
                <h1>Submission for Web Editorials</h1>
                    {this.state.infromationArr.slice(this.state.currentPage, this.state.currentPage+1).map((element)=>(
                        <div>
                        <SubTitle>{element.title}</SubTitle>
                        <Information>{element.text}</Information>
                        </div>
                    ))}
                <ArrowContainer>
                    <ArrowLeft src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageDown} />
                    <ArrowRight src={require(".././icons/right-arrow.svg")} onClick={this.ChangePageUp} />
                </ArrowContainer>
            </Container>
        );
    }
}

Submitting.propTypes = {};

export default Submitting;
