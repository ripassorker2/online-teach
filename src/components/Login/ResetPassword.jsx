import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const ResetPassword = () => {
  const { forgottenPassword } = useContext(AuthContext);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    forgottenPassword(email)
      .then(() =>
        toast.success("Please ckeek your email. And reset password !!")
      )
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
                <h2 className="text-4xl font-bold text-center text-gray-700 ">
                  Online Teach
                </h2>

                <p className="mt-3 text-2xl text-gray-500 ">
                  Plasse enter yor email to reset passsowrd !!
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleResetPassword}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block my-2 text-base text-gray-600 "
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full btn btn-secondary focus:ring-opacity-50"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
