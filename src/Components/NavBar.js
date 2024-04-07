import Card from './Card';
import NavBarSection from './NavBarSection';
import NavBarFunctions from './NavBarFunctions';
import companyName from './images/dribbble_black_logo.png';
function NavBar() {
    return (
        <nav className="bg-white border-gray-100 border-b-2 md:flex md:p-6 sm:p-9 justify-between sm:block">
            <Card className="flex md:flex-row sm:flex-col sm:mb-6 md:mb-0">
                <img src={companyName} className='m-1 mr-5 md:w-auto md:h-auto sm:w-40' draggable="false" alt="companyName"/>
                <NavBarSection></NavBarSection>
            </Card>
            <Card>
                <NavBarFunctions></NavBarFunctions>
            </Card>
        </nav>
    );
}
export default NavBar;