import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";
import picture1Src from '../picture1.jpg';

const Home = () => {
    const mainFeaturedPost = {
        title: "Hello! I'm Ana.",
        description: "Welcome to my portfolio website!",
        image: picture1Src,
        imageText: "main image description",
      };
    return(
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
        </div>
    )
}

export default Home;
