import React from "react";
// import s from "./notComments.module.css";
import Link from 'next/link';

export const NotComments = (props) => {
  const isBuy = props.data;
  const isBuyS = isBuy === 0 || isBuy === 1 || isBuy === 2;
  // console.log("sssssss");
  return (
    <>
      <span>Отзывов нет 😮</span>
      {isBuy === 3 ? (
        <span>Оставьте отзыв, и получите купон на скидку 5%! 😉</span>
      ) : isBuyS ? (
        <span>
          Заберите товар, оставьте отзыв, и получите купон на скидку 5%! 😉
        </span>
      ) : (
        <span>
          Это ваш шанс! Станьте первым и получите скидку 5% на любой товар! 😉
        </span>
      )}
      <small>
        <Link href={`/`} as={`/`} passHref={true} shallow={true}><a>подробней</a></Link>
      </small>
    </>
  );
};
