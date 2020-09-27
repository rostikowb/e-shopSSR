import React from "react";
import Link from 'next/link'
import s from "./info.module.css";
export const Info = () => {
  return (
    <ul className={s.infoBox}>
      <li>
        {/*<Link aria-label="Контакты" href="/contacts">*/}
          {/*Контакты*/}
        {/*</Link>*/}
      </li>
      <li>
        {/*<Link aria-label="QA" href="/qa">*/}
          {/*Ответы на частые вопросы*/}
        {/*</Link>*/}
      </li>
    </ul>
  );
};
