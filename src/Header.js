import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" sx={{ color: "black"}} />
      </IconButton>
      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt="TINDER"
      />
      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header_icon" sx={{color: "black"}} />
      </IconButton>

    </div>
  );
}

export default Header