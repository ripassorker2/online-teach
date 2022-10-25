import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const SingleCoursesDetails = () => {
  const courseDetails = useLoaderData();
  const { name, picture, details, price } = courseDetails;
  console.log(courseDetails);
  return (
    <div className="">
      <div class=" w-4/5 my-20 m-auto  rounded overflow-hidden shadow-lg">
        <img class="w-full h-96" src={picture} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">{name}</div>
          <p class="text-gray-700 text-base">{details}</p>
          <p className="text-xl my-6">Price :${price}</p>
          <div className="flex justify-between">
            <Link>
              {" "}
              <button className="btn btn-secondary btn-outline">
                Get Premium
              </button>
            </Link>
            <button className="btn btn-outline">
              {" "}
              <FaDownload className="mr-3" /> download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursesDetails;
