import React, {useEffect} from "react";
import s from "./modal.module.css"
import closedIcon from "../filtersChecked/cancel.svg";

export const Modal = (props) => {
  const {children, options, style} = props;
  const {changeState, bottomChild, title} = options
  const {wrapper, top} = style||{};

  useEffect(()=>{
    if(window.innerWidth < 800) document.body.style.overflow = 'hidden'
  }, [])

  const handleChangeState = () =>{
    changeState(false);
    document.body.style.overflow = 'auto'
  }

  return <>
    <div
      onClick={() => handleChangeState()}
      className={s.modalShadow}
    />
    <div style={wrapper} className={s.modalWrapper}>
      <div className={`${s.modal} ${bottomChild ? s.modalIsChild : null}`}>
        <div className={s.top}>
          <div style={top} className={s.topPc}>
            <span className={s.title}>{title}</span>
            <img className={s.clsIconBtn} onClick={() => handleChangeState()} src={closedIcon} alt=""/>
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
          <div className={s.closeBtn} onClick={() => handleChangeState()}>ЗАКРЫТЬ</div>
        </div>
      </div>
    </div>
  </>
}