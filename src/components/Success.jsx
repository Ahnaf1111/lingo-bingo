import CountUp from "react-countup";
import { BiSolidVideos } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbVocabulary } from "react-icons/tb";

const Success = () => {
  return (
    <>
      <h2 className="font-extrabold text-3xl md:text-5xl text-center mt-20 mb-10">
        Achievements from us
      </h2>
      <div className="grid md:grid-cols-2 gap-4 container mx-auto">
        <div className="shadow-2xl flex flex-col items-center justify-center animate__animated animate__fadeInLeft bg-gray-300 rounded-lg p-4">
          <h3 className="flex items-center text-3xl">
            <PiStudentFill /> Total students
          </h3>
          <CountUp start={0} end={1100} delay={0}>
            {({ countUpRef }) => (
              <div className="flex justify-center items-center">
                <span className="text-5xl" ref={countUpRef} />{" "}
                <FaPlus className="text-xl" />
              </div>
            )}
          </CountUp>
        </div>
        <div className="shadow-2xl flex flex-col items-center justify-center animate__animated animate__fadeInRight animate__delay-2s bg-slate-200 rounded-lg p-4">
          <h3 className="flex items-center text-3xl">
            <MdPlayLesson /> Total Lessons
          </h3>
          <CountUp start={0} end={12} delay={2}>
            {({ countUpRef }) => (
              <div className="flex justify-center items-center">
                <span className="text-5xl" ref={countUpRef} />
                <FaPlus className="text-xl" />
              </div>
            )}
          </CountUp>
        </div>
        <div className="shadow-2xl  flex flex-col items-center justify-center animate__animated animate__fadeInLeft animate__delay-3s bg-slate-200 rounded-lg p-4">
          <h3 className="flex items-center text-3xl">
            {" "}
            <TbVocabulary />
            Total Vocabularies
          </h3>
          <CountUp start={0} end={2000} delay={3}>
            {({ countUpRef }) => (
              <div className="flex justify-center items-center">
                <span className="text-5xl" ref={countUpRef} />
                <FaPlus className="text-xl" />
              </div>
            )}
          </CountUp>
        </div>
        <div className="shadow-2xl  flex flex-col items-center justify-center animate__animated animate__fadeInRight animate__delay-4s bg-gray-300 rounded-lg p-4">
          <h3 className="flex items-center text-3xl">
            <BiSolidVideos />
            total Tutorials
          </h3>
          <CountUp start={0} end={100} delay={4}>
            {({ countUpRef }) => (
              <div className="flex justify-center items-center">
                <span className="text-5xl" ref={countUpRef} />
                <FaPlus className="text-xl" />
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
};

export default Success;
