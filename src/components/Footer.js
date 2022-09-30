import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useDataLayerValue } from "../context/DataLayer";

function Footer({ spotify }) {
  const [{ currentTrack, playing }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      {currentTrack ? (
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src={currentTrack?.album.images[0].url}
            alt=""
          />
          <div className="footer_songInfo">
            <h4>{currentTrack?.name}</h4>
          </div>
        </div>
      ) : (
        <div className="footer_left"></div>
      )}

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>

      <div className="footer_right">
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider />
      </div>
    </div>
  );
}

export default Footer;
