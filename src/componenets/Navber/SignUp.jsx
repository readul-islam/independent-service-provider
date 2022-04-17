import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import useInputValue from "../../useInputValue";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

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

  

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    if(loading){
      console.log('oiiiidjdkjdjd')
    }

    console.log(user)



    const createUserHandler = (e) => {
      e.preventDefault();
    
      createUserWithEmailAndPassword(userInfo.email, userInfo.password)
     
  
    };
  

  return (
    <div className="w-screen text-white pt-32">
      <div className=" md:w-[600px] w-[90%] bg-[rgb(41,55,75)] mx-auto rounded-2xl shadow-2xl shadow-[rgb(41,55,75)]/75">
        <div className="w-full lg:px-20 p-4 ">
          <div className="text-center text-2xl font-semibold">Sign Up</div>
          <form onSubmit={ createUserHandler } className="w-full pt-8">
            <div className="mb-10">
              <label>E-MAIL</label>
              <input
                onChange={getEmail}
                type="email"
                placeholder="Enter your email"
              />
              <p className="text-red-500 mt-1">{errors?.emailErrors}</p>
            </div>

            <div className="mb-10">
              <label>PASSWORD</label>
              <input
                onChange={getPassword}
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-red-500 pt-1 ">{errors?.passwordErrors}</p>
            </div>

            <div className="mb-10">
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
                ch
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

            <div className=" md:flex justify-center mt-10 space-y-4 md:space-x-4 md:items-center">
              <button
                type="submit"
                className="bg-[rgb(99,214,196)] md:text-xl font-semibold px-4  md:px-6 py-1 md:py-3 rounded-full "
              >
                Sign Up
              </button>
              <p className="underline  underline-offset-4 decoration-[rgb(99,214,196)] px-1 pb-3">
                I'm already member
              </p>
            </div>
          </form>
          <div className="w-full flex items-center pt-6">
            <hr className="w-1/2 mr-2" /> <span>or</span>{" "}
            <hr className="w-1/2 ml-2" />
          </div>
          <div className="flex justify-between pt-6 text-white">
            <p>
              <AiFillGithub size={40} />
            </p>
            <p>
              <AiFillGoogleCircle size={40} />
            </p>
            <p>
              <FaFacebook size={40} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
