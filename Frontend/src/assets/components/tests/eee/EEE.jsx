import { useState } from 'react';
import './EEE.css';

function EEE() {
    // Teaching Staff
    const facultyData = [
        {
            name: "Dr. C. Subba Rao",
            designation: "Professor & Head",
            contact: "8074776513",
            email: "csr949@pvpsiddhartha.ac.in",
            room: "ECE010005",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010014.jpg"
        },
        {
            name: "Dr. K. Lenin",
            designation: "Professor",
            contact: "9080574470",
            email: "gklenin@gmail.com",
            room: "EEE010068",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010068.jpg"
        },
        {
            name: "Dr. M.V. Ramesh",
            designation: "Associate Professor",
            contact: "9866599925",
            email: "vrmaddukuri@pvpsiddhartha.ac.in",
            room: "EEE010003",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010003.jpg"
        },
        {
            name: "Dr. C. Kumar",
            designation: "Associate Professor",
            contact: "9490958225",
            email: "kumarcherukupalli77@gmail.com",
            room: "EEE010002",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010002.jpg"
        },
        {
            name: "Dr. N. Vijaya Anand",
            designation: "Associate Professor",
            contact: "9849862037",
            email: "nidumoluvijay@gmail.com",
            room: "EEE010008",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010008.jpg"
        },
        {
            name: "Dr. D. Ragaleela",
            designation: "Sr. Assistant Professor",
            contact: "9949418868",
            email: "raga_233@yahoo.co.in",
            room: "EEE010016",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010016.jpg"
        },
        {
            name: "Ms. J. Hema Latha",
            designation: "Sr. Assistant Professor",
            contact: "9493488596",
            email: "hemajavvaji@rediffmail.com",
            room: "EEE010013",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010013.jpg"
        },
        {
            name: "Dr. R. Swathi",
            designation: "Assistant Professor",
            contact: "9703074790",
            email: "sbm_movva@rediffmail.com",
            room: "ECM010030",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/ECM010030.jpg"
        },
        {
            name: "Dr. B. Baddu Naik",
            designation: "Assistant Professor",
            contact: "9490701081",
            email: "baddunaik@pvpsiddhartha.ac.in",
            room: "EEE010035",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010035.jpg"
        },
        {
            name: "Ms. K. Bhavana",
            designation: "Assistant Professor",
            contact: "9966953378",
            email: "bhavana.kadiyala@gmail.com",
            room: "EEE010036",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010036.jpg"
        },
        {
            name: "Ms. V. Sai Geetha Lakshmi",
            designation: "Assistant Professor",
            contact: "8801147207",
            email: "sahrudha.v@gmail.com",
            room: "EEE010037",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010037.jpg"
        },
        {
            name: "Ms. G. Madhavi",
            designation: "Assistant Professor",
            contact: "8985815736",
            email: "gudavalli.madhavi@gmail.com",
            room: "EEE010043",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010043.jpg"
        },
        {
            name: "Mr. M. Hemanth Sai",
            designation: "Assistant Professor",
            contact: "9052176170",
            email: "hemanthsai.madupu@pvpsiddhartha.ac.in",
            room: "EEE010047",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010047.jpg"
        },
        {
            name: "Mr. B. Mohan",
            designation: "Assistant Professor",
            contact: "9701742364",
            email: "mohan.victory1@gmail.com",
            room: "EEE010048",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010048.jpg"
        },
        {
            name: "Mr. M. Seshu",
            designation: "Assistant Professor",
            contact: "9959790083",
            email: "moturuseshu@gmail.com",
            room: "EEE010045",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010045.jpg"
        },
        {
            name: "Mr. B. Bala Sai Babu",
            designation: "Assistant Professor",
            contact: "9966496635",
            email: "saibabu.dec31@pvpsiddhartha.ac.in",
            room: "EEE010051",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010051.jpg"
        },
        {
            name: "Ms. M. Devika Rani",
            designation: "Assistant Professor",
            contact: "9000218909",
            email: "devikamothukuri@gmail.com",
            room: "EEE010049",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010049.jpg"
        },
        {
            name: "Mr. T. Srinivasa Rao",
            designation: "Assistant Professor",
            contact: "9014340021",
            email: "srinuthumati@gmail.com",
            room: "EEE010058",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010058.jpg"
        },
        {
            name: "Mr. Patchala Karunakar",
            designation: "Assistant Professor",
            contact: "7396459057",
            email: "pkarunakar.pvpsit@pvpsiddhartha.ac.in",
            room: "ECM010005",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/ECM010005.jpg"
        },
        {
            name: "Ms. V. Harika",
            designation: "Assistant Professor",
            contact: "9491961664",
            email: "vemulapalliharika2312@gmail.com",
            room: "EEE010061",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE010061.jpg"
        },
    ];

    // Non-Teaching Staff
    const nonTeachingStaffData = [
        {
            name: "Ms. D. Vijaya Lakshmi",
            designation: "Office Assistant",
            contact: "9603053825",
            room: "EEE011003",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011003.jpg"
        },
        {
            name: "Mr. D. Pitcheswara Rao",
            designation: "Office Assistant",
            contact: "9963187674",
            room: "EEE011004",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011004.jpg"
        },
        {
            name: "Mr. K. Nagendra Babu",
            designation: "Office Assistant",
            contact: "9618384635",
            room: "EEE011006",
            phot:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011006.jpg"
        },
        {
            name: "Mr. P. Arun Kumar",
            designation: "Office Assistant",
            contact: "9908687022",
            room: "EEE011005",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011005.jpg"
        },
        {
            name: "Mr. V. Siva Kiran Kumar",
            designation: "Office Assistant",
            contact: "9440838574",
            room: "EEE011012",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011012.jpg"
        },
        {
            name: "Mr. Y. Ramakoti",
            designation: "Office Assistant",
            contact: "7396110767",
            room: "EEE011016",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011016.jpg"
        },
        {
            name: "Mr. B. Nagaraju",
            designation: "Office Assistant",
            contact: "7780529373",
            room: "EEE011017",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011017.jpg"
        },
        {
            name: "Mr. D. Balaji",
            designation: "Office Assistant",
            contact: "",
            room: "EEE011013",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE011013.jpg"
        },
        {
            name: "Ms. V. Padma",
            designation: "Office Assistant",
            contact: "",
            room: "EEE001001",
            photo:"https://www.pvpsiddhartha.ac.in/images/EEESTAFF/EEE001001.jpg"
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

export default EEE;
