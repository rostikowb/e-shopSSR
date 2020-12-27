import React from "react";
import s from "./modal.module.css"
import closedIcon from "../filtersChecked/cancel.svg";

export const Modal = (props) => {
  const {children, options, style} = props;
  const {changeState, bottomChild, title} = options
  const {wrapper, top} = style||{};

  return <>
    <div
      onClick={() => changeState(false)}
      className={s.modalShadow}
    />
    <div style={wrapper} className={s.modalWrapper}>
      <div className={`${s.modal} ${bottomChild ? s.modalIsChild : null}`}>
        <div className={s.top}>
          <div style={top} className={s.topPc}>
            <span className={s.title}>{title}</span>
            <img className={s.clsIconBtn} onClick={() => changeState(false)} src={closedIcon} alt=""/>
          </div>
          <div className={s.topMobi}>
            <span className={s.title}>{title}</span>
          </div>
        </div>

        <div className={s.childrenBox}>
          {children}
        </div>
        <div className={`${s.bottom} ${bottomChild ? s.bottomIsDopChild : null}`}>
          {bottomChild ? bottomChild : null}
          <div className={s.closeBtn} onClick={() => changeState(false)}>ЗАКРЫТЬ</div>
        </div>
      </div>
    </div>
  </>
}