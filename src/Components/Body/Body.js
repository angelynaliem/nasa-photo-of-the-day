import React from 'react';
import styled from 'styled-components';

//  const Posts = (props) => {
//     // 🔥 Make sure the parent of Posts is passing the right props!
//     const { likePost, posts } = props;
  
//     return (
//       <div className='posts-container-wrapper'>
//         {/* Map through the posts array returning a Post component at each iteration */}
//         {/* Check the implementation of Post to see what props it requires! */}
//         {posts.map(post => {
//         return <Post key={post.id} post={post} likePost={likePost}/>
//         })}
//       </div>
//     );
//   };


const BodyMainContainer = styled.div`
    position: relative;
    display: inline-block;
    justify-content: center;
    align-items: center;
`;

const BodyImage = styled.img `
    width: 100%;
    height: 100vh;
    opacity: 80%;
    object-fit: cover;
`;

const BodySubContainer = styled.div`
    position: absolute;
    z-index: 99;
    margin: 0 auto;
    right: 10;
    top: 10%;
    margin-left: 10%;
    width: 25%;
    height: 75%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
`;

const BodyH1 = styled.h1`
    margin-top: 10%;
    color: yellow;
    text-align: center;
  
`;

const BodyP = styled.p`
    color: yellow;
 
`;

const Body = (props) => {

    const { nasaData, nasaExplanation, nasaDate } = props;
    return (
        <BodyMainContainer>
            <BodyImage src={nasaData} alt="NASA Photo"></BodyImage>
            <BodySubContainer>
            <BodyH1>{nasaDate}</BodyH1>
            <BodyP>{nasaExplanation}</BodyP>
            </BodySubContainer>
        </BodyMainContainer>

     
     )
}
 export default Body;