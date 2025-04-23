import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import "animate.css";
import Lessons from "../Layouts/Lessons";
import Word from "../pages/Word";
import Auth from "../Layouts/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NotFound404 from "../components/NotFound404";
import Tutorial from "../pages/Tutorial";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "lessons",
    element: <Lessons></Lessons>,
    loader: async () => {
      const lessonRes = await fetch("lessons.json");
      const lessonData = await lessonRes.json();

      return lessonData;
    },
  },
  {
    path: "auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "tutorial",
    element: <Tutorial></Tutorial>,
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "profile/update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfile></UpdateProfile>
      </PrivateRoute>
    ),
  },

  {
    path: "lessons/:id",
    element: (
      <PrivateRoute>
        <Word></Word>
      </PrivateRoute>
    ),
    loader: async ({ params }) => {
      const wordRes = await fetch("vocabulary.json");
      const wordData = await wordRes.json();
      const data = wordData.filter((d) => d.Lesson_no == params.id);
      return data;
    },
  },
  {
    path: "*",
    element: <NotFound404></NotFound404>,
  },
]);
export default router;
