import React from "react";
import Link from 'next/link'
import s from "./info.module.css";
export const Info = () => {
  return (
    <ul className={s.infoBox}>
      <li>
        <Link href={'/info/contact'} as={'/info/contact'} passHref shallow><a>Контакты</a></Link>
      </li>
      <li>
        <Link href={'/info/FAQ'} as={'/info/FAQ'} passHref shallow><a>Ответы на вопросы</a></Link>
      </li>
      <li>
        <Link href={'/info/return'} as={'/info/return'} passHref shallow><a>Гарантия и возврат</a></Link>
      </li>
    </ul>
  );
};
