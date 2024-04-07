import React from "react";
import { CgChevronLeft } from "react-icons/cg";
import Firstpic from "../Assets/1stpic.jpg.PNG";
import Secondpic from "../Assets/2ndpic.PNG";
import Thirdpic from "../Assets/3rdpic.png";
import Dribbblepic from "../Assets/dribbble.png";
function FouthStep () {
    return (
        <>
            <div className="flex flex-col min-h-screen ">
                <div className="ml-4 mt-10 text-lg font-medium flex items-center sm:justify-center md:justify-start">
                    <img src={Dribbblepic} alt="dribbblepic"  className="md:ml-4"/> 
                    <div className="w-7 h-7 bg-zinc-300 flex items-center rounded-md justify-center ml-5">
                        <CgChevronLeft />
                    </div>
                </div>
                <div className="flex flex-col flex-grow items-center px-4 sm:px-8">
                    <div className="sm:text-2xl md:text-3xl font-bold mt-10 w-full md:w-2/5 text-center md:text-left">
                        <h1>What brings you to Dribbble?</h1>
                    </div>
                    <div className="text-sm text-zinc-400 mt-4 text-center sm:text-left">
                        <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
                    </div>
                    <div className="w-full sm:w-4/5 flex sm:flex-col md:flex-row justify-evenly items-center mt-10 py-1">
                        <div className="w-3/4 md:w-80 h-72 rounded-lg border-2 border-zinc-200 flex flex-col justify-center py-2 px-2 items-center sm:mb-6 md:mb-0 sm:mr-0 md:mr-6">
                            <img src={Firstpic} alt="firstpic" />
                            <p className="text-center mx-2 font-bold">I'm a designer looking to share my work</p>
                            <input type="Radio" className="w-5 h-5 mt-4" />
                        </div>
                        <div className="w-3/4 md:w-80 h-72 rounded-lg border-2 border-zinc-200 flex flex-col justify-center py-2 px-2 items-center mt-4 sm:mt-0 sm:mb-6 md:mb-0 sm:mr-0 md:mr-6">
                            <img src={Secondpic} alt="secondpic" />
                            <p className="text-center mx-2 font-bold">I'm looking to hire a designer</p>
                            <input type="Radio" className="w-5 h-5 mt-4" />
                        </div>
                        <div className="w-3/4 md:w-80 h-72 rounded-lg border-2 border-zinc-200 flex flex-col justify-center py-2 px-2 items-center mt-4 sm:mt-0">
                            <img src={Thirdpic} alt="thirdpic" />
                            <p className="text-center mx-2 font-bold">I'm looking for design inspiration</p>
                            <input type="Radio" className="w-5 h-5 mt-4" />
                        </div>
                    </div>
                    <div className="my-4  ">
                        <button className="bg-pink-200 text-white text-center w-56 h-10 rounded-md">Finish</button>
                    </div>   
                </div>
            </div> 
        </>
    );
}

export default FouthStep;