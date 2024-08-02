import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/news2";

function News1() {
  return (
    <div className="w-full h-full relative">
      <div className="mobile:mx-[10px] sm:mx-[40px] lg:mx-[50px]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default News1;
