import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="George Wauchope"
        username="george_wauchope"
        verified={true}
        text="This is a tweet"
        image="https://miro.medium.com/max/1920/0*z1mm6izqSeDiKukb"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGRZpd8tp2crw/profile-displayphoto-shrink_200_200/0/1568691234283?e=1623283200&v=beta&t=7OWLAdJ52gVVdL-hon2_7iAT8dAP3gteogtTUtOXY4I"
      />
      <Post />
    </div>
  );
}

export default Feed;
