import React from "react";
import Navigate from "../../../elements/buttonNavigate";

function App() {
  return (
    <div>
      <div className="flex lg:flex-row relative lg:space-x-[10px] xl:space-x-[60px] 2xl:space-x-[100px]  mb-[15px] lg:block mobile:hidden">
        <Navigate
          goto="/news2"
          className="bg-[#5D6349] lg:text-[25px] xl:w-[195px] lg:w-[150px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine"
          isi=" Topic"
        />
        <Navigate
          goto="/news2"
          className="bg-[#8E7766] lg:text-[25px] xl:w-[195px] lg:w-[150px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine"
          isi=" Topic"
        />
      </div>
      <div className="flex lg:flex-row relative lg:space-x-[10px] xl:space-x-[60px] 2xl:space-x-[100px]  lg:block mobile:hidden">
        <Navigate
          goto="/news2"
          className="bg-[#D1D8BD] lg:text-[25px] xl:w-[195px] lg:w-[150px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine"
          isi=" Topic"
        />
        <Navigate
          goto="/news2"
          className="bg-[#FEFAE0] lg:text-[25px] xl:w-[195px] lg:w-[150px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine"
          isi=" Topic"
        />
      </div>
    </div>
  );
}

export default App;
