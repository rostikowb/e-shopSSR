import React from "react";
import ss from "../info.module.css";
import s from "./contact.module.css"
import {useDispatch} from "react-redux";
import {CHANGE_FEEDBACK_MODAL} from "../../../../redux/types";
import {useRouter} from "next/router";

export const Contact = () => {
  const dispatch = useDispatch();
  const locale = useRouter().locale;

  return (
    <div className={ss.infoMain}>
      <h1 className={s.title}>{locale === "ru" ? "Как с нами связаться?" : "Як з нами зв'язатися?"}</h1>
      <div className={s.infoBox}>
        <div>
          <div>
            {locale === "ru" ? "Предпочтительный вариант:" : "Бажаний варіант:"}
          </div>
          <div className={ss.openModal} onClick={() => dispatch({type: CHANGE_FEEDBACK_MODAL})}
               title={locale === "ru" ? '*окно магической связи*' : "вікно магічного зв'язку"}>
            {locale === "ru" ? "ТЫК" : "ТИЦЬ"}
          </div>
        </div>
        <div>
          <div>
            {locale === "ru" ? "Официальная почта:" : "Офіційна пошта:"}
          </div>
          <div>
            vsivuha.online@gmail.com
          </div>
        </div>
        {/*<div>*/}
        {/*    <div>*/}
        {/*        Крайний случай (из-за спама звонками, имеет низкий приоритет):*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        +380681659602*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}