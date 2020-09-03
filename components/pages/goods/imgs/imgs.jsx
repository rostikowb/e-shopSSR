import React from "react";
import s from "./imgs.module.css";
import { imgOnShowSet } from "../../../../redux/oneGoods/action";
import { connect } from "react-redux";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { option } from "../../../../option";

SwiperCore.use([Pagination, Autoplay]);
const Img = (props) => {
  return (
    <div className={s.imgsBox}>
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        roundLengths={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {props.data.img.map((item) => (
          <SwiperSlide>
            <picture style={{ width: "100%" }}>
              <source
                style={{ width: "100%" }}
                type="image/webp"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-400.webp`}
              />
              <source
                style={{ width: "100%" }}
                type="image/webp"
                media="(max-width: 600px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-600.webp`}
              />
              <source
                style={{ width: "100%" }}
                type="image/webp"
                media="(max-width: 1024px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-1024.webp`}
              />
              <source
                style={{ width: "100%" }}
                type="image/webp"
                media="(max-width: 1600px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-1600.webp`}
              />
              <source
                style={{ width: "100%" }}
                type="image/webp"
                media="(min-width: 1600px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-1600.webp`}
              />
              <source
                style={{ width: "100%" }}
                type="image/jpeg"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-400.jpeg`}
              />
              <source
                style={{ width: "100%" }}
                type="image/jpeg"
                media="(max-width: 600px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-600.jpeg`}
              />
              <source
                style={{ width: "100%" }}
                type="image/jpeg"
                media="(max-width: 1024px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-1024.jpeg`}
              />
              <source
                style={{ width: "100%" }}
                type="image/jpeg"
                media="(max-width: 1600px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-1600.jpeg`}
              />
              <source
                style={{ width: "100%" }}
                type="image/jpeg"
                media="(min-width: 1600px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-1600.jpeg`}
              />
              <img
                style={{ width: "100%" }}
                src={`${option.STATIC}/jpeg/${props.data._id}/${item}-1024.jpeg`}
                alt=""
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    img: state.oneGoods.imgOnShow,
  };
};

export const Imgs = connect(mapStateToProps, {
  imgOnShowSet,
})(Img);
