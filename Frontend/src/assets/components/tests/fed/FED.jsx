import React, { useState } from 'react';
import './FED.css';

function FED() {
    const facultyData = [
        {
            "name": "Dr. M. Sri Lakshmi",
            "designation": "Professor & Head",
            "contact": "9491386191",
            "email": "msrilakshmi@pvpsiddhartha.ac.in",
            "room": "SAH100001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH100001.jpg"
        },
        {
            "name": "Dr. M. Rudrama Devi",
            "designation": "Associate Professor",
            "contact": "9490958256",
            "email": "rudrama_devi@yahoo.co.in",
            "room": "SAH010001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010001.jpg"
        },
        {
            "name": "Dr. Alapati Purna Chandra Rao",
            "designation": "Associate Professor",
            "contact": "9848969383",
            "email": "aprtoapr@gmail.com",
            "room": "SAH010046",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010046.jpg"
        },
        {
            "name": "Dr. P Padmaja",
            "designation": "Assistant Professor",
            "contact": "9177312931",
            "email": "padmajapodila@gmail.com",
            "room": "SAH010004",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010004.jpg"
        },
        {
            "name": "Mr. K. Kiran Kumar",
            "designation": "Assistant Professor",
            "contact": "9441266899",
            "email": "Kkumark_2005@yahoo.co.in",
            "room": "SAH010013",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010013.jpg"
        },
        {
            "name": "Dr. M. Syam Sundar",
            "designation": "Assistant Professor",
            "contact": "9963501295",
            "email": "syamenglish@pvpsiddhartha.ac.in",
            "room": "SAH010014",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010014.jpg"
        },
        {
            "name": "Dr. M. Prameela",
            "designation": "Assistant Professor",
            "contact": "9290728511",
            "email": "prameelasajja@gmail.com",
            "room": "SAH010015",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010015.jpg"
        },
        {
            "name": "Mr. G. Kiran Kumar",
            "designation": "Assistant Professor & Asst. COE",
            "contact": "9912205656",
            "email": "ganne.kirankumar@gmail.com",
            "room": "SAH010016",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010016.jpg"
        },
        {
            "name": "Dr. V. Sita Mahalakshmi",
            "designation": "Assistant Professor",
            "contact": "9963105111",
            "email": "seethamahalakshmi@pvpsiddhartha.ac.in",
            "room": "SAH010032",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010032.jpg"
        },
        {
            "name": "Mr. Ari Chandra Sekhara Babu",
            "designation": "Assistant Professor",
            "contact": "9440289412",
            "email": "acsbabu@gmail.com",
            "room": "SAH010026",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010026.jpg"
        },
        {
            "name": "Dr. V. Siva Naga Malleswari",
            "designation": "Assistant Professor",
            "contact": "9848035780",
            "email": "vsnm.maths@gmail.com",
            "room": "SAH010031",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010031.jpg"
        },
        {
            "name": "Dr. Shaik Rehena",
            "designation": "Assistant Professor",
            "contact": "9640007986",
            "email": "jarina.2005@gmail.com",
            "room": "SAH010023",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010023.jpg"
        },
        {
            "name": "Dr. G. Sreedevi",
            "designation": "Assistant Professor",
            "contact": "8125820455",
            "email": "sreedevi@pvpsiddhartha.ac.in",
            "room": "SAH010041",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010041.jpg"
        },
        {
            "name": "Mrs. Y. Pavani",
            "designation": "Assistant Professor",
            "contact": "8977521999",
            "email": "pavanimscchemistry@gmail.com",
            "room": "SAH010035",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010035.jpg"
        },
        {
            "name": "Dr. P. Pavani",
            "designation": "Assistant Professor",
            "contact": "9393327386",
            "email": "pavani.peddi@yahoo.co.in",
            "room": "SAH010036",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010036.jpg"
        },
        {
            "name": "Dr. S. Lakshmi Tulasi",
            "designation": "Assistant Professor",
            "contact": "8247288609",
            "email": "sidagamtulasi@ymail.com",
            "room": "SAH010037",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010037.jpg"
        },
        {
            "name": "Dr. T. Preethi Rangamani",
            "designation": "Assistant Professor",
            "contact": "9885029497",
            "email": "coppisetty.preethi@gmail.com",
            "room": "SAH010040",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010040.jpg"
        },
        {
            "name": "Mr. P. Rama Koteswara Rao",
            "designation": "Assistant Professor",
            "contact": "8106523579",
            "email": "ramakotesh26parasa@gmail.com",
            "room": "SAH010043",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010043.jpg"
        },
        {
            "name": "Mrs. T. KrishnaSree",
            "designation": "Assistant Professor",
            "contact": "9247708858",
            "email": "krishnasreephysics@gmail.com",
            "room": "SAH010047",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010047.jpg"
        },
        {
            "name": "Dr. Pothuri Lakshmi Lavanya",
            "designation": "Assistant Professor",
            "contact": "9985254999",
            "email": "lakshmilavanyapotturi@gmail.com",
            "room": "SAH010042",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010042.jpg"
        },
        {
            "name": "Mr. T. PULLARAO",
            "designation": "Assistant Professor",
            "contact": "9533059573",
            "email": "pullaraoteneti@gmail.com",
            "room": "SAH010050",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010050.jpg"
        },
        {
            "name": "Dr. Nannapaneni Usha Rani",
            "designation": "Assistant Professor",
            "contact": "9490114617",
            "email": "nannapaneniusharani73@gmail.com",
            "room": "SAH010052",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010052.jpg"
        },
        {
            "name": "Mr. M. Naga Prasad",
            "designation": "Assistant Professor",
            "contact": "9490366263",
            "email": "nagaprasadmadaka45@gmail.com",
            "room": "SAH010058",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010058.jpg"
        },
        {
            "name": "Dr. M. Silpa",
            "designation": "Assistant Professor",
            "contact": "9441584390",
            "email": "silpamandava@pvpsiddhartha.ac.in",
            "room": "SAH010059",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010059.jpg"
        },
        {
            "name": "Dr. G. Raghavendra Ganesh",
            "designation": "Assistant Professor",
            "contact": "8985762378",
            "email": "raghavendraganesh@pvpsiddhartha.ac.in",
            "room": "SAH010060",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH010060.jpg"
        }
    ];

    const nonTeachingStaffData = [
        {
            "name": "Mrs. A. Parma Geetha",
            "designation": "Not Provided",
            "contact": "8332878294",
            "email": "Not Provided",
            "room": "SAH011005",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH011005.jpg"
        },
        {
            "name": "Mrs. S. Harika",
            "designation": "Not Provided",
            "contact": "8106325733",
            "email": "Not Provided",
            "room": "SAH011001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH011001.jpg"
        },
        {
            "name": "Mr. M. Raju",
            "designation": "Not Provided",
            "contact": "8125562382",
            "email": "Not Provided",
            "room": "SAH011002",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH011002.jpg"
        },
        {
            "name": "Mrs. J. Vani",
            "designation": "Not Provided",
            "contact": "9640221906",
            "email": "Not Provided",
            "room": "SAH001001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/SAHSTAFF/SAH001001.jpg"
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
                        {/* <p className="staff-designation">{staff.designation}</p> */}
                        <p className="staff-room">Room: {staff.room}</p>
                        <p className="staff-contact">Contact: {staff.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FED;

