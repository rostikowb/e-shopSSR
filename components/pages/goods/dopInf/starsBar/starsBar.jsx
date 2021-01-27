import React from "react";
import s from "./starsBar.module.css";
import {Rating} from "@material-ui/lab/es";
import Link from 'next/link';
import {useRouter} from "next/router";

export const StarsBar = (props) => {
  const data = props.data;
  const commArr = data?.comments?.length || 0;
  const rating = data?.rating || 0;
  const locale = useRouter().locale;

  return (
    <div className={s.ratingBox}>
      <span className={s.ratingTitle}>{locale === "ru" ? "Оценка:" : "Оцінка"}</span>
      <Rating
        name="read-only"
        value={Math.ceil(rating)}
        size={"large"}
        readOnly
      />
      {commArr > 3 ? (
        <NavLink to={`#comments`}> - {commArr} {locale === "ru" ? " оценивших" : " оцінивших"}</NavLink>
      ) : null}
    </div>
  );
};
