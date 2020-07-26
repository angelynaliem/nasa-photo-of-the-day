import React from 'react';
import styled from 'styled-components';

const BodyImage = styled.img `
    height: 100vh;
    width: 100%;
`;

const BodyMainContainer = styled.div`
    width: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
    text-align: center;
`;

const BodySubContainer = styled.div`
    padding: 20px;
    border-color: blue;
    background-color: yellow;
    text-align: center;
`;

const BodyH1 = styled.h1`
    color: black;
`;

const BodyH2 = styled.h2`
    color: black;
`;

const Body = (props) => {

const { nasaData } = props;

    return (
        <BodyMainContainer>
            <BodyImage src={nasaData} alt="NASA Photo of the Day"></BodyImage>
            <BodySubContainer>
                <BodyH1>Enjoy today's photo of the day by NASA</BodyH1>
                <BodyH2>Want to learn more about NASA?</BodyH2>
                <BodyH2>Click here!</BodyH2>
            </BodySubContainer>
        </BodyMainContainer>

     
     )
}
 export default Body;


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