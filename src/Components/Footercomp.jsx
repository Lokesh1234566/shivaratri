import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const Footercomp = () => {
  return (
    <Footer container className="bg-gray-50 mt-2">
      <div className="w-full text-center">
        <div className="w-full justify-between flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link className="py-2 px-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl text-2xl font-bold text-white w-36">
            Shivaratri
          </Link>

          <Footer.LinkGroup className="mt-2 font-medium gap-2 md:gap-5">
            <div>
              ಮಾಸಂದ್ರು ಗುಡ್ಡೆ ,ಶ್ರೀನಿವಾಸಹಳ್ಳಿ ಹಾಗೂ ಕೆರಳಸಂದ್ರ ಮಧ್ಯ , ಕನಕಪುರ
              ರಾಮನಗರ 562117
            </div>
            {/* <Footer.Link href="/about">About</Footer.Link> */}

            {/* <Footer.Link href="/contact">Contact</Footer.Link> */}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Lokesh R : Phone No:- 8618349784"
          year={new Date().getFullYear()}
          className="font-semibold sm:text-xl"
        />
      </div>
    </Footer>
  );
};

export default Footercomp;
