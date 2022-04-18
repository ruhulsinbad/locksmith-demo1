import "./App.css";
// import HomeCarousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import FooterAnnouncement from "./components/Footer/FooterAnnouncement";
// import HeaderAnnouncement from "./components/Header/HeaderAnnouncement";
import ResponsiveAppBar from "./components/Header/ResponsiveAppBar";
import Adress from "./components/Layouts/Address/Adress";
import AfterHead from "./components/Layouts/AfterHead";
import SampleText from "./components/Layouts/SampleText";
import Service from "./components/Layouts/Service";
import "./common.css";

// import First from "./prac/First";

function App() {
  return (
    <>
      <div className="h-12 w-screen bg-[#FAFDD6]"></div>
      <ResponsiveAppBar />
      <AfterHead />
      <SampleText />
      <Service />
      <Adress />
      <FooterAnnouncement />
      <Footer />
    </>
  );
}

export default App;
