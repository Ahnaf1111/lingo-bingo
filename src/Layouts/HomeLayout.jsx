import About from "../components/About";
import Banner from "../components/Banner";
import FeaturedWordSection from "../components/FeaturedWordSection";
import Footer from "../components/Footer";
import HowItWorksSection from "../components/HowItWorksSection";
import Navbar from "../components/Navbar";
import Success from "../components/Success";

const HomeLayout = () => {
  return (
    <div className="font-Montserrat bg-gradient-to-br from-blue-50 to-purple-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <About></About>
        <Success />
        <FeaturedWordSection></FeaturedWordSection>
        <HowItWorksSection></HowItWorksSection>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default HomeLayout;
