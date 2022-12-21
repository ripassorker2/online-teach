import React, { useContext, useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaStar, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

import Pdf from "react-to-pdf";

const SingleCoursesDetails = () => {
  const { user } = useContext(AuthContext);

  const ref = useRef();

  const courseDetails = useLoaderData();
  const { name, picture, details, price, id, rating } = courseDetails;
  return (
    <div className="">
      <div className="text-2xl ml-16 mt-16 text-center flex justify-end items-center text-fuchsia-700 ">
        <FaDownload />
        <Pdf targetRef={ref} filename="course.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="mr-9 ml-5 ">
              Download Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div className="flex items-center justify-center min-h-screen md:my-7 m-auto"  ref={ref}>
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className=" rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]">
                <img src={user?.photoURL} className="rounded-full h-12 w-12" alt="" />
              </div>
              <div className="text-lg font-bold text-slate-700">
               Hi! {user?.displayName}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                Course duration :
              </button>
              <div className="text-xs text-neutral-500">10 Month</div>
            </div>
          </div>
          <div>
            <img src={picture} className="w-full h-96" alt="" />
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">{name}</div>
            <div className="mb-3 text-xl font-bold">Course price : ${price}</div>
            <div className="text-base text-neutral-600">{details}</div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>125</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>4</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 ">{rating}</span>
                </div>
              </div>
              <div className=" cursor-pointer text-right transition hover:text-slate-600">
               <Link to={`/cheekout/${id}`}> <button className="sm:btn btn-sm btn text-right hover:scale-105 duration-500">
                  Get Primeum <FaArrowRight className="ml-3" />{" "}
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursesDetails;
