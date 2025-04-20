import aboutImg1 from "../assets/about.png";
import aboutImg2 from "../assets/about1.png";
import std from "../assets/students.png";
const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-extrabold text-center">
        Learn About Our Missions
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Our Progress: Turning Passion into Proficiency
          </h2>
          <p className="text-gray-400">
            From a humble beginning to a growing community of language lovers,
            our journey is built on dedication, consistency, and real learner
            success. We’ve helped thousands take their first steps in Japanese —
            and continue supporting them as they master the language, one word
            at a time.
          </p>
        </div>
        <div className="flex-1">
          <img src={aboutImg1} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Our Process: Learn the Smart Way
          </h2>
          <p className="text-gray-400">
            We believe language learning should be efficient, enjoyable, and
            effective. That’s why we designed a system that blends spaced
            repetition, real-world context, and engaging practice. Whether
            you're a total beginner or building fluency, our process adapts to
            you — not the other way around.
          </p>
        </div>
        <div className="flex-1">
          <img src={aboutImg2} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 mx-auto">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-center my-4">
            From Recognition to Real-Life Use
          </h2>
          <p className="text-gray-400 text-justify">
            We believe language learning should be efficient, enjoyable, and
            effective. That’s why we designed a system that blends spaced
            repetition, real-world context, and engaging practice. Whether
            you're a total beginner or building fluency, our process adapts to
            you — not the other way around.
          </p>
        </div>
        <div className="flex-1">
          <img src={std} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
