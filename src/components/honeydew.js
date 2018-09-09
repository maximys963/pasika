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
left: 8px;
right: 0;
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


class HoneyDew extends Component {
    render() {
        return (
            <Container>
                <ContentContainer>
                <h1>Honeydew</h1>
                <Information>
                    The world is full of art. Each of us rides on the swing of life in attempt to feel it,
                    find it, touch it. Artists find their wings when they jump off the swing and start their own way.
                    They take this dangerous step, so that we could hold the breath of beauty.
                    Inspired by unique ideas, modern artists work for different purposes, they have different desires,
                    different visions, their voices are heard from many parts of the planet (and even more).
                    But all of them fly to our common house. And this house is Art. This is an improvised PASIKA,
                    where instead of the bees - the best artists of our time,
                    where  instead of honey - contemporary artworks, and there are no beekeepers at all.

                    In this column we want to learn more about the artists who surprise us with their vision.
                    We want to communicate with personalities whose works have already begun to speak with our hearts.
                    Honeydew - the artist of the month. Modern artist. Infinite artist!
                </Information>
                </ContentContainer>
            </Container>
        );
    }
}

HoneyDew.propTypes = {};

export default HoneyDew;