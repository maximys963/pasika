import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


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
`;

const ContentContainer = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`;

class Issues extends Component {
    render() {
        return (
            <Container>
                <ContentContainer>
                <h1>Issues</h1>
                <Information>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus adipisci alias amet aperiam aspernatur atque blanditiis corporis distinctio doloremque ducimus ea eaque eligendi error et, eveniet inventore, iure laborum maiores nisi obcaecati odio officia officiis omnis perferendis quasi qui quod reiciendis reprehenderit rerum sequi similique sunt suscipit tenetur, vero voluptatem! Animi assumenda blanditiis dignissimos doloribus esse eum ex labore laboriosam nihil odit quia, quibusdam saepe sit totam voluptate.</Information>
                </ContentContainer>
            </Container>
        );
    }
}

Issues.propTypes = {};

export default Issues;