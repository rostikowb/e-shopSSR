import React from "react";
import s from "./img.module.css";
import Link from 'next/link'
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../../redux/oneGoods/action";
import { setCatalog } from "../../../../../redux/goodsArr/actions";
import { changeStateLikeModal } from "../../../../../redux/modal/actions";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { option } from "../../../../../option";

const sliderStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
};

SwiperCore.use([Pagination]);
const Im = (props) => {
  let d = props.data.data;
  let link = props.data.link;
  let dvnld = props.data.download;

  let styleImg1 = {
    display: "",
  };
  let styleImg2 = {
    display: "",
  };
  if (d?.img.length < 2) {
    styleImg1.display = "block";
    styleImg2.display = "none";
  }

  const loadOneGoods = () => {
    if (d._id !== props.loc) {
      props.setCatalog(d["ctgrId"]);
      props.fetchOneGoods(d["_id"], false, d);
    }
    props.changeStateLikeModal();
  };

  return (
    <div onClick={() => (dvnld ? loadOneGoods() : null)}>
      <Link href={`/${d["ctgrId"]}/${link}`}>
          <div className={s.imgBox}>
              <div className={s.mobileBox}>
                  <Swiper
                      slidesPerView={1}
                      roundLengths={true}
                      pagination={{ clickable: true }}
                  >
                      <SwiperSlide style={sliderStyle}>
                          <picture style={{ width: "100%" }}>
                              <source
                                  className={s.img}
                                  type="image/webp"
                                  srcSet={`${option.STATIC}/webp/${d._id}/${d.img[0]}-400.webp`}
                              />
                              <source
                                  style={{ width: "100%" }}
                                  type="image/jpeg"
                                  srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                              />
                              <img
                                  className={s.img}
                                  src={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                                  alt=""
                              />
                          </picture>
                      </SwiperSlide>
                      {d.img[1] ? (
                          <SwiperSlide style={sliderStyle}>
                              <picture style={{ width: "100%" }}>
                                  <source
                                      className={s.img}
                                      type="image/webp"
                                      srcSet={`${option.STATIC}/webp/${d._id}/${d.img[1]}-400.webp`}
                                  />
                                  <source
                                      className={s.img}
                                      type="image/jpeg"
                                      srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                                  />
                                  <img
                                      className={s.img}
                                      src={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                                      alt=""
                                  />
                              </picture>
                              <img style={{ width: "100%" }} src={d.img[1]} />
                          </SwiperSlide>
                      ) : null}
                  </Swiper>
              </div>
              <div className={s.deckstopBox}>
                  <picture style={{ width: "100%" }}>
                      <source
                          className={s.imgOne}
                          type="image/webp"
                          srcSet={`${option.STATIC}/webp/${d._id}/${d.img[0]}-400.webp`}
                      />
                      <source
                          className={s.imgOne}
                          type="image/jpeg"
                          srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                      />
                      <img
                          className={s.imgOne}
                          src={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                          alt=""
                      />
                  </picture>
                  <picture style={{ width: "100%" }}>
                      <source
                          className={s.imgTwo}
                          type="image/webp"
                          srcSet={`${option.STATIC}/webp/${d._id}/${d.img[1]}-400.webp`}
                      />
                      <source
                          className={s.imgTwo}
                          type="image/jpeg"
                          srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                      />
                      <img
                          className={s.imgTwo}
                          src={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                          alt=""
                      />
                  </picture>
              </div>
          </div>
      </Link>
    </div>
  );
};
export const Img = connect(null, {
  fetchOneGoods,
  setCatalog,
  changeStateLikeModal,
})(Im);
