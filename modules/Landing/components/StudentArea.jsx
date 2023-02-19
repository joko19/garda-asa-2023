import React from "react";
import Image from "next/image";

function StudentArea() {
  return (
    <div className="sm:px-20 text-center">
        <div className="text-gray-500 text-xl font-medium mt-12">
            Daerah Asal Penerima Beasiswa
        </div>
      <Image src="/img/indonesia.png" height={450} width={1350} alt="logo" />
    </div>
  );
}

export default StudentArea;
