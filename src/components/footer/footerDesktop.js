import React from "react";
import Img from "../../elements/img";

function Footer() {
  return (
    <footer className="w-full h-full relative my-[50px]">
        <Img
        src="/assets/img/logoecho-black.svg"
        alt="logo echo"
        className="w-[210px] h-[66px] 2xl:w-[300px] 2xl:h-[100px]"
      />
      <div className="relative flex flex-row justify-between  space-x-[20px]">
        {/* KIRI logo dll. */}
        <div className="flex flex-col">
          <text className="font-domaine text-[25px] 2xl:text-[35px]">
            Stay Up to Date with All News <br />
            and Exclusive Offers
          </text>
          <div className="flex flex-row space-x-[20px] items-center max-w-[450px] 2xl:max-w-[550px]">
            <input
              type="text"
              className="w-full 2xl:max-w-[550px] pr-[100px] border border-[#7D716A] h-[60px] py-3 pl-5 hover:border-2 text-[14px] rounded-lg"
              placeholder="Enter your email address"
            />
            <button className="text-[#FCFCFC] bg-[#B69B78] border border-[#B69B78] hover:bg-opacity-80 rounded-md w-[120px] h-[45px] text-[16px] items-center flex justify-center">
              Subscribe
            </button>
          </div>

          <div className="flex flex-row space-x-[15px] mt-[20px] ">
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-shoope.svg"
                alt="logo shoope"
                className="w-[17px] h-[17px]"
              />
            </button>
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-tokopedia.svg"
                alt="logo tokopedia"
                className="w-[17px] h-[17px]"
              />
            </button>
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-lazada.svg"
                alt="logo lazada"
                className="w-[17px] h-[17px]"
              />
            </button>
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-tiktok.svg"
                alt="logo tiktok"
                className="w-[17px] h-[17px]"
              />
            </button>
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-instagram.svg"
                alt="logo instagram"
                className="w-[17px] h-[17px]"
              />
            </button>
            <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
              <Img
                src="/assets/img/logo-twitter.svg"
                alt="logo twitter"
                className="w-[17px] h-[17px]"
              />
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col justify-between max-w-[200px]">
          <text className="font-domaine text-[20px]">Location</text>
          <div className="flex flex-col">
            <text className="font-josefin-sans text-[16px] font-semibold">
              jakarta Head Office:
            </text>
            <text className="font-josefin-sans text-[16px] font-light text-left">
              Sahid Sudirman Centre 50th floor, Jl Jenderal Sudirman No 86,
              Jakarta, Indonesia 10220.
            </text>
          </div>
          <div className="flex flex-col">
            <text className="font-josefin-sans text-[16px] font-semibold">
              Surabaya Branch Office:
            </text>
            <text className="font-josefin-sans text-[16px] font-light text-lef">
              Jl. Ciliwung No. 1 Darmo, Wonokromo, Kota Surabaya,Indonesia
              60241.
            </text>
          </div>
        </div>

        {/* FIND US */}
        <div className="flex flex-col justify-between">
          <text className="font-domaine text-[20px]">Find us</text>
          <div className="flex flex-col">
            <text className="font-josefin-sans text-[16px] font-semibold">
              No. Phone:
            </text>
            <text className="font-josefin-sans text-[16px] font-light text-left">
              +62 821 3747 6157
            </text>
          </div>
          <div className="flex flex-col">
            <text className="font-josefin-sans text-[16px] font-semibold">
              Email:
            </text>
            <text className="font-josefin-sans text-[16px] font-light ">
              aal@arsari.co.id
            </text>
          </div>
        </div>

        {/* ECHO CARE */}
        <div className="flex flex-col justify-between">
          <text className="font-domaine text-[20px]">Echo Care</text>
          <div className="flex flex-col">
            <text className="font-josefin-sans text-[14px] font-semibold">
              FAQ
            </text>
            <text className="font-josefin-sans text-[14px] font-semibold">
              Privacy Policy
            </text>
          </div>
          <div className="flex flex-col">
            <text className="font-domaine text-[18px]">Payment</text>
            <div className="flex flex-row space-x-[15px] mt-[20px]">
              <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
                <Img
                  src="/assets/img/logo-amex.svg"
                  alt="logo amex"
                  className="w-[17px] h-[17px]"
                />
              </button>
              <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
                <Img
                  src="/assets/img/logo-mastercard.svg"
                  alt="logo mastercard"
                  className="w-[17px] h-[17px]"
                />
              </button>
              <button className="border border-[#7D716A] hover:border-2 rounded-lg w-[35px] h-[35px] flex justify-center items-center">
                <Img
                  src="/assets/img/logo-visa.svg"
                  alt="logo visa"
                  className="w-[17px] h-[17px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
