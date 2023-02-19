/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
// import styles from "./index.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import clsx from "clsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import ReactDropdown from "react-dropdown";

// export const databaseId = '535d3dbfb89c4069bb1d8392e3a03976';
const AwardeeCard = ({ data }) => {
  return (
    <div
      className={clsx(
        "w-full lg:ml-4 lg:mr-4 lg:mb-[80px] relative",
        " ml-0 mr-3 mb-[60px]"
      )}
    >
      <img
        alt={data.properties.name.title[0].plain_text}
        src={data.properties.image.files[0].file.url}
        width={100}
        height={100}
        className={clsx(
          "lg:w-[7vw] lg:h-[7vw] absolute lg:-top-[3.5vw] left-5 rounded-full",
          "w-[15vw] h-[15vw] -top-[8vw]"
        )}
      />
      <div
        className={clsx(
          "bg-gray-100 rounded min-h-[180px] lg:p-5 shadow-[0_16px_20px_rgba(154,170,207,0.25)]",
          "pt-2 pr-3 pb-3.5 pl-5"
        )}
      >
        {" "}
        <div className="h-14" />
        <div
          className={clsx(
            "font-semibold lg:text-xl lg:my-0",
            "mt-2 mb-1.5 text-base"
          )}
        >
          {data.properties.name.title[0].plain_text}
        </div>
        <div className="lg:text-md sm-only:text-sm">
          {" "}
          {data.properties.university.rich_text[0].plain_text}
        </div>
      </div>
    </div>
  );
};

export default function AwardeePage({ posts, filter }) {
  const [awardeeList, setAwardeeList] = useState(posts);
  // console.log("hello world")
  // console.log(posts[0].properties)
  console.log(posts);
  // console.log(posts[0].properties.image.files[0].file.url);

  const handleSearch = (e) => {
    let awardeeTemp = posts;
    let awardeeNew = [];
    awardeeTemp.map((item) => {
      if (item.properties.name.title[0].plain_text.includes(e)) {
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
      <main className="pt-64 px-12">
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
          {/* <select name="cars" className="w-1/4 rounded p-2 focus:outline-none cursor-pointer" placeholder="Program">
            <option disabled>Program</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}
        </div>

        <div className="h-24" />
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 grid-flow-row lg:gap-12 gap-4 ">
          {/* <div className={clsx("relative")}> */}
          {/* <div className="flex flex-wrap lg:pl-0 pl-4"> */}
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
            <h1 className="mt-4 text-2xl text-red-500">Awardee yang anda cari tidak ditemukan</h1>
          </div>
        )}
      </main>
    </div>
  );
}
