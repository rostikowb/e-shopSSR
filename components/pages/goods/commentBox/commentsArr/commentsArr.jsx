import React from "react";
import s from "./commentsArr.module.css";
import {useRouter} from "next/router";

export const CommentsArr = (props) => {
  const comments = props.data;
  const locale = useRouter().locale;
  return (
    <div className={s.commentsArr}>
      {!!comments
        ? comments.reverse().map((item) => (
          <div
            key={item._id + "oneComm"}
            className={`${s.comment} ${item.posi ? s.posi : s.nega}`}
          >
              <span className={s.nameData}>
                <div className={s.name}>
                  <span>Имя: </span>
                  <span>{item.name}</span>
                </div>
                <span>
                  {new Date(item.date).toLocaleString("ru-RU", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
              </span>
            <span className={s.msg}>{item.content.msg}</span>
            <span className={s.plus}>
                <span>{locale === "ru" ? "Понравилось:" : "Сподобалось"} </span>
                <span>{item.content.plus}</span>
              </span>
            <span className={s.minus}>
                <span>{locale === "ru" ? "Не понравилось:" : "Не сподобалось"} </span>
                <span>{item.content.minus}</span>
              </span>
          </div>
        ))
        : null}
    </div>
  );
};
