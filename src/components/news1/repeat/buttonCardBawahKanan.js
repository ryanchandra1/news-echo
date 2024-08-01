import React from "react";
import Img from "../../../elements/img";

function Main() {
  return (
    <button className="flex flex-row space-x-[20px] border border-black p-1 px-[10px] rounded-xl hover:border-2 mobile:mr-[10px] lg:mr-0">
      <div className="KIRI flex flex-col">
        <div className="flex flex-row items-center space-x-[15px]">
          <Img
            src="assets/img/foto-profile2.svg"
            alt="profile"
            className="rounded-xl h-[44px] w-[44px]"
          />
          <text className="font-domaine text-[20px]">Louise Hoebregts</text>
        </div>
        <text className="font-josefin-sans font-semibold text-[20px] text-left line-clamp-1">
          How to choose the right laptop for programming
        </text>
        <text className="font-josefin-sans text-[15px] text-pretty text-justify line-clamp-1">
          Choosing the right laptop for programming can be a tough process. It’s
          easy to get confused while researching the various options. There are
          many different laptop models out there, each with a different set of
          trade-offs
        </text>
        <text className="font-josefin-sans text-[15px] text-left lg:hidden mobile:block">
            July 25 , 2022
          </text>
        
      </div>
    </button>
  );
}

export default Main;
