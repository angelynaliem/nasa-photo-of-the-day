import React from 'react'
import styled from 'styled-components';
const HeadingOneDiv = styled.div `
    margin 0 20px;
`;


const HeadingOne = styled.h1 `
    background-color: yellow;
    padding: 10px;
    color: dodgerblue;
    border-radius: 10px;
`;

const Logo = ()=>{
    return (
        <HeadingOneDiv>
    <HeadingOne>BJ</HeadingOne>
    </HeadingOneDiv>
    )
}

export default Logo