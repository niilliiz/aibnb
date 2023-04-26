import React from "react";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import Airbnb from "../../public/img/logo.png";

export default function Header(props) {
  return (
    <header className="sticky top-0 z-50  grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* ---------left section--------- */}
      <div className="flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Airbnb}
          alt="Airbnb Logo"
          width={100}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>

      {/* ---------middle section--------- */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start Your search"
          className="flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:inline-flex md:mx-2" />
      </div>

      {/* ---------right section--------- */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden whitespace-nowrap cursor-pointer md:inline">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
