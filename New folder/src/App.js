import './App.css';
import Header from './components/Header';
// import Carousel from './components/Carousel';
import PrincipalMessage from './components/PrincipalMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselData';
import BoysSchoolMessage from './components/BoysSchoolMessage';
// import StrategicPlanComponent from './components/About';
import FindCarousel from './components/FindCarousel';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import BoysSchoolMessage2 from './components/BoysSchoolMessage2';
import LatestNews from './components/NewsData';
import ImageCarousel from './components/ImageCarousel';
import { ImportantLinks } from './components/ImportantLinks';

function App() {
  return (
    <>
    <Header/>
    <CarouselComponent/>
    <AboutUs/>
    {/* <Carousel/> */}
    <PrincipalMessage/>
    {/* <CarouselComponent/> */}
    <BoysSchoolMessage/>
    <BoysSchoolMessage2/>
    <LatestNews/>
    {/* <FindCarousel/> */}
    {/* <ImageCarousel/> */}
    {/* <CarouselComponent/> */}
    <Footer/>
    </>
  );
}

export default App;
