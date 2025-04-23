import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { updateUser, user } = useContext(AuthContext);
  const [error, setError] = useState({
    nameErr: "",
    photoErr: "",
  });
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setError({ nameErr: "", photoErr: "" });
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (name.length < 6) {
      return setError((prev) => ({
        ...prev,
        nameErr: "Name Must Be Six Character Long",
      }));
    }
    if (photo.length < 20) {
      return setError((prev) => ({
        ...prev,
        photoErr: "Please Provide an Valid Photo URL",
      }));
    }
    updateUser(name, photo)
      .then(() => {
        Swal.fire({
          title: "Update data Successful!",
          icon: "success",
          draggable: true,
        });
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-Montserrat">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Update Your Profile
      </h2>

      <form
        onSubmit={handleUpdateProfile}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-blue-100"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Update Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your new name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>
        <p className="text-xs text-red-600">{error?.nameErr}</p>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Update Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
        </div>
        <p className="text-red-600 text-xs"> {error?.photoErr}</p>

        {/* Image preview - replace src dynamically as needed */}
        <div className="flex justify-center">
          <div className=" animate-glow rounded-full">
            <img
              src={user.photoURL}
              alt="Preview"
              className="h-24 w-24 rounded-full border shadow-md object-cover animate-pulse"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
