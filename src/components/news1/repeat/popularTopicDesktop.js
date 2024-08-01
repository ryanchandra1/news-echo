import React from "react";

function App() {
  return (
    <div>
      <div className="flex lg:flex-row relative lg:space-x-[10px] xl:space-x-[60px] 2xl:space-x-[100px]  mb-[15px] lg:block mobile:hidden">
        <button className=" bg-[#5D6349] lg:w-[135px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine">
          Topic
        </button>
        <button className=" bg-[#5D6349] lg:w-[135px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine">
          Topic
        </button>
      </div>
      <div className="flex lg:flex-row relative lg:space-x-[10px] xl:space-x-[60px] 2xl:space-x-[100px]  lg:block mobile:hidden">
        <button className=" bg-[#5D6349] lg:w-[135px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine">
          Topic
        </button>
        <button className=" bg-[#5D6349] lg:w-[135px] lg:h-[64px] mobile:w-[62px] mobile:h-[24px] rounded-lg hover:opacity-90 font-domaine">
          Topic
        </button>
      </div>
    </div>
  );
}

export default App;
