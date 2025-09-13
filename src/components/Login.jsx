import { useState } from "react";

const Login = () => {
 
    const [isSignedIn, setIsSignedIn] = useState(true);

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
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <form className="flex flex-col space-y-4">
          {!isSignedIn && <div className="flex flex-col">
            <label htmlFor="username" className="text-sm mb-1">
              Username
            </label>
            <input
              type="text"
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
              id="password"
              name="password"
              required
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <button
            type="submit"
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
