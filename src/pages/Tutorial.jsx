import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <div className="font-Montserrat bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar></Navbar>
      <div className="container mx-auto grid md:grid-cols-2 gap-5 mt-10">
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/8YV8KmfBbBM?si=tp1gqe41WUWwJbaq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/DEH2-WXjNwM?si=H3MA1LYtu74zZkbn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/ogqeb9TLO8A?si=PVSt0JBi-_nrbPWx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/8YV8KmfBbBM?si=tp1gqe41WUWwJbaq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/DEH2-WXjNwM?si=H3MA1LYtu74zZkbn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/ogqeb9TLO8A?si=PVSt0JBi-_nrbPWx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="btn btn-warning"
          onClick={() => {
            navigate("/lessons");
          }}
        >
          lets go for leaning
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Tutorial;
