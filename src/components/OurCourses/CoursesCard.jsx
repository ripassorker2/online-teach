import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  return (
    <div>
      <div className="card w-60  h-60 bg-base-100 shadow-xl image-full">
        <img src={course.picture} alt="Shoes" className="h-full font-serif" />
        <div className="card-body flex flex-col justify-center items-center align-middle">
          <h2 className="card-title text-4xl text-center">{course.name}</h2>
          <div className="card-actions justify-center mt-6">
            <Link to={`/course/${course.id}`}>
              <button className="btn btn-secondary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
