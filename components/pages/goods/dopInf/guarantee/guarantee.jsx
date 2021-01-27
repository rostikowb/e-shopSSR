import React from "react";
import s from "./guarantee.module.css";
import {useRouter} from "next/router";

export const GuaranteeGoodPage = () => {
  const locale = useRouter().locale;
  return (
    <div className={s.guaranteeBox}>
      {/*<span>Гарантия и возврат</span>*/}
      <div>
        {locale === "ru" ? <span>Возврат возможен в течении <b>14 дней</b> с дня получения товара</span> :
          <span>Повернення можливе протягом <b>14 днів</b> з дня отримання товару</span>
        }
        <span>
          {locale === "ru" ? <b>Гарантия от 14 дней</b>:<b>Гарантия від 14 днів</b>}
        </span>
      </div>
    </div>
  );
};
