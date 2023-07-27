import React from "react";
import { Card } from "react-bootstrap";
import dp from "../assets/img/dp.png";
import "../assets/css/custom.css";

const TodayStaff = () => {
  const staffData = [
    { name: "Profile Name 1", imgSrc: dp },
    { name: "Profile Name 2", imgSrc: dp },
  ];

  return (
    <div className="card-container">
      {staffData.map((staff, index) => (
        <div className="card-wrapper" key={index}>
          <img className="card-img" src={staff.imgSrc} alt={staff.name} />
          <div className="card-name">{staff.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TodayStaff;
