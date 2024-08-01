import React from "react";
import Img from "../../elements/img";

function Header() {
  return (
    <header className="w-full h-full relative">
      <div className="flex flex-row justify-between items-center my-[100px]">
        <div className="LOGO">
          <Img
            src="/assets/img/logoecho-black.svg"
            alt="logo echo"
            className="w-full max-w-[248px] h-full max-h-[90px] 2xl:max-w-[300px] 2xl:max-h-[130px]"
          />
        </div>
        <div className="MENU">
          <ul className="flex flex-row items-center xl:text-[25px] lg:text-[20px] xl:space-x-[50px] lg:space-x-[30px] 2xl:text-[35px]">
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                Home
              </button>
            </li>
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                Catalog
              </button>
            </li>
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                Product
              </button>
            </li>
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                About
              </button>
            </li>
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                News
              </button>
            </li>
            <li>
              <button className="font-domaine  transition-transform duration-200 ease-in-out hover:-translate-y-1">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="ICON KANAN flex flex-row space-x-[10px]">
          <button className="hover:scale-110">
            <Img
              src="/assets/img/search-black.svg"
              alt="search"
              className="w-[32px] h-[32px] 2xl:w-[50px] 2xl:h-[50px]"
            />
          </button>
          <button className="hover:scale-110">
            <Img
              src="/assets/img/like-black.svg"
              alt="like"
              className="w-[32px] h-[32px] 2xl:w-[50px] 2xl:h-[50px]"
            />
          </button>
          <button className="hover:scale-110">
            <Img
              src="/assets/img/cart-black.svg"
              alt="cart"
              className="w-[32px] h-[32px] 2xl:w-[50px] 2xl:h-[50px] hover:"
            />
          </button>
          <button className="hover:scale-110">
            <Img
              src="/assets/img/profile-black.svg"
              alt="profile"
              className="w-[32px] h-[32px] 2xl:w-[50px] 2xl:h-[50px]"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
