import React from "react";
import mapImage from "../../../images/maps/cse.png";
import "./CSEMap.css";

function CSEMAP() {
  const classroomData = [
    { room: "201", name: "II B. Tech Classroom Sec -I" },
    { room: "202", name: "II B. Tech Classroom Sec -III" },
    { room: "203", name: "E - Classroom" },
    { room: "209", name: "III B. Tech Classroom Sec -II" },
    { room: "210", name: "II B. Tech Classroom Sec -II" },
    { room: "230", name: "III B. Tech Classroom Sec -I" },
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
    { name: "Mr. Yuva Krishna. Aluri, Assistant Professor", room: "204" },
    { name: "Mr. B. Vinay Kumar, Assistant Professor", room: "204" },
    { name: "Dr. K Koteswara Rao, Associate Professor", room: "205" },
    { name: "Dr. A. Ramana Lakshmi, Associate Professor", room: "206" },
    { name: "Dr. S. Madhavi, Professor", room: "207" },
    { name: "Dr. Ravuri Daniel, Associate Professor", room: "208" },
    { name: "Dr. A. Jayalakshmi, Professor & Head", room: "213" },
    { name: "Dr. S. Phani Praveen, Associate Professor", room: "211" },
    { name: "Mr. D. Lokesh Sai Kumar, Assistant Professor", room: "211" },
    { name: "Dr. P. Sai Kiran, Professor", room: "219" },
    { name: "Dr. B. Narasimha Swamy, Associate Professor", room: "218" },
    { name: "Mr. S. Krishna Kishore, Assistant Professor", room: "218" },
    { name: "Dr. M. V. Ramakrishna, Professor", room: "220" },
    { name: "Dr. G Lalitha Kumari, Sr. Assistant Professor", room: "221" },
    { name: "Dr. M. Sailaja, Assistant Professor", room: "221" },
    { name: "Ms. Y. Surekha, Assistant Professor", room: "221" },
    { name: "Ms. D. Sree Lakshmi, Assistant Professor", room: "221" },
    { name: "Ms. T. Sri Lakshmi, Assistant Professor", room: "221" },
    { name: "Ms. A. Madhuri, Assistant Professor", room: "221" },
    { name: "Mr. Prashant Atmakuri, Assistant Professor", room: "223" },
    { name: "Ms. Pulletikurthy Dedeepya, Assistant Professor", room: "223" },
    { name: "Mr. L. Venkata Krishna Rao, Assistant Professor", room: "223" },
    { name: "Dr. D. Swapna, Assistant Professor", room: "222" },
    { name: "Ms. A DIVYA, Assistant Professor", room: "222" },
    { name: "Dr. J. Rama Devi, Sr. Assistant Professor", room: "216, 222" },
    { name: "Dr. Kilari Jyothsna Devi, Assistant Professor", room: "222" },
    { name: "Ms. K. Naga Divya, Assistant Professor", room: "216" },
    { name: "Ms. M. Bhavya Lakshmi, Assistant Professor", room: "216" },
    { name: "Ms. D. Jyothi, Assistant Professor", room: "216" },
    { name: "Dr. Uddagiri Sirisha, Assistant Professor", room: "224" },
    { name: "Mr. P Anil Kumar, Assistant Professor", room: "226" },
    { name: "Mr. B. Vishnu Vardhan, Assistant Professor", room: "226" },
    { name: "Mr. Ramgopal Musunuri, Assistant Professor & Asst. COE", room: "234" },
    { name: "Mr. Bala Bhaskara Rao Emani, Assistant Professor", room: "234" },
    { name: "Sudhakar Reddy Narala, Assistant Professor", room: "234" },
    { name: "Mr. Michael Sadgun Rao Kona, Assistant Professor", room: "454" },
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

export default CSEMAP;