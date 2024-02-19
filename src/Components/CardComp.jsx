// CardComp.jsx
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Card } from "flowbite-react";

const CardComp = ({ image }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card
      className={`border-green-300 max-h-96 m-1 transition-transform ${
        isClicked ? "transform scale-125" : ""
      }`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <img
        src={image}
        alt="alt"
        className={` w-32 h-32 md:w-36 md:h-36 object-fill rounded-lg ${
          isClicked ? "cursor-default" : "cursor-pointer"
        }`}
      />
    </Card>
  );
};

export default CardComp;
