import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInEmailPassword, signWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleSubmitInfo = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInEmailPassword(email, password)
      .then(() => {
        toast.success("Login succesFully");
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login succesfully ");
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="my-11">
        <div className="flex justify-center ">
          <div className="flex bg-white py-6 text-lg items-center w-full max-w-md px-6 mx-auto shadow-xl lg:w-2/6">
            <div className="flex-1 ">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Online Teach
                </h2>

                <p className="mt-3 text-2xl text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmitInfo}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a
                        href="/"
                        className="text-sm text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full btn btn-outline btn-secondary focus:ring-opacity-50"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500">
                  Don&#x27;t have an account yet?
                  <Link
                    to={"/resister"}
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
                <div className="flex justify-center text-center items-center mt-3 text-sm text-gray-500">
                  <div
                    onClick={handleGoogleSignIn}
                    className="flex items-center"
                  >
                    <FcGoogle size={18} className="mx-2" />
                    <p>Google Sign In</p>
                  </div>
                  <div className="flex items-center">
                    <BsGithub size={18} className="mx-2" />
                    <p>GitHub Sign In</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
