import Card from "./Card";
import SignUpForm from "./SignUpForm";
import ErrorList from "./ErrorList";

function SignUp(){
    return(
        <Card className="md:w-2/3 sm:w-full md:p-0 sm:p-8">
            <div className="p-8">
                <p className="text-right">Already a member? <span className="text-[#5546B9] cursor-pointer">Sign In</span></p>
            </div>
            <div className="md:w-1/2 mx-auto">
                <h1 className="font-bold text-3xl mb-6">Sign up to Dribbble</h1>
                <ErrorList></ErrorList>
                <SignUpForm></SignUpForm>
                <div className="text-[#9C9C9F] text-xs">
                    <p>This site is protected by reCAPTCHA and the Google</p>
                    <p><span className="text-[#6154A4] cursor-pointer">Privacy Policy </span>and <span className="text-[#6154A4] cursor-pointer">Terms of Service</span> apply.</p>
                </div>
            </div>
            
        </Card>
    );
}
export default SignUp;