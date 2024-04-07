import Card from "./Card";
import SocialMedia from "./SocialMedia";
import companyName from "./images/dribbble_pink_logo.png";

function CompanyInfo(){
    return(
        <Card className="text-gray-800 md:w-1/4 sm:w-full md:mb-0 sm:mb-10">
            <div className="sm:flex sm:justify-center md:block">
                <img src={companyName} className="mb-7 text-center" draggable="false" alt="company name"/>
            </div>
            <p className="mb-6 md:text-left sm:text-center">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
            <SocialMedia></SocialMedia>
        </Card>
    );
}
export default CompanyInfo;