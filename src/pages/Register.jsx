import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, logoutUser, updateUser, googleSignUp, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const notify = () => toast("password dose not match");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;
    if (password !== confirmPass) {
      return notify();
    }
    createUser(email, password)
      .then((res) => {
        // console.log(res);
        updateUser(name, photo);
        logoutUser();
        Swal.fire({
          title: "Account Creation Successful!",
          icon: "success",
          draggable: true,
        });
        navigate("/auth/login");
        e.target.reset();
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          title: err.message,
          icon: "error",
          draggable: true,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleSignUp()
      .then((res) => {
        // console.log(res);
        Swal.fire({
          title: "Google Login Successful!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          title: err.message,
          icon: "error",
          draggable: true,
        });
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        // console.log(res);
        Swal.fire({
          title: "GitHub Login Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          title: err.message,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
        <div className="w-full max-w-xl border rounded-lg p-8 shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-6">Register</h2>

          <form onSubmit={handleRegister}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPass"
                placeholder="Enter Confirm Password"
                required
                className="input input-bordered"
              />
            </div>

            <button className="btn btn-block bg-orange-500 text-white hover:bg-orange-600 border-none">
              Register
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              className="text-orange-500 hover:underline"
            >
              Login Now
            </Link>
          </div>

          {/* Divider */}
          <div className="divider my-6">Or</div>

          {/* Social Buttons */}
          <button
            onClick={handleGithubLogin}
            className="btn btn-outline btn-block mb-3"
          >
            <FaGithub className="text-black mr-2" /> Continue with Github
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-block"
          >
            <FcGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
