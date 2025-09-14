import { useRef, useState } from "react";
import { ValidateData } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [error, setError] = useState(null);

    const Navigate = useNavigate();
    

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const validateUserData = () => {
        const userName = username?.current?.value;
        const userEmail = email?.current?.value;
        const userPassword = password?.current?.value;

        console.log(userName, userEmail, userPassword);

        const { valid, message } = ValidateData(isSignedIn ? null : userName, userEmail, userPassword);
        if (!valid) {
            setError(message);
            return false;
        }

        if(!isSignedIn) {
            // Sign up logic here
            createUserWithEmailAndPassword(auth, userEmail , userPassword)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                Navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + " - " + errorMessage);
                // ..
              });
        }
        else {
            // Sign in logic here
            signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              Navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorCode + " - " + errorMessage);
            });
                      
        }
        return true;
    }

    const handleToggle = () => {
        setIsSignedIn(!isSignedIn);
    }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/27/5b/14/275b14689a0b5bde35d446c109bb3a19.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Box */}
      <div className="relative bg-black/75 p-8 rounded-md w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-6"> {isSignedIn? "Sign In": "Sign Up"} </h1>
        <form onSubmit={(e) => { e.preventDefault()}} 
         className="flex flex-col space-y-4">
          {!isSignedIn && <div className="flex flex-col">
            <label htmlFor="username" className="text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              ref={username}
              id="username"
              name="username"
              required
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>}

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              ref={email}   
              id="email"
              name="email"
              required
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              ref={password}   
              id="password"
              name="password"
              required
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <p className="text-red-500">{error}
            
          </p>

          <button
            type="submit"
            onClick={validateUserData}
            className="bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm">
            {isSignedIn ? "New to our platform?" : "Already have an account?"}{" "}
            <span
                onClick={handleToggle}
                className="text-red-600 hover:underline cursor-pointer"
            >
                {isSignedIn ? "Sign Up now." : "Sign In now."}
            </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
