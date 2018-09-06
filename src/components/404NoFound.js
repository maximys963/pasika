import React, {Component} from 'react';
import styled from 'styled-components'

const Information = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 36px;
`;

const Container = styled.div`
position: absolute;
top: 150px;
width: 100%
display: flex;
flex-direction: row;
justify-content: center;
align-items: center
font-family: 'Montserrat', sans-serif;
`;

class NoFound extends Component {
    render() {
        return (
            <Container>
                <Information>404 Page No Found :( </Information>
            </Container>
        );
    }
}

export default NoFound;
