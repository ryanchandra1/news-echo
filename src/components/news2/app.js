import React from "react";
import Topic from "./repeat/exploreTopicBtn";
import Img from "../../elements/img";
import Button from "../news1/repeat/buttonCardBawahKanan";

function App() {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:space-y-[80px] mobile:space-y-[40px]">
          <div className="flex flex-col space-y-[20px]">
            <h2 className="font-domaine lg:text-[60px] mobile:text-[30px] items-center justify-center flex">
              Explore Topics
            </h2>
            <Topic />
          </div>
          <div className="flex flex-row items-center">
            <Img src="assets/img/kiri-popularPost.svg" alt="dot" className="mobile:h-[6px] lg:h-[10px]"/>
            <h3 className="font-domaine lg:text-[45px] mobile:text-[25px] mr-[20px]">
              News Regarding
            </h3>
            <button className="xl:w-[195px] xl:h-[65px] lg:w-[150px] lg:h-[64px] mobile:w-[90px] mobile:h-[35px] sm:w-[120px] sm:h-[45px] font-domaine bg-[#A4AC86] rounded-lg hover:opacity-90">
              Topic
            </button>
          </div>
          <div className="flex flex-col space-y-[10px] max-h-[400px] overflow-y-scroll scrollbar-hidden">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
