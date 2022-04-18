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
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#525E75] text-white px-4 py-16 md:px-28 lg:px-48 ">
          <h1 className=" lg:justify-self-start">Locksmith</h1>
          <div className=" lg:justify-self-center">
            <ul>
              <li className="footer-menu"> Residential </li>
              <li className="footer-menu"> Corporate </li>
              <li className="footer-menu"> Car Programming </li>
            </ul>
          </div>

          <div className=" lg:justify-self-end">
            <h1 className=""> Follow us </h1>
            <div className="flex">
              <div className="group">
                <FacebookIcon />{" "}
                <span className="hidden group-hover:block">facebook</span>
              </div>
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center bg-[#525E75] text-white py-32 px-4 md:px-28 lg:px-48 justify-items-center">
          <div> Copyright &copy; {year} </div>
          <div>
            This website is designed by <b>Ruhul Sinbad </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
