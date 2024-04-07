import Card from './Components/Card'
import ImageHolder from './Components/ImageHolder';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import FooterPart from './Components/FooterPart';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import FourthStep from './Components/FourthStep';
import FifthStep from './Components/FifthStep';
function App() {
  return (
    <Card>
      <Card className='flex container-fluid min-h-screen sm:flex-col md:flex-row'>
        <ImageHolder></ImageHolder>
        <SignUp></SignUp>
      </Card>
      <SecondStep></SecondStep>
      <ThirdStep></ThirdStep>
      <FourthStep></FourthStep>
      <FifthStep></FifthStep>
      <Card>
        <NavBar></NavBar>
        <Body></Body>
        <FooterPart></FooterPart>
      </Card>
    </Card>
  );
}

export default App;
