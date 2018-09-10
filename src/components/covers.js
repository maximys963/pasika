import React, {Component} from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


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
border: 0;
width: 100%;
height: 500px;
background: white;
&:hover{opacity: 0.8};
&:active{opacity: 0.5};
`;

class Covers extends Component {
    render() {
        return (
            <Container>
                <NavLink to="/issues" style={{width: "25%", marginLeft: "10px", marginRight: "10px" }}><Image/></NavLink>
                <NavLink to="/issues" style={{width: "25%",  marginLeft: "10px", marginRight: "10px" }}><Image/></NavLink>
                <NavLink to="/issues" style={{width: "25%",  marginLeft: "10px", marginRight: "10px" }}><Image/></NavLink>
            </Container>
        );
    }
}

Covers.propTypes = {};

export default Covers;
