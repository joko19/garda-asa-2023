import React from "react";
import Image from "next/image";

function StudentArea() {
  return (
    <div className="text-center">
      <Image
        src="/img/demografi.png"
        height={600}
        width={600}
        alt="logo"
        className="object-contain"
      />
      {/* <div className="bg-orange-300 sm:px-20 py-12 text-gray-600">
        <div className="sm:text-2xl">
          “Pendidikan adalah senjata paling mematikan di dunia, karena dengan
          pendidikan, kamu dapat mengubah dunia”
        </div>
        Nelson Mandela
      </div> */}
      <div className="flex flex-col xl:flex-row">
        <Image
          src="/img/asal-daerah.png"
          height={1200}
          width={1200}
          alt="logo"
          className="object-contain bg-red-300"
        />
        <Image
          src="/img/negara-tujuan.png"
          height={1200}
          width={1200}
          alt="logo"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default StudentArea;
