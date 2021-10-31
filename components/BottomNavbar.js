import React, { useEffect, useState } from "react";

import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlinePhone,
  AiFillProject,
  AiFillHome,
  AiFillPhone,
} from "react-icons/ai";
import { RiArticleLine, RiArticleFill } from "react-icons/ri";
import { BsBarChart, BsBarChartFill } from "react-icons/bs";

function BottomNavbar() {
  const [routes, setRoutes] = useState({
    "/": false,
    "/skills": false,
    "/blogs": false,
    "/projects": false,
    "/contact": false,
  });

  useEffect(() => {
    const currentRoute = location.pathname;
    for (let route in routes) {
      routes[route] = false;
    }
    if (routes.hasOwnProperty(currentRoute)) {
      let obj = {};
      obj[currentRoute] = true;
      setRoutes({ ...routes, ...obj });
    }
  }, []);
  return (
    <div className="fixed bg-white sm:hidden ring-2 w-full ring-purple-400 bottom-0  rounded-tl-2xl rounded-tr-2xl z-50">
      <div className="flex items-center p-4 justify-between transition-all duration-150">
        <a href="/">
          {routes["/"] ? (
            <AiFillHome className="bottom_nav_icon" />
          ) : (
            <AiOutlineHome className="bottom_nav_icon" />
          )}
        </a>
        <a href="/skills">
          {routes["/skills"] ? (
            <BsBarChartFill className="bottom_nav_icon" />
          ) : (
            <BsBarChart className="bottom_nav_icon " />
          )}
        </a>
        <a href="/blogs">
          {routes["/blogs"] ? (
            <RiArticleFill className="bottom_nav_icon" />
          ) : (
            <RiArticleLine className="bottom_nav_icon" />
          )}
        </a>
        <a href="/projects">
          {routes["/projects"] ? (
            <AiFillProject className="bottom_nav_icon" />
          ) : (
            <AiOutlineProject className="bottom_nav_icon" />
          )}
        </a>
        <a href="/contact">
          {routes["/contact"] ? (
            <AiFillPhone className="bottom_nav_icon" />
          ) : (
            <AiOutlinePhone className="bottom_nav_icon" />
          )}
        </a>
      </div>
    </div>
  );
}
export default BottomNavbar;
