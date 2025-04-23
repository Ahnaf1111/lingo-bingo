import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  const links = (
    <ul className="menu menu-horizontal rounded-md space-x-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-600 px-3 py-1 rounded-md"
              : "hover:text-blue-600 px-3 py-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lessons"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-600 px-3 py-1 rounded-md"
              : "hover:text-blue-600 px-3 py-1"
          }
        >
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-600 px-3 py-1 rounded-md"
              : "hover:text-blue-600 px-3 py-1"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tutorial"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-600 px-3 py-1 rounded-md"
              : "hover:text-blue-600 px-3 py-1"
          }
        >
          Tutorial
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-600 px-3 py-1 rounded-md"
                : "hover:text-blue-600 px-3 py-1"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </ul>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-10 py-2 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white shadow-md rounded-box mt-3 p-2 w-52 space-y-1"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition"
        >
          Lingo Bingo
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">{links}</div>

      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col md:flex-row items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-blue-400 shadow-md hover:ring-2 hover:ring-blue-500 transition duration-200"
              src={user?.photoURL}
              alt="User profile"
            />
            <span className="font-medium text-gray-700">
              {user?.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white shadow-md animate-glow"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md animate-glow"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
