import React from "react";

const Card = ({ image, title, description, banner }) => {
  return (
    <div
      className={`${
        banner
          ? "outline outline-2 outline-[#006BFF]"
          : "outline outline-1 outline-gray-300"
      } relative flex flex-col justify-center items-center gap-2 p-4   hover:shadow-xl rounded-2xl cursor-pointer`}
    >
      {banner ? (
        <div className="absolute top-0 right-0 bg-[#006BFF] py-2 px-6 rounded-tr-2xl rounded-bl-2xl">
          <p className="text-white text-sm font-bold">{banner}</p>
        </div>
      ) : (
        ""
      )}
      <img src={image} alt={title} className="w-[100px] h-[100px]" />
      <p className="text-2xl font-bold ">{title}</p>
      <p className="font-light text-center">{description}</p>
    </div>
  );
};

export default Card;
