import React, {useEffect, useState} from 'react';
import s from './search.module.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faSearch} from '@fortawesome/free-solid-svg-icons'
import useDebounce from "../../../dopComp/lib/debounce";
import {reqSearch} from "./req";
import {Autocomplete} from "@material-ui/lab";
import {CircularProgress, TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {fetchOneGoods, imgOnShowSet} from "../../../../redux/oneGoods/action";
import {fetchGoodsSearch, setCatalog} from "../../../../redux/goodsArr/actions";
import {lsToStore} from "../../../../localStorage/initAction";
import Link from "next/link";

const useStyles = makeStyles({
  // textField: {
  //   width: '90%',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   paddingBottom: 0,
  //   marginTop: 0,
  //   fontWeight: 500
  // },
  root: {
    color: "#2b2b2b",
    // backgroundColor: 'white'
  },
  input: {
    color: '#2b2b2b',
    // backgroundColor: 'white'
  }
});

export const Searc = (props) => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  let loc = useRouter();
  const catalog = loc?.query?.catalog;
  const searchL = loc?.query?.search;
  const locale = loc.locale;
  const [searchRes, setSearchRes] = useState([])
  const [input, setInput] = useState('')
  const [load, setLoad] = useState(false)
  const [alreadyRedirect, setAlreadyRedirect] = useState(false)
  // const [value, setValue] = useState(null);


  // const { classes } = styles;

  // console.log('searchRes', searchRes);
  //
  // console.log("input", input);

  const cooldown = useDebounce(input, 500);

  useEffect(() => {
    (async () => {
      if (cooldown && searchL !== cooldown) {
        // console.log(cooldown);
        // setSearchRes(await reqSearch(cooldown))
        props.fetchGoodsSearch(cooldown, catalog)
        pushUrl()
      }
    })()
  }, [cooldown])

  useEffect(() => {
    setAlreadyRedirect(true);
    if (load) {
      setLoad(false);
    }
  }, [input]);

  useEffect(() => {
    if (!load) {
      setLoad(true);
    }
  }, [searchRes]);

  useEffect(() => {
    if (searchL) {
      setInput(searchL)
    }
  }, [searchL]);

  const searchHandler = (words) => {
    if (typeof words === "string" && words.length < 40)
      setInput(words)
  }

  const pushUrl = () => {
    const catalog = loc.query.catalog;
    loc.push(
      {pathname: catalog ? '/goods/[catalog]' : '/', query: {search: cooldown}},
      {pathname: catalog ? '/goods/'+catalog : '/', query: {search: cooldown}},
      {shallow: true}
    );
  }

  // const pushUrl = (value) => {
  //   let link = value._id + "__" + value["nm"].replace(/\s/gi, "_").replace(/\//gi, "-");
  //   let finalLink = `/${value["ctgrId"]}/${link}`
  //   // console.log('alreadyRedirect', alreadyRedirect);
  //   if ((link !== loc.query.onegoods) && alreadyRedirect) {
  //     setAlreadyRedirect(false);
  //     loc.push(
  //       "/goods/[catalog]/[onegoods]",
  //       '/goods' + finalLink,
  //       {shallow: true}
  //     );
  //   }
  //
  // };

  return (
    <form className={s.searchBox} noValidate autoComplete="off">
      <div className={s.search}>
        <input className={s.searchInput} value={input} onChange={(e) => searchHandler(e.target.value)} name="search"
               placeholder={locale === "ru" ? "Хочу найти..." : "Хочу знайти..."}
               type="search"/>
        <FontAwesomeIcon className={s.searchIcon} icon={faSearch}/>
        {/*<button className={s.btnSearchStart}>ИСКАТЬ</button>*/}
      </div>

    </form>
    // <div className={s.searchBox}>
    //   <form className={s.searchInputBox} noValidate autoComplete="off">
    //     <div className={s.search}>
    //       <Autocomplete
    //         id="asynchronous-demo"
    //         size={"small"}
    //         color={'white'}
    //         style={{width: "100%"}}
    //         loading={!load}
    //         loadingText={"Ищем..."}
    //         noOptionsText={"Нет совпадений"}
    //         autoHighlight
    //         filterOptions={(x) => x}
    //         onInputChange={(event, value) => searchHandler(value)}
    //         getOptionSelected={(option, value) => {
    //           // console.log('option.nm === value.nm', option.nm === value.nm);
    //           if (option.nm === value.nm) {
    //             console.log('option.nm === value.nm', option.nm === value.nm);
    //             pushUrl(value)
    //             return true;
    //           }
    //         }}
    //         getOptionLabel={(option) => option.nm}
    //         options={searchRes}
    //
    //         renderInput={(params) => (
    //           <TextField
    //             {...params}
    //             variant={'filled'}
    //
    //             label="Мне повезет!"
    //             size={'small'}
    //             style={{backgroundColor: 'white', color: 'black'}}
    //             InputLabelProps={{
    //               classes: {
    //                 // input: classes.input,
    //                 root: classes.root
    //               }
    //             }}
    //             InputProps={{
    //               ...params.InputProps,
    //               classes: {
    //                 // input: classes.input,
    //                 root: classes.root
    //               },
    //               endAdornment: (
    //                 <React.Fragment>
    //                   {!load && input ? (
    //                     <CircularProgress color="inherit" size={20}/>
    //                   ) : null}
    //                   {params.InputProps.endAdornment}
    //                 </React.Fragment>
    //               ),
    //             }}
    //           />
    //         )}
    //       />
    //     </div>
    //
    //   </form>
    // </div>

  )
};
export const Search = connect(null, {
  fetchGoodsSearch,
})(Searc);