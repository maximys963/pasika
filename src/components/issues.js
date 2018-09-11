import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Title = styled.h1`
margin-bottom: 0;
`

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

class Issues extends Component {
    render() {
        return (
            <Container>
                <ContentContainer>
                <Title>Issues</Title>
                <Information>To breathe in art,
                    <br/>To see through fashion,
                    <br/>To live with music -
                    <br/>Read “PASIKA”!
                    <br/>Only 4€ for the source of originality!
                    <br/>To buy an issue please write us - <strong>pasikamagazine@gmail.com</strong></Information>
                </ContentContainer>
            </Container>
        );
    }
}


export default Issues;