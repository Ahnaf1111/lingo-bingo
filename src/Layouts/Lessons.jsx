import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Lessons = () => {
  const lessonData = useLoaderData();
  return (
    <div className="font-Montserrat bg-gradient-to-br from-blue-50 to-purple-100 ">
      <Navbar></Navbar>
      <div className="font-Montserrat flex flex-col justify-center items-center gap-5 animate-fade-in">
        {lessonData.map((d) => (
          <Link
            key={d.ID}
            to={`/lessons/${d.Lesson_no}`}
            className="max-w-xs w-full p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-600">
                Lesson {d.Lesson_no}
              </h2>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500">
                Explore this lesson's content and get started with learning!
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Lessons;
