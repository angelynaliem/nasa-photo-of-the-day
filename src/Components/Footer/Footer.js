import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div `
color: white;
display: flex;
justify-content: center;
align-items: center;
margin:0;
position: fixed;
right: 1%;
bottom: 1%;
width: 100%
opacity: 80%;
opacity: 60%;
`;

const Footer =(props)=>{

    const { copyright } = props.nasaData;

    return (
        <FooterDiv>
            <h6>Copyright {copyright} <i className="fa fa-twitter" aria-hidden="true" onClick="https://twitter.com/nasa"></i></h6>
        </FooterDiv>
    )
}
 export default Footer