import React from "react";
import s from "./title.module.css";
import Link from 'next/link'
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../../redux/oneGoods/action";
import { setCatalog } from "../../../../../redux/goodsArr/actions";
import { changeStateLikeModal } from "../../../../../redux/modal/actions";

const Titl = (props) => {
  let d = props.data.data;
  let link = props.data.link;
  let dvnld = props.data.download;

  const loadOneGoods = () => {
    if (d._id !== props.loc) {
      props.setCatalog(d["ctgrId"]);
      props.fetchOneGoods(d["_id"], false, d);
    }
    props.changeStateLikeModal();
  };

  return (
    <div onClick={() => (dvnld ? loadOneGoods() : null)} className={s.title}>
      <Link href={"/goods/[catalog]/[onegoods]"} as={`/goods/${d["ctgrId"]}/${link}`} prefetch={false} passHref={true} shallow={true}>
          <a href="">
              <h3>{d["nm"]} </h3>
          </a>
      </Link>
    </div>
  );
};
export const Title = connect(null, {
  fetchOneGoods,
  setCatalog,
  changeStateLikeModal,
})(Titl);
