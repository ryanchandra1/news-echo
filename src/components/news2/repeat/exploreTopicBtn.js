import React from "react";

function Btn() {
  return (
    <div className="flex flex-col space-y-[40px]">
      <div className="flex flex-row space-x-[100px] justify-center items-center">
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#D1D8BD] rounded-lg hover:opacity-90">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#A4AC86] rounded-lg hover:opacity-90">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#787F4E] rounded-lg hover:opacity-90 mobile:hidden sm:block lg:block">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#5D6449] rounded-lg hover:opacity-90 mobile:hidden lg:block">
          Topic
        </button>
      </div>
      <div className="flex flex-row space-x-[100px] justify-center items-center">
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#FEFAE0] rounded-lg hover:opacity-90">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#C7C2AB] rounded-lg hover:opacity-90">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#CCBFA3] rounded-lg hover:opacity-90 mobile:hidden sm:block lg:block">
          Topic
        </button>
        <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#8E7766] rounded-lg hover:opacity-90 mobile:hidden lg:block">
          Topic
        </button>
      </div>
    </div>
  );
}

export default Btn;
