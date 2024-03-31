import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100 text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Welcome to React Chat.
      </h2>
      <img
        className="mb-4"
        src="/logo512.png"
        alt="ReactJs logo"
        width={50}
        height={50}
      />
      <p className="mb-4 text-gray-600">
        Sign in with Google to chat with your fellow React Developers.
      </p>
      <button className="p-2 bg-blue-500 text-white rounded">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
