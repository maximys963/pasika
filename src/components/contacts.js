import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Information = styled.p`
width: 45%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
`;

const Container = styled.div`
display: flex,
flex direction: column;
font-family: 'Montserrat', sans-serif;
`;


class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Contacts</h1>
                <Information>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda at debitis dicta doloribus eaque fuga fugiat, fugit impedit ipsam iste itaque magni natus officiis praesentium quaerat quam ratione saepe sapiente sed! Consequatur dicta eum explicabo necessitatibus officia officiis tenetur!</Information>
            </Container>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;
