import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" sx={{ color: "red"}} />
      </IconButton>
      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt="TINDER"
      />
    </div>
  );
}

export default Header