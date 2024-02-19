import React from "react";
import image1 from "../assets/images/flower-pictures-unpxbv1q9kxyqr1d.jpg";
import image2 from "../assets/images/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg";
import image3 from "../assets/images/360_F_394566209_xpdsiOpLqsV5wSiBq5Ez6mBbEFhpqBPe.jpg";

const Animation = () => {
  return (
    <div className="absolute w-full py-2 px-1">
      <div className="flex bubbles gap-12 w-full flex-wrap px-1">
        <img src={image1} alt="" style={{ "--i": 11 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 12 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 18 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 14 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 18 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 11 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 12 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 14 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 18 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 11 }} className="w-5 h-5" />
        <img src={image2} alt="" style={{ "--i": 24 }} className="w-5 h-5" />
        <img src={image3} alt="" style={{ "--i": 12 }} className="w-5 h-5" />
        <img src={image1} alt="" style={{ "--i": 18 }} className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Animation;
