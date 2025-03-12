import './CIVIL.css';
import { useState } from 'react';

function CIVIL() {
    // Teaching Staff
    const facultyData = [
        {
            "name": "Dr. V. Jagadish",
            "designation": "Professor & Head",
            "contact": "9845373393",
            "email": "jdvengala@yahoo.com",
            "room": "CVL010030",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010030.jpg"
        },
        {
            "name": "Dr. A. Adilakshmi",
            "designation": "Professor",
            "contact": "9848864331",
            "email": "adilakshmi26@gmail.com",
            "room": "CVL010025",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010025.jpg"
        },
        {
            "name": "Mr. K.V Subash",
            "designation": "Assistant Professor",
            "contact": "9493405879",
            "email": "koneruvenkatasubash@gmail.com",
            "room": "CVL010008",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010008.jpg"
        },
        {
            "name": "Dr. K. Shyam Prakash",
            "designation": "Assistant Professor",
            "contact": "8096610933",
            "email": "shyamprakashcivil@gmail.com",
            "room": "CVL010019",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010019.jpg"
        },
        {
            "name": "Ms. Kilaru Divya",
            "designation": "Assistant Professor",
            "contact": "8121130232",
            "email": "divyakilaru24@gmail.com",
            "room": "CVL010026",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010026.jpg"
        },
        {
            "name": "Ms. K. Prasanthi",
            "designation": "Assistant Professor",
            "contact": "9985508219",
            "email": "katneniprasanthi.pvp@gmail.com",
            "room": "CVL010031",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010031.jpg"
        },
        {
            "name": "Ms. M. Durga Prasanna",
            "designation": "Assistant Professor",
            "contact": "9182807459",
            "email": "durga.prasanna31@gmail.com",
            "room": "CVL010032",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010032.jpg"
        },
        {
            "name": "Dr. M Anupama Ammulu",
            "designation": "Assistant Professor",
            "contact": "8500757586",
            "email": "anupama.manne@pvpsiddhartha.ac.in",
            "room": "CVL010038",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010038.jpg"
        },
        {
            "name": "Dr. Ashish Kumar Nayak",
            "designation": "Assistant Professor",
            "contact": "7063068418",
            "email": "ashishkumarnayak@pvpsiddhartha.ac.in",
            "room": "CVL010040",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010040.jpg"
        },
        {
            "name": "Dr. M. Sudhakar",
            "designation": "Assistant Professor",
            "contact": "9440028748",
            "email": "msudhakar@pvpsiddhartha.ac.in",
            "room": "CVL010041",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010041.jpg"
        },
        {
            "name": "Mr. Ch. Rajesh",
            "designation": "Assistant Professor",
            "contact": "8008455255",
            "email": "rajesh9127@pvpsiddhartha.ac.in",
            "room": "CVL010042",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010042.jpg"
        },
        {
            "name": "Dr. A. Ashok",
            "designation": "Assistant Professor",
            "contact": "9618412372",
            "email": "ashoka@pvpsiddhartha.ac.in",
            "room": "CVL010043",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010043.jpg"
        },
        {
            "name": "Mr. K. Deepak",
            "designation": "Assistant Professor",
            "contact": "9949843308",
            "email": "kdeepak@pvpsiddhartha.ac.in",
            "room": "CVL010044",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL010044.jpg"
        }
    ];
    
    // Non-Teaching Staff
    const nonTeachingStaffData = [
        
        {
            "name": "Ms. Ch. Vijaya Lakshmi",
            "designation": "Not Provided",
            "contact": "9492489467",
            "email": "Not Provided",
            "room": "Not Provided",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL011001.jpg"
        },
        {
            "name": "Mr. D. Siva Nagesh Babu",
            "designation": "Not Provided",
            "contact": "Not Provided",
            "email": "Not Provided",
            "room": "Not Provided",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL011002.jpg"
        },
        {
            "name": "Mr. K. Mahesh",
            "designation": "Not Provided",
            "contact": "9365557999",
            "email": "Not Provided",
            "room": "Not Provided",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL011004.jpg"
        },
        {
            "name": "Mr. B. Anil",
            "designation": "Not Provided",
            "contact": "9492483445",
            "email": "Not Provided",
            "room": "Not Provided",
            "photo": "https://www.pvpsiddhartha.ac.in/images/cvlstaff/CVL011003.jpg"
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

export default CIVIL;
