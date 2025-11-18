import React, { useRef, useState } from "react";
import Page1Button from "../components/Page1Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
import FrontBackgroundImage from "../assets/image/frontBackground.png";
import LogoImage from "../assets/image/logo.png";

function Page1() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    setXVal((e.clientX - rect.x - rect.width / 2) / 70);
    setYVal(-(e.clientY - rect.y - rect.height / 2) / 10);
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={mouseMoving}
      id="page1"
      className="h-screen min-[425px]:h-screen min-[320px]:h-[90vh]  bg-white p-3 xl:p-3 lg:p-2 min-[320px]:p-1"
    >
      <div
        id="page1-in"
        style={{
          backgroundImage: `url(${FrontBackgroundImage})`,
        }}
        className="bg-cover bg-no-repeat h-full relative w-full rounded-[30px] shadow-lg shadow-gray-700 py-10 px-16 xl:py-10 xl:px-16 lg:py-10 lg:px-12 md:bg-[60%_50%] lg:bg-center md:px-10 md:py-8 min-[320px]:px-5 min-[320px]:py-5"
      >
        {/* https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_614,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg */}
        <img
          src={LogoImage}
          alt="Logo"
          className="md:h-16 h-16 min-[320px]:h-12 2xl:h-24"
        />
        <TiltText ref={tiltRef} />
        <Page1Button />
      </div>
    </div>
  );
}

export default Page1;
