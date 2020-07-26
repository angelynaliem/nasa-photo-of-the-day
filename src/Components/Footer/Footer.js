import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div `
color: yellow;
display: flex;
justify-content: center;
align-items: center;
background-color: dodgerblue;
margin:0;
padding: 10px;
position: fixed;
left: 0;
bottom: 0;
width: 100%
`;

const Footer =()=>{
    return (
        <FooterDiv><h1>Footer content</h1></FooterDiv>
    )
}
 export default Footer