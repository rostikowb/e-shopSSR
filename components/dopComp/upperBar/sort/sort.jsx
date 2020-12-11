import React from "react";
import s from "./sort.module.css";
import { connect } from "react-redux";
import Select from "react-select";
import {
  fetchGoods,
  stubOn,
  thisUrl,
} from "../../../../redux/goodsArr/actions";
import { FETCH_GOODS, STUB_ON } from "../../../../redux/types";
import {useRouter} from 'next/router'
import {parsFiltOfUrl} from "../../lib/filters/parsFiltOfURL";

const options = [
  // { value: "random", label: "Стандарту" },
  { value: "byRating", label: "По рейтингу" },
  { value: "priceMinMax", label: "Цена: min-max" },
  { value: "priceMaxMin", label: "Цена: max-min" },

  // { value: "byDate", label: "По дате поступления" },
];

const customStyles = {
    control: base => ({
        ...base,
        height: 35,
        minHeight: 35
    })
};

const Sor = (props) => {
  const loc = useRouter();

  const loadGoods = (value) => {

    const catalog = loc.query.catalog;
    const query = {...loc.query};
    // const range = query['Цена'] ? query['Цена'].split('-') : false;

    if(query.page || query.page === 0) delete query.page;
    query.sort = value.value;
    delete query.catalog;

    loc.push({pathname: loc.pathname, query}, {pathname: catalog, query}, {shallow:true});

    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: value.value,
      catalog: props.catalog,
      filter: parsFiltOfUrl(loc.query),
      // range
    });
  };
  let defaul = options.find((e) => e.value === props.sort);
  return (
    <div className={s.selects}>
      <span itemID={'sortSelect'}>Отсортировать по: </span>
      <Select
        id={"sortSelect"}
        // instanceId={"sortSelect1"}
        defaultValue={defaul}
        options={options}
        onChange={(e) => loadGoods(e)}
        name="Сортировка"
        className={s.sortSelect}
        styles={customStyles}
        value={defaul}
        aria-label={"Отсортировать по"}
        aria-labelledby={"sortSelect"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
    url: state.AllGoodsR.url,
  };
};

export const Sort = connect(mapStateToProps, {
  fetchGoods,
  thisUrl,
  stubOn,
})(Sor);
