import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";

import Pdf from "react-to-pdf";

const SingleCoursesDetails = () => {
  const ref = useRef();

  const courseDetails = useLoaderData();
  const { name, picture, details, price, id, rating } = courseDetails;
  return (
    <div className="">
      <section className="">
        <Pdf targetRef={ref} filename="document.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="button">
              Generate PDF
            </button>
          )}
        </Pdf>
        <div className="text-3xl ml-16 mt-16 text-center flex justify-end items-center text-fuchsia-700 ">
          <FaDownload />
          <span className="mr-9 ml-5">Download Pdf</span>
        </div>
        <div
          className="px-6 py-12 md:px-12  text-gray-800 text-center lg:text-left"
          ref={ref}
        >
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
                <p p className="font-bold text-2xl text-gray-800 text- my-3">
                  Course Price : $ {price}
                </p>
                <p p className="font-bold text-xl text-gray-800 text- my-3">
                  Rating :{" "}
                  <FaStar className="mx-2 text-yellow-400 inline-block" />{" "}
                  {rating}
                </p>

                <p className="text-lg text-gray-800 mb-4">
                  <span className="font-bold text-gray-800">Details </span> :{" "}
                  {details}
                </p>

                <Link to={`/cheekout/${id}`}>
                  <button className="btn ">Get Primeum</button>
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
