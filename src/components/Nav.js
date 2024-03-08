import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="relative sticky top-0 bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movie List
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white">
            <li>React.js</li>
            <li>Practice</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
