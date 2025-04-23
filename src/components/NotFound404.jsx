import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <div className="text-center max-w-lg">
        <AlertTriangle className="mx-auto text-red-500" size={64} />
        <h1 className="text-5xl font-bold mt-4">404</h1>
        <p className="text-xl mt-2 font-semibold">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
