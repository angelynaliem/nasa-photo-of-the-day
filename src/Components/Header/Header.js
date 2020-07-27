import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan'
import Logo from './Logo'

//css for main header div
const Heading = styled.div `
    color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: dodgerblue;
    margin:0;
    padding: 10px;
`;
const Company = styled.h1 `
    font-size: 40px;
`
const Header = ()=>{
   return (
   <Heading>
      <Logo />
       <Company>NASA Photo of the Day!</Company>
       <Slogan />
   </Heading>
   )
}

export default Header;