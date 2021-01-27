import React from "react";
import ss from "../info.module.css";
import s from "./FAQ.module.css"
import {Acordeon} from "../../../dopComp/acardeon/acardeon";
import {useDispatch} from "react-redux";
import {CHANGE_FEEDBACK_MODAL} from "../../../../redux/types";
import Link from "next/link";
import {useRouter} from "next/router";

export const FAQ = ()=>{
    const dispatch = useDispatch();
    const locale = useRouter().locale;


    return(
        <div className={ss.infoMain+' '+s.faqMain}>
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Когда вы отправите заказ?': 'Коли ви відправите замовлення?',
                    content: <span className={s.que}>{locale === "ru" ? "Заказ будет отправлен в течении одного-двух календарных дней." : "Замовлення буде відправлений протягом одного-двох календарних днів."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? `Даёте ли вы гарантию на ваш товар?`: 'Чи даєте ви гарантію на ваш товар?',
                    content: <span className={s.que}>{locale === "ru" ? "Да" : "Так"}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Какая гарантия на товар?' : "Яка гарантія на товар?",
                    content: <span className={s.que}>{locale === "ru" ? "Зависит от производителя, она обозначенная на странице товара." : "Залежить від виробника, вона позначена на сторінці товару."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'От какого дня считается гарантия?' : "Від якого дня вважається гарантія?",
                    content: <span className={s.que}>{locale === "ru" ? "Со дня получение товара в пункте выдачи." : "З дня отримання товару в пункті видачі."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Если я случайно неверно заказал товар, я могу его вернуть? За чей счет возврат?' : "Якщо я випадково невірно замовив товар, я можу його повернути? За чий рахунок повернення?",
                    content: <span className={s.que}>{locale === "ru" ? "Если еще не забрали с пункта выдачи то просто отправьте назад, отправка за счет магазина. Если забрали то у вас есть 2 недели согласно законам Украины, но в этом случаи доставка за ваш счет." : "Якщо ще не забрали з пункту видачі то просто відправте назад, відправка за рахунок магазину. Якщо забрали то у вас є 2 тижні згідно із законами України, але в цьому випадки доставка за ваш рахунок."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Какие у вас есть способы оплаты?' : "Які у вас є способи оплати?",
                    content: <span className={s.que}>{locale === "ru" ? "Пока что только наложенный платёж." : "Поки що тільки післяплата."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'У вас проводятся акции?' : "У вас проводяться акції?",
                    content: <span className={s.que}>{locale === "ru" ? "Да, подробней на странице" : "Так, детальніше на сторінці"} <Link href={'/info/promotions'} as={'/info/promotions'} passHref shallow><a className={ss.openModal}>{locale === "ru" ? "Акций":"Акцій"}.</a></Link></span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Можно ли заказать товар указанный на сайте, если его нет в наличии?' : "Чи можна замовити товар вказаний на сайті, якщо його немає в наявності?",
                    content: <span className={s.que}>{locale === "ru" ? "Напишите нам и мы посмотрим что можно сделать." : "Напишіть нам і ми подивимося що можна зробити."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Можно ли мне подъехать к вам в магазин и забрать товар без оформления заказа?' : "Чи можна мені під'їхати до вас в магазин і забрати товар без оформлення замовлення?",
                    content: <span className={s.que}>{locale === "ru" ? "Пока что нет." : "Поки що ні."}</span>
                }}
            />
            <Acordeon
                info={{
                    title: locale === "ru" ? 'Можно ли отменить заказ?' : "Чи можна скасувати замовлення?",
                    content: <span className={s.que}>{locale === "ru" ? "Да если мы еще не отправили. Напишите или позвоните нам." : "Так якщо ми ще не відправили. Напишіть або зателефонуйте нам. "} <span className={ss.openModal} onClick={()=>dispatch({type:CHANGE_FEEDBACK_MODAL})} >{locale === "ru" ? "Форма связи":"Форма зв'язку"}.</span> </span>
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
                    title: locale === "ru" ? 'Я сделал заказ, а у вас изменилась цена. Что делать?' : "Я зробив замовлення, а у вас змінилася ціна. Що робити?",
                    content: <span className={s.que}>{locale === "ru" ? "Если вы нажали кнопку \"оформить заказ\" до изменения цены, то для вас она останется прежней." : "Якщо ви натиснули кнопку \"оформити замовлення\" до зміни ціни, то для вас вона залишиться колишньою."}</span>
                }}
            />
        </div>
    )
}


