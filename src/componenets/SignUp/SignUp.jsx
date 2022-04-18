import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import useInputValue from "../../useInputValue";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    userInfo,
    getEmail,
    getPassword,
    getConfirmPassword,
    checkbox,
    chackehandler,
    errors,
  } = useInputValue();
  let navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, Fuser, Floading, Ferror] =
    useSignInWithFacebook(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    if(loading) {
      return <p>Loading...</p>
    }
 if(user){

  navigate('/home')
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'SignUp in successfully'
  })
 }

  const createUserHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="w-screen overflow-x-hidden bg-black pb-10 text-white pt-28">
      <div className=" md:w-[550px] w-[90%] bg-[rgb(41,55,75)] mx-auto rounded-2xl shadow-2xl shadow-[rgb(41,55,75)]/75 mb-6">
        <div className="w-full lg:px-12 p-4 ">
          <div className="text-center text-2xl pt-4 font-semibold uppercase">Sign Up</div>
          <form onSubmit={createUserHandler} className="w-full pt-">
            <div className="mb-6">
              <label>E-MAIL</label>
              <input
                onChange={getEmail}
                type="email"
                placeholder="Enter your email"
              />
              <p className="text-red-500 mt-1">{errors?.emailErrors}</p>
            </div>

            <div className="mb-6">
              <label>PASSWORD</label>
              <input
                onChange={getPassword}
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-red-500 pt-1 ">{errors?.passwordErrors}</p>
            </div>

            <div className="mb-6">
              <label>Confirm Password</label>
              <input
                onChange={getConfirmPassword}
                type="password"
                placeholder="Enter your confirm password"
              />
              <p className="text-red-500 pt-1 ">
                {errors?.confirmPasswordErrors}
              </p>
            </div>

            <span>
              <input
           
                onClick={chackehandler}
                className=" w-3"
                
                type="checkbox"
              />
              <span className="ml-2">
                I agree all{" "}
                <span className="underline  underline-offset-4 decoration-[rgb(99,214,196)]">
                  terms of Service
                </span>
              </span>
            </span>
            <p className="text-red-500 pt-1 ">{errors?.checkboxError}</p>

            <div className=" md:flex justify-center mt-6 space-y-4 md:space-x-4 md:items-center">
              <button
              disabled={!checkbox}
                type="submit"
                className={!checkbox ? "bg-[rgb(99,214,196)]/80 md:text-xl font-semibold px-4  md:px-6 py-1 md:py-3 rounded-full " : "bg-[rgb(99,214,196)] md:text-xl font-semibold px-4  md:px-6 py-1 md:py-3 rounded-full "}
              >
                Sign Up
              </button>
              <Link
                to="/login"
                className="underline  underline-offset-4 decoration-[rgb(99,214,196)] px-1 pb-3"
              >
                I'm already member
              </Link>
            </div>
          </form>
          <div className="w-full flex items-center pt-6">
            <hr className="w-1/2 mr-2" /> <span>or</span>{" "}
            <hr className="w-1/2 ml-2" />
          </div>
          <div className="flex justify-between  text-white">
            <p onClick={() => signInWithGithub()} className="p-6">
              <AiFillGithub size={40} />
            </p>
            <p onClick={() => signInWithGoogle()} className="p-6">
              <AiFillGoogleCircle size={40} />
            </p>
            <p onClick={() => signInWithFacebook()} className="p-6">
              <FaFacebook size={40} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
