import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon"/>

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MessageIcon} text="Messages" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={CategoryIcon} text="Topics" />
      <SidebarOption Icon={PersonIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      <Button variant="outlined" className="sidebar_button" fullWidth>Record Audio</Button>
    </div>
  );
}

export default sidebar;
