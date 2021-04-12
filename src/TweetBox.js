import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  // const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "George Wauchope",
      username: "george_wauchope",
      verified: true,
      text: tweetMessage,
      // image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGRZpd8tp2crw/profile-displayphoto-shrink_200_200/0/1568691234283?e=1623283200&v=beta&t=7OWLAdJ52gVVdL-hon2_7iAT8dAP3gteogtTUtOXY4I",
    });

    setTweetMessage("");
    // setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGRZpd8tp2crw/profile-displayphoto-shrink_200_200/0/1568691234283?e=1623283200&v=beta&t=7OWLAdJ52gVVdL-hon2_7iAT8dAP3gteogtTUtOXY4I" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Say something interesting..."
            type="text"
          ></input>
        </div>

        {/* <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input> */}

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Record Audio
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
