import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";

const OurCourses = () => {
  const courses = useLoaderData();
  return (
    <div className=" grid sm:grid-cols-4  mx-auto sm:gap-x-8 ">
      <div className="text-lg py-6 text-center bg-gray-800 p-5 w-full ">
        <h1 className="text-3xl  border-b-2 border-white pb-4  text-white">
          Our courses
        </h1>
        {courses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            className=" hover:ease-out mt-4 text-lg
            btn w-full text-white inline-block"
            key={course.id}
          >
            <button className="inline-block">{course?.name}</button>
          </Link>
        ))}
      </div>
      <div className="text-center col-span-3  md:my-24 my-11 ">
        <h1 className="text-5xl mb-11 pb-5 mx-9 border-b-2 border-black">
          Our Courses
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 w-11/12 m-auto align-middle justify-center">
          {courses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
