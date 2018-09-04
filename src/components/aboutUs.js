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





class AboutUs extends Component {
    render() {
        return (
            <Container>
                <h1>About us</h1>
                <Information>The name of the magazine - “PASIKA” - is a Ukrainian word, which means - a place, where the bees get the honeydew. This name has philosophical context, in other words - it is a metaphor, which means that our platform is a place of artistic honey. The artists (as the bees) do their masterpieces
                    because of the high mission to show the world their inner world of creativity. The same - the bees make honey, because they love their ability to create an incredible ingredient of high blessing. Both the taste of honeydew and the taste of an artwork are exclusive. That’s why we firmly believe that “PASIKA” is platform
                    of real artists who truly dedicate their lives to art, fashion, music!
                    Our aim is to create the powerful European digital magazine - a platform of modern young talents, whose works are so bright and extraordinary that sometimes their creators can be called “the freaks”. We are ready for the experiments and let the whole world see the colors of young artists’ creativity!
                    We want to make it possible for the photographers, directors, artists, illustrators, sculptors, writers, digital creators, and musicians who create fashion, art, music around the world to express themselves and become a family of the fantastic minds exactly here - in “PASIKA”!
                    Want to create your artistic honey in our magazine? Write us!</Information>
            </Container>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;
