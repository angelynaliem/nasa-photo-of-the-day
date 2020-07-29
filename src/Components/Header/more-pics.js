
import React from 'react';
import styled from 'styled-components';

const MorePicsStyle = styled.h3 `
    margin: 0 20px;
    font-size: 20px;
    background-color: black;
    padding: 10px;
    color: white;
    border-radius: 10px;
`;

const MorePics = ()=>{
    return (
        <MorePicsStyle>
            See More Photos
    </MorePicsStyle>
    )

}

export default MorePics