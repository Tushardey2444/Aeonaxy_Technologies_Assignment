import Card from "./Card";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function SocialMedia(){
    return(
        <Card className="flex md:justify-start sm:justify-center">
            <TiSocialDribbble className="text-2xl mr-3 cursor-pointer"/>
            <TiSocialTwitter className="text-2xl mr-4 cursor-pointer"/>
            <FaFacebookSquare className="text-xl mr-4 cursor-pointer"/>
            <FaInstagram className="text-xl mr-4 cursor-pointer"/>
            <FaPinterest className="text-lg cursor-pointer"/>
        </Card>
    );
}

export default SocialMedia;