import React from "react";
import s from './catItemBlock.module.css'

export const CatItemBlock = (title, src, width)=>{

  return <div className={s.box}>
    <div className={s.img}>
      <img style={{width}} src={`/img/catalog/${src}`} alt={src}/>
    </div>
    <span>{title}</span>
  </div>
}