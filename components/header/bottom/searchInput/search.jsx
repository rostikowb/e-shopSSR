import React, {useEffect, useState} from 'react';
import s from './search.module.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faSearch} from '@fortawesome/free-solid-svg-icons'
import useDebounce from "../../../dopComp/lib/debounce";
import {reqSearch} from "./req";
import {Autocomplete} from "@material-ui/lab";
import {CircularProgress, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

export const Search = () => {
  // const [open, setOpen] = useState(false);
  let loc = useRouter();
  const [searchRes, setSearchRes] = useState([])
  const [input, setInput] = useState('')
  const [load, setLoad] = useState(false)
  const [alreadyRedirect, setAlreadyRedirect] = useState(false)
  // const [value, setValue] = useState(null);


  // const { classes } = styles;

  // console.log('searchRes', searchRes);
  //
  // console.log("input", input);

  const cooldown = useDebounce(input, 1000);

  useEffect(() => {
    (async () => {
      if (cooldown) {
        console.log(cooldown);
        setSearchRes(await reqSearch(cooldown))
      }
    })()
  }, [cooldown])

  React.useEffect(() => {
    setAlreadyRedirect(true);
    if (load) {
      setLoad(false);
    }
  }, [input]);

  React.useEffect(() => {
    if (!load) {
      setLoad(true);
    }
  }, [searchRes]);

  const searchHandler = (words) => {
    if (typeof words === "string" && words.length < 40)
      setInput(words)
  }

  const pushUrl = (value) => {
    let link = value._id + "__" + value["nm"].replace(/\s/gi, "_").replace(/\//gi, "-");
    let finalLink = `/${value["ctgrId"]}/${link}`
    // console.log('alreadyRedirect', alreadyRedirect);
    if ((link !== loc.query.onegoods) && alreadyRedirect) {
      setAlreadyRedirect(false);
      loc.push(
        "/goods/[catalog]/[onegoods]",
        '/goods'+finalLink,
        {shallow: true}
      );
    }

  };

  return (
    <div className={s.searchBox}>
      <form className={s.searchInputBox} noValidate autoComplete="off">
        <div className={s.search}>
          <Autocomplete
            id="asynchronous-demo"
            size={"small"}
            color={'white'}
            style={{width: "100%"}}
            loading={!load}
            loadingText={"Ищем..."}
            noOptionsText={"Нет совпадений"}
            autoHighlight
            filterOptions={(x) => x}
            onInputChange={(event, value) => searchHandler(value)}
            getOptionSelected={(option, value) => {
              // console.log('option.nm === value.nm', option.nm === value.nm);
              if (option.nm === value.nm) {
                console.log('option.nm === value.nm', option.nm === value.nm);
                pushUrl(value)
                return true;
              }
            }}
            getOptionLabel={(option) => option.nm}
            options={searchRes}

            renderInput={(params) => (
              <TextField
                {...params}
                variant={'filled'}
                label="Мне повезет!"
                size={'small'}
                style={{backgroundColor: 'white'}}
                InputLabelProps={{
                  classes: {},
                }}
                InputProps={{
                  ...params.InputProps,
                  classes: {},
                  endAdornment: (
                    <React.Fragment>
                      {!load && input ? (
                        <CircularProgress color="inherit" size={20}/>
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </div>

      </form>
    </div>
  )
};