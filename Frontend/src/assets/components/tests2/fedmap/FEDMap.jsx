import React from "react";
import mapImage from "../../../images/maps/fed1.png";
import "./FEDMap.css";

function FEDMAP() {
  const classroomData = [
    { room: "407", name: "I B. Tech EEE Classroom " },
    { room: "408", name: "I B. Tech ME Classroom" },
    { room: "410", name: "I B. Tech CSE Classroom SEC -I" },
    { room: "411", name: "I B. Tech CSE Classroom SEC -II" },
    { room: "417", name: "I B. Tech CSE Classroom SEC -I" },
    { room: "419", name: "I B. Tech CSM Classroom" },
    { room: "420", name: "I B. Tech CSD Classroom" },
    { room: "422", name: "I B. Tech CIVIL Classroom" },
    { room: "426", name: "I B. Tech IT Classroom SEC -I" },
    { room: "427", name: "I B. Tech IT Classroom SEC -II" },
    { room: "436", name: "I B. Tech ECE Classroom SEC -I" },
    { room: "436A", name: "I B. Tech ECE Classroom SEC -II" },
    { room: "446", name: "IV B. Tech CSE Classroom SEC -I" },
    { room: "448", name: "IV B. Tech CSE Classroom SEC -II" },
  ];

  const labData = [
    { room: "414", name: "Computer Centre, Dept of FED" },
    { room: "424", name: "Physics Lab, Dept of FED" },
    { room: "425", name: "Chemistry Lab, Dept of FED"},
    { room: "429", name: "R & AC Lab, Dept of ME "},
    { room: "437", name: "Life Sciences for Engineers Lab, Dept of FED " },
    { room: "442", name: "Lab , Dept of FED" },
    { room: "462", name: "English Language Communication Skills Lab, Dept of FED" },
  ];

  const waitingHallData = [
    { room: "412", name: "Girls Waiting hall" },
    { room: "423", name: "Boys Waiting Hall" },
    { room: "441", name: "Girls Waiting Hall" },
    { room: "454", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Mr. G. Kiran Kumar, Assistant Professor & Asst. COE", "room": "106" },
    { "name": "Dr. Shaik Rehena, Assistant Professor", "room": "409" },
    { "name": "Dr. T. Preethi Rangamani, Assistant Professor", "room": "409" },
    { "name": "Dr. Pothuri Lakshmi Lavanya, Assistant Professor", "room": "413" },
    { "name": "Dr. Alapati Purna Chandra Rao, Associate Professor", "room": "415" },
    { "name": "Dr. M. Syam Sundar, Assistant Professor", "room": "415" },
    { "name": "Dr. V. Sita Mahalakshmi, Assistant Professor", "room": "415" },
    { "name": "Dr. M. Sri Lakshmi, Professor & Head", "room": "418" },
    { "name": "Dr. V. Siva Naga Malleswari, Assistant Professor", "room": "421" },
    { "name": "Dr. G. Sreedevi, Assistant Professor", "room": "421, 424" },
    { "name": "Mrs. T. KrishnaSree, Assistant Professor", "room": "421" },
    { "name": "Dr. M. Prameela, Assistant Professor", "room": "416" },
    { "name": "Dr. P Padmaja, Assistant Professor", "room": "416" },
    { "name": "Mrs. Y. Pavani, Assistant Professor", "room": "425" },
    { "name": "Dr. Nannapaneni Usha Rani, Assistant Professor", "room": "414, 425" },
    { "name": "Dr. P. Pavani, Assistant Professor", "room": "428" },
    { "name": "Dr. S. Lakshmi Tulasi, Assistant Professor", "room": "428, 437" },
    { "name": "Dr. M. Rudrama Devi, Associate Professor", "room": "431" },
    { "name": "Mr. M. Naga Prasad, Assistant Professor", "room": "430" },
    { "name": "Mr. P. Rama Koteswara Rao, Assistant Professor", "room": "434" },
    { "name": "Mr. T. PULLARAO, Assistant Professor", "room": "434" },
    { "name": "Dr. P. Pavani, Assistant Professor", "room": "428" },
];

  const departmentRoomData = [
    { room: "413", name: "Department Examination Cell, Dept of FED"},
    { room: "418", name: "Department Office, Dept of FED"},
    { room: "418", name: "Head of the Department, Dept of FED"},
  ];


  const additionalRoomData = [
    { room: "428", name: "Drawing Hall" },
    { room: "435", name: "EDCell PVPSIT" },
    { room: "440", name: "Tutorial Room" },
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

export default FEDMAP;