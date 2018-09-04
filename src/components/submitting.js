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

class Submitting extends Component {
    render() {
        return (
            <Container>
                <h1>Submitting</h1>
                <Information>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus adipisci alias amet aperiam aspernatur atque blanditiis corporis distinctio doloremque ducimus ea eaque eligendi error et, eveniet inventore, iure laborum maiores nisi obcaecati odio officia officiis omnis perferendis quasi qui quod reiciendis reprehenderit rerum sequi similique sunt suscipit tenetur, vero voluptatem! Animi assumenda blanditiis dignissimos doloribus esse eum ex labore laboriosam nihil odit quia, quibusdam saepe sit totam voluptate.</Information>
            </Container>
        );
    }
}

Submitting.propTypes = {};

export default Submitting;
