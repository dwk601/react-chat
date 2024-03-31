import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="flex items-center justify-between p-6 px-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">React Chat</h1>
      {user ? (
        <button
          onClick={signOut}
          className="p-2 rounded bg-red-500"
          type="button"
        >
          Sign Out
        </button>
      ) : (
        <button className="p-2 rounded bg-blue-500">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
