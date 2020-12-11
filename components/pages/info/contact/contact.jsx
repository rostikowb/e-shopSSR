import React from "react";
import ss from "../info.module.css";
import s from "./contact.module.css"
import {useDispatch} from "react-redux";
import {CHANGE_FEEDBACK_MODAL} from "../../../../redux/types";

export const Contact = () => {
    const dispatch = useDispatch();

    return (
        <div className={ss.infoMain}>
            <h1 className={s.title}>Как с нами связатся?</h1>
            <div className={s.infoBox}>
                <div>
                    <div>
                        Предпочтительный вариант:
                    </div>
                    <div className={ss.openModal} onClick={()=>dispatch({type:CHANGE_FEEDBACK_MODAL})} title={'*окно магической связи*'}>
                        ТЫК
                    </div>
                </div>
                <div>
                    <div>
                        Официальная почта:
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