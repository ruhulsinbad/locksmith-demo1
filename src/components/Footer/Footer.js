import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="divide-y divide-dashed">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#383838] text-white px-4 py-16 md:px-28 lg:px-48 ">
          <h1 className=" text-5xl font-bold lg:justify-self-start ">
            LOCKSMITH
          </h1>
          <div className=" text-2xl lg:justify-self-center">
            <ul>
              <li className="footer-menu"> Residential </li>
              <li className="footer-menu"> Corporate </li>
              <li className="footer-menu"> Car Programming </li>
            </ul>
          </div>

          <div className=" lg:justify-self-end">
            <h1 className="text-2xl"> Follow us </h1>
            <div className="flex text-5xl">
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
