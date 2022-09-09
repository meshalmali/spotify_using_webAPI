import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../context/DataLayer";

function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();
  const [current_playlist, setCurrent_playlist] = useState("");

  useEffect(() => {
    spotify.getPlaylist(current_playlist.id).then((userPlaylist) => {
      dispatch({
        type: "SET_USERPLAYLIST",
        userPlaylist: userPlaylist,
      });
    });
  }, [current_playlist]);

  // const showCurrentPlaylist = () => {
  //   spotify.getPlaylist().then((userPlaylist) => {
  //     dispatch({
  //       type: "SET_USERPLAYLIST",
  //       userPlaylist: userPlaylist,
  //     });
  //   });
  // }

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">MY PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <div onClick={() => setCurrent_playlist(playlist)} key={playlist.id}>
          <SidebarOption title={playlist.name} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
