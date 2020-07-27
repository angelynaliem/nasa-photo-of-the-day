import React from 'react';
import styled from 'styled-components';

// const BodyImage = styled.img `
//     height: 100vh;
//     width: 100%;
//     object-fit: cover;
// `;

// const BodyMainContainer = styled.div`
//     width: 100%;
//     text-align: center;
// `;

// const BodySubContainer = styled.div`
//     padding: 20px;
//     border-color: blue;
//     background-color: yellow;
//     text-align: center;
// `;

// const BodyH1 = styled.h1`
//     color: black;
// `;

// const BodyH2 = styled.h2`
//     color: black;
// `;

// const Body = (props) => {

// const { nasaData } = props;

//     return (
//         <BodyMainContainer>
//             <BodyImage src={nasaData} alt="NASA Photo of the Day"></BodyImage>
//             <BodySubContainer>
//                 <BodyH1>Enjoy today's photo of the day by NASA</BodyH1>
//                 <BodyH2>Want to learn more about NASA?</BodyH2>
//                 <BodyH2>Click here!</BodyH2>
//             </BodySubContainer>
//         </BodyMainContainer>

     
//      )
// }
//  export default Body;


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

const BodyH2 = styled.h2`
    color: dodgerblue;
`;

const BodySubTextH3Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BodyH3 = styled.h3`
    color: dodgerblue;
`;

const Body = (props) => {

    const { nasaData } = props;
    return (
        <BodyMainContainer>
            <BodyImage src={nasaData} alt="NASA Photo"></BodyImage>
            <BodySubContainer>
            <BodyH1>Check out this NASA Pic!</BodyH1>
            <BodySubH1Container>
                <BodySubImage src={nasaData} alt="NASA Photo"></BodySubImage>
                    <BodySubTextH2Container>
                        <BodyH2>Pretty amazing huh?</BodyH2>
                        <BodySubTextH3Container>
                            <BodyH3>Want to see more photos?</BodyH3>
                            <BodyH3>Click here</BodyH3>
                        </BodySubTextH3Container>
                    </BodySubTextH2Container>
                </BodySubH1Container>
            </BodySubContainer>
        </BodyMainContainer>

     
     )
}
 export default Body;