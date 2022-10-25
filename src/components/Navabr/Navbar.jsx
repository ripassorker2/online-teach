import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="bg-gray-900">
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/courses">COURSES</Link>
                </li>

                <li>
                  <Link to="/blogs">BLOGS</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="md:ml-14">
              <img className="w-20 h-14" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex text-white">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/courses">COURSES</Link>
              </li>
              <li>
                <Link to="/blogs">BLOGS</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex ">
            {user?.uid ? (
              <div className="dropdown dropdown-end mr-6">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.uid && <img src={user.photoURL} alt="" />}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link  className="justify-between">
                      {user?.displayName}
                    </Link>
                  </li>
                  <li>
                    <Link >{user?.email}</Link>
                  </li>
                  <li onClick={logOut}>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn btn-sm text-white bg-gray-800">
                  Login
                </Link>
               
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
