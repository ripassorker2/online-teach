import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const SingleCoursesDetails = () => {
  const courseDetails = useLoaderData();
  const { name, picture, details, price, id } = courseDetails;
  return (
    <div className="">
      <section className="">
        <div className="text-3xl ml-16 mt-16 text-center flex justify-end items-center text-fuchsia-700 ">
          <FaDownload />
          <span className="mr-9 ml-5">Download Pdf</span>
        </div>
        <div className="px-6 py-12 md:px-12  text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12  items-center">
              <div className=" ">
                <img
                  src={picture}
                  className="w-full h-96 rounded-lg shadow-lg"
                  alt=""
                  style={{ height: "460px" }}
                />
              </div>

              <div className="mt-12 lg:mt-0 ">
                <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-4">
                  {name}
                </h1>
                <p className="font-bold text-2xl text-gray-800 text- my-3">
                 CourseJ Price : $ {price}
                </p>
                {/* <p className="font-bold text-xl text-gray-800 text- mb-3">
                  Rating : {rating}
                </p> */}
                <p className="text-lg text-gray-800 mb-4">
                  <span className="font-bold text-gray-800">Details </span> :{" "}
                  {details}
                </p>

                <Link to={`/cheekout/${id}`}>
                  <button className="btn w-full">Get Primeum</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCoursesDetails;
