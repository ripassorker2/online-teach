import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import CheekOut from "../components/CheekOut/CheekOut";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ResetPassword from "../components/Login/ResetPassword";
import OurCourses from "../components/OurCourses/OurCourses";
import SingleCoursesDetails from "../components/OurCourses/SingleCoursesDetails";
import Resister from "../components/Resister/Resister";
import Main from "../Main/Main";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/home",
        loader: () => fetch("https://online-teach-server.vercel.app/courses"),
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => fetch("https://online-teach-server.vercel.app/courses"),
        element: <OurCourses />,
      },
      { path: "/blogs", element: <Blogs /> },
      { path: "/faq", element: <Faq /> },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
      { path: "/resetPassword", element: <ResetPassword /> },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://online-teach-server.vercel.app/courses/${params.id}`),
        element: <SingleCoursesDetails />,
      },
      {
        path: "/cheekout/:id",
        loader: ({ params }) =>
          fetch(`https://online-teach-server.vercel.app/courses/${params.id}`),
        element: (
          <PrivetRouter>
            <CheekOut />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
