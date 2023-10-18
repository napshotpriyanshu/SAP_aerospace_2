import React from "react";
// import ProfileCard from "./ProfileCard";
import { Card } from "./ProfileCard";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

import img_1 from "../assets/images/kp.jpeg";
import img_2 from "../assets/images/ayush.jpeg";
import img_3 from "../assets/images/preetam.png";
import img_4 from "../assets/images/abhishek.jpeg";
import img_5 from "../assets/images/prashant.jpg";
import img_6 from "../assets/images/amit.jpeg";
import img_7 from "../assets/images/vikash.jpg";
import img_8 from "../assets/images/vatsal.jpeg";
import img_9 from "../assets/images/adrish.jpeg";
import img_10 from "../assets/images/nivedita.jpg";
import img_11 from "../assets/images/shivam.jpg";
import img_12 from "../assets/images/anshini.jpg";


const handleDragStart = (e) => e.preventDefault();

const data = [
  { name: "Dr. Shanmugadas K.P.", city: "Mentor & Scientific Advisor", profileimg: img_1, post: "Founder", Linkedin: "https://in.linkedin.com/in/shanmugadas-k-p-bb52662a" },
  { name: "Ayush Divyansh", city: "Business Management & Product Development Engineer ", post: "Co-Founder", profileimg: img_2, Linkedin: "https://in.linkedin.com/in/ayush-divyansh-iitj" },
  { name: "Preetam Jamod", city: "Designer & CFD Engineer", profileimg: img_3, post: "Co-Founder", Linkedin: "https://in.linkedin.com/in/preetam-jamod-b59a14191" },
  { name: "Abhishek Verma", city: "Combustion CFD Engineer", profileimg: img_4, Linkedin: "https://in.linkedin.com/in/abhishek-verma-2055a4265" },
  { name: "Prashant Singh", city: "PIV & Spray Experiments Engineer", profileimg: img_5, Linkedin: "https://in.linkedin.com/in/prashant-singh-8b3564248" },
  { name: "Amit Rajput", city: "Instrumentations Engineer", profileimg: img_6, Linkedin: "https://in.linkedin.com/in/amit-rajput-48a065230" },
  { name: "Vikash Garg", city: "Test Rigs and Operation", profileimg: img_7, Linkedin: "https://in.linkedin.com/in/vikash-garg-02685a226" },
  { name: "Vatsal Tyagi", city: "Liner Simulation Engineer", profileimg: img_8, Linkedin: "https://in.linkedin.com/in/vatsal-tyagi-3a0264237" },
  { name: "Adrish Kar", city: "Corrugated Liner Simulation Engineer", profileimg: img_9, Linkedin: "https://in.linkedin.com/in/adrish-kar-7a706727b" },
  { name: "Nivedita Shahi", city: "Liner PIV and Simulation Engineer", profileimg: img_10, Linkedin: "https://in.linkedin.com/in/nivedita-shahi-4846b5226" },
  { name: "Shivam Uniyal", city: "Injector Simulation and High speed PIV Engineer", profileimg: img_11, Linkedin: "https://in.linkedin.com/in/shivam-uniyal-985241237" },
  { name: "Anshini Yadav", city: "Structural Analysis Engineer ", profileimg: img_12, Linkedin: "https://in.linkedin.com/in/anshini-yadav-718000232/" },
];

// const items = data.map((item, index) => (
//   <Card
//     key={index.toString()}
//     name={item.name}
//     city={item.city}
//     profileimg={item.profileimg}
//     Linkedin={item.Linkedin}
//     post={item.post}

//   />
// ));

const responsive = {
  1024: { items: 3 },
  568: { items: 2 },
  0: { items: 1 },
};

function Teams() {
  return (
    <div className="" id="team">
      <h1 className="m-8 font-bold text-white text-5xl">OUR TEAM</h1>
      <div className="background_team p-5 ml-2 justify-center flex flex-wrap gap-x-20 gap-y-10">
        {/* <AliceCarousel mouseTracking items={items} responsive={responsive} autoPlay="true" autoPlayInterval="1000" infinite="true" disableButtonsControls="true"/> */}
        {data.map((item, index) => (
          <Card
            key={index.toString()}
            name={item.name}
            city={item.city}
            profileimg={item.profileimg}
            Linkedin={item.Linkedin}
            post={item.post}

          />
        ))}
      </div>
    </div>
  );
}
export default Teams;
