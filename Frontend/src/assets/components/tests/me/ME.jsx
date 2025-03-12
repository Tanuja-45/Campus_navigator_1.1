import './ME.css';
import { useState } from 'react';
function MEC() {
    // Faculty Data
    const facultyData = [
        {
            name: "Dr. K. Sivaji Babu",
            designation: "Professor & Principal",
            contact: "9490217899",
            email: "principal@pvpsiddhartha.ac.in",
            room: "102",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010029.jpg"
        },
        {
            name: "Dr. B. Raghu Kumar",
            designation: "Professor & Head",
            contact: "919866925051",
            email: "braghu5051@gmail.com",
            room: "105,125",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC100001.jpg"
        },
        {
            name: "Dr. M. S. R Niranjan Kumar",
            designation: "Professor & COE",
            contact: "9440491356",
            email: "coe@pvpsiddhartha.ac.in",
            room: "233",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010047.jpg"
        },
        {
            name: "Dr. P. Phani Prasanthi",
            designation: "Professor",
            contact: "9032963948",
            email: "phaniprasanthi.parvathaneni@gmail.com",
            room: "MEC010031",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010031.jpg"
        },
        {
            name: "Dr. Kode Srividya",
            designation: "Associate Professor",
            contact: "9704998826",
            email: "srividya.kode@gmail.com",
            room: "124, 232",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010020.jpg"
        },
        {
            name: "Dr. K. Ravi Prakash Babu",
            designation: "Associate Professor",
            contact: "9440262702",
            email: "rpkocharla@gmail.com",
            room: "MEC010072",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010072.jpg"
        },
        {
            name: "Mr. Koteswara Rao Unnam",
            designation: "Associate Professor & Asst. COE",
            contact: "9550819282",
            email: "koteswararao_u@yahoo.co.in",
            room: "117",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010034.jpg"
        },
        {
            name: "Ms. E. Kavitha",
            designation: "Assistant Professor",
            contact: "9848309619",
            email: "kavithavarikola@pvpsiddhartha.ac.in",
            room: "121",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010021.jpg"
        },
        {
            name: "Dr. Sayyad Abdul Kalam",
            designation: "Assistant Professor",
            contact: "9441520233",
            email: "sdakpvpsit@gmal.com",
            room: "117,118",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010027.jpg"
        },
        {
            name: "Mr. G. Bala Krishna",
            designation: "Assistant Professor",
            contact: "9966633450",
            email: "balu25262013@gmail.com",
            room: "MEC010035",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010035.jpg"
        },
        {
            name: "Dr. P. Anusha",
            designation: "Assistant Professor",
            contact: "9492173371",
            email: "anusha.peyyala@pvpsiddhartha.ac.in",
            room: "108,109,228",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010039.jpg"
        },
        {
            name: "Dr. K I V Vandana",
            designation: "Assistant Professor",
            contact: "9440028567",
            email: "vandana.k@pvpsiddhartha.ac.in",
            room: "MEC010044",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010044.jpg"
        },
        {
            name: "Dr. M. Rajya Lakshmi",
            designation: "Assistant Professor",
            contact: "9440387264",
            email: "mrajyalakshmi@pvpsiddhartha.ac.in",
            room: "MEC010045",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010045.jpg"
        },
        {
            name: "Dr. Movva Naga Swapna Sri",
            designation: "Assistant Professor",
            contact: "9052323234",
            email: "swapna2k5@gmail.com",
            room: "228",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010050.jpg"
        },
        {
            name: "Mr. Kasukurthi Venkatarao",
            designation: "Assistant Professor",
            contact: "9951769585",
            email: "venkatrao.me54@gmail.com",
            room: "231",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010048.jpg"
        },
        {
            name: "Mr. N Raghu Ram",
            designation: "Assistant Professor",
            contact: "9703679555",
            email: "raghu1449@gmail.com",
            room: "MEC010052",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010052.jpg"
        },
        {
            name: "Mr. Ch Lakshmi Kanth",
            designation: "Assistant Professor",
            contact: "9652241067",
            email: "lakshmikanth.mechanical@gmail.com",
            room: "231",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010049.jpg"
        },
        {
            name: "Mr. P. Mastan Rao",
            designation: "Assistant Professor",
            contact: "9885074139",
            email: "mastan_pb@yahoo.com",
            room: "116",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010056.jpg"
        },
        {
            name: "Mr. MOHAN SUMANTH CH",
            designation: "Assistant Professor",
            contact: "9030105759",
            email: "sumanthchpvpsit@gmail.com",
            room: "MEC010060",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010060.jpg"
        },
        {
            name: "Mr. T. Srinag",
            designation: "Assistant Professor",
            contact: "7799243888",
            email: "srinag.tummala@gmail.com",
            room: "116, 121, 122, 124",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010062.jpg"
        },
        {
            name: "Mr. Peteti GopalaKrishnaiah",
            designation: "Assistant Professor",
            contact: "8297355333",
            email: "gopalakrishnaiah@pvpsiddhartha.ac.in",
            room: "118",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010064.jpg"
        },
        {
            name: "Vidya Chaparala",
            designation: "Assistant Professor",
            contact: "9705437554",
            email: "vidyachaparala29@gmail.com",
            room: "MEC010063",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010063.jpg"
        },
        {
            name: "Dr. M. Somaiah Chowdary",
            designation: "Assistant Professor & Asst. COE",
            contact: "8500346640",
            email: "somaiahchowdary@pvpsiddhartha.ac.in",
            room: "MEC010066",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010066.jpg"
        },
        {
            name: "Ms. M. Radha Devi",
            designation: "Assistant Professor",
            contact: "9059839931",
            email: "devi.radham@gmail.com",
            room: "MEC010065",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010065.jpg"
        },
        {
            name: "Mr. T.J. Prasanna Kumar",
            designation: "Assistant Professor",
            contact: "8885561986",
            email: "tjpk.mech@gmail.com",
            room: "114",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010073.jpg"
        },
        {
            name: "Mr. J. Surendra",
            designation: "Assistant Professor",
            contact: "9493488665",
            email: "jasti.surendra@pvpsiddhartha.ac.in",
            room: "122",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010075.jpg"
        },
        {
            name: "Sravani Vemuri",
            designation: "Assistant Professor",
            contact: "7675843272",
            email: "sravanivemuri@pvpsit.ac.in",
            room: "MEC010077",
            photo: "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC010077.jpg"
        },
    ];
    const nonTeachingStaffData=
        [
            {
                "name": "Mr. G. Rajendra Prasad",
                "designation": "Non-Teaching Staff",
                "contact": "8019695057",
                "email": "Not Provided",
                "room": "MEC011008",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011008.jpg"
            },
            {
                "name": "Ms. V. Radha Naga Mani",
                "designation": "Non-Teaching Staff",
                "contact": "9676280008",
                "email": "Not Provided",
                "room": "126",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC001001.jpg"
            },
            {
                "name": "Mr. K. Nagendra Prasad",
                "designation": "Non-Teaching Staff",
                "contact": "9949243263",
                "email": "Not Provided",
                "room": "117",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011001.jpg"
            },
            {
                "name": "Mr. K. Suresh",
                "designation": "Non-Teaching Staff",
                "contact": "8019692544",
                "email": "Not Provided",
                "room": "121",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011003.jpg"
            },
            {
                "name": "Mr. D. Uma Maheswara Rao",
                "designation": "Non-Teaching Staff",
                "contact": "9848649866",
                "email": "Not Provided",
                "room": "124",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011005.jpg"
            },
            {
                "name": "Mr. Svr Chaitanya",
                "designation": "Non-Teaching Staff",
                "contact": "9347060606",
                "email": "Not Provided",
                "room": "109",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011007.jpg"
            },
            {
                "name": "Mr. N. Raghava Rao",
                "designation": "Non-Teaching Staff",
                "contact": "9848730152",
                "email": "Not Provided",
                "room": "121",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC101005.jpg"
            },
            {
                "name": "Mr. T. Naresh",
                "designation": "Non-Teaching Staff",
                "contact": "9966114182",
                "email": "Not Provided",
                "room": "109, 231",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC101003.jpg"
            },
            {
                "name": "Mr. G. Venkateswararao",
                "designation": "Non-Teaching Staff",
                "contact": "9581267255",
                "email": "Not Provided",
                "room": "MEC101002",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC101002.jpg"
            },
            {
                "name": "Sri G. Ramesh",
                "designation": "Non-Teaching Staff",
                "contact": "9848610430",
                "email": "Not Provided",
                "room": "MEC101004",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC101004.jpg"
            },
            {
                "name": "Mr. P. Rama Krishna Rao",
                "designation": "Non-Teaching Staff",
                "contact": "9032090261",
                "email": "Not Provided",
                "room": "MEC011009",
                "photo": "https://www.pvpsiddhartha.ac.in/images/MECSTAFF/MEC011009.jpg"
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

export default MEC;
