import React from "react";
import mapImage from "../../../images/maps/it.png";
import "./ITMap.css";

function ITMAP() {
  const classroomData = [
    { room: "301", name: "IV B. Tech Classroom Sec -I" },
    { room: "302", name: "E- Classroom, Dept of IT" },
    { room: "303", name: "IV B. Tech Classroom Sec -II" },
    { room: "309", name: "II B. Tech Classroom Sec -I" },
    { room: "310", name: "II B. Tech Classroom Sec -II" },
    { room: "329", name: "III B. Tech Classroom Sec -I" },
    { room: "329A", name: "III B. Tech Classroom Sec -II" },
  ];

  const labData = [
    { room: "308", name: "Programming Languages & Projects Lab, Database Systems & Projects Lab, Dept of IT" },
    { room: "311", name: "System Components Lab & Installation Lab, Dept of IT" },
    { room: "316", name: "Object Oriented Programming Languages Lab, Integrated Development Lab, Open Source Lab, Application Development Lab, Dept of IT"},
    { room: "318", name: "3D Experience Centre, Database Systems Lab, Dept of IT"},
    { room: "321", name: "CAM Lab, Dept of IT"},
    { room: "323", name: "Skill Training & Projects Lab, Dept of CSE " },
    { room: "328", name: "Instrumentation & Metrology Lab, Dept of ME" },
    // { room: "306", name: "Lab 6" },
  ];

  const waitingHallData = [
    { room: "314", name: "Girls Waiting hall" },
    { room: "324", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Ms. K. Swarupa Rani, Assistant Professor", "room": "304" },
    { "name": "Ms. Donepudi Leela Dharani, Assistant Professor", "room": "304" },
    { "name": "Parasa Rajya Lakshmi, Assistant Professor", "room": "304" },
    { "name": "Dr. J. Sirisha, Assistant Professor", "room": "306" },
    { "name": "Dr. Y. Padma, Assistant Professor", "room": "306" },
    { "name": "Dr. G. Reshma, Assistant Professor", "room": "307" },
    { "name": "Mr. Chetla Chandra Mohan, Assistant Professor", "room": "308" },
    { "name": "Doradla Bharadwaja, Assistant Professor", "room": "308" },
    { "name": "Dr. D. Kavitha, Associate Professor", "room": "305" },
    { "name": "Ms. V. Rashmi, Assistant Professor", "room": "305" },
    { "name": "Dr. Lakshmi Gogulamudi, Assistant Professor", "room": "311" },
    { "name": "Dr. A. Haritha, Associate Professor", "room": "311" },
    { "name": "Dr. B.V. Subba Rao, Professor & Head", "room": "313" },
    { "name": "Mr. P. Ravi Prakash, Assistant Professor", "room": "326" },
    { "name": "Dr. S. Sai Kumar, Sr. Assistant Professor", "room": "326" },
    { "name": "Dr. Y. Suresh, Associate Professor", "room": "316, 322" },
    { "name": "Dr. K. Pavan Kumar, Sr. Assistant Professor", "room": "316, 319" },
    { "name": "Mr. I.M.V. Krishna, Assistant Professor", "room": "315" },
    { "name": "Dr. V. Siva Parvathi, Assistant Professor", "room": "320" },
    { "name": "Ms. K. Sri Vijaya, Assistant Professor", "room": "320" },
    { "name": "Venkata Satish Babu Battula, Assistant Professor", "room": "331" },
    { "name": "Dr. Y. Padma, Assistant Professor", "room": "320" },
    { "name": "Mr. Ch. Praneeth, Assistant Professor", "room": "INF010059" },
];

  const departmentRoomData = [
    { room: "312", name: "Department Office, Dept of IT"},
    { room: "313", name: "Head of the Department, Dept of IT"},
    { room: "315", name: "Department Library, Dept of IT"},
    { room: "319", name: "Redressal Grieviance Cell, Dept of IT"},
    { room: "320", name: "Department Examination Cell, Dept of IT"},
  ];


  const additionalRoomData = [
    { room: "326", name: "Incubation Centre, Dept of IT" },
    { room: "327", name: "Tutorial Room" },
    { room: "330", name: "Drawing Hall" },
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

export default ITMAP;