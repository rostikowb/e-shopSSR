import React from 'react';
import Link from 'next/link'
import s from './info.module.css'
import ss from "../../pages/info/info.module.css";
import {useRouter} from "next/router";

export const InfoContent = () => {
  const locale = useRouter().locale
    return (
        <div className={s.menuInfoBox}>
            <Link href={'/info/promotions'} as={'/info/promotions'} passHref shallow><a>{locale === 'ru'? 'Акции' : 'Акції'}</a></Link>
            <Link href={'/info/contact'} as={'/info/contact'} passHref shallow><a>{locale === 'ru'? 'Контакты' : 'Контакти'}</a></Link>
            <Link href={'/info/return'} as={'/info/return'} passHref shallow><a>{locale === 'ru'? 'Возврат и гарантия' : 'Повернення та гарантія'}</a></Link>
            <Link href={'/info/FAQ'} as={'/info/FAQ'} passHref shallow><a>{locale === 'ru'? 'Ответы на вопросы' : 'Відповіді на питання'}</a></Link>
            {/*<Link href={'/info/aboutUs'} as={'/info/aboutUs'} passHref shallow><a>О нас</a></Link>*/}
            <Link href={'/info/licagr'} as={'/info/licagr'} passHref shallow><a>{locale === 'ru'? 'Условия использования' : 'Умови використання'}</a></Link>
        </div>
    )
};