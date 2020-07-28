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
    left: 0;
    right: 0;
    top: 10%;
    padding: 2.5%;
    border-radius: 10%;
    background-color: yellow;
    opacity: 50%;
    width: 50%;
    height: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

const BodySubH1Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const BodyH1 = styled.h1`
    margin-top: 10%;
    color: dodgerblue;
    text-align: center;
`;

const BodySubImage = styled.img`
    width: 50%;
    height: 50vh;
    border-radius: 10%;
    padding: 1%;
    margin-top: 0.5%;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-items: center;
`;

const BodySubTextH2Container = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    padding: 1%;
    margin-top: 0.5%;
`;

const BodyP = styled.p`
    color: dodgerblue;
`;

const Body = (props) => {

    const { nasaData, nasaExplanation, nasaDate } = props;
    return (
        <BodyMainContainer>
            <BodyImage src={nasaData} alt="NASA Photo"></BodyImage>
            <BodySubContainer>
            <BodyH1>{nasaDate}</BodyH1>
            <BodySubH1Container>
                <BodySubImage src={nasaData} alt="NASA Photo"></BodySubImage>
                    <BodySubTextH2Container>
                        <BodyP>{nasaExplanation}</BodyP>
                    </BodySubTextH2Container>
                </BodySubH1Container>
            </BodySubContainer>
        </BodyMainContainer>

     
     )
}
 export default Body;