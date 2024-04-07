import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Dribbblepic from "../Assets/dribbble.png";
import Myimage from "../Assets/junior-LbbFGkZmG0w-unsplash (1).jpg";
function ThirdStep() {
  return (
    <>
      <div>
        <div className="ml-4 mt-8 text-lg font-medium"><img src={Dribbblepic} alt="dribbblepic" className="mx-auto md:ml-4"></img></div>
        <div className="flex flex-col h-full w-full items-center px-4 md:px-0">
          <div className="text-3xl font-bold mt-10 w-full md:w-2/5 text-center md:text-left">
            <h1>Welcome! Let's create your profile</h1>
          </div>
          <div className="text-zinc-500 text-center md:text-left mt-4 w-full md:w-2/5">
            <p>Let others get to know you better! You can do these later</p>
          </div>
          <div className="w-full md:w-2/5 text-center md:text-left mt-8 font-bold text-lg">
            <p>Add an avatar</p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-4/5 h-50 mt-4 justify-center items-center md:pr-9">
            <div className="h-40 w-40 rounded-full border-dashed border-2 border-zinc-300 flex justify-center items-center overflow-hidden">
              <img src={Myimage} className="text-gray-400 object-cover" alt="User Image"/>
            </div>
            <div className="w-full md:w-80 h-50 flex flex-col items-center md:items-start mt-4 md:mt-0">
              <button className="w-fit h-10 border-grey-300 border-2 rounded-md font-bold text-sm px-4 py-2 ml-5">Choose image</button>
              <p className="text-center md:text-left text-zinc-500 mt-4 w-full md:w-fit flex items-center justify-center md:justify-between text-xs">
                <SlArrowRight className="ml-5 mr-2" /> Or choose one of our defaults
              </p>
            </div>
          </div>
          <div className="font-bold text-center md:text-left w-full md:w-2/5 text-lg mt-10">
            <p>Add your location</p>
          </div>
          <div className="text-sm text-center md:text-left w-full md:w-2/5 border-b-2 mt-4">
            <input className="w-full outline-none " placeholder="Enter a location" ></input>
          </div>
          <div className="w-full md:w-2/5 h-10 pt-3 mt-6 mb-8 flex justify-center md:justify-start ">
            <button className="w-52 h-10 text-xs bg-pink-200 rounded-md text-white">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdStep;
