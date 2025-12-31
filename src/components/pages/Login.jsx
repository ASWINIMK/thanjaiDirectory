import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ImFacebook, ImGoogle } from "react-icons/im";
import Cookies from "js-cookie";
import AdminServices from "../../services/adminServices";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await AdminServices.loginAdmin({
        email,
        password,
      });

      // save token
      Cookies.set(
        "adminInfo",
        JSON.stringify({
          token: res.token,
          role: res.role,
        })
      );

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">

          {/* LEFT IMAGE */}
          <div className="hidden md:block md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Login"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">

              <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>

              {/* EMAIL */}
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-400">
                Email
              </label>

              <input
  type="email"
  placeholder="john@doe.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 py-3 mb-4 text-sm border rounded-lg"
/>
<label className="block text-sm mb-2 text-gray-700 dark:text-gray-400">
                password
              </label>

<input
  type="password"
  placeholder="************"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full px-4 py-3 mb-4 text-sm border rounded-lg"
/>


              {/* LOGIN BUTTON */}
              <button
  onClick={handleLogin}
  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition"
>
  Login
</button>


              <hr className="my-8" />

              {/* SOCIAL LOGIN */}
              <button
                disabled
                className="w-full h-12 mb-3 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg text-gray-700 transition"
              >
                <ImFacebook className="mr-2" /> Login with Facebook
              </button>

              <button
                disabled
                className="w-full h-12 flex items-center justify-center bg-gray-100 hover:bg-red-500 hover:text-white rounded-lg text-gray-700 transition"
              >
                <ImGoogle className="mr-2" /> Login with Google
              </button>

              {/* LINKS */}
              <p className="mt-4 text-sm">
                <Link
                  to="/forgot-password"
                  className="text-emerald-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </p>

              <p className="mt-2 text-sm">
                <Link
                  to="/signup"
                  className="text-emerald-500 hover:underline"
                >
                  Create an account
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
