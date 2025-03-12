import React from "react";
import mapImage from "../../../images/maps/eee.png";
import "./ECEMap.css";

function ECEMAP() {
  const classroomData = [
    { room: "341", name: "IV B. Tech ECE Classroom Sec -I" },
    { room: "341A", name: "IV B. Tech ECE Classroom Sec -II" },
    { room: "353", name: "III B. Tech ECE Classroom Sec -II" },
    { room: "365", name: "II B. Tech ECE Classroom Sec -I" },
    { room: "366", name: "II B. Tech ECE Classroom Sec -II" },
    { room: "371", name: "III B. Tech ECE Classroom Sec -I" },
  ];

  const labData = [
    { room: "337, 338, 339", name: "Engineering Mechanics Lab, Dept of ECE" },
    { room: "342", name: "MicroProcessors & MicroControllers Lab, Electrical Engineering Lab, IOT Application Lab, Dept of EEE" },
    { room: "346", name: "Environmental Engineering Lab, Dept of CIVIL"},
    { room: "348", name: "CAD Lab, R&D Center, Dept of ME " },
    { room: "350", name: "ARC Lab, Dept of ECE " },
    { room: "351", name: "ALUMNI CELL" },
    { room: "352", name: "Engineering Geology Lab, Dept of ECE " },
    { room: "355", name: "Electronic Devices & Circuits Lab, Dept of ECE " },
    { room: "356", name: "Embedded Systems Lab, Dept of ECE " },
    { room: "364", name: "VLSI & Signal Processing Lab, Dept of ECE " },
    // { room: "305", name: "Lab 5" },
    // { room: "306", name: "Lab 6" },
  ];

  const waitingHallData = [
    { room: "347", name: "Boys Waiting Hall" },
    { room: "359", name: "Girls Waiting hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. C. Subba Rao, Professor & Head", "room": "264, 265, 369" },
    { "name": "Dr. J. Ravindra Babu, Associate Professor", "room": "254" },
    { "name": "Dr. Ch. Gangadhar, Associate Professor", "room": "363, 364" },
    { "name": "Dr. T. Haritha, Associate Professor", "room": "267" },
    { "name": "Mr. M. Srinivasa Rao, Associate Professor", "room": "261" },
    { "name": "Mrs. K. Anitha, Associate Professor", "room": "370" },
    { "name": "Dr. A Geetha Devi, Associate Professor", "room": "367" },
    { "name": "Dr. B. Surya Prasada Rao, Associate Professor", "room": "363" },
    { "name": "Dr. Habibulla Mohammad, Associate Professor", "room": "344" },
    { "name": "Ms. K. Aruna Kumari, Senior Assistant Professor", "room": "335" },
    { "name": "Dr. B. Samuyelu, Senior Assistant Professor", "room": "358" },
    { "name": "Dr. T. Balaji, Senior Assistant Professor", "room": "253" },
    { "name": "Ms. T. Sushma, Assistant Professor", "room": "360" },
    { "name": "Dr. V. Ratna Kumari, Assistant Professor", "room": "256" },
    { "name": "Ms. D. Hareesha, Assistant Professor", "room": "340, 357" },
    { "name": "Ms. B. V. Subbayamma, Assistant Professor", "room": "256" },
    { "name": "Ms. B. Swathi Lakshmi, Assistant Professor", "room": "362" },
    { "name": "Mr. K. Phani Rama Krishna, Assistant Professor", "room": "254" },
    { "name": "Mr. A. Ashok Babu, Assistant Professor", "room": "358" },
    { "name": "Dr. P. Venu Madhav, Assistant Professor", "room": "355, 358" },
    { "name": "Ms. L. Madhavi Devi, Assistant Professor", "room": "255, 335" },
    { "name": "Dr. V. S.D. Rekha, Assistant Professor", "room": "362" },
    { "name": "Ms. D. Praveena Bai, Assistant Professor", "room": "343" },
    { "name": "Mrs. D. Swathi, Assistant Professor", "room": "340" },
    { "name": "Mrs. Sri Lakshmi Chandana, Assistant Professor", "room": "343" },
    { "name": "Dr. T. Maha Lakshmi, Assistant Professor", "room": "256" },
];

  const departmentRoomData = [
    { room: "370", name: "Department Examination Cell, Dept of ECE"},
    { room: "361", name: "Department Library, Dept of ECE",},
    { room: "367", name: "Incubation Center, R&D Center, Dept of ECE "},
    { room: "368", name: "Department Office, Dept of ECE"},
    { room: "369", name: "Head of the Department, Dept of ECE"},
  ];


  const additionalRoomData = [
    { room: "336", name: "Tutorial Room, Dept of EEE" },
    { room: "345", name: "Research & Development Cell, PVPSIT" },
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

export default ECEMAP;