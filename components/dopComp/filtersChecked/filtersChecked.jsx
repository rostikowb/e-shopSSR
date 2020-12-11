import React from "react";
import s from "./filtersChecked.module.css"
import {connect} from "react-redux";
import {useRouter} from "next/router";
import {parsFiltOfUrl} from "../lib/filters/parsFiltOfURL";
import {FETCH_GOODS, STUB_ON} from "../../../redux/types";
import closedIcon from "./cancel.svg"
import {fetchGoods, stubOn} from "../../../redux/goodsArr/actions";

export const FiltersChecke = (props) => {
  const loc = useRouter();
  const q = loc.query;
  const filArr = parsFiltOfUrl(q);

  const handleDelete = async (item, value) => {
    const query = {...q};
    const valueArr = item.valueArr;
    // let range = false;

    delete query.catalog;

    if (valueArr.length > 1) {
      const index = valueArr.indexOf(value);
      if (index > -1) {
        valueArr.splice(index, 1);
        query[item.name] = valueArr.join(',');
      }
    } else {
      delete query[item.name]
    }

    // if(loc.query?.prcrange) range = loc.query.prcrange.split('-')

    props.stubOn({type: STUB_ON});
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: q?.sort,
      catalog: q?.catalog,
      filter: parsFiltOfUrl(q, value),
      // range
    });

    await loc.push({pathname: '/goods/[catalog]', query}, {pathname: '/goods/' + q?.catalog, query}, {shallow: true})
  }

  return <div className={s.filtCheBox}>
    {filArr ? filArr.map(item =>
      <div className={s.filtCheBoxBox} key={item.name + 'filtCheBox'}>
        <span className={s.filtName}>{item.name}: </span>
        {item.valueArr.map(value =>
          <div key={value + 'filtValue'} className={s.filtValue} onClick={() => handleDelete(item, value)}>
            <span>{value}</span>
            <div>X</div>
            {/*<img src={closedIcon} alt=""/>*/}
          </div>
        )}
      </div>
    ) : null}
  </div>
}


export const FiltersChecked = connect(null, {
  fetchGoods,
  stubOn
})(FiltersChecke);