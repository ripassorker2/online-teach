import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import CheekOut from "../components/CheekOut/CheekOut";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
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
      { path: "/home", element: <Home /> },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <OurCourses />,
      },
      { path: "/blogs", element: <Blogs /> },
      { path: "/faq", element: <Faq /> },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <SingleCoursesDetails />,
      },
      {
        path: "/cheekout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: (
          <PrivetRouter>
            <CheekOut />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
