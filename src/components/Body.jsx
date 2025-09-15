
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();


  useEffect(() => {

   onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email,displayName} = user;
      console.log("user is signed in");
      dispatch(
        addUser({
          name: displayName,
          email: email,
          uid:uid,
        })
      );
    } else {
      // User is signed out
      console.log("user is signed out");
      dispatch(removeUser());
      Navigate("/");
    }
  });
     
  },[]);

  


  return (
     <div className="absolute top-0 left-0 z-0">
    <div className="w-screen h-screen">
      <img
        className="w-full h-full object-cover img-opacity-60"
        src="https://i.pinimg.com/1200x/27/5b/14/275b14689a0b5bde35d446c109bb3a19.jpg"
        alt="img"
      />
    </div>
      
  </div>
  );
};

export default Body;
