import React from "react";
import { useMediaQuery } from "react-responsive";
import Img from "../../elements/img";
import CardDesktop from "./cardDesktop";
import CardMobile from "./cardMobile"
import Button from "./repeat/buttonCardBawah";
import Button2 from "./repeat/buttonCardBawahKanan";
import PTDesktop from "./repeat/popularTopicDesktop";
import PTMobile from "./repeat/popularTopicMobile";


function App() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col justify-center ">
        <Img
          src="assets/img/news-gambar1.svg"
          alt="gambar news"
          className="w-full h-full object-contain"
        />

        <div className="flex flex-col justify-center items-center my-[40px]">
          <text className="font-domaine lg:text-[45px] mobile:text-[23px] mobile:mb-[5px] sm:text-[35px]  text-center">
            Opening Day Of Boating Season In Seattle
          </text>
          <text className="font-josefin-sans lg:text-[32px] mobile:text-[15px] sm:text-[20px] text-pretty text-justify">
            Of course the Puget Sound is very watery, and where there is water,
            there are boats. Today is the Grand Opening of Boating Season when
            traffic gets stalled in the University District (UW) while the
            Montlake Bridge
          </text>
        </div>

        {/* POPOULAR POST */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-[5px]">
            <Img
              src="assets/img/kiri-popularPost.svg"
              alt="dot"
              className="w-full h-full max-w-[4px] max-h-[10px] mobile:hidden lg:block"
            />
            <text className="font-domaine lg:text-[50px] mobile:text-[35px]">
              Popular Post
            </text>
          </div>
          {isMobile ? <CardMobile /> : <CardDesktop />}
        </div>

        {/* POPULAR TOPIC AND OTHER */}
        <div className="flex lg:flex-row w-full h-full max-h-[600px]  space-x-[40px] relative my-[50px] mobile:flex-col">
          {/* Bagian kiri */}
          <div className="flex flex-col w-3/4 space-y-[15px] overflow-y-scroll overflow-x-visible scrollbar-hidden p-2 mobile:hidden lg:block">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>

          {/* Bagian Kanan */}
          <div className="flex flex-col mobile:w-full lg:w-1/2 mobile:-translate-x-[30px]">
            <text className="font-domaine lg:text-[50px] mobile:text-[35px] mb-[15px] ">
              Popular Topic
            </text>
            {isMobile ? <PTMobile /> : <PTDesktop />}

            <text className="font-domaine lg:text-[50px] mobile:text-[35px] mb-[15px] my-[15px]">
              Latest Post
            </text>
            <div className="flex flex-col space-y-[15px] mobile:max-h-[480px] lg:max-h-[600px] overflow-scroll scrollbar-hidden">
              <Button2 />
              <Button2 />
              <Button2 />
              <Button2 />
              <Button2 />
              <Button2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
