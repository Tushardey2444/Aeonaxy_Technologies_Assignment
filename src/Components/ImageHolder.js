import Card from './Card';
import homepageLogo from './images/homepage.png'
import companyName from './images/dribbble_brown_logo.png';

function ImageHolder(){
    return(
        <Card className='md:w-1/3 relative sm:w-full'>
            <img src={homepageLogo} alt="homepage logo" className='object-cover w-full h-full'/>
            <div className='absolute top-0 w-full h-full'>
                <div className='w-2/3 h-full flex flex-col justify-between mx-auto'>
                    <div className='mt-12'>
                        <img src={companyName} className='mb-8' alt="company name 3"/>
                        <h1 className='text-2xl text-[#835F13] font-extrabold'>Discover the world's top designers & Creatives</h1>
                    </div>
                    <div className='mb-10 text-[#936F23]'>
                        <p>Art by <span className='underline cursor-pointer'>Peter Tarka</span></p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ImageHolder;