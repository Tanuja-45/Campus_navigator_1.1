import React from "react";
import mapImage from "../../../images/maps/mech.png";
import "./MECHMap.css";

function CSEMAP() {
  const classroomData = [
    { room: "107", name: "II B. Tech Classroom Sec -I" },
    { room: "108", name: "II B. Tech Classroom Sec -II" },
    { room: "123", name: "III B. Tech Classroom Sec -I" },
    { room: "123A", name: "III B. Tech Classroom Sec -II" },
    // { room: "230", name: "III B. Tech Classroom Sec -I" },
    // { room: "210", name: "III B. Tech Classroom Sec -II" },
    // { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const labData = [
    { room: "109", name: "Heat Transfer Room, Dept of ME" },
    { room: "113", name: "Application Development Lab, Dept of CSE" },
    { room: "114", name: "Design Thinking Lab, Dept of ME"},
    { room: "117", name: "Materials Testing Lab, Dept of ME "},
    { room: "118", name: "Materials Testing Lab, Dept of ME "},
    { room: "118B", name: "Natural Materials Composite Lab, Dept of ME "},
    { room: "119", name: "Fluid Mechanics & Hydraulic Machines Laboratory, Dept of CIVIL "},
    { room: "121", name: "Mechatronics Laboratory, Dept of ME "},
    { room: "122", name: "Machine Tools Lab - II, Dept of ME "},
    { room: "124", name: "Machine Tools Lab - I, Dept of ME "},
  ];

  const waitingHallData = [
    { room: "110", name: "Girls Waiting hall" },
    { room: "120", name: "Boys Waiting Hall" },
    { room: "128", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { name: "Dr. K. Sivaji Babu, Professor & Principal", room: "MEC010029" },
    { name: "Dr. B. Raghu Kumar, Professor & Head", room: "MEC100001" },
    { name: "Dr. M. S. R Niranjan Kumar, Professor & COE", room: "MEC010047" },
    { name: "Dr. P. Phani Prasanthi, Professor", room: "MEC010031" },
    { name: "Dr. Kode Srividya, Associate Professor", room: "MEC010020" },
    { name: "Dr. K. Ravi Prakash Babu, Associate Professor", room: "MEC010072" },
    { name: "Mr. Koteswara Rao Unnam, Associate Professor & Asst. COE", room: "MEC010034" },
    { name: "Ms. E. Kavitha, Assistant Professor", room: "MEC010021" },
    { name: "Dr. Sayyad Abdul Kalam, Assistant Professor", room: "MEC010027" },
    { name: "Mr. G. Bala Krishna, Assistant Professor", room: "MEC010035" },
    { name: "Dr. P. Anusha, Assistant Professor", room: "MEC010039" },
    { name: "Dr. K I V Vandana, Assistant Professor", room: "MEC010044" },
    { name: "Dr. M. Rajya Lakshmi, Assistant Professor", room: "MEC010045" },
    { name: "Dr. Movva Naga Swapna Sri, Assistant Professor", room: "MEC010050" },
    { name: "Mr. Kasukurthi Venkatarao, Assistant Professor", room: "MEC010048" },
    { name: "Mr. N Raghu Ram, Assistant Professor", room: "MEC010052" },
    { name: "Mr. Ch Lakshmi Kanth, Assistant Professor", room: "MEC010049" },
    { name: "Mr. P. Mastan Rao, Assistant Professor", room: "MEC010056" },
    { name: "Mr. MOHAN SUMANTH CH, Assistant Professor", room: "MEC010060" },
    { name: "Mr. T. Srinag, Assistant Professor", room: "MEC010062" },
    { name: "Mr. Peteti GopalaKrishnaiah, Assistant Professor", room: "MEC010064" },
    { name: "Vidya Chaparala, Assistant Professor", room: "MEC010063" },
    { name: "Dr. M. Somaiah Chowdary, Assistant Professor & Asst. COE", room: "MEC010066" },
    { name: "Ms. M. Radha Devi, Assistant Professor", room: "MEC010065" },
    { name: "Mr. T.J. Prasanna Kumar, Assistant Professor", room: "MEC010073" },
    { name: "Mr. J. Surendra, Assistant Professor", room: "MEC010075" },
    { name: "Sravani Vemuri, Assistant Professor", room: "MEC010077" }
];

  const departmentRoomData = [
    { room: "101", name: "Administrative Office" },
    { room: "102", name: "Principal Room" },
    { room: "106", name: "Examination Cell"},
    { room: "116", name: "Department Examination Cell, Dept of ME",},
    { room: "125", name: "Head of the Department, Dept of ME"},
    { room: "126", name: "Department Office, Dept of ME"},
  ];


  const additionalRoomData = [
    { room: "104", name: "NSS Unit" },
    { room: "111", name: "Dispensary Room" },
    { room: "112", name: "Stationary" },
    { room: "129", name: "Central Library" },
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