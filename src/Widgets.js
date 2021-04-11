import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Audioshorts" type="text"></input>
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1378513398044971009"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ycombinator"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
