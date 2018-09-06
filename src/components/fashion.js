import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Information = styled.p`
width: 80%;
font-family: 'Montserrat', sans-serif;
 line-height: 22px;
`;

const Container = styled.div`
position: absolute;
top: 150px;
left: 8px;
right: 0;
width: 100%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
font-family: 'Montserrat', sans-serif;
`;


class Fashion extends Component {
    render() {
        return (
                <Container>
                    <h1>Fashion</h1>
                    <Information> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis debitis delectus maiores voluptate. Architecto cupiditate dolores eaque et modi? Consequuntur expedita explicabo harum incidunt modi natus nihil non nostrum, optio perferendis quae repellendus veniam. Ab itaque nisi quibusdam vitae.</Information>
                </Container>
        );
    }
}

Fashion.propTypes = {};

export default Fashion;
