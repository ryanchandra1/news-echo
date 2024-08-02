import React from "react";
import Isi from "./isi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./card.css";

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

function Card() {
  return (
    <div className="flex overflow-x-hidden">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        arrows={false}
        dotListClass="custom-dot-list"
        renderDotsOutside={true}
      >
      <Isi/> 
      <Isi/> 
      <Isi/> 
      <Isi/> 
      <Isi/> 
        
      
      </Carousel>
    </div>
  );
}

export default Card;
