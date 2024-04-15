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
        className="w-10 h-10 rounded-full border-2 border-blue-500"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="ml-4 text-left bg-white rounded-lg shadow p-2">
        <p className="text-sm font-bold text-blue-500">{message.name}</p>
        <p className="text-sm text-gray-800">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
