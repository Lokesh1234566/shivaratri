import React from "react";
import Photo from "../assets/images/photojson/Photos.js";
import CardComp from "./CardComp.jsx";
const Photos = () => {
  //   console.log(Photo);
  return (
    <div>
      <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl mt-3">
        Photos
      </h1>
      <div className="flex justify-center gap-3 flex-wrap mt-2">
        {Photo.map((p, index) => (
          <CardComp key={index} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
