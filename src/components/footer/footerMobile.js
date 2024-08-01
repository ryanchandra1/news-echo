import React from "react";
import Img from "../../elements/img";

function FooterMobile() {
  return (
    <footer className="w-full h-full my-[50px]">
      <Img
        src="/assets/img/logoecho-black.svg"
        alt="logo echo"
        className="w-[210px] h-[66px] -translate-x-[40px]"
      />
    <div className="UNTUK FLEX_COL flex flex-col">
        <div className="flex flex-row relative justify-between">
          <div className="SUBSCRIBE flex flex-col space-y-[9px]">
            <div>
              <input
                type="text"
                placeholder="Enter your email address"
                className="mobile:w-[126px] mobile:h-[15px] sm:w-[300px] sm:h-[40px] pl-[5px] sm:pl-[10px] mobile:text-[4px] sm:text-[13px] font-josefin-sans border border-[#231F20] rounded-sm hover:border-2"
              />
              <button className="mobile:w-[29px] mobile:h-[10px] sm:w-[50px] sm:h-[25px] bg-[#B69B78] mobile:text-[4px] sm:text-[7px] font-josefin-sans rounded-sm mobile:-translate-x-[35px] sm:-translate-x-[60px] text-[#FCFCFC] hover:opacity-80">
                Subscribe
              </button>
            </div>

            <div className="MEDIA SOSIAL flex flex-row mobile:space-x-[5px] sm:space-x-[15px]">
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-shoope.svg"
                  alt="logo shoope"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-tokopedia.svg"
                  alt="logo tokopedia"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-lazada.svg"
                  alt="logo lazada"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-tiktok.svg"
                  alt="logo tiktok"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-instagram.svg"
                  alt="logo instagram"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-twitter.svg"
                  alt="logo twitter"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
            </div>
          </div>
          <div className="FIND US flex flex-col pt-1 relative mobile:-translate-x-2 sm:-translate-x-[30px]">
            <text className="font-domaine mobiletext-[10px] sm:text-[30px]">Find Us</text>
            <text className="font-josefin-sans font-bold mobile:text-[6px] sm:text-[15px]">
              No. Phone:
            </text>
            <text className="font-josefin-sans mobile:text-[6px] sm:text-[15px]">
              +62 821 3747 6157
            </text>
            <text className="font-josefin-sans font-bold mobile:text-[6px] sm:text-[15px]">
              Email
            </text>
            <text className="font-josefin-sans mobile:text-[6px] sm:text-[15px]">
              aal@arsari.co.id
            </text>
          </div>
        </div>

        <div className="LOCATION flex flex-row mt-[10px] justify-between">
          <div className="flex flex-col space-y-[5px] w-full mobile:max-w-[126px] sm:max-w-[300px]">
            <text className="font-domaine mobile:text-[10px] sm:text-[30px]">Location</text>
            <text className="font-josefin-sans font-semibold mobile:mobile:text-[6px] sm:text-[15px]">
              Jakarta Head Office:
            </text>
            <text className="font-josefin-sans mobile:text-[6px] sm:text-[15px]">
              Sahid Sudirman Centre 50th floor, Jl Jenderal Sudirman No 86,
              Jakarta, Indonesia 10220.
            </text>
            <text className="font-josefin-sans font-bold mobile:text-[6px] sm:text-[15px]">
              Surabaya Branch Office:
            </text>
            <text className="font-josefin-sans mobile:text-[6px] sm:text-[15px]">
              Jl. Ciliwung No. 1 Darmo, Wonokromo, Kota Surabaya,Indonesia
              60241.
            </text>
          </div>
          <div className="ECHO CARE flex flex-col justify-start items-start space-y-[5px]">
            <text className="font-domaine mobile:text-[10px] sm:text-[30px]">ECHO Care</text>
            <button className="font-josefin-sans font-bold mobile:text-[6px] sm:text-[15px]">
              FAQ
            </button>
            <button className="font-josefin-sans font-bold mobile:text-[6px] sm:text-[15px]">
              Privacy Policy
            </button>
            <text className="font-domaine mobile:text-[10px] sm:text-[30px]">Payment</text>
            <div className="relative flex flex-row space-x-[5px]">
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-amex.svg"
                  alt="logo amex"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-mastercard.svg"
                  alt="logo mastercard"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
              <button className="border border-black mobile:w-[15px] mobile:h-[15px] sm:w-[30px] sm:h-[30px]  rounded-sm justify-center items-center flex hover:border-2">
                <Img
                  src="assets/img/logo-visa.svg"
                  alt="logo visa"
                  className="mobile:h-[9px] mobile:w-[9px] sm:h-[15px] sm:w-[15px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
