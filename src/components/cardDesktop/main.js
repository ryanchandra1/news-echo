import React from "react";
import Card from "./isi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function App() {
  return (
    <div className="flex flex-row justify-center items-center -space-x-[10px] space-y-[4px] w-full overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        itemClass="carousel-item ml-10"
      >
        <Card
          title="How to choose the right laptop for programming"
          text="Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs."
          srcImage="/assets/img/laptop-gambar.svg"
          alt="laptop"
        />
        <Card
          title="How to choose the right laptop for programming"
          text="Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs."
          srcImage="../assets/img/laptop-gambar.svg"
          alt="laptop"
        />
        <Card
          title="How to choose the right laptop for programming"
          text="Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs."
          srcImage="../assets/img/laptop-gambar.svg"
          alt="laptop"
        />
        <Card
          title="How to choose the right laptop for programming"
          text="Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs."
          srcImage="../assets/img/laptop-gambar.svg"
          alt="laptop"
        />
        <Card
          title="How to choose the right laptop for programming"
          text="Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs."
          srcImage="../assets/img/laptop-gambar.svg"
          alt="laptop"
        />
     
        
      </Carousel>
    </div>
  );
}

export default App;
