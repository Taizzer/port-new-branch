import React from "react";
import "./RecentUpdate.css";
import { UpdateReview } from "../../../Data/Data.js";
import Welcome from "../../../welcome/welcome";
const RecentUpdate = () => {
  return (
    <div className="updates">
      <Welcome />
      {UpdateReview.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="note">
              <div className="namenote">
                <span>{update.name}</span>
                <div>
                  <span>{update.note}</span>
                </div>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentUpdate;
