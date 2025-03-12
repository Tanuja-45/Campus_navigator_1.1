import React from "react";
import mapImage from "../../../images/maps/mba.png";
import "./MBAMap.css";

function MBAMAP() {
  const classroomData = [
    { room: "460", name: "MBA Lecture Hall" },
    { room: "461", name: "MBA Lecture Hall" },
    { room: "210", name: "II B. Tech Classroom Sec -II" },
    { room: "203", name: "E - Classroom" },
    { room: "230", name: "III B. Tech Classroom Sec -I" },
    { room: "210", name: "III B. Tech Classroom Sec -II" },
    { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const waitingHallData = [
    { room: "441", name: "Girls Waiting hall" },
    { room: "454", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. Lt. M. Dhadurya Naik, Assistant Professor", "room": "160, 447" },
    { "name": "Dr. D. Srinivasa Rao, Associate Professor", "room": "451" },
    { "name": "Mr. V. Praveen Kumar, Assistant Professor", "room": "447" },
    { "name": "Dr. P. Adi Lakshmi, Professor", "room": "459, 464" },
    { "name": "Dr. N. Siva Surendra, Assistant Professor", "room": "465" },
    { "name": "Mr. N. Suresh Babu, Assistant Professor", "room": "465" },
    { "name": "Mr. Sk. Subhan Saheb, Assistant Professor", "room": "465" },
];

  const departmentRoomData = [
    { room: "463", name: "Department Office, Dept of MBA"},
    { room: "464", name: "Head of the Department, Dept of MBA"},
  ];

  return (
    <div className="container">
      <img src={mapImage} alt="CSE Department Map" className="map-image" />
      <h2 className="map-h2 text-center">Room Details</h2>

      <div className="tables-container">
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Classrooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {classroomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Labs</th>
              <th>Lab name</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Faculty Rooms</th>
              <th>Faculty Name</th>
            </tr>
          </thead>
          <tbody>
            {facultyRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Department Rooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {departmentRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Waiting Rooms</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {waitingHallData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Additional Rooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {additionalRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MBAMAP;