import './IT.css';
import {useState} from 'react';

function IT() {
    const facultyData =[
        {
          "name": "Dr. B.V. Subba Rao",
          "designation": "Professor & Head",
          "contact": "9440109139",
          "email": "hodit@pvpsiddhartha.ac.in",
          "room": "INF100001",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF100001.jpg"
        },
        {
          "name": "Dr. A. Haritha",
          "designation": "Associate Professor",
          "contact": "9951476233",
          "email": "aharitha@pvpsiddhartha.ac.in",
          "room": "INF010030",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010030.jpg"
        },
        {
          "name": "Dr. D. Kavitha",
          "designation": "Associate Professor",
          "contact": "9441309716",
          "email": "kavitha_donepudi@yahoo.com",
          "room": "INF010008",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010008.jpg"
        },
        {
          "name": "Dr. Y. Suresh",
          "designation": "Associate Professor",
          "contact": "Not Provided",
          "email": "sureshyadlapati@gmail.com",
          "room": "INF010027",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010027.jpg"
        },
        {
          "name": "Dr. K. Pavan Kumar",
          "designation": "Sr. Assistant Professor",
          "contact": "9848691924",
          "email": "pavanpvpsit@gmail.com",
          "room": "INF010029",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010029.jpg"
        },
        {
          "name": "Dr. S. Sai Kumar",
          "designation": "Sr. Assistant Professor",
          "contact": "9885156632",
          "email": "saikumar.senagavarapu@gmail.com",
          "room": "INF010041",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010041.jpg"
        },
        {
          "name": "Dr. J. Sirisha",
          "designation": "Assistant Professor",
          "contact": "9849675275",
          "email": "siri.jagannadham@gmail.com",
          "room": "INF010004",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010004.jpg"
        },
        {
          "name": "Dr. G. Reshma",
          "designation": "Assistant Professor",
          "contact": "7997045678",
          "email": "reshma.gorripati@gmail.com",
          "room": "INF010019",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010019.jpg"
        },
        {
          "name": "Dr. Lakshmi Gogulamudi",
          "designation": "Assistant Professor",
          "contact": "9494767015",
          "email": "lakshmineeraja@gmail.com",
          "room": "INF010038",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010038.jpg"
        },
        {
          "name": "Ms. K. Swarupa Rani",
          "designation": "Assistant Professor",
          "contact": "9160804779",
          "email": "swarupapvpsit@gmail.com",
          "room": "INF010044",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010044.jpg"
        },
        {
          "name": "Mr. P. Ravi Prakash",
          "designation": "Assistant Professor",
          "contact": "9030845608",
          "email": "raviprakashparuchuri@gmail.com",
          "room": "INF010048",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010048.jpg"
        },
        {
          "name": "Dr. Y. Padma",
          "designation": "Assistant Professor",
          "contact": "9885138378",
          "email": "padmayenuga@gmail.com",
          "room": "INF010049",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010049.jpg"
        },
        {
          "name": "Ms. K. Sri Vijaya",
          "designation": "Assistant Professor",
          "contact": "9160886088",
          "email": "srivijayak@gmail.com",
          "room": "INF010050",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010050.jpg"
        },
        {
          "name": "Ms. Donepudi Leela Dharani",
          "designation": "Assistant Professor",
          "contact": "9492878422",
          "email": "dharanidonepudi@gmail.com",
          "room": "INF010053",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010053.jpg"
        },
        {
          "name": "Mr. I.M.V. Krishna",
          "designation": "Assistant Professor",
          "contact": "9390824814",
          "email": "imvkrishna@pvpsiddhartha.ac.in",
          "room": "INF010057",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010057.jpg"
        },
        {
          "name": "Mr. Chetla Chandra Mohan",
          "designation": "Assistant Professor",
          "contact": "9963754234",
          "email": "chmohan@pvpsiddhartha.ac.in",
          "room": "INF010058",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010058.jpg"
        },
        {
          "name": "Mr. Ch. Praneeth",
          "designation": "Assistant Professor",
          "contact": "940012389",
          "email": "chpraneeth@pvpsiddhartha.ac.in",
          "room": "INF010059",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010059.jpg"
        },
        {
          "name": "Ms. V. Rashmi",
          "designation": "Assistant Professor",
          "contact": "9490854890",
          "email": "rashmi@pvpsiddhartha.ac.in",
          "room": "INF010060",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010060.jpg"
        },
        {
          "name": "Dr. V. Siva Parvathi",
          "designation": "Assistant Professor",
          "contact": "9550806131",
          "email": "vsparvathi@pvpsiddhartha.ac.in",
          "room": "INF010062",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010062.jpg"
        },
        {
          "name": "Venkata Satish Babu Battula",
          "designation": "Assistant Professor",
          "contact": "8121742764",
          "email": "vsatish.phd@gmail.com",
          "room": "INF010064",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010064.jpg"
        },
        {
          "name": "Doradla Bharadwaja",
          "designation": "Assistant Professor",
          "contact": "7794807438",
          "email": "doradlabharadwaja@gmail.com",
          "room": "INF010065",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010065.jpg"
        },
        {
          "name": "Parasa Rajya Lakshmi",
          "designation": "Assistant Professor",
          "contact": "8074435769",
          "email": "rajyalakshmip@pvpsiddhartha.ac.in",
          "room": "INF010067",
          "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF010067.jpg"
        }
      ];
      
    
    const nonTeachingStaffData = [
        {
            "name": "Mr. ch. kanaka raju",
            "designation": "Assistant Professor",
            "contact": "9866909672",
            "email": "Not Provided",
            "room": "INF011007",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF011007.jpg"
          },
          {
            "name": "Ms. Y. Lakshmi",
            "designation": "Assistant Professor",
            "contact": "Not Provided",
            "email": "Not Provided",
            "room": "INF011008",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF011008.jpg"
          },
          {
            "name": "Mr. I. Yoganand",
            "designation": "Assistant Professor",
            "contact": "Not Provided",
            "email": "Not Provided",
            "room": "INF011009",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF011009.jpg"
          },
          {
            "name": "Ms. D. SAILAJA",
            "designation": "Assistant Professor",
            "contact": "Not Provided",
            "email": "Not Provided",
            "room": "INF001001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF001001.jpg"
          },
          {
            "name": "Mr. shaik usman",
            "designation": "Assistant Professor",
            "contact": "9492872300",
            "email": "Not Provided",
            "room": "INF101002",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF101002.jpg"
          },
          {
            "name": "Mr. Koteswara Rao",
            "designation": "Assistant Professor",
            "contact": "Not Provided",
            "email": "Not Provided",
            "room": "INF101001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF101001.jpg"
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

export default IT;
