import Card from "./Card";

function CompanyExtras() {
    return (
        <Card className="flex md:justify-evenly md:w-full md:flex-row sm:flex-col">
            <div className="sm:mb-7 md:mb-0 sm:text-center md:text-left">
                <h1 className="font-bold text-black mb-4">For designers</h1>
                <p className="mb-4 cursor-pointer">Go Pro!</p>
                <p className="mb-4 cursor-pointer">Explore design work</p>
                <p className="mb-4 cursor-pointer">Design blog</p>
                <p className="mb-4 cursor-pointer">Overtime podcast</p>
                <p className="mb-4 cursor-pointer">Playoffs</p>
                <p className="mb-4 cursor-pointer">Weekly Warm-Up</p>
                <p className="mb-4 cursor-pointer">Refer a Friend</p>
                <p className="cursor-pointer">Code of conduct</p>
            </div>
            <div className="sm:mb-7 md:mb-0">
                <div className="mb-6 sm:text-center md:text-left">
                    <h1 className="font-bold text-black mb-4">Hire designers</h1>
                    <p className="mb-4 cursor-pointer">Post a job opening</p>
                    <p className="mb-4 cursor-pointer">Post a freelance project</p>
                    <p className="cursor-pointer">Search for designers</p>
                </div>
                <div className="sm:text-center md:text-left">
                    <h1 className="font-bold text-black mb-4">Brands</h1>
                    <p className="cursor-pointer">Advertise with us</p>
                </div>
            </div>
            <div className="sm:mb-7 md:mb-0 sm:text-center md:text-left">
                <h1 className="font-bold text-black mb-4">Company</h1>
                <p className="mb-4 cursor-pointer">About</p>
                <p className="mb-4 cursor-pointer">Careers</p>
                <p className="mb-4 cursor-pointer">Support</p>
                <p className="mb-4 cursor-pointer">Media kit</p>
                <p className="mb-4 cursor-pointer">Testimonials</p>
                <p className="mb-4 cursor-pointer">API</p>
                <p className="mb-4 cursor-pointer">Terms of service</p>
                <p className="mb-4 cursor-pointer">Privacy policy</p>
                <p className="cursor-pointer">Cookie policy</p>
            </div>
            <div className="sm:mb-7 md:mb-0">
                <div className="mb-6 sm:text-center md:text-left">
                    <h1 className="font-bold text-black mb-4">Directories</h1>
                    <p className="mb-4 cursor-pointer">Design jobs</p>
                    <p className="mb-4 cursor-pointer">Designers for hire</p>
                    <p className="mb-4 cursor-pointer">Freelance designers for hire</p>
                    <p className="mb-4 cursor-pointer">Tags</p>
                    <p className="cursor-pointer">Places</p>
                </div>
                <div className="sm:text-center md:text-left">
                    <h1 className="font-bold text-black mb-4">Design assets</h1>
                    <p className="mb-4 cursor-pointer">Dribbble Marketplace</p>
                    <p className="mb-4 cursor-pointer">Creative Market</p>
                    <p className="mb-4 cursor-pointer">Fontspring</p>
                    <p className="cursor-pointer">Font Squirrel</p>
                </div>
            </div>
            <div className="sm:mb-7 md:mb-0 sm:text-center md:text-left">
                <h1 className="font-bold text-black mb-4">Design Resources</h1>
                <p className="mb-4 cursor-pointer">Freelancing</p>
                <p className="mb-4 cursor-pointer">Design Hiring</p>
                <p className="mb-4 cursor-pointer">Design Portfolio</p>
                <p className="mb-4 cursor-pointer">Design Education</p>
                <p className="mb-4 cursor-pointer">Creative Process</p>
                <p className="cursor-pointer">Design Industry Trends</p>
            </div>
        </Card>
    );
}
export default CompanyExtras;