import Card from './Card';
import { IoWarning } from "react-icons/io5";

function SignUpForm(){
    return(
        <Card className="mb-5">
            <form>
                <Card className="flex mb-6">
                    <div className='w-1/2 mr-5'>
                        <label for="name" className="block text-lg font-bold">Name</label>
                        <input type="text" id="name" className="bg-gray-100 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-6 placeholder:text-black" placeholder="John" required />
                    </div>
                    <div className='w-1/2'>
                        <label for="username" className="block text-lg font-bold"><IoWarning className='inline-block text-red-500'/>Username</label>
                        <input type="text" id="username" className="bg-red-50 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-6 placeholder:text-red-500" placeholder="John" required />
                    </div>
                </Card>
                <div className="mb-6">
                    <label for="email" className="block text-lg font-bold">Email</label>
                    <input type="email" id="email" className="bg-gray-100 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-6 placeholder:text-black" placeholder="account@refero.design" required />
                </div>
                <div className="mb-6">
                    <label for="password" className="block text-lg font-bold">Password</label>
                    <input type="password" id="password" className="bg-gray-100 border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-6" placeholder="6+ characters" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-8">
                        <input id="remember" type="checkbox" value="" className="w-6 h-6" required />
                    </div>
                    <label for="remember" className="ms-3 text-lg text-[#78787B]">Creating an account means you're okay with our <span className='text-[#564A93] cursor-pointer'>Terms of Service, Privacy Policy,</span> and our default <span className='text-[#564A93] cursor-pointer'>Notification Settings.</span></label>
                </div>
                <button type="submit" className="text-white bg-pink-500 font-medium rounded-lg text-sm sm:w-auto px-12 py-2.5 text-center dark:hover:bg-pink-600 ">Create Account</button>
            </form>
        </Card>
    );
}
export default SignUpForm;