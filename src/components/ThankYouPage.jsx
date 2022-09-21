import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";

const ThankYouPage = () => {
    const mainFeaturedPost = {
        title: "Thank you!",
        description: "Your post was awesome!",
        image:"https://images.pexels.com/photos/4411214/pexels-photo-4411214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageText: "main image description",
      };
    return(
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
        </div>
    )
}

export default ThankYouPage;