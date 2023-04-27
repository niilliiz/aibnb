import React from "react";

import Image from "next/image";
import BannerLogo from "../../public/img/banner.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xlg:h-[600px] 2xlg:h-[700px]">
      <Image
        src={BannerLogo}
        alt="Banner"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute top-1/2 w-full text-center -translate-y-1/2">
        <p className="text-sm md:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150 ">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
