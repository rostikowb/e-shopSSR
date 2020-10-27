import React from 'react';
import Link from 'next/link'
import s from './info.module.css'
import ss from "../../pages/info/info.module.css";

export const InfoContent = () => {
    return (
        <div className={s.menuInfoBox}>
            <Link href={'/info/promotions'} as={'/info/promotions'} passHref shallow><a>Акции</a></Link>
            <Link href={'/info/contact'} as={'/info/contact'} passHref shallow><a>Контакты</a></Link>
            <Link href={'/info/return'} as={'/info/return'} passHref shallow><a>Гарантия и возврат</a></Link>
            <Link href={'/info/FAQ'} as={'/info/FAQ'} passHref shallow><a>Ответы на вопросы</a></Link>
            {/*<Link href={'/info/aboutUs'} as={'/info/aboutUs'} passHref shallow><a>О нас</a></Link>*/}
            <Link href={'/info/licagr'} as={'/info/licagr'} passHref shallow><a>Условия использования</a></Link>
        </div>
    )
};