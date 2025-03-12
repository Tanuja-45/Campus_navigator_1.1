import React from "react";
import mapImage from "../../../images/maps/eee.png";
import "./EEEMap.css";

function EEEMAP() {
  const classroomData = [
    { room: "134", name: "II B. Tech Classroom Sec -I" },
    { room: "134A", name: "II B. Tech Classroom Sec -III" },
    { room: "143", name: "II B. Tech Classroom Sec -II" },
    { room: "154", name: "E - Classroom" },
    { room: "155", name: "III B. Tech Classroom Sec -I" },
    { room: "210", name: "III B. Tech Classroom Sec -II" },
    { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const labData = [
    { room: "133", name: "Electrical Workshop, Dept of EEE" },
    { room: "135", name: "Electrical Powers System Lab, Dept of EEE" },
    { room: "139", name: "Electrico Mechanics Lab, Dept of EEE"},
    { room: "140-141", name: "Electrical and Electronics Workshop, BEEE Lab, Electrical Circuits Lab, Dept of ME "},
    { room: "146", name: "Geo Technical Engineering Lab, Dept of CIVIL " },
    { room: "150", name: "Surveying Laboratory, Dept of EEE " },
    { room: "153", name: "Transportation Engineering Lab, Dept of EEE " },
    // { room: "305", name: "Lab 5" },
    // { room: "306", name: "Lab 6" },
  ];

  const waitingHallData = [
    { room: "138", name: "Girls Waiting hall" },
    { room: "149", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. Ch Padmanabha Raju, Professor & Head", "room": "131, 135" },
    { "name": "Dr. K. Lenin, Professor", "room": "238" },
    { "name": "Dr. M.V. Ramesh, Associate Professor", "room": "240" },
    { "name": "Dr. C. Kumar, Associate Professor", "room": "133" },
    { "name": "Dr. N. Vijaya Anand, Associate Professor", "room": "140, 248" },
    { "name": "Dr. D. Ragaleela, Sr. Assistant Professor", "room": "243" },
    { "name": "Ms. J. Hema Latha, Sr. Assistant Professor", "room": "342" },
    { "name": "Dr. R. Swathi, Assistant Professor", "room": "243" },
    { "name": "Dr. B. Baddu Naik, Assistant Professor", "room": "259, 351" },
    { "name": "Ms. K. Bhavana, Assistant Professor", "room": "241" },
    { "name": "Ms. V. Sai Geetha Lakshmi, Assistant Professor", "room": "244" },
    { "name": "Ms. G. Madhavi, Assistant Professor", "room": "245" },
    { "name": "Mr. M. Hemanth Sai, Assistant Professor", "room": "259" },
    { "name": "Mr. B. Mohan, Assistant Professor", "room": "268" },
    { "name": "Mr. M. Seshu, Assistant Professor", "room": "251" },
    { "name": "Mr. B. Bala Sai Babu, Assistant Professor", "room": "251" },
    { "name": "Ms. M. Devika Rani, Assistant Professor", "room": "244" },
    { "name": "Mr. T. Srinivasa Rao, Assistant Professor", "room": "268" },
    { "name": "Mr. Patchala Karunakar, Assistant Professor", "room": "268" },
    { "name": "Ms. V. Harika, Assistant Professor", "room": "245" },
];

  const departmentRoomData = [
    { room: "151", name: "Department Library, Dept of EEE",},
    { room: "211", name: "Invention and Innovation Cell, Dept of CSE"},
    { room: "131", name: "Department Office, Dept of EEE"},
    { room: "132", name: "Head of the Department, Dept of EEE"},
    { room: "137", name: "Electrical Stores, Dept of EEE"},
    { room: "227", name: "Department Library, Dept of ME" },
  ];


  const additionalRoomData = [
    { room: "147", name: "GYM - Woman" },
    { room: "148", name: "GYM - Men & Recreation Hall Men" },
    { room: "152", name: "Tutorial Room, Dept of CIVIL" },
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

export default EEEMAP;