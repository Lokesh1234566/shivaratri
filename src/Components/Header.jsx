/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="border-b-4 flex flex-row justify-evenly items-center  ">
      {/* <div> */}
      <Link className="py-2 md:py-1 px-2 md:px-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl text-sm md:text-xl  font-bold text-white">
        Shivaratri
      </Link>
      {/* </div> */}

      <div className="hidden sm:inline font-bold text-red-700 text-sm md:text-lg w-56 md:w-96 ">
        <marquee>
          ಶ್ರೀ ಮಲೇ ಮಹದೇಶ್ವರ ಹಾಗೂ ಶ್ರೀ ಗುರು ಸಿದ್ಧಪ್ಪಾಜಿ ಶಿವರಾತ್ರಿ ಜಾತ್ರಾಮಹೋತ್ಸವ
          2024
        </marquee>
      </div>

      <div className="flex gap-3">
        <Link to="/">
          <Button gradientDuoTone="pinkToOrange" outline>
            English
          </Button>
        </Link>
        <Link to="/kannada">
          <Button gradientDuoTone="tealToLime" outline>
            Kannada
          </Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default Header;
