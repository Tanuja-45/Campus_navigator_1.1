import React from "react";
import './CampusMap.css';
import campusmap from "../../images/maps/campus.png";
import aimld from "../../images/dept/aimldept.jpg";
import civild from "../../images/dept/civildept.jpg";
import csed from "../../images/dept/csedept.jpg";
import dsd from "../../images/dept/dsdept.jpg";
import eced from "../../images/dept/ecedept.jpg";
import med from "../../images/dept/medept.jpeg";
import eeed from "../../images/dept/eeedept.jpg";
import itd from "../../images/dept/itdept.jpg";
import mbad from "../../images/dept/mbadept.jpeg";
import "./CampusMap.css";

const departments = [
  { name: "B. Tech - CSE", img: csed, link: "/cse-map" },
  { name: "B. Tech - AI & ML", img: aimld, link: "/csm-map" },
  {name: "B. Tech - DS", img: dsd, link: "/csd-map" },
  { name: "B. Tech - IT", img: itd, link: "/it-map" },
  { name: "B. Tech - ECE", img: eced, link: "/ece-map" },
  { name: "B. Tech - ME", img: med, link: "/mech-map" },
  { name: "B. Tech - EEE ", img: eeed, link: "/eee-map" },
  { name: "B. Tech - CE", img: civild, link: "/civil-map" },  
  { name: "B. Tech - MBA", img: mbad, link: "/mba-map" },
  { name: "B. Tech - FED", img: mbad, link: "/mba-map" },
  
];

function CampusMap() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <img
          src={campusmap}
          alt="Campus Map"
          style={{
            width: "90%",  
            maxWidth: "900px",  
            height: "auto",  
            objectFit: "cover", 
          }}
        />
      </div>

      <div className="dept-container">
        {departments.slice(0, 5).map((dept, index) => (
          <div key={index} className="dept-card">
            <img src={dept.img} alt={`${dept.name} Dept`} />
            <h3>{dept.name}</h3>
            <a href={dept.link}>
              <button>View Map</button>
            </a>
          </div>
        ))}
      </div>

      <div className="dept-container">
        {departments.slice(5).map((dept, index) => (
          <div key={index + 5} className="dept-card">
            <img src={dept.img} alt={`${dept.name} Dept`} />
            <h3>{dept.name}</h3>
            <a href={dept.link}>
              <button>View Map</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusMap;