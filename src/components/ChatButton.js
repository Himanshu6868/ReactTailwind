import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ChatButton = () => {
  return (
    <button className="fixed bottom-4 right-4 sm:right-8 h-17 w-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center z-10">
      <FontAwesomeIcon icon={faComment} className="h-6 w-6" />
    </button>
  );
};

export default ChatButton;
