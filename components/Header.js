import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import {FiMenu} from 'react-icons/fi'

function Header({ transparent, isNotSticky, bgOnly }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex justify-between items-center flex-wrap fixed md:px-12 !text-white  bg-orange-500 p-3 w-screen z-20 ">
      {/* <div
      className={clsx(
        "top-0 z-[1000]",
        isNotSticky ? "fixed" : "sticky",
        // transparent && !bgOnly && "text-white",
        transparent
          ? `w-full fixed transition ease-in delay-150 bg-gray-50 text-orange-500`
          : "bg-orange-500 w-full text-white"
      )}
    > */}
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl font-bold uppercase tracking-wide">
            Garda Asa
          </span>
        </a>
      </Link>
      
      <FiMenu onClick={handleClick} className="sm:hidden text-white text-2xl" />
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full sm:inline-flex sm:flex-grow sm:w-auto`}
      >
        <div className="sm:inline-flex sm:flex-row sm:ml-auto sm:w-auto w-full z-20 sm:items-center items-start  flex flex-col sm:h-auto">
          <Link href="/">
            <a className="sm:inline-flex sm:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:border-b hover:text-white ">
              Home
            </a>
          </Link>
          <Link href="/awardee">
            <a className="sm:inline-flex sm:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:border-b hover:text-white">
              Awardee
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
