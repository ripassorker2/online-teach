import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <section className=" dark:text-gray-100 lg:px-20">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://leverageedu.com/blog/wp-content/uploads/2020/04/Short-Courses-Online.png"
              alt=""
              style={{ height: "400px" }}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Welcome to our <br /> Online Teach
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Online learning is education that takes place over the Internet.
              It is often referred to as “e- learning” among other terms.
              However, online learning is just one type of “distance learning” -
              the umbrella term for any learning that takes place across
              distance and not in a traditional classroom.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {user?.uid ? (
                <Link to={"/courses"}>
                  <button type="button" className="btn btn-secondary py-4  ">
                    Our Courses
                  </button>
                </Link>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="btn btn-primary px-4  mr-5 w-full"
                    >
                      Sign In
                    </button>
                  </Link>

                  <Link to={"/resister"}>
                    <button
                      type="button"
                      className="btn btn-secondary sm:pr-4 w-full "
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
