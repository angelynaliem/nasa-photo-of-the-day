import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan'
import Logo from './Logo'
import Image from './nasa-header.jpg'

//css for main header div
const Heading = styled.div `
    color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0;
    background-image: url(${Image});
    background-size: 100% 100%;
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
`;
const Company = styled.h1 `
    font-size: 20px;
`
const Header = (props)=>{

    const {nasaTitle} = props;
   return (
   <Heading>
      <Logo />
       <Company>{nasaTitle}</Company>
       <Slogan />
   </Heading>
   )
}

export default Header;