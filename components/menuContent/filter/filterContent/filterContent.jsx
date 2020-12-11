import React, {useEffect, useState} from 'react';
import s from '../filter.module.css'
import {FilterAcordion} from "./filterAcordion/filterAcordion";
import {CheckboxFilter} from "./checkbox/checkbox";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../../redux/goodsArr/actions";
import {fetchFilterArr} from "../../../../redux/filters/actions";
import {PrcRange} from "./range/prcRange";

export const FilterConten = (props) => {

  const [filtersArr, setFiltersArr] = useState(null)
  const filtersObj = props.filtersObj;
  const {gte, lte} = props.priceRange;

  useEffect(() => {
    (async () => {
      try {
        setFiltersArr(Object.keys(filtersObj))
      } catch (e) {

      }
    })()
  }, [filtersObj])

  return (
    <div className={s.menuFilterBox}>
      {filtersArr ? <div>

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