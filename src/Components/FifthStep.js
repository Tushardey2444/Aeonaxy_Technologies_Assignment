import React from "react";
import { CgChevronLeft } from "react-icons/cg";
import Firstpic from "../Assets/1stpic.jpg.PNG";
import Secondpic from "../Assets/2ndpic.PNG";
import Thirdpic from "../Assets/3rdpic.png";
import { CgCheck } from "react-icons/cg";
import Dribbblepic from "../Assets/dribbble.png";
function FifthStep () {
    return (
        <>
           <div className="flex flex-col min-h-screen ">
                <div className="ml-4 mt-10 text-lg font-medium flex items-center sm:justify-center md:justify-start">
                    <img src={Dribbblepic} alt="dribbblepic" className="sm:ml-4" />
                    <div className="w-7 h-7 bg-zinc-300 flex items-center rounded-md justify-center ml-5">
                        <CgChevronLeft />
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-center">
                    <div className="text-3xl font-bold mt-10 w-4/5 md:w-2/5 text-center">
                        <h1>What brings you to Dribbble?</h1>
                    </div>
                    <div className="text-sm text-zinc-400 mt-4 w-4/5 text-center mb-10">
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
                        <div className="w-3/4 md:w-80 h-72 rounded-lg border-2 border-pink-300 flex flex-col justify-center py-2 px-2 items-center mt-4 md:mt-0 relative ">
                            <img src={Thirdpic} alt="thirdpic" className="absolute -top-24 " />
                            <p className="text-center mx-2 font-bold mt-12">I'm looking for design inspiration</p>
                            <p className="text-zinc-400 text-center mt-4">with over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                            <CgCheck className="text-2xl mt-4 bg-pink-500 rounded-2xl text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/5 mt-10">
                        <p className="font-bold text-center">Anything else? You can select multiple</p>
                        <button className="bg-pink-600 text-white text-center w-56 h-10 rounded-md mt-4"> Finish</button>
                        <p className="text-zinc-400 mt-2 mb-6 text-sm text-center">or Press RETURN</p>
                    </div>   
                </div>
            </div> 
        </>
    );
}

export default FifthStep;