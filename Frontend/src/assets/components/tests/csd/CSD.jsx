import { useState } from 'react';
import './CSD.css';

function CSD() {
    const facultyData =[
        
            {
              "name": "Dr. B. Janakiramaiah",
              "designation": "Professor & Head",
              "contact": "9440586340",
              "email": "janakiramaiah@pvpsiddhartha.ac.in",
              "room": "CSD100001",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD100001.jpg"
            },
            {
              "name": "Mr. P. Hema Venkata Ramana",
              "designation": "Assistant Professor",
              "contact": "9491853599",
              "email": "pandirihema90@pvpsiddhartha.ac.in",
              "room": "CSD010002",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010002.jpg"
            },
            {
              "name": "Mrs. P. Naga Mani",
              "designation": "Assistant Professor",
              "contact": "9177801240",
              "email": "pnagamani@pvpsiddhartha.ac.in",
              "room": "CSD010003",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010003.jpg"
            },
            {
              "name": "Mr. K. Chiranjeevi",
              "designation": "Assistant Professor",
              "contact": "9550918501",
              "email": "chiranjeevi@pvpsiddhartha.ac.in",
              "room": "CSD010004",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010004.jpg"
            },
            {
              "name": "Mr. M. Winson",
              "designation": "Assistant Professor",
              "contact": "9703121955",
              "email": "winson@pvpsiddhartha.ac.in",
              "room": "CSD010005",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010005.jpg"
            },
            {
              "name": "Mrs. S. Sreeja",
              "designation": "Assistant Professor",
              "contact": "8618416363",
              "email": "sreeja@pvpsiddhartha.ac.in",
              "room": "CSD010006",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010006.jpg"
            },
            {
              "name": "Ms. Ch. Mounika",
              "designation": "Assistant Professor",
              "contact": "6300993136",
              "email": "mounika@pvpsiddhartha.ac.in",
              "room": "CSD010007",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010007.jpg"
            },
            {
              "name": "Mrs. G. Pavani",
              "designation": "Assistant Professor",
              "contact": "7013085706",
              "email": "gpavani@pvpsiddhartha.ac.in",
              "room": "CSD010008",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010008.jpg"
            },
            {
              "name": "Ms. M. Srilakshmi Vani",
              "designation": "Assistant Professor",
              "contact": "7013740022",
              "email": "mugadasrivani@pvpsiddhartha.ac.in",
              "room": "CSD010009",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010009.jpg"
            },
            {
              "name": "Mrs. HAFEENA MOHAMMED",
              "designation": "Assistant Professor",
              "contact": "7331126313",
              "email": "hafeenamohammad@pvpsiddhartha.ac.in",
              "room": "CSD010010",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD010010.jpg"
            },
           
              

    ];
    
    const nonTeachingStaffData = [
        {
            "name": "Ms. A. Priyanka",
            "designation": "Assistant Professor",
            "contact": "7093806730",
            "email": "Not Provided",
            "room": "CSD011001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD011001.jpg"
          },
          {
            "name": "Mrs. B. Jyothi",
            "designation": "Assistant Professor",
            "contact": "7731927014",
            "email": "Not Provided",
            "room": "CSD011002",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD011002.jpg"
          }
        
    ];

    const [searchQuery, setSearchQuery] = useState('');
    
        const filteredFaculty = facultyData.filter(faculty =>
            faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        const filteredNonTeachingStaff = nonTeachingStaffData.filter(staff =>
            staff.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        return (
            <div className="staff-container">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
    
                <h2 className="staff-heading teaching-heading">Teaching Staff</h2>
                <div className="faculty-container">
                    {filteredFaculty.map((faculty, index) => (
                        <div key={index} className="faculty-card">
                            <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
                            <h3 className="faculty-name">{faculty.name}</h3>
                            <p className="faculty-designation">{faculty.designation}</p>
                            <p className="faculty-room">Room: {faculty.room}</p>
                            <p className="faculty-contact">Contact: {faculty.contact}</p>
                            <p className="faculty-email">{faculty.email}</p>
                        </div>
                    ))}
                </div>
    
                <h2 className="staff-heading non-teaching-heading">Non-Teaching Staff</h2>
                <div className="non-teaching-container">
                    {filteredNonTeachingStaff.map((staff, index) => (
                        <div key={index} className="staff-card">
                            <img src={staff.photo} alt={staff.name} className="staff-photo" />
                            <h3 className="staff-name">{staff.name}</h3>
                            <p className="staff-designation">{staff.designation}</p>
                            <p className="staff-room">Room: {staff.room}</p>
                            <p className="staff-contact">Contact: {staff.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default CSD;
