import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>

      <div className="footer">
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
