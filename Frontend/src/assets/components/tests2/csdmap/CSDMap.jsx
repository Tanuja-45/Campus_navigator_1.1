import React from "react";
import mapImage from "../../../images/maps/csd&aiml.png";
import "./CSDMap.css";

function CSDMAP() {
  const classroomData = [
    { room: "242", name: "II B. Tech Classroom Sec -I" },
    { room: "242A", name: "II B. Tech Classroom Sec -III" },
    { room: "252", name: "II B. Tech Classroom Sec -II" },
    { room: "262", name: "E - Classroom" },
    { room: "262", name: "III B. Tech Classroom Sec -I" },
    { room: "269", name: "III B. Tech Classroom Sec -II" },
    { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const labData = [
    { room: "241", name: "Power Electronic Lab, Dept of EEE" },
    { room: "243", name: "Control Systems Lab, Dept of EEE" },
    { room: "247", name: "Data Engineers Lab,Big Data Analytics Lab, Dept of CSD"},
    { room: "253", name: "Analog & Digital Circuits Lab, Dept of EEE " },
    { room: "255", name: "Digital Signal Processing Lab,E- Classroom, Dept of ECE " },
    { room: "261", name: "Communication Systems Lab, Dept of ECE " },
    { room: "264", name: "Microwave Engineering Lab, Dept of ECE " },
  ];

  const waitingHallData = [
    { room: "246", name: "Girls Waiting hall" },
    { room: "257", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. B. Janakiramaiah, Professor & Head", "room": "432" },
    { "name": "Mr. P. Hema Venkata Ramana, Assistant Professor", "room": "CSD010002" },
    { "name": "Mrs. P. Naga Mani, Assistant Professor", "room": "239" },
    { "name": "Mr. K. Chiranjeevi, Assistant Professor", "room": "CSD010004" },
    { "name": "Mr. M. Winson, Assistant Professor", "room": "438" },
    { "name": "Mrs. S. Sreeja, Assistant Professor", "room": "445" },
    { "name": "Ms. Ch. Mounika, Assistant Professor", "room": "239" },
    { "name": "Mrs. G. Pavani, Assistant Professor", "room": "445" },
    { "name": "Ms. M. Srilakshmi Vani, Assistant Professor", "room": "CSD010009" },
    { "name": "Mrs. HAFEENA MOHAMMED, Assistant Professor", "room": "445" },
];

  const departmentRoomData = [
    { room: "245", name: "Department Library, Dept of EEE",},
    { room: "249", name: "RS/ GID Lab,CAD Lab, Dept of CIVIL "},
    // { room: "204", name: "Department Examination Cell, Dept of CSE"},
    // { room: "206", name: "Department Library, Dept of CSE",},
    // { room: "211", name: "Invention and Innovation Cell, Dept of CSE"},
    // { room: "212", name: "Department Office, Dept of CSE"},
    // { room: "213", name: "Head of the Department, Dept of CSE"},
    // { room: "218", name: "Reasearch & Development Lab, Dept of CSE"},
    // { room: "227", name: "Department Library, Dept of ME" },
  ];


  const additionalRoomData = [
    { room: "266", name: "Anti Ragging Cell" },
    { room: "270", name: "First Floor Seminar Hall" },
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

export default CSDMAP;