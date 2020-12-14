import React from "react";
import Link from "next/link";
import s from "./info.module.css"

export const Info = () => {

  return (
    <div className={s.infoMain}>
      <ul className={s.infoPageMain}>
        <li>
          <Link href={"/info/contact"} as={"/info/contact"} passHref={true} shallow={true}>
            <a href="">Контакты</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/FAQ"} as={"/info/FAQ"} passHref={true} shallow={true}>
            <a href="">Ответы на частые вопросы</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/licagr"} as={"/info/licagr"} passHref={true} shallow={true}>
            <a href="">Условия использования</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/promotion"} as={"/info/promotion"} passHref={true} shallow={true}>
            <a href="">Акции</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/return"} as={"/info/return"} passHref={true} shallow={true}>
            <a href="">Возврат товара</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}