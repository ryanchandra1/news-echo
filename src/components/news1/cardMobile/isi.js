import React from "react";
import Image from "../../../elements/img";

function Isi() {
  return (
    <div>
      <button className="w-full h-full mobile:max-w-[152px] mobile:max-h-[250px] sm:max-w-[200px] sm:max-h-[450px] my-[10px] justify-center items-center mx-[100px] relative">
        <div className="w-full h-full border border-gray-300 rounded-lg shadow-md flex flex-col hover:border-gray-600" >
          <div className="GAMBAR flex justify-center items-center">
            <Image
              src="assets/img/laptop-gambar.svg"
              alt="card image"
              className="mobile:w-[133px] mobile:h-[82px] sm:w-[200px] sm:h-[100px] mt-[5px] rounded-lg"
            />
          </div>
          <div className="KATA flex flex-col items-center mx-[5px] my-[5px]">
            <text className="font-domaine font-semibold mobile:text-[15px] sm:text-[17px] line-clamp-1">
              Lorem ipsum dolor sit amet
            </text>
            <p className="font-josefin-sans mobile:text-[8px] sm:text-[10px] text-justify my-[5px]">
              Lorem ipsum dolor sit amet consectetur. In suspendisse ligula nisl
              tincidunt vulputate etiam malesuada vulputate. Volutpat tincidunt
              sed id tortor gravida. Accumsan dolor suspendisse ipsum pharetra
              sed. Libero cursus est semper molestie lobortis sodales
              scelerisque.
            </p>
          </div>
          <div className="justify-center items-center flex mobile:mt-0">
            <div className="w-full h-full PROFILE flex flex-row bg-gray-200 rounded-md mb-[5px] mobile:max-h-[27px] moble:max-w-[133px] sm:max-w-[180px] sm:max-h-[40px] items-center">
              <Image
                src="assets/img/foto-profile.svg"
                alt="foto profile"
                className="mobile:w-[22px] mobile:h-[20px] sm:w-[30px] sm:h-[28px] mr-[5px] ml-[10px] rounded-md"
              />
              <div className="flex flex-col">
                <text className="font-domaine font-semibold mobile:text-[9px] sm:text-[11px]">
                  James Cordon
                </text>
                <text className="font-josefin-sans font-light mobile:text-[5px] sm:text-[7px]">
                  8 Desember 2024
                </text>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Isi;
