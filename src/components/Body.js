import React, { useState, useEffect } from "react";
import "./Body.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header from "./Header";
import { useDataLayerValue } from "../context/DataLayer";
import PlayCircleFilledWhiteSharpIcon from "@mui/icons-material/PlayCircleFilledWhiteSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ userPlaylist, currentTrack }, dispatch] = useDataLayerValue();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CURRENTTRACK",
      currentTrack: track,
    });
  }, [track]);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img alt="" src={userPlaylist?.images[0].url} />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{userPlaylist?.name}</h2>
          <p>{userPlaylist?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledWhiteSharpIcon className="body_shuffle" />
          <FavoriteSharpIcon fontSize="large" />
          <MoreHorizSharpIcon />
        </div>
        {userPlaylist?.tracks.items.map((item) => (
          <div key={item.added_at} onClick={() => setTrack(item.track)}>
            <SongRow song={item.track} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
