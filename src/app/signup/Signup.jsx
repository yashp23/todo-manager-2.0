"use client";

import { toast } from "react-toastify";
import Image from "next/image";
import React, { useState } from "react";
import {signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://images.all-free-download.com/images/graphicwebp/lioness_profile_193744.webp",
  });



  const doSignUp = async(event) => {
    event.preventDefault();
    // console.log(data);
    // ////
    //form submit

    try {
      if (data.name.trim() === "" || data.name == null) {
        toast.warning("Please Enter Your Name", {
          position: "top-center"
        });
        return;
      }
      if (data.email.trim() === "" || data.email == null) {
        toast.warning("Please Enter Your Email", {
          position: "top-center"
        });
        return;
      }
      if (data.password.trim() === "" || data.password == null) {
        toast.warning("Please Enter Your Password", {
          position: "top-center"
        });
        return;
      }
      const result = await signUp(data)
      // console.log(result);
      toast.success("User has Successfully Registered !...", {
        position: "top-center"
      });
    } catch (error) {
      toast.error("User Not Registered !...", {
        position: "top-center"
      });
    }
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl:"https://images.all-free-download.com/images/graphicwebp/lioness_profile_193744.webp"
    })

  };

  const resetForm= ()=>{


    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl:"https://images.all-free-download.com/images/graphicwebp/lioness_profile_193744.webp"
    })
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div className="flex justify-center m-3">
            <Image
              src="signup.svg"
              width={50}
              height={20}
              style={{ height: "50%", width: "50%" }}
              alt="SignUp Image"
              priority={true}
            ></Image>
          </div>
          <h1 className="text-3xl  text-center">Sign Up Here</h1>

          {/* ---------- */}

          <form action="#!" onSubmit={doSignUp} className="mt-5">
            {/* UserName */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-2"
              >
                UserName
              </label>

              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter UserName Here"
                id="user_name"
                name="user_name"
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
                value={data.name}
              />
            </div>

            {/* Email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>

              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter Email Here"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setData({ ...data, email: event.target.value });
                }}
                value={data.email}
              />
            </div>

            {/* Password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>

              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter Password Here"
                id="user_password"
                name="user_password"
                onChange={(event) => {
                  setData({ ...data, password: event.target.value });
                }}
                value={data.password}
              />
            </div>

            {/* About */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>

              <textarea
                className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter About Here"
                id="user_about"
                rows="3"
                name="user_about"
                onChange={(event) => {
                  setData({ ...data, about: event.target.value });
                }}
                value={data.about}
              />
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
              >
                SignUp
              </button>
              <button onClick={resetForm} className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3">
                Reset
              </button>
            </div>

            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
