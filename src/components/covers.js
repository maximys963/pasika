import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
top: 150px;

right: 0;
width: 100%
display: flex;
flex-direction: row;
justify-content: center;
align-items: center
font-family: 'Montserrat', sans-serif;
`;

const Image = styled.img`
width: 25%;
height: 500px;
margin-left: 10px;
margin-right: 10px;
background: white
`;

class Covers extends Component {
    render() {
        return (
            <Container>
                <Image/>
                <Image/>
                <Image/>
            </Container>
        );
    }
}

Covers.propTypes = {};

export default Covers;
