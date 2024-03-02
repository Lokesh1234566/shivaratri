/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Link } from "react-router-dom";
import mahadeshwara1 from "../assets/images/mahadeshwara1.jpg";
import siddappaji from "../assets/images/siddappaji.jpg";
// import Animation from "../Components/Animation";

const English = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      {/* heading */}
      {/* <Animation /> */}
      <div className="flex flex-col text-center mt-3">
        <h3 className="text-red-600 font-bold text-xl">
          Om Sri Ganapathye Namah
        </h3>
        <h1 className="text-orange-500 font-black text-xl sm:text-2xl">
          Sri Mala Mahadeshwar and Sri Guru Siddappaji Shivratri Jatramahotsav
          2024
        </h1>
        <h2 className="text-[#CA6C2E] font-semibold">
          Masandru Gudde,near middle off Srinivashalli and Keralasandra,
          Kanakapura Ramnagar 562117
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
            30 <sup className="text-blue-700">Th</sup> Year Fair Festival and
            Anna Dasoha
          </h3>
          <h1 className="text-[#EC2151] font-semibold text-lg sm:text-3xl md:mt-2">
            Date: 11-3-2024 Day: Monday
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
          Program details :-
        </h1>
        <div className="flex m-4 flex-col flex-wrap justify-center sm:items-center">
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl">
            7:30 AM Installation of God's Kalash
          </h3>
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl">
            8 AM Sri Ganapati Homam and Navagraha Puja
          </h3>
          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl">
            10 AM Mahamangalarati followed by fruit and nut puja by devotees
          </h3>

          <h3 className="text-[#B15662] font-medium text-lg sm:text-xl">
            From 12 Noon to 5 PM Anna Dasoha
          </h3>
        </div>
      </div>
      {/*  */}
      <div>
        <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl">
          Conductors of Jatra Utsav :-
        </h1>
        <p className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
          Villagers of T.Bekuppe, Srinivasahalli, keralasandra and surrounding
          areas
        </p>
      </div>
      {/* place or address div */}
      <div>
        <h1 className="text-center text-[#AD2D89] font-bold text-xl sm:xl">
          Route :-
        </h1>
        <p className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
          Devotees coming by bus :- Kanakapura, Srinivasahalli Gate,
          Keralasandra
        </p>
        <div>
          <h1 className="text-[#B15662] font-medium text-lg sm:text-xl mx-4 sm:mx-10 md:mx-16 text-center">
            {" "}
            Devotees coming by bike or car click on below link
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

export default English;
