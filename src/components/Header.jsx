import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { togglegptSearch } from "../utils/gptSlice";
import {SUPPORTED_LANGUAGES} from "../utils/constants.js"
import {changeLanguage} from "../utils/configSlice.js"

const BRAND_RED = "#E50914"; 

const Header = () => {

    
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const gptSearch = useSelector((store) => store.gpt.showgptSearch);

  useEffect(() => {

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email,displayName,photoURL} = user;
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
      dispatch(removeUser());
      Navigate("/login");
    }
  });
   
  return () => unsubscribe();
     
  },[]);

  const handleSignOut = () => {
     signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  }  

  const handleToggle = () => {
    dispatch(togglegptSearch());
  }

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between h-12 sm:h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div
            className="font-extrabold text-lg sm:text-2xl md:text-3xl cursor-pointer select-none"
            style={{ color: BRAND_RED }}
          >
            Watch<span className="text-white">Party</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 sm:gap-4">
          {user && (
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Language selector */}
              {gptSearch && (
                <div className="relative inline-block">
                  <select
                    className="p-1 sm:p-2 pl-2 sm:pl-4 pr-6 sm:pr-8 
                               bg-black/80 text-white rounded-md border border-gray-700 
                               focus:ring-2 focus:ring-red-600 focus:border-red-600 cursor-pointer 
                               appearance-none text-xs sm:text-sm transition duration-200"
                    onChange={handleLanguage}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option
                        key={lang.identifier}
                        value={lang.identifier}
                        className="bg-gray-900 text-white"
                      >
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs sm:text-sm">
                    ▼
                  </span>
                </div>
              )}

              {/* GPT Search Button */}
              <button
                onClick={handleToggle}
                className="px-2 py-1 sm:px-4 sm:py-2 ml-1 sm:ml-4 text-xs sm:text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
              >
                {gptSearch ? "Back to Home" : "GPT Search"}
              </button>

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="px-2 py-1 sm:px-4 sm:py-2 ml-1 sm:ml-2 mr-1 sm:mr-3 text-xs sm:text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
              >
                Sign Out
              </button>

              {/* Avatar */}
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-white/10">
                <img
                  src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQ4lzRUTLSB7HKjP4dTnTAImELHi2b_BB3vh1P6KXmu2FmhGdRdL4oJPe2kU6EffkG38cw6ylJE0zfY3EJ7mm6FwJfpk0DY.png?r=d16"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
