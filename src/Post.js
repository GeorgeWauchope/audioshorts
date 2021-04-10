import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
  likes,
  comments,
}) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Rafeh Qazi{""}
              <span className="post_headerSpecial"> 
                <VerifiedUserIcon className="post_badge" />
                @cleverqazi
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>I challenge you to build a twitter clone with react js.</p>
          </div>
        </div>
        <img
          src="https://lh3.googleusercontent.com/proxy/TUX1Cq5nLHVzzFJtXGnCxC2o_8bTJ6biEQTMqSCz3px-KMYredqLCVw8Ws8sdImWkR3hveiROSURekgco59_c4YnGfRlhEZx5zAWwOo6fHGd"
          alt=""
        ></img>
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <ShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
