import React from "react";
import Image from "../../elements/img";

function Card({ title, text, srcImage, altImage }) {
  return (
    <div className="card w-full h-full  max-h-[500px] max-w-[360px] shadow-md border rounded-xl justify-center items-center flex">
      <div className="flex flex-col space-y-[16px] fles justify-center items-center mt-[10px] mx-[10px]">
        <Image
          src={srcImage}
          alt={altImage}
          className="w-full h-full max-h-[274px] max-w-[340px] rounded-xl"
        />
        <div className="TITLE font-domaine text-[23px] line-clamp-1">
          <h1>{title}</h1>
        </div>
        <div className="TEXT font-josefin-sans text-[14px] font-medium line-clamp-2 text-justify -translate-y-2">
          <text>{text}</text>
        </div>

        <div className="PROFILE_CARD_BAWAH w-full h-full bg-[#F5F5F5] rounded-xl items-center flex flex-row ">
          <Image
            src="assets/img/foto-profile2.svg"
            alt="foto-profile"
            className="rounded-xl h-[44px] w-[44px] ml-[16px] my-[14px]"
          />

          <div className="flex flex-col pl-[10px]">
            <h2 className="font-roboto text-[14px] font-semibold">
              Louise Hoebregts
            </h2>
            <span>12 Juni 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
