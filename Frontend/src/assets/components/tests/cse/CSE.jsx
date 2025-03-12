import './CSE.css';
import React, { useState } from 'react';


function CSE() {
    const facultyData = [
        {
            "name": "Dr. A. Jayalakshmi",
            "designation": "Professor & Head",
            "contact": "9490743501",
            "email": "hodcse@pvpsiddhartha.ac.in",
            "room": "213",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE100001.jpg"
        },
        {
            "name": "Dr. M. V. Ramakrishna",
            "designation": "Professor",
            "contact": "9440672590",
            "email": "mvrk@pvpsiddhartha.ac.in",
            "room": "220",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010001.jpg"
        },
        {
            "name": "Dr. S. Madhavi",
            "designation": "Professor",
            "contact": "9032962658, 9032962657",
            "email": "mmadhavi@pvpsiddhartha.ac.in",
            "room": "207",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010019.jpg"
        },
        {
            "name": "Dr. P. Sai Kiran",
            "designation": "Professor",
            "contact": "9490856188",
            "email": "psaikiran@pvpsiddhartha.ac.in",
            "room": "219",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010099.jpg"
        },
        {
            "name": "Dr. K Koteswara Rao",
            "designation": "Associate Professor",
            "contact": "7893533960",
            "email": "kkrao@pvpsiddhartha.ac.in",
            "room": "205",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010084.jpg"
        },
        {
            "name": "Dr. Ravuri Daniel",
            "designation": "Associate Professor",
            "contact": "9133438924",
            "email": "danielravuri@pvpsiddhartha.ac.in",
            "room": "208",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010102.jpg"
        },
        {
            "name": "Dr. B. Narasimha Swamy",
            "designation": "Associate Professor",
            "contact": "9849166396",
            "email": "swamy_bn@pvpsiddhartha.ac.in",
            "room": "218",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010017.jpg"
        },
        {
            "name": "Dr. S. Phani Praveen",
            "designation": "Associate Professor",
            "contact": "9059639699",
            "email": "sppraveen@pvpsiddhartha.ac.in",
            "room": "211",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010071.jpg"
        },
        {
            "name": "Dr. A. Ramana Lakshmi",
            "designation": "Associate Professor",
            "contact": "9391119092",
            "email": "arlakshmi@pvpsiddhartha.ac.in",
            "room": "206",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010004.jpg"
        },
        {
            "name": "Dr. J. Rama Devi",
            "designation": "Sr. Assistant Professor",
            "contact": "9848643253",
            "email": "ramadevi@pvpsiddhartha.ac.in",
            "room": "216, 222",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010025.jpg"
        },
        {
            "name": "Dr. G Lalitha Kumari",
            "designation": "Sr. Assistant Professor",
            "contact": "7396874553",
            "email": "glalitha@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010015.jpg"
        },
        {
            "name": "Dr. D. Swapna",
            "designation": "Assistant Professor",
            "contact": "9885539010",
            "email": "dswapna@pvpsiddhartha.ac.in",
            "room": "222",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010048.jpg"
        },
        {
            "name": "Dr. M. Sailaja",
            "designation": "Assistant Professor",
            "contact": "Not Provided",
            "email": "msailaja@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010050.jpg"
        },
        {
            "name": "Ms. Y. Surekha",
            "designation": "Assistant Professor",
            "contact": "9493106040",
            "email": "ysurekha@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010061.jpg"
        },
        {
            "name": "Ms. D. Sree Lakshmi",
            "designation": "Assistant Professor",
            "contact": "9948723569",
            "email": "dslakshmi@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010062.jpg"
        },
        {
            "name": "Ms. T. Sri Lakshmi",
            "designation": "Assistant Professor",
            "contact": "9866177492",
            "email": "tslakshmi@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010063.jpg"
        },
        {
            "name": "Ms. A. Madhuri",
            "designation": "Assistant Professor",
            "contact": "9908244959",
            "email": "madhuria@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010068.jpg"
        },
        {
            "name": "Mr. P Anil Kumar",
            "designation": "Assistant Professor",
            "contact": "9985084300",
            "email": "anilp@pvpsiddhartha.ac.in",
            "room": "226",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010073.jpg"
        },
        {
            "name": "Mr. B. Vishnu Vardhan",
            "designation": "Assistant Professor",
            "contact": "9652324268",
            "email": "bvishnu@pvpsiddhartha.ac.in",
            "room": "226",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010070.jpg"
        },
        {
            "name": "Mr. D. Lokesh Sai Kumar",
            "designation": "Assistant Professor",
            "contact": "9700557799",
            "email": "lokeshsaikumar@pvpsiddhartha.ac.in",
            "room": "211",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010072.jpg"
        },
        {
            "name": "Ms. A. DIVYA",
            "designation": "Assistant Professor",
            "contact": "9966100876",
            "email": "adivya@pvpsiddhartha.ac.in",
            "room": "222",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010075.jpg"
        },
        {
            "name": "Mr. Yuva Krishna. Aluri",
            "designation": "Assistant Professor",
            "contact": "9533232259",
            "email": "ayk@pvpsiddhartha.ac.in",
            "room": "204",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010074.jpg"
        },
        {
            "name": "Mr. Ramgopal Musunuri",
            "designation": "Assistant Professor & Asst. COE",
            "contact": "9849291011",
            "email": "ramgopal.musunuri@pvpsiddhartha.ac.in",
            "room": "234",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010080.jpg"
        },
        {
            "name": "Mr. S. Krishna Kishore",
            "designation": "Assistant Professor",
            "contact": "9247130366",
            "email": "skkishore@pvpsiddhartha.ac.in",
            "room": "218",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010085.jpg"
        },
        {
            "name": "Mr. B. Vinay Kumar",
            "designation": "Assistant Professor",
            "contact": "9133734348",
            "email": "bvinaykumar@pvpsiddhartha.ac.in",
            "room": "204",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010088.jpg"
        },
        {
            "name": "Ms. Manasa Yarrarapu",
            "designation": "Assistant Professor",
            "contact": "7013752626",
            "email": "manasayarrarapu@pvpsiddhartha.ac.in",
            "room": "221",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010093.jpg"
        },
        {
            "name": "Mr. Prashant Atmakuri",
            "designation": "Assistant Professor",
            "contact": "9908833371",
            "email": "prashant.atmakuri@pvpsiddhartha.ac.in",
            "room": "223",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010096.jpg"
        },
        
        {
            "name": "Ms. Pulletikurthy Dedeepya",
            "designation": "Assistant Professor",
            "contact": "9347594106",
            "room": "216",
            "email": "dedeepya@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010097.jpg"
        },
        {
            "name": "Mr. L. Venkata Krishna Rao",
            "designation": "Assistant Professor",
            "contact": "9701695772",
            "room": "223",
            "email": "krishna.likki@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010098.jpg"
        },
        {
            "name": "Mr. Michael Sadgun Rao Kona",
            "designation": "Assistant Professor",
            "contact": "8466011006",
            "room": "454",
            "email": "michael.kona@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010103.jpg"
        },
        {
            "name": "Mr. Bala Bhaskara Rao Emani",
            "designation": "Assistant Professor",
            "contact": "9542424931",
            "room": "234",
            "email": "balabhaskar605@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010104.jpg"
        },
        {
            "name": "Dr. Kilari Jyothsna Devi",
            "designation": "Assistant Professor",
            "contact": "9985409854",
            "room": "222",
            "email": "kilari.jyothsna@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010105.jpg"
        },
        {
            "name": "Sudhakar Reddy Narala",
            "designation": "Assistant Professor",
            "contact": "9866385245",
            "room": "234",
            "email": "nsudhakar@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010106.jpg"
        },
        {
            "name": "Dr. Uddagiri Sirisha",
            "designation": "Assistant Professor",
            "contact": "8885353872",
            "room": "224",
            "email": "sirisha.u@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010108.jpg"
        },
        {
            "name": "Ms. D. Jyothi",
            "designation": "Assistant Professor",
            "contact": "9550829306",
            "room": "216",
            "email": "djyothi@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010109.jpg"
        },
        {
            "name": "Ms. M. Bhavya Lakshmi",
            "designation": "Assistant Professor",
            "contact": "9959754455",
            "room": "216",
            "email": "bhavyamedasani@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010110.jpg"
        },
        {
            "name": "Ms. A. Naga Pravallika",
            "designation": "Assistant Professor",
            "contact": "8340959327",
            "room": "222",
            "email": "appikatlapavallika@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010111.jpg"
        },
        {
            "name": "Ms. K. Naga Divya",
            "designation": "Assistant Professor",
            "contact": "8885561230",
            "room": "216",
            "email": "adivyaindia@pvpsiddhartha.ac.in",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE010112.jpg"
        },
    ];
    
    const nonTeachingStaffData = [
        {
            "name": "Ms. P. Madhavi",
            "designation": "Assistant Professor",
            "contact": "9160060740",
            "email": "Not Provided",
            "room": "218",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011005.jpg"
        },
        {
            "name": "Ms. J. Sarvani",
            "designation": "Assistant Professor",
            "contact": "9059611353",
            "email": "Not Provided",
            "room": "216",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011024.jpg"
        },
        {
            "name": "Mr. N. Chaitanya Krishna",
            "designation": "Assistant Professor",
            "contact": "9000998749",
            "email": "Not Provided",
            "room": "211",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011018.jpg"
        },
        {
            "name": "Ms. M. Krishnaveni",
            "designation": "Assistant Professor",
            "contact": "9912484888",
            "email": "Not Provided",
            "room": "224",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011021.jpg"
        },
        {
            "name": "Ms. P. Anusha",
            "designation": "Assistant Professor",
            "contact": "9581588177",
            "email": "Not Provided",
            "room": "208",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011022.jpg"
        },
        {
            "name": "Ms. U. Durga Nandini",
            "designation": "Assistant Professor",
            "contact": "8008199321",
            "email": "Not Provided",
            "room": "216",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011025.jpg"
        },
        {
            "name": "Mr. J. Subramanyam",
            "designation": "Assistant Professor",
            "contact": "9502340054",
            "email": "Not Provided",
            "room": "204",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011026.jpg"
        },
        {
            "name": "Mr. P. Srinivasa Rao",
            "designation": "Assistant Professor",
            "contact": "9966709143",
            "email": "Not Provided",
            "room": "208",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE011020.jpg"
        },
        {
            "name": "Mrs. B. Bhagya Lakshmi",
            "designation": "Assistant Professor",
            "contact": "9490339847",
            "email": "Not Provided",
            "room": "212",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE001001.jpg"
        },
        {
            "name": "Mr. V.V. Suresh",
            "designation": "Assistant Professor",
            "contact": "9885224617",
            "email": "Not Provided",
            "room": "211",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE101006.jpg"
        },
        {
            "name": "Mr. D.I. Satish",
            "designation": "Assistant Professor",
            "contact": "9908819336",
            "email": "Not Provided",
            "room": "212",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE101002.jpg"
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

export default CSE;
