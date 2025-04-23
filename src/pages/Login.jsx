import React, { useContext, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleSignUp, githubLogin, forgotPass } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    if (!regex.test(password)) {
      setError(
        "must be 8 character long, include uppercase and lowercase on it own"
      );
      return;
    }

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state ? location.state : "/");
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
        Swal.fire({
          title: "Google Login Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state ? location.state : "/");
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
        Swal.fire({
          title: "GitHub Login Successful!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state ? location.state : "/");
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

  const handleForgotPass = () => {
    const email = emailRef.current.value;
    // console.log(email);
    forgotPass(email)
      .then(() => {
        // console.log("response on email");
        Swal.fire({
          title: "Check your gamil password reset email have been sent!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          title: err.message,
          icon: "success",
          draggable: true,
        });
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
        <div className="w-full max-w-lg border rounded-lg p-8 shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Username or Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter email or username"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered"
              />
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}

            <div className="flex justify-between items-center mb-4">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm mr-2" />
                <span className="label-text">Remember Me</span>
              </label>
              <a
                href="#"
                onClick={handleForgotPass}
                className="text-orange-500 text-sm hover:underline"
              >
                Forgot Password
              </a>
            </div>

            <button className="btn btn-block bg-orange-500 text-white hover:bg-orange-600 border-none">
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <Link
              to={"/auth/register"}
              href="#"
              className="text-orange-500 hover:underline"
            >
              Create an account
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
    </div>
  );
};

export default Login;
