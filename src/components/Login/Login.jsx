import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Button } from "flowbite-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { user, login, gitLogin, googleLogin } = useContext(AuthContext);
  const submitLoginData = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");
    login(email, password)
      .then(() => {
        setSuccess("User logged in succecfully");
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handlegoogleLogin = () => {
    googleLogin()
      .then(() => {})
      .catch(error => {
        setError(error.message)
      })
  }
  const handlegitLogin = () => {
    gitLogin()
      .then(() => {

      })
      .catch(error => {
        setError(error)
      })
  }
  console.log(user);
  return (
    <div className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <img src={logo} alt="logo" className="mb-3" />
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              onSubmit={submitLoginData}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <h3 className="text-base text-green-500">{success}</h3>
              <h3 className="text-base text-red-600">{error}</h3>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 "
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-orange-500 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-orange-500 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
            <div className="flex gap-2"> 
              <Button
                outline={true}
                gradientDuoTone="pinkToOrange"
                className="w-full"
                onClick={handlegoogleLogin}
              >
                <span className="font-semibold flex items-center text-slate-600 hover:text-white">
                  Login with <FaGoogle className="ml-2"></FaGoogle>
                </span>
              </Button>
              <Button
                outline={true}
                gradientDuoTone="pinkToOrange"
                className="w-full"
                onClick={handlegitLogin}
              >
                <span className="font-semibold flex items-center text-slate-600 hover:text-white">
                  Login with <FaGithub className="ml-2"></FaGithub>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
