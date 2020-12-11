import React from "react";
import s from "./info.module.css";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../../redux/modal/actions";
import Link from 'next/link';
import Select from "react-select";
import { setCupon } from "../../../../redux/checkout/actions";
import { option } from "../../../../option";

const CheckoutInf = (props) => {
  const arr = props.basketArr;
  const UD = props.userData;
  const defOpt = { value: 0, label: "Нет" };
  const dscnt = props.cupon;
  const cupon = UD?UD.cupon.map((item) => {
    return { value: item, label: item + "% скидки!" };
  }):null;

  // const [one, two, three] = props.data

  const allPrice = !!arr?Math.round(
    props.basketSum.sum - (props.basketSum.sum / 100) * dscnt
  ).toLocaleString("ru-RU"):null;
  console.log(UD);
  return (
    <div className={s.mainInfoBox}>
      <div className={s.infoInBox}>
        <div className={s.goodsBox}>
          <div className={s.cuponSelectBox}>
            <span className={s.cuponTitle}>Применить купон: </span>
            <Select
              id={"cuponSelect"}
              instanceId={"cuponSelect1"}
              defaultValue={defOpt}
              options={!!UD?[defOpt, ...cupon]:[defOpt]}
              onChange={(e) => !!UD?props.setCupon(e.value):null}
              name="cupon"
              className={s.cuponSelect}
            />
          </div>
          {arr?arr.map((g) => (
            <div key={"checkout" + g._id} className={s.goods}>
              <Link href={'/goods/[catalog]/[onegoods]'}
                    as={`/goods/${g["ctgrId"]}/${g._id}`}
                    prefetch={false}
                    passHref={true}
                    shallow={true}>
                <a className={s.titleMob}>{g.nm}</a>
              </Link>
              <div className={s.bottom}>
                <div className={s.left}>
                  <Link href={'/goods/[catalog]/[onegoods]'}
                        as={`/goods/${g["ctgrId"]}/${g._id}`}
                        prefetch={false}
                        passHref={true}
                        shallow={true}>
                    <a className={s.imgBox}>
                      <picture style={{ width: "100%" }}>
                        <source
                            className={s.imgOne}
                            type="image/webp"
                            srcSet={`${option.STATIC}/webp/${g._id}/${g.img[0]}-400.webp`}
                        />
                        <source
                            className={s.imgOne}
                            type="image/jpeg"
                            srcSet={`${option.STATIC}/jpeg/${g._id}/${g.img[0]}-400.jpeg`}
                        />
                        <img
                            className={s.imgOne}
                            src={`${option.STATIC}/jpeg/${g._id}/${g.img[0]}-400.jpeg`}
                            alt={`Фото ${g.nm}`}
                        />
                      </picture>
                    </a>
                  </Link>
                  <Link
                      href={'/goods/[catalog]/[onegoods]'}
                      as={`/goods/${g["ctgrId"]}/${g._id}`}
                      prefetch={false}
                      passHref={true}
                      shallow={true}
                  >
                    <a className={s.titlePc}>
                      {g.nm}
                    </a>
                  </Link>
                </div>
                <div className={s.right}>
                  <div className={s.count}>{g.countSale} шт.</div>
                  <div className={s.price}>
                    {Math.round(
                      g["rtlPrc"] - (g["rtlPrc"] / 100) * g["dscnt"]
                    ).toLocaleString("ru-RU")}{" "}
                    грн.
                  </div>
                </div>
              </div>
            </div>
          )):null}
        </div>
        <div className={s.infoBox}>
          <div className={s.suma}>
            <div className={s.sumaText}>Сума заказа:</div>
            <div className={s.sumaCount}>{allPrice} грн.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    basketArr: state.addLikesBasket.basketArr,
    basketSum: state.addLikesBasket.basketSum,
    cupon: state.checkout.cupon,
  };
};

export const CheckoutInfo = connect(mapStateToProps, {
  changeStateAuthModal,
  setCupon,
})(CheckoutInf);
