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
      <div className='row'>
        <div className='col-md-9'>
          <div className='col-12'>
            <AboutUs />
            <PrincipalMessage />
            <BoysSchoolMessage />
            <BoysSchoolMessage2 />
            <LatestNews />
          </div>
        </div>
        <div className="col-md-3">
          <div className='position-sticky sticky-top'>
            <ImportantLinks />
            <Notice />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default App;
