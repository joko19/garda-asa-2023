import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center bg-gray-50 sm:pt-32 sm:px-20 pt-24 pb-12">
      <div className="sm:text-left text-center">
        <div className="sm:text-5xl text-2xl text-red-500 items-center">
          <span className="font-bold text-orange-500 ">
            Garda ASA
          </span>{" "}
          | <span className="text-yellow-500">PK 199</span>
        </div>
        <div className="sm:mt-2 text-gray-500 sm:text-2xl">Bersinergi Membangun Bangsa, Terangi Penjuru Negeri</div>
      </div>

      <Image src="/img/logo.png" height={350} width={350} alt="logo" />
    </div>
  );
}

export default Banner;
