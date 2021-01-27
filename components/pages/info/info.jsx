import React from "react";
import Link from "next/link";
import s from "./info.module.css"
import {useRouter} from "next/router";


export const Info = () => {
  const locale = useRouter().locale
  return (
    <div className={s.infoMain}>
      <ul className={s.infoPageMain}>
        <li>
          <Link href={"/info/contact"} as={"/info/contact"} passHref={true} shallow={true}>
            <a href="">{locale === 'ru'? 'Контакты' : 'Контакти'}</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/FAQ"} as={"/info/FAQ"} passHref={true} shallow={true}>
            <a href="">{locale === 'ru'? 'Ответы на вопросы' : 'Відповіді на питання'}</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/licagr"} as={"/info/licagr"} passHref={true} shallow={true}>
            <a href="">{locale === 'ru'? 'Условия использования' : 'Умови використання'}</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/promotion"} as={"/info/promotion"} passHref={true} shallow={true}>
            <a href="">{locale === 'ru'? 'Акции' : 'Акції'}</a>
          </Link>
        </li>
        <li>
          <Link href={"/info/return"} as={"/info/return"} passHref={true} shallow={true}>
            <a href="">{locale === 'ru'? 'Возврат и гарантия' : 'Повернення та гарантія'}</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}