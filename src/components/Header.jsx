import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";


const BRAND_RED = "#E50914"; 

const Header = () => {

    
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email,displayName,photoURL} = user;
      console.log("user is signed in");
      dispatch(
        addUser({
          displayName: displayName,
          email: email,
          uid:uid,
          photoURL: photoURL,
        })

      );
      Navigate("/browse");
    } else {
      // User is signed out
      console.log("user is signed out");
      dispatch(removeUser());
      Navigate("/login");
    }
  });
   
  return () => unsubscribe();
     
  },[]);

  const handleSignOut = () => {
     signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful");
      }).catch((error) => {
        // An error happened.
        Navigate("/error");
        console.log("error signing out: ", error);
      });
  }
  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* left: logo + nav */}
        <div className="flex items-center gap-6">
          <div
            className="font-extrabold text-2xl cursor-pointer select-none"
            style={{ color: BRAND_RED }}
          >
            Watch<span className=" text-white">Party</span>
          </div>

          <div className="hidden md:flex gap-4 text-sm text-gray-200/80">
            <div className="hover:text-white transition cursor-pointer">Home</div>
            <div className="hover:text-white transition cursor-pointer">Browse</div>
            <div className="hover:text-white transition cursor-pointer">My List</div>
            <div className="hover:text-white transition cursor-pointer">Live</div>
          </div>
        </div>
        {/* right: search + kids + avatar */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <input
              aria-label="Search"
              placeholder="Search"
              className="w-44 md:w-64 px-3 py-2 rounded bg-white/10 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded bg-white/5 hover:bg-white/10 transition text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h9"
              />
            </svg>
            <span className="text-sm">Kids</span>
          </button>

          {/* avatar */}
      {user && (
  <div className="flex items-center gap-3">
    {/* avatar */}
    <div className="w-9 h-9 rounded-md overflow-hidden border border-white/10">
      <img
        src={user?.photoURL || "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQ4lzRUTLSB7HKjP4dTnTAImELHi2b_BB3vh1P6KXmu2FmhGdRdL4oJPe2kU6EffkG38cw6ylJE0zfY3EJ7mm6FwJfpk0DY.png?r=d16"}
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* sign out button */}
    <button
      onClick={handleSignOut}
      className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
    >
      Sign Out
    </button>
  </div>
)}

        </div>
        
      </div>
    </header>
  );
};

export default Header;
