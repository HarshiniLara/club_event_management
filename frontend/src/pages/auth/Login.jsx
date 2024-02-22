import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    axios
      .post("https://event-flow.onrender.com/user/login", body)
      .then((user) => {
        dispatch(login(user.data));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.response.data);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-6 py-12 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">
          Welcome Back!
        </h1>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-gray-500 mt-6 text-center">
          Not already a user?{" "}
          <Link to="/register" className="text-purple-600 font-bold">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
