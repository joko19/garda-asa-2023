import React from "react";
import Image from "next/image";

function StudentArea() {
  return (
    <div className="text-center">
      <div className="text-gray-500 text-xl font-medium mt-12">
        Peta Persebaran Penerima Beasiswa
      </div>
      <Image src="/img/indonesia.png" height={450} width={1350} alt="logo" />
      <div className="bg-orange-300 sm:px-20 py-12 text-gray-600">
        <div className="sm:text-2xl">
          “Pendidikan adalah senjata paling mematikan di dunia, karena dengan
          pendidikan, kamu dapat mengubah dunia”
        </div>
        Nelson Mandela
      </div>
    </div>
  );
}

export default StudentArea;
