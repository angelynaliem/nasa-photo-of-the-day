import React from 'react';
import styled from 'styled-components';
import MorePics from './more-pics'
import Logo from './Logo'


//css for main header div
const Heading = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0;
    background-size: 100% 100%;
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
`;
const Title = styled.h1 `
    font-size: 20px;
    background-color: black;
    padding: 10px;
    color: white;
    border-radius: 10px;
`
const Header = (props)=>{

    const { title } = props.nasaData;

   return (
   <Heading>
      <Logo />
       <Title>{title}</Title>
       <MorePics/>
   </Heading>
   )
}

export default Header;