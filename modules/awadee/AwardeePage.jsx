/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import { useState } from "react";
import ReactDropdown from "react-dropdown";
import { AwardeeCard } from "./components/AwardeeCard";

function compare(a, b) {
  if (
    a.properties.name.title[0].plain_text <
    b.properties.name.title[0].plain_text
  ) {
    return -1;
  }
  if (
    a.properties.name.title[0].plain_text >
    b.properties.name.title[0].plain_text
  ) {
    return 1;
  }
  return 0;
}

export default function AwardeePage({ posts, filter }) {
  const [awardeeList, setAwardeeList] = useState(posts.sort(compare));

  const handleSearch = (e) => {
    let awardeeTemp = posts;
    let awardeeNew = [];
    awardeeTemp.map((item) => {
      if (item.properties.name.title[0].plain_text.toLowerCase().includes(e.toLowerCase())) {
        awardeeNew.push(item);
      }
    });
    setAwardeeList(awardeeNew);
  };
  const options = [
    "Magister Dalam Negeri",
    "Magister Luar Negeri",
    "Doktor Dalam Negeri",
    "Doktor Luar Negeri",
    "All",
  ];

  const handleProgram = (e) => {
    let awardeeTemp = posts;
    let awardeeNew = [];
    awardeeTemp.map((item) => {
      if (item.properties.Program.multi_select[0].name.includes(e)) {
        awardeeNew.push(item);
      }
    });
    if (e === "All") {
      setAwardeeList(posts);
    } else {
      setAwardeeList(awardeeNew);
    }

    console.log(e);
  };

  return (
    <div>
      <Head>
        <title>Awardee | PK 199</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-12 pt-32">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            placeholder="Cari Awardee"
            className="border rounded p-2 sm:w-3/4 focus:outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <ReactDropdown
            className="sm:w-1/4 !rounded cursor-pointer"
            options={options}
            onChange={(e) => handleProgram(e.value)}
            value="Pilih Program"
            placeholder="Select an option"
          />
        </div>
        {/* {awardeeList.length > 0 && <div>{awardeeList.length} awardee</div>} */}
        <div className="h-24" />
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-3 grid-cols-1 grid-flow-row lg:gap-12 gap-4 ">
          {awardeeList.map((post) => (
            <AwardeeCard data={post} key={post.id} />
          ))}
        </div>
        {awardeeList.length === 0 && (
          <div className="text-center">
            <Image
              src="/img/awardee_not_found.png"
              height={350}
              width={350}
              alt="logo"
            />
            <h1 className="mt-4 text-2xl text-red-500">
              Awardee yang anda cari tidak ditemukan
            </h1>
          </div>
        )}
      </main>
    </div>
  );
}
