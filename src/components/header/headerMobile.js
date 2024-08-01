import React, { useState } from "react";
import Img from "../../elements/img";

function HeaderM() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="w-full h-full">
      <div className="flex flex-row justify-between items-center my-[20px]">
        <div className="IMAGE">
          <Img
            src="/assets/img/logoecho-black.svg"
            alt="logo echo"
            className="w-full h-full mobile:max-w-[125px] mobile:max-h-[60px] sm:max-w-[200px] sm:max-h-[100px] "
          />
        </div>

        <div className="flex flex-row space-x-[10px]">
          <button
            className="hover:scale-110"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Img
              src="/assets/img/search-black.svg"
              alt="search"
              className="sm:w-[40px] mobile:w-[30px] mobile:h-[30px] sm:h-[40px] "
            />
          </button>
          <button className="hover:scale-110">
            <Img
              src="/assets/img/menu-strip-3.svg"
              alt="menu strip"
              className="sm:w-[40px] sm:h-[40px] mobile:w-[30px] mobile:h-[30px]"
            />
          </button>
        </div>
      </div>
      {showSearch && (
        <div className="my-[20px] mx-[46px]  animate-slide-down">
          <div className="container mx-auto">
            <input
              type="text"
              className="w-full h-[20px] bg-[#C5C5C5] text-[#4C443F] font-josefin-sans text-[10px] px-4 py-2 rounded-lg"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderM;
