import React from "react";
import ss from "../info.module.css";
import s from "./FAQ.module.css"
import {Acordeon} from "../../../dopComp/acardeon/acardeon";
import {useDispatch} from "react-redux";
import {CHANGE_FEEDBACK_MODAL} from "../../../../redux/types";
import Link from "next/link";

export const FAQ = ()=>{
    const dispatch = useDispatch();


    return(
        <div className={ss.infoMain+' '+s.faqMain}>
            <Acordeon
                info={{
                    title: 'Когда вы отправите заказ?',
                    content: <span className={s.que}>Заказ будет отправлен в течении двух календарных дней.</span>
                }}
            />
            <Acordeon
                info={{
                    title: `Даёте ли вы гарантию на ваш товар?`,
                    content: <span className={s.que}>Да</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Какая гарантия на товар?',
                    content: <span className={s.que}>Зависит от производителя рна обозначеная на странице товара.</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'От какого дня считаеться гарантия?',
                    content: <span className={s.que}>Со дня получение товара в пункте выдачи.</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Если я случайно неверно заказал товар, я могу его вернуть? За чей счет возврат?',
                    content: <span className={s.que}>Если еще не забрали с пункта выдачи то просто отправьте назад, отправка за счет магазина. Если забрали то у вас есть 2 недели согласно законам Украины, но в этом случаи доставка за ваш счет.</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Какие у вас есть способы оплаты?',
                    content: <span className={s.que}>Пока что только наложенный платёж.</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'У вас проводятся акции?',
                    content: <span className={s.que}>Да, подробней на странице <Link href={'/info/promotions'} as={'/info/promotions'} passHref shallow><a className={ss.openModal}>Акций.</a></Link></span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Можно ли заказать товар указанный на сайте, если его нет в наличии?',
                    content: <span className={s.que}>Напишите нам. Каждый случай расматривается отдельно</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Можно ли мне подьехать к вам в магазин и забрать товар без оформления заказа?',
                    content: <span className={s.que}>Пока что нет.</span>
                }}
            />
            <Acordeon
                info={{
                    title: 'Можно ли отменить заказ?',
                    content: <span className={s.que}>Да если мы еще не отправили. <span className={ss.openModal} onClick={()=>dispatch({type:CHANGE_FEEDBACK_MODAL})} >Свяжитесь с нами.</span> </span>
                }}
            />
            {/*<Acordeon*/}
            {/*    info={{*/}
            {/*        title: 'Что делать если после предоплаты я не получил товар?',*/}
            {/*        content: <span className={s.que}>Вы в любом случае получите свой товар или возврат денег в течении 10 дней.</span>*/}
            {/*    }}*/}
            {/*/>*/}
            <Acordeon
                info={{
                    title: 'Я сделал заказ, а у вас изменилась цена. Что делать?',
                    content: <span className={s.que}>Если вы нажали кнопку "оформить заказ" до изменения цены, то для вас она останется прежней.</span>
                }}
            />
        </div>
    )
}


