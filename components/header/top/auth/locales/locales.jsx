import React from "react";
import s from './locales.module.css';
import {useRouter} from "next/router";
import {lsToStore} from "../../../../../localStorage/initAction";
import {connect} from "react-redux";

const Locale = (props) => {
  const loc = useRouter()
  const {locale, locales, pathname, asPath} = loc

  // console.log(loc);
  const handleLocaleChange = (locIndex) => {
    const newLocale = locales[locIndex];
    console.log(newLocale);
    if(newLocale !== locale){
      loc.push(pathname, asPath, {locale: locales[locIndex]}).then(()=>{
        console.log('loc.push');
        document.cookie = `NEXT_LOCALE=${locales[locIndex]}; path=/`
      })

    }
  }

  return <div className={s.localeBox}>
    <ul>
      <li className={locale === "ua" ? s.active : ''} onClick={() => handleLocaleChange(0)}>UA</li>
      <li className={locale === "ru" ? s.active : ''} onClick={() => handleLocaleChange(1)}>RU</li>
    </ul>
  </div>
}

export const Locales = connect(null, {
  lsToStore,
})(Locale);