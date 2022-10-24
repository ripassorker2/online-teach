import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section>
        <div className="dark:bg-violet-700 text-black">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Welcome to our <br /> Online Teach
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo , voluptate temporibus quia?
              Architecto beatae!
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to={"/courses"}>
                <button
                  type="button"
                  className="btn btn-secondary px-4 btn-outline mx-5"
                >
                  Our Courses
                </button>
              </Link>

              <Link to={"/login"}>
                <button
                  type="button"
                  className="btn btn-info px-4 btn-outline mx-5"
                >
                  Sign In
                </button>
              </Link>

              <Link to={"/resister"}>
                <button
                  type="button"
                  className="btn btn-secondary px-4 btn-outline"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://news.cgtn.com/news/7867444e78516a4e3441544d3259544d7849444f31457a6333566d54/img/99f3ebeb55da41c1a10bddb82897e339/99f3ebeb55da41c1a10bddb82897e339.jpg"
          alt=""
          className="w-5/6 h-96 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
    </div>
  );
};

export default Home;
