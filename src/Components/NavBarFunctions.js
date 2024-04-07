import demoImage from './images/demoImage.webp';
import { IoSearch } from "react-icons/io5";
import SuitcaseImage from './images/suitcase.png' 
function NavBarFunctions(){
    return (
        <div className='flex'>
            <div className="flex bg-gray-100 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-4 w-40">
                <IoSearch className="text-3xl text-gray-400 m-2 mr-2"/>
                <input type="text" id="username" className="bg-gray-100 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 outline-none" placeholder="Search" />
            </div>
            <div className='h-full p-1 mr-4 cursor-pointer'>
                <img src={SuitcaseImage} draggable="false"/>
            </div>
            <img src={demoImage} alt="demo image" className="rounded-3xl mr-6 cursor-pointer" height="10px" width="45px" draggable="false"/>
            <button type="submit" className="text-white bg-pink-500 font-medium rounded-lg px-4 text-center dark:hover:bg-pink-600">Upload</button>
        </div>
    );
}
export default NavBarFunctions;