import React, {useEffect, useRef, useState} from "react";
import s from "./imgs.module.css";
import {imgOnShowSet} from "../../../../redux/oneGoods/action";
import {connect} from "react-redux";
import SwiperCore, {Pagination, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {option} from "../../../../option";
import {useResizeSwipe} from "./useResizeSwiper";

SwiperCore.use([Pagination, Autoplay]);
const Img = (props) => {
  const ref = useRef(null);
  const widthR = useResizeSwipe(ref);
  const [width, setWidth] = useState(0)
  const [i, iSet] = useState(false)

  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  useEffect(() => {
    if (widthR) {
      i ? setWidth(widthR) : iSet(true);
    }
  }, [widthR])


  return (
    <div className={s.imgsBox} ref={ref}>
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        roundLengths={true}
        // width={width < height ? height : width}
        width={width}
        // height={100}
        autoplay={{delay: 2000}}
        pagination={{clickable: true}}
        userAgent={props.userAgent}
        url={option.DOMEN + props.thisUrl}

      >
        {props.data.img.map((item, index) => (
          <SwiperSlide key={item + 'imgMane' + index}>
            <picture style={{width: "100%"}}>
              <source
                style={{width: "100%"}}
                type="image/webp"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-400.webp`}
              />
              <source
                style={{width: "100%"}}
                type="image/webp"
                media="(max-width: 600px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-600.webp`}
              />
              <source
                style={{width: "100%"}}
                type="image/webp"
                // media="(max-width: 1024px)"
                srcSet={`${option.STATIC}/webp/${props.data._id}/${item}-1024.webp`}
              />
              <source
                style={{width: "100%"}}
                type="image/jpeg"
                media="(max-width: 400px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-400.jpeg`}
              />
              <source
                style={{width: "100%"}}
                type="image/jpeg"
                media="(max-width: 600px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-600.jpeg`}
              />
              <source
                style={{width: "100%"}}
                type="image/jpeg"
                media="(max-width: 1024px)"
                srcSet={`${option.STATIC}/jpeg/${props.data._id}/${item}-1024.jpeg`}
              />
              <img
                style={{width: "100%"}}
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
    img: state.oneGoods.img,
    userAgent: state.auth.userAgent,
    thisUrl: state.oneGoods.productUrl,
  };
};

export const Imgs = connect(mapStateToProps, {
  imgOnShowSet,
})(Img);
