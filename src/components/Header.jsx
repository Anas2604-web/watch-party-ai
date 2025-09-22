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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 ">
        <div className="flex items-center gap-6 ">
          <div
            className="font-extrabold text-3xl cursor-pointer select-none"
            style={{ color: BRAND_RED }}
          >
            Watch<span className=" text-white">Party</span>
          </div>

        </div>
        <div className="flex items-center gap-4">

          {/* avatar */}
      {user && (
  <div className="flex items-center gap-3">
    <select className="p-2 bg-gray-800 text-white cursor-pointer" 
    onChange={handleLanguage}
    >
      {SUPPORTED_LANGUAGES.map(lang => 
        <option key= {lang.identifier}
         value={lang.identifier}>
          {lang.name} 
        </option>
      )}
    </select>
 

     <button
      onClick={handleToggle}
      className="px-4 py-2 ml-4 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
    >
      GPT Search
    </button>   

    {/* sign out button */}
    <button
      onClick={handleSignOut}
      className="px-4 py-2 ml-2 mr-3 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
    >
      Sign Out
    </button>

    <div className="w-9 h-9 rounded-md overflow-hidden border border-white/10">
      <img
        src={"https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQ4lzRUTLSB7HKjP4dTnTAImELHi2b_BB3vh1P6KXmu2FmhGdRdL4oJPe2kU6EffkG38cw6ylJE0zfY3EJ7mm6FwJfpk0DY.png?r=d16"}
        alt="profile"
        className="w-full h-full object-cover "
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
