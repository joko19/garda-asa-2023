import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center bg-gray-50 sm:pt-32 sm:px-20 pt-24 pb-12">
      <div className="sm:text-left text-center">
        <div className="sm:text-5xl text-2xl text-red-500 items-center">
          <span className="font-bold text-orange-500 ">Garda ASA</span> |{" "}
          <span className="text-yellow-500">PK 199</span>
        </div>
        <div className="sm:mt-2 text-gray-500 sm:text-2xl">
          Gelorakan <span className="text-yellow-500">ASA</span> untuk Indonesia
          raya!
        </div>
        <p className="sm:w-1/2 sm:p-0 p-4 text-gray-500">
          Perayaan satu langkah lagi dari kemajuan edukasi bagi putra-putri
          Indonesia. Selebrasi luhurnya visi dan mimpi, diekspresikan dengan
          aksi menyebarkan semangat perjuangan bagi antar Awardee maupun
          masyarakat demi kemajuan bangsa.
        </p>
      </div>

      <Image src="/img/logo.png" height={350} width={350} alt="logo" />
    </div>
  );
}

export default Banner;
