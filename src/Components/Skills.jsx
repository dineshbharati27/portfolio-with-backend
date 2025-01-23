import React from "react";
import "../Components/Global.css";
import { NavLink } from "react-router-dom";

import { otherSkills, skills } from "../Components/SocialLinks/assets";

const Skills = ({ bgcolor, darkmode }) => {

  return (
    <>
      <div
        className={` ${
          darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
        } p-10 rounded-lg flex flex-col gap-10 `}
      >
        <h1
          className={`text-3xl font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Techincal Skills
        </h1>

        <div className="w-full flex flex-wrap gap-4">
           {
            skills.map((curr,i)=> 
            <div key={i} className="w-[7rem] text-center h-[7rem] rounded-full flex flex-col">
              
              <img src={curr.png} className="w-full p-5"/>
              <h1 className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
                }`}>{curr.skill}</h1>
            </div>)
           }
        </div>



        <h1
          className={`text-3xl font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Other Skills
        </h1>


        <div className="w-full flex flex-wrap gap-4">
        {
            otherSkills.map((curr,i)=> 
            <div key={i} className="w-[7rem] text-center h-[7rem] rounded-full flex flex-col">
            <img src={curr.png} className="w-full p-5"/>
            <h1 className={`font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}>{curr.skill}</h1>
         </div>)
           }
        </div>

        
      </div>
    </>
  );
};

export default Skills;
