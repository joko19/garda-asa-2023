import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import StudentArea from "./components/StudentArea";
import TotalAwardee from "./components/TotalAwardee";

function LandingPage() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", trackScrolling);

    console.log(isTransparent)
    return () => {
      window.removeEventListener("scroll", trackScrolling);
    };
  }, []);

  function isBottom() {
    const eleTop = el.getBoundingClientRect().top;

    return eleTop < 60;
  }

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("hp-banner");

    if (!wrappedElement) {
      return;
    }
    const isBtm = isBottom();

    if (isBtm) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };
  return (
    <>
      <Head>
        <title>Garda Asa | PK 199 LPDP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparent={isTransparent} isNotSticky bgOnly />
      <main>
        <Banner />
        {/* <TotalAwardee/> */}
        <StudentArea/>
      </main>
    </>
  );
}

export default LandingPage;
