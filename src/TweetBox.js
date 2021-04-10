import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png" />
          <input placeholder="Say something interesting..." type="text"></input>
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button className="tweetBox_tweetButton">Record Audio</Button>
      </form>
    </div>
  );
}

export default TweetBox;
