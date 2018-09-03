import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Information = styled.p`
width: 500px;
`;

const Container = styled.div`
display: flex,
flex direction: column;
`;





class AboutUs extends Component {
    render() {
        return (
            <Container>
                <h1>About us</h1>
                <Information>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis consequatur cum deleniti doloremque doloribus dolorum ducimus earum, eius eligendi error fugit laudantium maxime nam odio optio perspiciatis possimus quae quam quisquam quod recusandae rem soluta veritatis vero vitae, voluptatum.</Information>
            </Container>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;
