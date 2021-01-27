import s from "./done.module.css"
import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export const Done = () => {
  const locale = useRouter().locale;
  return <div className={s.doneWrapper}>
    <div className={s.doneBox}>
      <h1>{locale === "ru" ? "Заказ принят" : "Замовлення прийнято"} :)</h1>
      <span>
        <Link href={'/'} as={'/'} shallow={true} passHref={true}><a
          href="">{locale === "ru" ? "Вернутся на главную" : "Повернутися на головну"}</a></Link>
      </span>
    </div>
  </div>
}