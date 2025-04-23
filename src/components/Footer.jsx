import React, { useContext } from "react"; // adjust the path if needed
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">VocabMaster</h2>
          <p className="text-sm text-gray-400">Learn new words, every day.</p>
        </div>

        {/* Middle: Quick links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#" className="hover:text-indigo-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400">
              Lessons
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Right side: Logged in user info */}
        {user && (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white object-cover animate-glow"
            />
            <span className="text-sm text-gray-300">
              Hi, {user.displayName}
            </span>
          </div>
        )}
      </div>

      <div className="text-center text-gray-200 text-xs mt-6">
        &copy; {new Date().getFullYear()} VocabMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
