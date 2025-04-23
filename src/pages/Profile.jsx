import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading user data...</p>
      </div>
    );
  }

  const { displayName, email, photoURL } = user;

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4 py-2 pt-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center">
            <img
              src={photoURL || "https://i.pravatar.cc/150?u=default"}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white -mt-20 animate-pulse"
            />
            <h1 className="text-3xl font-bold mt-6">
              Welcome, <span className="text-purple-600">{displayName}</span> 👋
            </h1>
            <p className="text-gray-500 mt-2">Here’s your profile info</p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <h2 className="text-sm text-gray-500">Full Name</h2>
              <p className="text-lg font-medium text-gray-800">{displayName}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <h2 className="text-sm text-gray-500">Email</h2>
              <p className="text-lg font-medium text-gray-800">{email}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/profile/update-profile")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
