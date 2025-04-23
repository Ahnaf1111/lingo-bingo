import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 font-Montserrat">
      <Navbar></Navbar>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 lg:px-24 min-h-screen">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-6 ">
            About Us
          </h2>

          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">Lingo Bingo</span> —
            your go-to platform for learning languages in a fun, interactive
            way! Built with passion by creative minds, we’re here to bridge the
            gap between language and learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                👨‍💻 About Me
              </h3>
              <p className="text-gray-600">
                I’m a passionate full-stack developer who loves turning ideas
                into beautiful digital experiences. From frontend elegance to
                backend logic — I enjoy building meaningful projects that serve
                people.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl border-l-4 border-orange-500 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                🚀 Projects
              </h3>
              <p className="text-gray-600">
                ✅ Lingo Bingo – Language learning made fun <br />
                ✅ Visa Navigator – Smart visa process guide <br />
                ✅ Clothing & Sneakers Brand – Startup in progress <br />I
                believe in learning through building.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <h4 className="text-2xl font-bold text-gray-700 mb-4">🛠 Skills</h4>
            <div className="flex flex-wrap gap-6 justify-center text-blue-700 text-3xl animate-pulse">
              <FaReact title="React" />
              <FaJs title="JavaScript" />
              <FaNodeJs title="Node.js" />
              <FaCss3Alt title="CSS3 / Tailwind" />
              <FaGithub title="GitHub / Version Control" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
