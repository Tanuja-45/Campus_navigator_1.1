import React from "react";
import mapImage from "../../../images/maps/csd&aiml.png";
import "./CSMMap.css";

function CSMMAP() {
  const classroomData = [
    { room: "201", name: "II B. Tech Classroom Sec -I" },
    { room: "202", name: "II B. Tech Classroom Sec -III" },
    { room: "210", name: "II B. Tech Classroom Sec -II" },
    { room: "203", name: "E - Classroom" },
    { room: "230", name: "III B. Tech Classroom Sec -I" },
    { room: "210", name: "III B. Tech Classroom Sec -II" },
    { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const labData = [
    { room: "208", name: "Artificail Intelligence & Machine Learning Lab, Dept of CSE" },
    { room: "216", name: "Application Development Lab, Dept of CSE" },
    { room: "224", name: "Programming Languages Lab, Dept of CSE"},
    { room: "229", name: "Metallurgy Lab, Dept of ME "},
    { room: "231", name: "Machine Dynamics Lab, Dept of ME " },
    // { room: "305", name: "Lab 5" },
    // { room: "306", name: "Lab 6" },
  ];

  const waitingHallData = [
    { room: "214", name: "Girls Waiting hall" },
    { room: "225", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. B. Janakiramaiah, Professor & Head", "room": "432" },
    { "name": "CH. Naresh, Assistant Professor", "room": "CSM010001" },
    { "name": "Ms. P. Sujatha, Assistant Professor", "room": "250" },
    { "name": "Mr. G. Venkata Krishna, Assistant Professor", "room": "443" },
    { "name": "Mr. K.S.S Narayana, Assistant Professor", "room": "443" },
    { "name": "Mr. B. Kalyan Chakravarthy, Assistant Professor", "room": "438" },
    { "name": "Mrs. T. Deepa, Assistant Professor", "room": "260" },
    { "name": "Mrs. G. Gayatri, Assistant Professor", "room": "260" },
    { "name": "Mrs. N. Susmitha, Assistant Professor", "room": "256" },
];

  const departmentRoomData = [
    { room: "204", name: "Department Examination Cell, Dept of CSE"},
    { room: "206", name: "Department Library, Dept of CSE",},
    { room: "211", name: "Invention and Innovation Cell, Dept of CSE"},
    { room: "212", name: "Department Office, Dept of CSE"},
    { room: "213", name: "Head of the Department, Dept of CSE"},
    { room: "218", name: "Reasearch & Development Lab, Dept of CSE"},
    { room: "227", name: "Department Library, Dept of ME" },
  ];


  const additionalRoomData = [
    { room: "215", name: "Tutorial Room" },
    // { room: "702", name: "Room 2" },
    // { room: "703", name: "Room 3" },
    // { room: "704", name: "Room 4" },
    // { room: "705", name: "Room 5" },
    // { room: "706", name: "Room 6" },
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

export default CSMMAP;