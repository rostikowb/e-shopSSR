import s from "./done.module.css"
import React from "react";
import Link from "next/link";

export const Done = () => {
  return <div className={s.doneWrapper}>
    <div className={s.doneBox}>
      <h1>Заказ принят :)</h1>
      <span>
        <Link href={'/'} as={'/'} shallow={true} passHref={true}><a href="">Вернутся на главную</a></Link>
      </span>
    </div>
  </div>
}