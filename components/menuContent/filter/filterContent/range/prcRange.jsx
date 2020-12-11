import s from "../../filter.module.css";
import {FilterAcordion} from "../filterAcordion/filterAcordion";
import React, {useEffect, useState} from "react";
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core";
import {useRouter} from "next/router";
import {parsFiltOfUrl} from "../../../../dopComp/lib/filters/parsFiltOfURL";
import {FETCH_GOODS, STUB_ON} from "../../../../../redux/types";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../../../redux/goodsArr/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#5e0b5b"
  },
}));

export const PrcRang = (props) => {
  const classes = useStyles();
  const loc = useRouter();
  const q = loc.query;
  // const gte = Number(props.range.gte);
  // const lte = Number(props.range.lte);
  const [gteLte, setGteLte] = useState([Number(props.range.gte), Number(props.range.lte)]);
  const [urlValue, setUrlValue] = useState();
  const [value, setValue] = useState(urlValue ? urlValue : gteLte);
  const [lastValue, SetLastValue] = useState();
  const stub = props.stub

  console.log('gte, lte', gteLte[0], gteLte[1]);

  const fetchGoods = async (range) => {
    const query = {...q};

    delete query.catalog;
    query['Цена'] = range.join('-')

    props.stubOn({type: STUB_ON});
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: q?.sort,
      catalog: q?.catalog,
      filter: parsFiltOfUrl(query),

    });

    await loc.push({pathname: '/goods/[catalog]', query}, {pathname: '/goods/' + q?.catalog, query}, {shallow: true})
  }


  useEffect(() => {
    // if(!urlValue){
      setGteLte([Number(props.range.gte), (props.range.lte)])
      setValue([Number(props.range.gte), (props.range.lte)])
    // }
  }, [props.range])

  useEffect(() => {
    if (loc.query["Цена"]) {
      const range = loc.query['Цена']?.split('-')
      setUrlValue([Number(range[0]), Number(range[1])])
    } else {
      setValue([gteLte[0], gteLte[1]])
    }
  }, [q['Цена']])

  useEffect(() => {
    if (urlValue && (value && (value[0] !== urlValue[0] || value[1] !== urlValue[1]))) {
      setValue(urlValue);
    }
  }, [urlValue])

  useEffect(() => {
    if (!urlValue && lastValue || urlValue && lastValue && (value && (value[0] !== urlValue[0] || value[1] !== urlValue[1]))) {
      fetchGoods(lastValue)
    }

  }, [lastValue])


  const handleChange = (event, newValue) => setValue(newValue);

  const handleLastChange = (event, newValue) => SetLastValue(newValue);

  return <FilterAcordion key={"fiLRang"} info={{
    title: <span key={"fiLspanRange"} className={s.filterLabel}>{"Цена"}</span>,
    content: <div className={s.rangeBox}>
      <Slider
        className={classes.root}
        value={value}
        min={gteLte[0]}
        max={gteLte[1]}
        step={5}
        onChangeCommitted={handleLastChange}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        disabled={stub}
      />
      <div className={s.rangeValueBox}>
        <div>От <span>{value[0]} грн.</span></div>
        <div>До <span>{value[1]} грн.</span></div>
      </div>
    </div>,
    margin: '30px'
  }}/>
}

export const PrcRange = connect(null, {
  fetchGoods,
  stubOn
})(PrcRang);