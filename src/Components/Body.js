import Card from './Card';
import EmailImage from './images/EmailVerification.png';
function Body() {
    return (
        <Card className="w-full text-center mt-24 mb-28 text-gray-600 text-xl md:px-0 sm:px-6">
            <h1 className='text-4xl font-bold text-black'>Please verify your email...</h1>
            <div className='flex justify-center mt-2 mb-2'>
                <img src={EmailImage} draggable="false" alt="email image"/>
            </div>
            <p>Please verify your email address. We've sent a confirmation email to:</p>
            <p className='font-bold mb-4 mt-4 text-black'>account@refero.design</p>
            <p className='mb-4'>Click the confirmation link in that email to begin using Dribbble.</p>
            <p>Didn't receive the email? Check your spam folder, It may have been caught by a filter. If</p>
            <p className='mb-4'>you still don't see it, you can <span className='text-pink-600'>resend the confirmation email.</span></p>
            <p>Wrong email address? <span className='text-pink-600'>Change it.</span></p>
        </Card>
    );
}

export default Body;