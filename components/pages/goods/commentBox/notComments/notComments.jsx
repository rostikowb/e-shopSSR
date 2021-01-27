import React from "react";
// import s from "./notComments.module.css";
import Link from 'next/link';
import {useRouter} from "next/router";

export const NotComments = (props) => {
  const isBuy = props.data;
  const isBuyS = isBuy === 0 || isBuy === 1 || isBuy === 2;
  const locale = useRouter().locale;
  // console.log("sssssss");
  return (
    <>
      <span>{locale === "ru" ? "Отзывов нет" : "Відгуків немає"} 😮</span>
      {isBuy === 3 ?
        locale === "ru" ? <span>Оставьте отзыв, и получите купон на скидку 5%! 😉</span> :
          <span>Залиште відгук, і отримаєте купон на знижку 5%! 😉</span>
        : isBuyS ?
          locale === "ru" ? <span>Заберите товар, оставьте отзыв, и получите купон на скидку 5%! 😉</span> :
            <span>Заберіть товар, залиште відгук, і отримаєте купон на знижку 5%! 😉</span>
          :
          locale === "ru" ? <span>Это ваш шанс! Станьте первым и получите скидку 5% на любой товар! 😉</span> :
            <span>Це ваш шанс! Станьте першим і отримаєте знижку 5% на будь-який товар! 😉</span>
      }
      <small>
        <Link href={`/`} as={`/`} passHref={true}
              shallow={true}><a>{locale === "ru" ? "подробней" : "докладніше"}</a></Link>
      </small>
    </>
  );
};
