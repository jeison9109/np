import React, { useState } from "react";
import hoteles from "../../images/hotel.jpg";
import universidad from "../../images/school.jpg";
import restaurante from "../../images/restaurant.jpg";
import dessert from "../../images/dessert.jpg";
import hmr from "../../images/cafeteria.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: hoteles,
    caption: "HOTELES",
  },
  {
    src: universidad,
    caption: "UNIVERSIDAD Y TRANSPORTE",
  },
  {
    src: restaurante,
    caption: "RESTAURANTES",
  },

  {
    src: dessert,
    caption: "DESSERT Y SAVOURY MANUFACTURES",
  },
  {
    src: hmr,
    caption: "B&I HMR",
  },
];

const Carouseles = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.caption}
          width="100%"
          height="auto"
          captionHeader={item.caption}
        />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
export default Carouseles;
