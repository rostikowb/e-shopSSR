import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useStyles} from "./checkboxStyle"
import {connect} from "react-redux";
import {FETCH_GOODS, STUB_ON} from "../../../../../redux/types";
import {parsFiltOfUrl} from "../../../../dopComp/lib/filters/parsFiltOfURL";
import {fetchGoods, stubOn} from "../../../../../redux/goodsArr/actions";

export const CheckboxFilte = (props) => {
  const {root, checked} = useStyles();
  const value = props.value;
  const label = props.label;
  const loc = useRouter()
  const catalog = loc.query?.catalog;
  const isLabel = loc.query[label]
  // const selectArr = props.filterSelected;
  const [check, setCheck] = useState(false)
  let isLabelArr = isLabel ? isLabel.split(',') : []


  const isInURL = () => isLabelArr.find((elem) => elem === value)

  const goodsFetch = (q, del = false) => {
    props.stubOn({type: STUB_ON});
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: q?.sort,
      catalog: q?.catalog,
      filter: parsFiltOfUrl(q, del)
    });
  }

  useEffect(() => setCheck(!!isInURL()), [isLabel])

  // useEffect(() => {props.filterToStore(isLabelArr)}, [isLabelArr])

  const checkHandle = async (bool) => {
    const query = {...loc.query};
    // const selectedArr =
    setCheck(bool)
    delete query.catalog

    if (bool) {
      isLabelArr = [...isLabelArr, value]
      query[label] = isLabelArr.join(',');
      goodsFetch(query)
      // props.filterToStore(isLabelArr);
    } else {
      goodsFetch(query, value)
      if (isLabelArr.length > 1 && isInURL()) {
        const index = isLabelArr.indexOf(value);
        if (index > -1) {
          isLabelArr.splice(index, 1);
          query[label] = isLabelArr.join(',');
          // props.filterToStore(isLabelArr);
        }
      } else {
        delete query[label]
      }
    }
    await loc.push({pathname: '/goods/[catalog]', query}, {pathname: '/goods/' + catalog, query}, {shallow: true})
  }

  return <li key={'filVal' + value}>
    <FormControlLabel
      value={props.value}
      control={
        <Checkbox checked={check}
                  onChange={(e) => checkHandle(e.target.checked)}
                  disabled={props.stub}
                  size={'small'} color="primary"
                  classes={{
                    root,
                    checked
                  }}
        />
      }
      label={props.value}
      labelPlacement={"end"}
    />
  </li>
}

const mapStateToProps = (state) => {
  return {
    // filterSelected: state.filters.filterSelected,
    catalog: state.AllGoodsR.catalog,
    stub: state.AllGoodsR.stub
  };
};

export const CheckboxFilter = connect(mapStateToProps, {
  fetchGoods,
  stubOn
})(CheckboxFilte);