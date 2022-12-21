import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  const { name, price, picture } = course;
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg  transform transition duration-500 hover:scale-110 ">
        <img className="rounded-t-lg h-52 w-full" src={picture} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-bold text-lg  text-gray-700 dark:text-gray-400">
            Course Price : $ {price}
          </p>
          <Link
            to={`/course/${course.id}`}
            className="inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
