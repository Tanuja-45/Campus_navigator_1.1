import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import "./DepartmentDetails.css";

const cards = [
  { floor: 2, department: "CSE", name: "Dr. A. Jaya Lakshmi", image: "https://i.pinimg.com/474x/e6/d3/df/e6d3df628e61be4518d775b52546791a.jpg", path: "cse" },
  { floor: 2, department: "CSE (AI & ML)", name: "Dr. B. Janakiramaiah", image: "https://i.pinimg.com/236x/16/bf/39/16bf39c921c8702f5e9b98e9f519a0b7.jpg", path: "csd" },
  { floor: 2, department: "CSE (Data Science)", name: "Dr. B. Janakiramaiah", image: "https://i.pinimg.com/236x/e0/ea/32/e0ea32e68f2b354f38d55412199f586d.jpg", path: "csm" },
  { floor: 3, department: "IT", name: "Dr. B.V. Subba Rao", image: "https://t3.ftcdn.net/jpg/04/34/45/86/360_F_434458653_dMDMTN1VpeBxEHuOtlS0esEztiSVVQ9y.jpg", path: "it" },
  { floor: 1, department: "ECE", name: "Dr. C. Subba Rao", image: "https://i.pinimg.com/236x/de/fb/68/defb688d2107ac6201dd1113d1af3319.jpg", path: "ece" },
  { floor: 2, department: "EEE", name: "Dr. Ch Padmanabha Raju", image: "https://i.pinimg.com/236x/e6/61/f0/e661f0c2d1f2ec1653e61830cf1325c2.jpg", path: "eee" },
  { floor: 1, department: "ME", name: "Dr. Raghu Kumar Bandlamudi", image: "https://i.pinimg.com/236x/be/f8/45/bef845e62ff1381a9aa6021a0a7f4ab0.jpg", path: "mech" },
  { floor: 1, department: "CE", name: "Dr. V. Jagadish", image: "https://i.pinimg.com/236x/7a/65/61/7a6561c69356063002600b5e6e5316fc.jpg", path: "civil" },
  { floor: 4, department: "MBA", name: "Dr. P. Adi Lakshmi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBNyaJJpH9StNrCenXS5h9Y2KRMVkKx2RQw&s", path: "mba" },
  { floor: 4, department: "FED", name: "Dr. M. Srilakshmi", image: "https://i.pinimg.com/236x/f8/07/72/f80772f58016a263c6a9ee6eb79f0a7c.jpg", path: "fed" },
];

const DepartmentDetails = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="page-wrapper">
     
      {/* Main Content */}
      <div className="main-content">
        <div className="department-container">
          {cards.map((dept, index) => (
            <Card key={index} className="department-card">
              <CardMedia
                component="img"
                className="department-image"
                image={dept.image}
                alt={dept.name}
              />
              <div className="card-content">
                <Typography variant="h6" className="name">
                  {dept.department}
                </Typography>
                <Typography variant="body2" className="hod-name">
                  {dept.name}
                </Typography>
                <Typography variant="body2" className="floor-no">
                  Floor: {dept.floor}
                </Typography>
                <button className="fac btn-info"
                  onClick={() => handleButtonClick(dept.path)}>Faculty Rooms</button>
                  
            
                  
              
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;