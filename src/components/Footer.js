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

  // useEffect(() => {
  //   if (playing) {
  //     currentTrack.external_urls.preview_url;
  //   }
  // }, []);

  // const handlePlayPause = () => {
  //   if (playing) {
  //     spotify.pause();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: false,
  //     });
  //   } else {
  //     spotify.play();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   }
  // };

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
        {/* <a href="https://p.scdn.co/mp3-preview/b8cf671d9dcff68bbe78eaaf1b4b3eba2ee4ce83?cid=620dee9198">
          Play song
        </a> */}
        {/* Use an iFrame if you want to include the play preview feature */}
        <PlayCircleOutlineIcon
          // onClick={() => currentTrack.external_urls.preview_url}
          className="footer_icon"
          fontSize="large"
        />

        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
