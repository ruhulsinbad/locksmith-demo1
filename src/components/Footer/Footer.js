import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#383838] text-white px-4 py-16 md:px-28 lg:px-48 ">
          <h1 className=" text-5xl pl-3 pb-6 border-b-2  border-[#066163] lg:border-b-0 font-bold lg:justify-self-start ">
            LOCKSMITH
          </h1>
          <div className=" text-xl border-b-2  border-[#066163] lg:border-b-0 lg:justify-self-center pb-6 mt-16 lg:mt-0">
            <ul>
              <li className="footer-menu "> Terms of Use </li>
              <li className="footer-menu "> Privacy Policy </li>
              <li className="footer-menu"> About Us </li>
            </ul>
          </div>

          <div className=" pb-6 border-b-2  border-[#066163] lg:border-b-0 lg:justify-self-end mt-16 lg:mt-0">
            <h1 className="text-2xl pl-3"> Follow us </h1>
            <div className="flex text-5xl pl-3">
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center bg-[#383838] text-white py-32 px-4 md:px-28 lg:px-48 justify-items-center">
          <div className="font-jose"> Copyright &copy; {year} </div>
          <div className="font-jose">
            This website is designed by <b>Ruhul Sinbad </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
