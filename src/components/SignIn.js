import React, { useRef, useState } from "react";
import { validation } from "../utils/validation";
import { auth } from "../utils/firebaseconf";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { newUser } from "../utils/userSlice";
import Navbar from "./Navbar";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userNotFound, setUserNotFound] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValdiation = () => {
    const msg = validation(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/108453526?v=4",
          })
            .then(() => {
              const { userId , email , displayName , photoURL } = auth.currentUser;
              dispatch(
                newUser({
                  userId: userId,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUserNotFound(errorCode, errorMessage);
        });
    }
  };

  const handleLogin = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>    
    <Navbar />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isSignUp ? "Sign Up" : "Sign in"} to your account
        </h2>
      </div>

      <div className="mt-10 p-10 sm:mx-auto sm:w-full sm:max-w-sm border-1 rounded-md">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignUp && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  ref={name}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                ref={email}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {!isSignUp && (
                <div className="text-sm">
                  <a
                    href="/"
                    className=" font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
            <div className="mt-2">
              <input
                ref={password}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <p className="text-red-700 font-bold">{errorMsg}</p>
          <p className="text-red-700 font-bold flex justify-center">
            {userNotFound && "User Not Found"}
          </p>

          <div>
            <button
              type="submit"
              onClick={handleValdiation}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isSignUp ? "I already registered" : "I not registered yet?"}
          <button
            onClick={handleLogin}
            className="flex w-full justify-center rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
          >
            {!isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignIn;
