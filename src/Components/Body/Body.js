import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./Body.css";

const Body = ({ spotify }) => {
  const [{ discover_weakly }, dispatch] = useDataLayerValue();
  console.log(discover_weakly);
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={discover_weakly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weakly</h2>
          <p>{discover_weakly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weakly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
