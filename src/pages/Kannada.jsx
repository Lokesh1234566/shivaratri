/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Link } from "react-router-dom";
import mahadeshwara1 from "../assets/images/mahadeshwara1.jpg";
import siddappaji from "../assets/images/siddappaji.jpg";

const Kannada = () => {
  return (
    <div className="w-full flex flex-col justify-between ">
      {/* heading */}
      <div className="flex flex-col text-center mt-3">
        <h3 className="text-red-600 font-bold text-xl">ಓಂ ಶ್ರೀ ಗಣಪತಯೇ ನಮಃ</h3>
        <h1 className="text-orange-500 font-black text-xl sm:text-2xl">
          ಶ್ರೀ ಮಲೇ ಮಹದೇಶ್ವರ ಹಾಗೂ ಶ್ರೀ ಗುರು ಸಿದ್ಧಪ್ಪಾಜಿ ಶಿವರಾತ್ರಿ ಜಾತ್ರಾಮಹೋತ್ಸವ
          2024
        </h1>
        <h2 className="text-[#CA6C2E] font-semibold">
          ಮಾಸಂದ್ರು ಗುಡ್ಡೆ ,ಶ್ರೀನಿವಾಸಹಳ್ಳಿ ಹಾಗೂ ಕೆರಳಸಂದ್ರ ಮಧ್ಯ , ಕನಕಪುರ ರಾಮನಗರ
          562117
        </h2>
      </div>
      {/* image with text div */}
      <div className="flex justify-between">
        <img
          src={mahadeshwara1}
          alt="alt"
          className="hidden sm:inline w-36 h-36 md:w-48 md:h-48 object-cover rounded-2xl m-2 md:p-2"
        />
        <div className="flex flex-col text-center mt-1 sm:mt-4 md:mt-16">
          <h3 className="text-[#000080] font-extrabold text-xl md:2xl">
            30 <sup className="text-blue-700">ನೇ</sup> ವರ್ಷದ ಜಾತ್ರೆ ಉತ್ಸವ ಹಾಗೂ
            ಅನ್ನ ದಾಸೋಹ
          </h3>
          <h1 className="text-[#EC2151] font-semibold text-lg sm:text-3xl md:mt-2">
            Date: 11-3-2024 Day: ಸೋಮವಾರ
          </h1>
        </div>
        <img
          src={siddappaji}
          alt="alt"
          className="hidden sm:inline w-36 h-36 md:w-48 md:h-48 object-cover rounded-2xl m-2 md:p-2"
        />
      </div>

      {/* program details div */}
      <div>
        <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl">
          ಕಾರ್ಯಕ್ರಮದ ವಿವರ :-
        </h1>
        <div className="flex m-4 flex-col flex-wrap justify-center sm:items-center">
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl text-center">
            ಬೆಳಗ್ಗೆ 7:30 ಕ್ಕೆ  ದೇವರ ಕಳಶ ಸ್ಥಾಪನೆ
          </h3>
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl text-center">
            ಬೆಳಗ್ಗೆ 8 ಕ್ಕೆ ಶ್ರೀ ಗಣಪತಿ ಹೋಮ ಮತ್ತು ನವಗ್ರಹ ಪೂಜೆ
          </h3>
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl text-center">
            ಬೆಳಗ್ಗೆ 10 ಕ್ಕೆ ಮಹಾಮಂಗಳಾರತಿ ನಂತರ  ಭಕ್ತಾದಿಗಳಿಂದ ಹಣ್ಣು ಕಾಯಿ ಪೂಜೆ
          </h3>

          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl text-center">
            ಮಧ್ಯಾಹ್ನ 12 ಯಿಂದ 5 ಗಂಟೆ ವಳಗೆ  ಅನ್ನ ದಾಸೋಹ
          </h3>
        </div>
      </div>
      {/*  */}
      <div>
        <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl">
          ಜಾತ್ರೆ ಉತ್ಸವ ನಡೆಸುವವರು :-
        </h1>
        <p className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
          ಟಿ.ಬೇಕುಪ್ಪೆ, ಶ್ರೀನಿವಾಸಹಳ್ಳಿ, ಕೆರಳಸಂದ್ರ ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಮಸ್ಥರು
        </p>
      </div>
      {/* place or address div */}
      <div>
        <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl">
          ಬರುವ ಮಾರ್ಗ:-
        </h1>
        <p className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
          ಬಸ್ಸಲ್ಲಿ ಬರುವ ಭಕ್ತಾದಿಗಳು :- ಕನಕಪುರ , ಶ್ರೀನಿವಾಸಹಳ್ಳಿ ಗೇಟ್ , ಕೆರಳಸಂದ್ರ
          ಹೋಗುವ ಮಾರ್ಗ
        </p>
        <div>
          <h1 className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
            {" "}
            ಬೈಕಿನಲ್ಲಿ ಅಥವಾ ಕಾರಿನಲ್ಲಿ ಬರುವ ಭಕ್ತಾದಿಗಳು ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ
          </h1>
          <Link
            to="https://maps.app.goo.gl/dgUVZqJhpz4HtWKG6"
            className="flex justify-center text-blue-700"
          >
            http://MaleMahadeshwarandGuruSiddhappaji
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kannada;
