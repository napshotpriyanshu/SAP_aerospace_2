import React from "react";
import avatar from "../assets/images/img_1.png";
import { Mail, Linkedin } from "lucide-react";

// function ProfileCard(props) {
//   return (
//     <div className="card-container mx-3">
//       <header>
//         <img src={avatar} className="img_card" alt={props.name} />
//       </header>
//       <h1 className="bold-text">
//         {props.name} <span className="normal-text">{props.age}</span>
//       </h1>
//       <h2 className="normal-text">{props.city}</h2>
//       <div className="social-container">
//         <div className="followers">
//           <h1 className="bold-text">Linkden</h1>
//           {/* <h2 className="smaller-text">Followers</h2> */}
//         </div>
//         <div className="likes">
//           <h1 className="bold-text">Mail</h1>
//           {/* <h2 className="smaller-text">Likes</h2>/ */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;
export const Card = (props) => {
  return (
    <div className="w-[350px] p-3 flex space-x-3 rounded-md shadow-md pt-6 pb-6" style={{
      background: "rgba(55, 110, 124, 0.4)"
    }}>
      <img src={props.profileimg} className="rounded-full w-36 h-40" alt={props.name} />
      <div className="flex flex-col justify-between">
        <div></div>
        <div>
          <p className="font-bold text-lg">{props.name}</p>
          <p className=" text-xs mb-2 font-bold text-orange-600">{props.post}</p>
          <p className="italic">{props.city}</p>
        </div>
        <div className="flex justify-end space-x-2">
          {/* <a href={props.mail} target="_blank" ><Mail /></a> */}
          <a href={props.Linkedin} target="_blank" ><Linkedin /></a>
        </div>
      </div>
    </div>
  );
};
