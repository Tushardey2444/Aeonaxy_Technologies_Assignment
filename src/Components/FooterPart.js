import Card from './Card';
import CompanyInfo from './CompanyInfo';
import CompanyExtras from './CompanyExtras';
import Dribbble_logo from "./images/dribbble_icon.png"
function FooterPart() {
    return (
        <footer className="w-full bg-gray-50 px-16 pt-16 pb-12 text-gray-600">
            <Card className="flex border-gray-200 border-b-2 pb-20 pt-4 mb-12 md:flex-row sm:flex-col">
                <CompanyInfo></CompanyInfo>
                <CompanyExtras></CompanyExtras>
            </Card>
            <Card className="flex md:justify-between md:flex-row sm:flex-col text-gray-500 text-md">
                <p className='sm:mb-6 md:mb-0 md:text-left sm:text-center'>&copy; 2023 Dribbble. All rights reserved.</p>
                <div className='flex sm:justify-center md:justify-end'>
                    <p><span className='font-bold text-black'>20,501,853 </span>shots dribbbled</p>
                    <div>
                        <img src={Dribbble_logo} height="25px" width="25px" className='ml-2' alt='dribbble_logo'/>
                    </div>
                </div>
            </Card>
        </footer>
    );
}
export default FooterPart;