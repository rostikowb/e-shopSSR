import React from "react";
import s from "./delivery.module.css";
import {useRouter} from "next/router";

export const DeliveryGoodsPage = () => {
  const locale = useRouter().locale;
  return (
    <div className={s.deliveryBox}>
      {/*<h3>Оплата и доставка:</h3>*/}
      {locale === "ru" ? <span>Доставка в отделение&nbsp;<b>Новой Почты.</b></span> :
        <span>Доставка у відділення&nbsp;<b>Нової Пошти.</b></span>
      }
      <ul>
        <li>
          {locale === "ru" ? <span>Способ оплаты</span> : <span>Спосіб оплати</span>}
          {locale === "ru" ? <span>Стоимость доставки</span> : <span>Вартість доставки</span>}
        </li>
        {/*<li>*/}
        {/*  <span>Картой</span>*/}
        {/*  <span>*/}
        {/*    <b>от 40 грн.</b>*/}
        {/*  </span>*/}
        {/*</li>*/}
        <li>
          {locale === "ru" ? <span>Наложеным платежом</span> : <span>Післяплатою</span>}
          <span>
            {locale === "ru" ? <b>от 40 грн.</b> : <b>від 40 грн.</b>}
          </span>
        </li>
      </ul>
    </div>
  );
};
