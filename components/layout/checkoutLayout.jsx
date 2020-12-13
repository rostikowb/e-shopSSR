import React from "react";
import s from "../pages/checkout/checkout.module.css"
import Link from "next/link";

export const CheckoutLayout = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerWrapper}>
          <Link href={`/`} as={`/`} passHref><a>Вернутся на главную</a></Link>
          <Link href={`/info/contact`} as={`/info/contact`} passHref><a>Контакты</a></Link>
        </div>
      </header>
      {children}
    </>
  );
};