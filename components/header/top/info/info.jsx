import React from "react";
import Link from 'next/link'
import s from "./info.module.css";
import {useRouter} from "next/router";
export const Info = () => {
  const locale = useRouter().locale;
  return (
    <ul className={s.infoBox}>
      <li>
        <Link href={'/info/contact'} as={'/info/contact'} passHref shallow><a>{locale === 'ru' ? 'Контакты' : 'Контакти'}</a></Link>
      </li>
      <li>
        <Link href={'/info/FAQ'} as={'/info/FAQ'} passHref shallow><a>{locale === 'ru' ? 'Ответы на вопросы' : 'Відповіді на питання'}</a></Link>
      </li>
      <li>
        <Link href={'/info'} as={'/info'} passHref shallow><a>{locale === 'ru' ? 'Полезная информация' : 'Корисна інформація'}</a></Link>
      </li>
    </ul>
  );
};
