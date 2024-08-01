import React from "react";
import Img from "../../../elements/img";

function Main() {
  return (
    <button className="flex flex-row space-x-[20px] border border-black p-1 px-[10px] rounded-xl hover:border-2">
      <div className="KIRI flex flex-col justify-center">
        <div className="flex flex-row items-center space-x-[15px]">
          <Img
            src="assets/img/foto-profile2.svg"
            alt="profile"
            className="rounded-xl h-[44px] w-[44px]"
          />
          <text className="font-domaine xl:text-[20px] lg:text-[15px] mobile:text-[12px]">Louise Hoebregts</text>
        </div>
        <div className="text-left w-full">
          <text className="font-josefin-sans font-semibold mobile:text-[20px] xl:text-[35px] lg:text-[25px] text-left line-clamp-1">
            How to choose the right laptop for programming
          </text>
          <text className="font-josefin-sans xl:text-[20px] lg:text-[15px] mobile:text-[13px] text-pretty text-justify line-clamp-2">
            Choosing the right laptop for programming can be a tough process.
            It’s easy to get confused while researching the various options.
            There are many different laptop models out there, each with a
            different set of trade-offs
          </text>
          <text className="font-josefin-sans xl:text-[15px] lg:text-[10px] text-left">
            July 25 , 2022
          </text>
        </div>
      </div>

      <Img
        src="assets/img/laptop-gambar.svg"
        alt="img news"
        className="w-full h-full max-w-[170px] max-h-[170px] items-center justify-center rounded-lg"
      />
    </button>
  );
}

export default Main;
