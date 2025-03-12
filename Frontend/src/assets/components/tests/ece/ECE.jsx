import { useState } from 'react';
import './ECE.css';

function ECE() {
    const facultyData = [
        {
            name: "Dr. C. Subba Rao",
            designation: "Professor & Head",
            contact: "8074776513",
            email: "csr949@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010005.jpg",
            room: "ECE010005"
        },
        {
            name: "Dr. J. Ravindra Babu",
            designation: "Associate Professor",
            contact: "9346324140",
            email: "jrb0009@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010002.jpg",
            room: "ECE010002"
        },
        {
            name: "Dr. Ch. Gangadhar",
            designation: "Associate Professor",
            contact: "9440577560",
            email: "Ganga-ch@yahoo.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010006.jpg",
            room: "ECE010006"
        },
        {
            name: "Dr. T. Haritha",
            designation: "Associate Professor",
            contact: "9440319214",
            email: "harithat@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010009.jpg",
            room: "ECE010009"
        },
        {
            name: "Mr. M. Srinivasa Rao",
            designation: "Associate Professor",
            contact: "9985035499",
            email: "msrao@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010062.jpg",
            room: "ECE010062"
        },
        {
            name: "Mrs. K. Anitha",
            designation: "Associate Professor",
            contact: "9490647666",
            email: "anithakomma@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010063.jpg",
            room: "ECE010063"
        },
        {
            name: "Dr. A Geetha Devi",
            designation: "Associate Professor",
            contact: "9885385828",
            email: "geetha.agd@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010064.jpg",
            room: "ECE010064"
        },
        {
            name: "Dr. B. Surya Prasada Rao",
            designation: "Associate Professor",
            contact: "9492242100",
            email: "suryaborra1679@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010065.jpg",
            room: "ECE010065"
        },
        {
            name: "Dr. Habibulla Mohammad",
            designation: "Associate Professor",
            contact: "9246123786",
            email: "habibulla@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010030.jpg",
            room: "ECE010030"
        },
        {
            name: "Ms. K. Aruna Kumari",
            designation: "Senior Assistant Professor",
            contact: "9494454523",
            email: "kukatiarunakumari95@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010003.jpg",
            room: "ECE010003"
        },
        {
            name: "Dr. B. Samuyelu",
            designation: "Senior Assistant Professor",
            contact: "9052851972",
            email: "sambommu@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010061.jpg",
            room: "ECE010061"
        },
        {
            name: "Dr. T. Balaji",
            designation: "Senior Assistant Professor",
            contact: "9603110468",
            email: "balu170882@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010060.jpg",
            room: "ECE010060"
        },
        {
            name: "Ms. T. Sushma",
            designation: "Assistant Professor",
            contact: "",
            email: "tsushma@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010016.jpg",
            room: "ECE010016"
        },
        {
            name: "Dr. V. Ratna Kumari",
            designation: "Assistant Professor",
            contact: "9866546827",
            email: "vemuriratna2005@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010020.jpg",
            room: "ECE010020"
        },
        {
            name: "Ms. D. Hareesha",
            designation: "Assistant Professor",
            contact: "9701978899",
            email: "hareeshashyam@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010019.jpg",
            room: "ECE010019"
        },
        {
            name: "Ms. B. V. Subbayamma",
            designation: "Assistant Professor",
            contact: "7893581466",
            email: "kolla.samyuktha@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010022.jpg",
            room: "ECE010022"
        },
        {
            name: "Ms. B. Swathi Lakshmi",
            designation: "Assistant Professor",
            contact: "9959735829",
            email: "bswathi@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010028.jpg",
            room: "ECE010028"
        },
        {
            name: "Mr. K. Phani Rama Krishna",
            designation: "Assistant Professor",
            contact: "9848385962",
            email: "kprkrishna007@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010031.jpg",
            room: "ECE010031"
        },
        {
            name: "Mr. A. Ashok Babu",
            designation: "Assistant Professor",
            contact: "9394206029",
            email: "ashok.4ever@yahoo.co.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010040.jpg",
            room: "ECE010040"
        },
        {
            name: "Dr. P. Venu Madhav",
            designation: "Assistant Professor",
            contact: "9052906648",
            email: "venumadhav@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010052.jpg",
            room: "ECE010052"
        },
        {
            name: "Ms. L. Madhavi Devi",
            designation: "Assistant Professor",
            contact: "9912454374",
            email: "madhavidevi.kodali@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010055.jpg",
            room: "ECE010055"
        },
        {
            name: "Dr. V. S.D. Rekha",
            designation: "Assistant Professor",
            contact: "6301313447",
            email: "vsdrekha@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010056.jpg",
            room: "ECE010056"
        },
        {
            name: "Ms. D. Praveena Bai",
            designation: "Assistant Professor",
            contact: "7674822275",
            email: "praveena-ece2@yahoo.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010059.jpg",
            room: "ECE010059"
        },
        {
            name: "Mrs. D. Swathi",
            designation: "Assistant Professor",
            contact: "9640934593",
            email: "dswathi289@gmail.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010066.jpg",
            room: "ECE010066"
        },
        {
            name: "Mrs. Sri Lakshmi Chandana",
            designation: "Assistant Professor",
            contact: "9392303477",
            email: "chsrilakshmi@pvpsiddhartha.ac.in",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010069.jpg",
            room: "ECE010069"
        },
        {
            name: "Dr. T. Maha Lakshmi",
            designation: "Assistant Professor",
            contact: "9441266701",
            email: "dasari.maha@yahoo.com",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010070.jpg",
            room: "ECE010070"
        }
    ];
    const nonTeachingStaffData = [
        {
            name: "Mr. G. Rambabu",
            designation: "Embedded Engineer",
            contact: "9848398424",
            empId: "ECE011001",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011001.jpg"
                    
        },
        {
            name: "Ms. T. Krupa Lakshmi",
            designation: "Lab Technician",
            contact: "9492273269",
            empId: "ECE011008",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECM101002.jpg"
        },
        {
            name: "Ms. K. Vijaya Lakshmi",
            designation: "Lab Technician",
            contact: "9491731745",
            empId: "ECE011005",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011005.jpg"
        },
        {
            name: "Ms. D. Latha Hima Bindu",
            designation: "Lab Technician",
            contact: "7207565646",
            empId: "ECE011002",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011002.jpg"
        },
        {
            name: "Mr. P. Koteswara Rao",
            designation: "Lab Technician",
            contact: "9951719333",
            empId: "ECE011006",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011006.jpg"
        },
        {
            name: "Mr. V. Bharath Kumar",
            designation: "Lab Technician",
            contact: "9493477003",
            empId: "ECE011004",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011004.jpg"
        },
        {
            name: "Mr. M.PHANI KUMAR",
            designation: "Lab Technician",
            contact: "9848387512",
            empId: "ECE011009",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE011009.jpg"
        },
        {
            name: "Mr. K. Mani Venkata Kumar",
            designation: "Lab Technician",
            contact: "9398374436",
            empId: "ECE270789",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE270789.jpg"
        },
        {
            name: "Mrs. M. Atchutha",
            designation: "Office Assistant",
            contact: "7893072777",
            empId: "ADM200032",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE001001.jpg"
        },
        {
            name: "Mr. A. Raju",
            designation: "Support Staff",
            contact: "8008448113",
            empId: "ECE101001",
            photo: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE101001.jpg"
        },
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

export default ECE;
