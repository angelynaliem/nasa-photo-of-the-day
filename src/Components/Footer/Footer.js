import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div `
color: yellow;
display: flex;
justify-content: center;
align-items: center;
margin:0;
padding: 1%;
position: fixed;
right: 0;
bottom: 0;
width: 100%
opacity: 80%;
`;

const Footer =(props)=>{

    const {nasaCopyright} = props;
    return (
        <FooterDiv><h1>Copyright {nasaCopyright}</h1><i className="fa fa-twitter" aria-hidden="true" onClick="https://twitter.com/nasa"></i></FooterDiv>
    )
}
 export default Footer