import React from "react";
import { Link } from "react-router-dom";

function SubNav() {
  return (
    <nav className="absolute top-0 w-full bg-white border-gray-200 dark:bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap white:text-white">
              Movie List
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SubNav;
