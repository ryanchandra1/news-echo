import React from "react";
import Navigate from "../../../elements/buttonNavigate";

function Main() {
  return (
    <div className="relative justify-center items-center w-full h-full flex flex-row mobile:space-x-[15px] sm:space-x-[40px]">
      <Navigate
        goto="/news2"
        className="bg-[#5D6349] lg:w-[135px] lg:h-[64px] mobile:w-[80px] mobile:h-[35px] sm:w-[80px] h-[30px] rounded-lg hover:opacity-90 font-domaine"
        isi=" Topic"
      />
      <Navigate
        goto="/news2"
        className="bg-[#8E7766] lg:w-[135px] lg:h-[64px] mobile:w-[80px] mobile:h-[35px] sm:w-[80px] h-[30px] rounded-lg hover:opacity-90 font-domaine"
        isi=" Topic"
      />
      <Navigate
        goto="/news2"
        className="bg-[#D1D8BD] lg:w-[135px] lg:h-[64px] mobile:w-[80px] mobile:h-[35px] sm:w-[80px] h-[30px] rounded-lg hover:opacity-90 font-domaine"
        isi=" Topic"
      />
      <Navigate
        goto="/news2"
        className="bg-[#FEFAE0] lg:w-[135px] lg:h-[64px] mobile:w-[80px] mobile:h-[35px] mobile:hidden sm:block sm:w-[80px] h-[30px] rounded-lg hover:opacity-90 font-domaine"
        isi=" Topic"
      />
    </div>
  );
}

export default Main;
