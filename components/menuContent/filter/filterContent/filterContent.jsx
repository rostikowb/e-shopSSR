import React, {useEffect, useState} from 'react';
import s from '../filter.module.css'
import {reqFilter} from "./req";
import {useRouter} from "next/router";
import {FilterAcordion} from "./filterAcordion/filterAcordion";
import {CheckboxFilter} from "./checkbox/checkbox";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../../redux/goodsArr/actions";
import {FETCH_GOODS, STUB_ON} from "../../../../redux/types";
import {checkFilterInUrl} from "./lib/checkFilterInUrl";
import {fetchFilterArr} from "../../../../redux/filters/actions";
import {PrcRange} from "./range/prcRange";
// import {lsToStore} from "../../../../localStorage/initAction";

export const FilterConten = (props) => {

  // const [filters, setFilters] = useState(null)
  const [filtersArr, setFiltersArr] = useState(null)
  const loc = useRouter()
  const query = loc.query;
  const catalog = props.catalog;
  const filtersObj = props.filtersObj;
  const {gte, lte} = props.priceRange;

  console.log('catalog', catalog);

  // const fetchGoodsFilter = ()=>{
  //   props.stubOn({ type: STUB_ON });
  //   props.fetchGoods({
  //     type: FETCH_GOODS,
  //     sort: query?.sort,
  //     catalog: query?.catalog,
  //     filter: checkFilterInUrl(query)
  //   });
  // }


  useEffect(() => {
    (async () => {
      try {
        console.log("filtersObj", filtersObj);
        setFiltersArr(Object.keys(filtersObj))
      } catch (e) {

      }
      // setFilters(props.filterArr)
    })()
  }, [filtersObj])

  useEffect(() => {
    (async () => {
      if (!filtersObj) {
        console.log('fetchFilterArr')
        // props.fetchFilterArr(catalog)
      }

    })()
  }, [catalog])


  // useEffect(() => {
  //   if (filters) setFiltersArr(Object.keys(filters))
  // }, [filters])

  console.log(filtersArr);

  return (
    <div className={s.menuFilterBox}>
      {filtersArr ? <div>
        {/*<h2 className={s.filterTitle}>Фильтры</h2>*/}


        {gte && lte ? <PrcRange stub={props.stub} range={props.priceRange}/> : null}

        {filtersArr ? filtersArr.map((label) => {
          if (filtersObj[label] && filtersObj[label].length > 1) {
            return <FilterAcordion key={"fiL" + label} info={{
              title: <span key={"fiLspan" + label} className={s.filterLabel}>{label}</span>,
              content: <ul key={"fiLul" + label} className={s.filterValue}>
                {filtersObj[label] ? filtersObj[label].map(value => {
                  return <CheckboxFilter key={"fiVa" + value} value={value} label={label}/>
                }) : null}
              </ul>
            }}/>
          }
        }) : null}
      </div> : null}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    filtersObj: state.filters.filtersAllObj,
    priceRange: state.filters.priceRange,
    catalog: state.AllGoodsR.catalog,
    stub: state.AllGoodsR.stub
  };
};

export const FilterContent = connect(mapStateToProps, {
  fetchGoods,
  stubOn,
  fetchFilterArr,
})(FilterConten);