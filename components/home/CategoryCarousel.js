import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import css from "./category.module.scss";

const CategoryCarousel = () => {
  const [swiper, updateSwiper] = React.useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 8,
    spaceBetween: 4,
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Swiper getSwiper={updateSwiper} {...params}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 222, 119].map((d) => (
          <div className={css["carousel-item"]}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" />
            <h5>Unboxing cool</h5>
            <small>75,000 views</small>
          </div>
        ))}
      </Swiper>

      <div onClick={goPrev} className={css["arrow-prev"]}>
        {"<"}
      </div>
      <div onClick={goNext} className={css["arrow-next"]}>
        {">"}
      </div>
    </div>
  );
};
export default CategoryCarousel;
