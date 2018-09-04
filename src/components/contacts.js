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

const Refs = styled.a`
text-decoration: none;
color: black;
`;

class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Contacts</h1>
                <Information>
                    Contacts/
                    For submissions, advertisements, new collaborations - pasikamagazine@gmail.com
                    To buy the digital issue, please, contact our editor-in-chief  Shamray Alexandra - shamray.alexandra@gmail.com
                    Write us also in direct messages in Instagram - <Refs target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/pasikamagazine/'><strong>@pasikamagazine </strong></Refs>
                    Follow us in <Refs target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/channel/UC-3WBbqNGyK_2YSCoFEEs6w?view_as=subscriber"><strong>YouTube</strong></Refs>
                </Information>
            </Container>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;
