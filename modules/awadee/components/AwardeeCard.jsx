/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import Link from "next/link";

export const AwardeeCard = ({ data }) => {
  return (
    <div
      className={clsx(
        "w-full lg:ml-4 lg:mr-4 lg:mb-[80px] relative",
        " ml-0 mr-3 mb-[60px]"
      )}
    >
      {data.profile ? (
        <img
          alt={data.name}
          src={data.profile}
          width={100}
          height={100}
          className={clsx(
            "lg:w-[7vw] lg:h-[7vw] absolute lg:-top-[3.5vw] left-5 rounded-full",
            "w-[24vw] h-[24w] -top-[8vw] object-cover bg-gray-100"
          )}
        />
      ) : (
        <img
          src="/img/logo.png"
          width={100}
          height={100}
          className={clsx(
            "lg:w-[7vw] lg:h-[7vw] absolute lg:-top-[3.5vw] left-5 rounded-full",
            "w-[24vw] h-[24vw] -top-[8vw]"
          )}
          alt="logo"
        />
      )}
      <div
        className={clsx(
          "bg-gray-100 rounded min-h-[180px] lg:p-5 shadow-[0_16px_20px_rgba(154,170,207,0.25)]",
          "pt-2 pr-3 pb-3.5 pl-5"
        )}
      >
        <div className="h-14" />
        <div
          className={clsx(
            "font-semibold lg:text-xl lg:my-0",
            "mt-2 mb-1.5 text-base"
          )}
        >
          {data.name}
        </div>
        <div className="lg:text-md sm-only:text-sm">
          {data.university}
        </div>
        <div className="flex gap-2 mt-1">
          {data.instagram?.url && (
            <Link href={data.instagram.url}>
              <a target="_blank">
                <FaInstagram color="#FD1D1D" />
              </a>
            </Link>
          )}
          {data.linkedin && (
            <Link href={data.linkedin}>
              <a target="_blank">
                <FaLinkedinIn color="#0077b5" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
