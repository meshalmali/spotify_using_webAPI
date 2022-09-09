import React from "react";
import "./SongRow.css";

function SongRow({ song }) {
  return (
    <div className="songRow">
      <img className="songRow_album" src={song?.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{song?.name}</h1>
        <div className="songRow_artist">
          {song?.artists.map((artist) => (
            <div key={artist.id} className="artist_name">
              {artist.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongRow;
