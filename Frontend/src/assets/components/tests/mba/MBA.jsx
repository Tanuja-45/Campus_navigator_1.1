import './MBA.css';
import { useState } from 'react';

function MBA() {
    const facultyData = [
        {
            "name": "Dr. P. Adi Lakshmi",
            "designation": "Professor",
            "contact": "9491348818",
            "email": "hodmba@pvpsiddhartha.ac.in",
            "room": "MBA010001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010001.jpg"
        },
        {
            "name": "Dr. D. Srinivasa Rao",
            "designation": "Associate Professor",
            "contact": "9885344115",
            "email": "srinu_dokku@yahoo.co.in",
            "room": "MBA010006",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010006.jpg"
        },
        {
            "name": "Mr. V. Praveen Kumar",
            "designation": "Assistant Professor",
            "contact": "8500401246",
            "email": "praveen.vasi@gmail.com",
            "room": "MBA010009",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010009.jpg"
        },
        {
            "name": "Dr. Lt. M. Dhadurya Naik",
            "designation": "Assistant Professor",
            "contact": "9848280815",
            "email": "mdnaikmba@gmail.com",
            "room": "MBA010013",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010013.jpg"
        },
        {
            "name": "Dr. N. Siva Surendra",
            "designation": "Assistant Professor",
            "contact": "9885385676",
            "email": "drsivasurendra@pvpsiddhartha.ac.in",
            "room": "MBA010020",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010020.jpg"
        },
        {
            "name": "Mr. N. Suresh Babu",
            "designation": "Assistant Professor",
            "contact": "9703586747",
            "email": "nsb.mgc@gmail.com",
            "room": "MBA010021",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010021.jpg"
        },
        {
            "name": "Mr. Sk. Subhan Saheb",
            "designation": "Assistant Professor",
            "contact": "9533360607",
            "email": "subhansk06@pvpsiddhartha.ac.in",
            "room": "MBA010022",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010022.jpg"
        },
        {
            "name": "Mrs. J. Ambica",
            "designation": "Assistant Professor",
            "contact": "9493505581",
            "email": "ambica@pvpsiddhartha.ac.in",
            "room": "MBA010023",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010023.jpg"
        }
    ];
    
    const nonTeachingStaffData = [
        {
            "name": "Ms. Y. Nagamani",
            "designation": "Not Provided",
            "contact": "9032986999",
            "email": "Not Provided",
            "room": "MBA001001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA001001.jpg"
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

export default MBA;
