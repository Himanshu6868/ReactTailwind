import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:pt-10">
      <div className="grid sm:grid-cols-2 gap-2 sm:gap-6">
        <div className="flex items-center py-2 px-2 sm:px-4 bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2 text-red-500" />
          <h2 className="text-md font-light text-blue-500">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-4  bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2 text-cyan-400" />
          <h2 className="text-md font-light text-blue-500">
            Lorem ipsum dolor sit.
          </h2>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-4  bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2 text-blue-800" />
          <h2 className="text-md font-light text-blue-500">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-4  bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2 text-amber-900" />
          <h2 className="text-md font-light  text-blue-500">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-4  bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2 text-orange-500  " />
          <h2 className="text-md font-light text-blue-500">
            Lorem ipsum dolor{" "}
          </h2>
        </div>
        <div className="flex items-center py-2 px-2 sm:px-4  bg-white">
          <FontAwesomeIcon icon={faHippo} className="mr-2  text-yellow-400" />
          <h2 className="text-md font-light text-blue-500">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Faq;
