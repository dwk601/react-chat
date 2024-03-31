import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`flex items-start mb-4 px-4 ${
        message.uid === user.uid ? "justify-end" : ""
      }`}
    >
      <img
        className="w-10 h-10 rounded-full"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="ml-4 text-left">
        <p className="text-sm font-bold">{message.name}</p>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
