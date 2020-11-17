import s from './shortHaract.module.css'
import React from 'react';

export const ShortHaractBox = props => {
  // console.log(props);
  let i = 0;
  return (
    <ul className={s.shortHaractBox}>
      {props.param?.map(item => {
        i++;
        if (i <= 8) {
          return (
            <li key={Math.random()}>
              <span>{item.name}: </span>
              <span> {item.value}</span>
            </li>
          )
        }
      })}
    </ul>
  );
};