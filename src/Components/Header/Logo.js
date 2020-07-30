import React from 'react'
import styled from 'styled-components';

const HeadingOneDiv = styled.div `
    margin 0 20px;
`;


const HeadingOne = styled.h3 `
    background-color: black;
    padding: 10px;
    color: white;
    border-radius: 10px;
`;

const Logo = ()=>{
    return (
        <HeadingOneDiv>
    <HeadingOne>NASA</HeadingOne>
    </HeadingOneDiv>
    )
}

export default Logo