"use client";
import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const context = useContext(UserContext);
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginData);

    if (loginData.email.trim() === "" || loginData.email == null) {
      toast.warning("Email is required!...", {
        position: "top-center",
      });
      return;
    }
    if (loginData.password.trim() === "" || loginData.password == null) {
      toast.warning("Password is required!...", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Login Success!...", {
        position: "top-center",
      });

      context.setUser(result.user);
      // Login Redirect
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials !...", {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
    return;
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div>
            <Image
              src={"login.svg"}
              width={500}
              height={200}
              alt="Login Image"
              priority
            ></Image>
          </div>
          <h1 className="text-3xl  text-center">Sign In Here</h1>

          <form action="" onSubmit={loginSubmit}>
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
                  setLoginData({ ...loginData, email: event.target.value });
                }}
                value={loginData.email}
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
                  setLoginData({ ...loginData, password: event.target.value });
                }}
                value={loginData.password}
              />
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
              >
                SignIn
              </button>
              <button
                onClick={resetForm}
                className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3"
              >
                Reset
              </button>
            </div>

            {/* {JSON.stringify(loginData)}   */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
