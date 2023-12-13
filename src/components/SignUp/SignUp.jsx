import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

function SignUp() {
  useTitle("Sign up");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signup, signout, user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    if (!/.{6,}/.test(password)) {
      setError("Password should be 6 in character");
      return;
    }
    setError("");
    setSuccess("");
    signup(email, password)
      .then((result) => {
        const user = result.user;
        UpdateProfile(user, name, photo);
        setSuccess("User Account Created Succecfully. Login to continue...");
        signout();
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const UpdateProfile = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => setError(error.message));
  };
  console.log(user);
  return (
    <div className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <img src={logo} alt="logo" className="mb-3" />
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to create Account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <h3 className="text-base text-green-500">{success}</h3>
              <h3 className="text-base text-red-600">{error}</h3>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  placeholder="Your Name"
                  required
                />
              </div>
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
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  placeholder="Your Photo URL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?
                <Link
                  to="/login"
                  className="font-medium text-orange-500 hover:underline "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
