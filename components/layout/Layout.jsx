import React from "react";
import {GoodsSideBar} from "../dopComp/goodsSideBar/goodsSideBar";
import {Header} from "../header/header";
import {Sidebar} from "../sidebar/sidebar";
import {UpperBar} from "../dopComp/upperBar/upperBar";
import s from "../../styles/goodsArr.module.css"
import {InvisComp} from "../dopComp/invisComp/invisComp";
import {FiltersChecked} from "../dopComp/filtersChecked/filtersChecked";
import {FeedbackBtn} from "../menuContent/feedbackBtn/feedbackBtn";

export const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <div className="main">
                <div className={s.leftSidebarBox}>
                    <Sidebar/>
                </div>
                <div className={s.rightMain}>
                    <UpperBar name={undefined}/>
                    <FiltersChecked/>
                    {children}
                  <FeedbackBtn/>
                </div>
            </div>
            <GoodsSideBar/>
            <InvisComp/>
        </>
    );
};