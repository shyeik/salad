import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, SetName] = useState();
  const [password, SetPassword] = useState();
  const [message, SetMessage] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log({ name, password });

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        password,
      });

      SetMessage("Registered successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
      SetMessage(error.response?.data?.error || "Failed to create user");
    }
  };

  return (
    <div className="flex items-center justify-center  w-screen h-screen">
      <div className="flex items-center justify-center w-200 h-200 bg-gray-200 rounded-2xl">
        <div className="">
          <h1>Register</h1>
          {message && <span>{message}</span>}
          <form onSubmit={handlesubmit} className="my-20 w-54 ">
            <label className="">
              <span className="bg-red ml-2 mt-5 block">Username: </span>
              <input
                type="name"
                required
                placeholder="Enter your username"
                className="rounded-2xl border-2 w-60 border-blue-300 bg-neutral-300 py-2 px-4"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              ></input>
            </label>
            <label className="">
              <span className="bg-red ml-2 mt-5 block">Password: </span>
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="rounded-2xl border-2 w-60 border-blue-300 bg-neutral-300 py-2 px-4 "
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              ></input>
            </label>
            <div>
              <button className="my-10 py-2 px-4 rounded-full w-60  bg-blue-400 ">
                Register
              </button>
            </div>
          </form>
        </div>
        <form></form>
      </div>
    </div>
  );
};

export default Register;
