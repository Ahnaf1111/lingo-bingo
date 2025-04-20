import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Success from "../components/Success";

const HomeLayout = () => {
  return (
    <div className="font-Montserrat">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <About></About>
        <Success />
      </main>
    </div>
  );
};

export default HomeLayout;
