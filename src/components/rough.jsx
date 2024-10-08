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
import { Notice } from "./components/Notice";
function App() {
  return (
    <>
    <Header />
    <CarouselComponent />
    <div className='d-flex'>
      <AboutUs />
      <div className="col-12 col-md-2 position-sticky top-0">
        <ImportantLinks />
        <Notice />
      </div>
    </div>
    <PrincipalMessage />
    <BoysSchoolMessage />
    <BoysSchoolMessage2 />
    <LatestNews />
    <Footer />
  </>
  
  );
}

export default App;
