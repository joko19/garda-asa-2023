import React from "react";
import { MdSchool } from "react-icons/md";

function TotalAwardee() {
  const copyText = [
    "46 Magister Dalam Negeri",
    "95 Magister Luar Negeri",
    "7 Doktor Dalam Negeri",
    "19 Doktor Luar Negeri",
  ];
  return (
    <section className="flex flex-col sm:flex-row sm:gap-12 gap-4 justify-around sm:px-20 px-4 py-12">
      {copyText.map((item, index) => (
        <div className="bg-white text-gray-500 shadow-xl rounded p-4 w-full hover:bg-yellow-50" key={index}>
          <MdSchool size={56} />
          {item}
        </div>
      ))}
    </section>
  );
}

export default TotalAwardee;
