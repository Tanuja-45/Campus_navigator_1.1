import React, { useState } from "react";
import './Home.css';

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const roomDetails = {
    "101": { floor: "First Floor", Venue:"Admin Office"},
    "129": { floor: "First Floor", Venue:"Central Library"},
    "161": { floor: "First Floor", Venue:"Ground Floor Seminar Hall"},
    "236": { floor: "Second Floor", Venue:"Auditorium"},
    "270": { floor: "Second Floor",Venue:"First Floor Seminar Hall" },
    "372": { floor: "Third Floor", Venue:"Second Floor Seminar Hall"},
    "467": { floor: "Fourth Floor", Venue:"Yoga Center"},
    "101-129": { floor: "First Floor", department: "Mechanical Department," },
    "130-161": { floor: "First Floor", department: "EEE Department, CIVIL Department" },
    "201-236": { floor: "Second Floor", department: "CSE Department" },
    "237-270": { floor: "Second Floor", department: "CSD/CSM Department" },
    "301-333": { floor: "Third Floor", department: "IT Department" },
    "334-372": { floor: "Third Floor", department: "ECE Department" },
    "407-447": { floor: "Fourth Floor", department: "FED Department" },
    "448-467": { floor: "Fourth Floor", department: "MBA Department" },
  };

  const venueDetails = {
    "auditorium": { room: 236, floor: "Second Floor" },
    "portfolio": { room: 161, floor: "First Floor" },
    "ground floor seminar hall": { room: 161, floor: "First Floor" },
    "first floor seminar hall": { room: 270, floor: "Second Floor" },
    "second floor seminar hall": { room: 372, floor: "Third Floor" },
    "yoga center": { room: 467, floor: "Fourth Floor" },
    "central library": { room: 129, floor: "First Floor" },
    "administrative office": { room: 101, floor: "First Floor" },
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setInput(value);
  };

  const handleSearch = () => {
    if (roomDetails[input]) {
      setResult(roomDetails[input]);
    } else if (venueDetails[input]) {
      setResult(venueDetails[input]);      git init      git init
    } else {
      for (let range in roomDetails) {
        const [start, end] = range.split("-").map(Number);
        if (input >= start && input <= end) {
          setResult(roomDetails[range]);
          break;
        }
      }
    }
  };

  const handleVenueSearch = (venue) => {
    if (venueDetails[venue]) {
      setResult(venueDetails[venue]);
    }
  };

  return (
    <div className="home-page">
      <h1 className="log">Lost your way in campus?</h1>

      <div className="search-result-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Room Number"
            value={input}
            onChange={handleInputChange}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>

        {result && (
          <div className="res">
            {result.room ? (
              <p>{`${result.department}, ${result.floor}`}</p>
            ) : (
              <p>{`${result.department}, ${result.floor}`}</p>
            )}
          </div>
        )}
      </div>

      <div className="btns">
  <a href="/campus-nav" className="action-btn">Library</a>
  <a href="/campus-nav" className="action-btn">Auditorium</a>
  <a href="/campus-nav" className="action-btn">Parking</a>
  <div className="dropdown">
    <button className="action-btn">Floors</button>
    <div className="dropdown-content">
      <a href="/floor1">Floor 1</a>
      <a href="/floor2" >Floor 2</a>
      <a href="/floor3" >Floor 3</a>
      <a href="/floor4" >Floor 4</a>
    </div>
  </div>
  <div className="dropdown">
    <button className="action-btn">Departments</button>
    <div className="dropdown-content">
      <a href="/mech-nav" >MECH Dept</a>
      <a href="/eee-nav" >EEE Dept</a>
      <a href="/cse-nav" >CSE Dept</a>
      <a href="/ece-nav" >ECE Dept</a>
      <a href="/it-nav"  >IT Dept</a>
      <a href="/civil-nav" >Civil Dept</a>
      <a href="/fed-nav" >FED Dept</a>
      <a href="/mba-nav" >MBA Dept</a>
    </div>
  </div>
  <a href="/campus-nav" className="action-btn">Admin Office</a>
</div>


    </div>
  );
};

export default Home;