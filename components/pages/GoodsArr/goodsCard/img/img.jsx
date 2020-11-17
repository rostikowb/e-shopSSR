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
// import {AllGoodsR} from "../../../../../redux/goodsArr/AllGoodsReducer";

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
      width: "100%"
  };
  let styleImg2 = {
    display: "",
      width: "100%"
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
        <Link href={'/goods/[catalog]/[onegoods]'} as={`/goods/${d["ctgrId"]}/${link}`} prefetch={false} shallow={true} passHref={true}>
          <a aria-label={'Перейти на страницу товара '+d.nm} onClick={() => (dvnld ? loadOneGoods() : null)} className={s.imgBox}>
              {/*<div >*/}
                  <Swiper
                    className={s.mobileBox}
                      slidesPerView={1}
                      roundLengths={true}
                      pagination={{ clickable: true }}
                      width={props.width}
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
                                  alt={`Первое фото ${d.nm}`}
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
                                      alt={`Второе фото ${d.nm}`}
                                  />
                              </picture>
                          </SwiperSlide>
                      ) : null}
                  </Swiper>
              {/*</div>*/}
              <div className={s.deckstopBox}>
                  <picture className={s.imgOne} style={styleImg1}>
                      <source
                          type="image/webp"
                          srcSet={`${option.STATIC}/webp/${d._id}/${d.img[0]}-400.webp`}
                      />
                      <source
                          type="image/jpeg"
                          srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                      />
                      <img
                          src={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
                          alt={`Первое фото ${d.nm}`}
                      />
                  </picture>
                  {d.img[1] ? (<picture className={s.imgTwo} style={styleImg2}>
                      <source

                          type="image/webp"
                          srcSet={`${option.STATIC}/webp/${d._id}/${d.img[1]}-400.webp`}
                      />
                      <source
                          type="image/jpeg"
                          srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                      />
                      <img
                          src={`${option.STATIC}/jpeg/${d._id}/${d.img[1]}-400.jpeg`}
                          alt={`Второе фото ${d.nm}`}
                          // https://vsivuha.online/img/webp/5f4268ccac31fda09820d762/0801ccc71a5f750085e8d63da7a14fd5-300.webp
                      />
                  </picture>):null}
              </div>
          </a>
      </Link>
  );
};

const mapStateToProps = (state) => {
    return {
        width: state.AllGoodsR.width,
    };
};

export const Img = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
  changeStateLikeModal,
})(Im);
