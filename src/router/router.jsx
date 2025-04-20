import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import "animate.css";
import Lessons from "../Layouts/Lessons";
import Word from "../pages/Word";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "lessons",
    element: <Lessons></Lessons>,
    loader: async () => {
      const lessonRes = await fetch("/public/lessons.json");
      const lessonData = await lessonRes.json();

      return lessonData;
    },
  },
  {
    path: "lessons/:id",
    element: <Word></Word>,
    loader: async ({ params }) => {
      const wordRes = await fetch("/public/vocabulary.json");
      const wordData = await wordRes.json();
      const data = wordData.filter((d) => d.Lesson_no == params.id);
      return data;
    },
  },
]);
export default router;
