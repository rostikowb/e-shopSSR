import React, {useEffect, useState} from "react";
import {
  Button,
  // Checkbox,
  CircularProgress,
  // FormControlLabel,
  // makeStyles,
  TextField,
} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {connect} from "react-redux";
import {
  optStubOn,
  searchCityNP,
  sendToDB,
} from "../../../../redux/checkout/actions";
import s from "./form.module.css";
import {OPT_SEND_STUB, OPT_STUB} from "../../../../redux/types";
import {checkoutFormTheme} from "../../../../styles/theme";
import {useRouter} from "next/router";
import {deleteAllBasket} from "../../../../redux/likesBasket/actions";


const validateEmail = (email) => {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

const useStyles = checkoutFormTheme;

const CheckoutFor = (props) => {
  const loc = useRouter();
  const arr = props.basketArr;
  const classes = useStyles();
  const stub = props.stub;
  // const errMsg = props.invalid;
  const UD = props.userData;
  const token = props.token;
  const optCity = props.optCity;
  const optBranchN = props.optBranchN;
  const locale = useRouter().locale;
  const [done, setDone] = useState(false);
  // const [isReg, setIsReg] = useState(!token);
  const [data, setData] = useState({
    userId: UD?.userId || "",
    email: UD?.email || "",
    tel: UD?.tel || Number("+380"),
    // pass: "",
    FN: UD?.FN || UD?.FN || "",
    LN: UD?.LN || "",
    SN: UD?.SN || "",
    optCity: UD?.city || "",
    optBranchN: UD?.branchN || "",
    cupon: props?.cupon || 0,
    msg: '',
  })

  const [dataV, setDataV] = useState(data ? {
    email: !!data.email,
    tel: data.tel.length > 3,
    // pass: !!token || !isReg || !!data.pass,
    FN: !!data.FN,
    LN: !!data.LN,
    SN: !!data.SN,
    city: !!data.city,
    branchN: !!data.branchN,
    // iAgree: false,
    msg: true,
  } : null);

  const sendData = () => {
    let obj = {
      UD: data,
      goods: arr.map((g) => {
        return {
          goodsId: g._id,
          count: g.countSale,
          price: Math.round(g["rtlPrc"] - (g["rtlPrc"] / 100) * g["dscnt"]),
        };
      }),
    };
    props.optStubOn(OPT_SEND_STUB);
    props.sendToDB(obj, token);
  };

  const chngInpLn = (type, value, lng) => {
    let isValid;
    if (type === "email") {
      isValid = validateEmail(value);
    } else {
      isValid = value.length > lng;
    }
    dataV[type] = isValid;
    data[type] = value;
    setData({...data});
    setDataV({...dataV});
  };

  const sityChange = (value) => {
    if (value) {
      props.optStubOn(OPT_STUB);
      props.searchCityNP(value);
      data.optCity = value;
      setData({...data});
    }
  };

  const branchNChange = (value) => {
    if (value.length > 3) {
      data.optBranchN = value;
      setData({...data});
    }
  };

  // const checkboxChange = (value = false) => {
  //   if (value === "reg") {
  //     setIsReg(!isReg);
  //   } else {
  //     dataV.iAgree = !dataV.iAgree;
  //     setDataV({ ...dataV });
  //     setData({ ...data });
  //   }
  // };

  useEffect(() => {
    if (!!data?.optCity && !!data?.optBranchN) {
      dataV.city = true;
      dataV.branchN = true;
      setDataV({...dataV});
    }

    setDone(
      dataV.city &&
      dataV.branchN &&
      dataV.FN &&
      // dataV.email &&
      // (!isReg || dataV.pass) &&
      dataV.LN &&
      dataV.SN &&
      dataV.tel
      // dataV.iAgree
    );

  }, [data]);

  useEffect(() => {
    if (UD?.email) data.email = UD.email;
    if (UD?.tel) data.tel = UD.tel;
    if (UD?.FN || UD?.FN) data.FN = UD.FN;
    if (UD?.LN) data.LN = UD.LN;
    if (UD?.SN) data.SN = UD.SN;
    if (UD?.city) data.optCity = UD.city;
    if (UD?.branchN) data.optBranchN = UD.branchN;
    setData({...data});
  }, [UD]);

  useEffect(() => {
    data.cupon = props.cupon;
    setData({...data});
  }, [props.cupon]);

  useEffect(() => {
    if (props.isDoneSend) {
      props.deleteAllBasket()
      loc.push('/checkout/done', '/checkout/done', {shallow: true})
    }
  }, [props.isDoneSend]);

  return (
    <div className={s.formBox}>
      <div className={s.form}>
        <div className={s.namesGroup}>
          <h2>{locale === "ru" ? "Контактные данные" : "Контактні дані"}</h2>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label={locale === "ru" ? "Емейл Адрес (необязательно)" : "Емейл Адреса (необовязково)"}
            name="email"
            autoComplete="email"
            // error={!dataV?.email}
            type="email"
            value={data?.email}
            helperText={locale === "ru" ? "Пример email'a - example@gmail.com" : "Приклад email'a - example@gmail.com"}
            onChange={(event) => chngInpLn("email", event.target.value)}
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="number"
            label={locale === "ru" ? "Номер телефона" : "Номер телефону"}
            name="number"
            autoComplete="number"
            type="number"
            value={data?.tel}
            error={!dataV?.tel}
            onChange={(event) => chngInpLn("tel", event.target.value, 10)}
            helperText={!dataV?.tel ? locale === "ru" ? "Минимум 10 цифр" : "Мінімум 10 цифр" : null}
          />
        </div>
        <div className={s.namesGroup}>
          <h2>{locale === "ru" ? "ФИО получателя" : "ПІБ одержувача"}</h2>
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="LN"
            label={locale === "ru" ? "Фамилия" : "Прізвище"}
            autoComplete="given-name"
            name="name"
            type="text"
            value={data?.LN}
            error={!dataV?.LN}
            onChange={(event) => chngInpLn("LN", event.target.value, 1)}
            helperText={
              !dataV?.LN ? locale === "ru" ? "Фамилия должна содержать минимум две буквы" : "Прізвище повинна містити мінімум дві букви" : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="FN"
            label={locale === "ru" ? "Имя" : "Імя"}
            autoComplete="additional-name"
            name="name"
            type="text"
            value={data?.FN}
            error={!dataV?.FN}
            onChange={(event) => chngInpLn("FN", event.target.value, 1)}
            helperText={
              !dataV?.FN ? locale === "ru" ? "Имя должно содержать минимум две буквы" : "Ім'я повинно містити мінімум дві букви" : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="SN"
            label={locale === "ru" ? "Отчество" : "По батькові"}
            autoComplete="family-name"
            name="name"
            type="text"
            value={data?.SN}
            error={!dataV?.SN}
            onChange={(event) => chngInpLn("SN", event.target.value, 1)}
            helperText={
              !dataV?.SN ? locale === "ru" ? "Отчество должно содержать минимум две буквы" : "По батькові повинно містити мінімум дві букви" : null
            }
          />
        </div>
        <div className={s.namesGroup}>
          <h2 className={s.title}>{locale === "ru" ? "Адресс доставки":""}</h2>
          <div className={s.select}>
            <Autocomplete
              id="asynchronous-demo"
              style={{width: "100%"}}
              loading={optCity.stub}
              loadingText={locale === "ru" ? "Ищем..." : "Шукаємо"}
              noOptionsText={locale === "ru" ? "Нет совпадений" : "Немає збігів"}
              freeSolo
              value={data?.optCity}
              getOptionSelected={(option, value) => {
                return (
                  (typeof option === "string" ? option : option.Present) ===
                  value
                );
              }}
              onInputChange={(event, value) => sityChange(value)}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.Present
              }
              options={optCity.arr || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={locale === "ru" ? "Населенный пункт..." : "Населений пункт..."}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {optCity.stub ? (
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
          <div className={s.select}>
            <Autocomplete
              id="asynchronous-dmo"
              style={{width: "100%"}}
              loading={optCity.stub}
              loadingText={locale === "ru" ? "Ищем..." : "Шукаємо"}
              freeSolo
              noOptionsText={locale === "ru" ? "Нет совпадений" : "Немає збігів"}
              value={data?.optBranchN}
              getOptionSelected={(option, value) =>
                (typeof option === "string" ? option : option.Description) ===
                value?.Description
              }
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.Description
              }
              onInputChange={(event, value) => branchNChange(value)}
              options={optCity.arr.length > 0 ? optBranchN.arr || [] : []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={locale === "ru" ? "№ Отделения" : "№ Відділення"}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {optBranchN.stub ? (
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
        </div>
        <h2 className={s.title}>{locale === "ru" ? "Дополнительно":"Додатково"}</h2>
        <div className={s.select}>
          <TextField
            style={{margin: 0}}
            multiline={true}
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={false}
            fullWidth
            id="msg"
            label={locale === "ru" ? "Примечание к заказу (необязательно)" : "Примітка до замовлення (необов'язково)"}
            autoComplete="msg"
            name="msg"
            type="text"
            rows={5}
            rowsMax={14}
            // error={!dataV.msg}
            helperText={locale === "ru" ? "Что нам принять к сведению?" : "Що нам взяти до відома?"}
            onChange={(event) => chngInpLn("msg", event.target.value, 4)}
          />
        </div>
        {/*<div className={s.namesGroup}>*/}
        {/*  {!token ? (*/}
        {/*    <div className={s.checkBox}>*/}
        {/*      <FormControlLabel*/}
        {/*        control={*/}
        {/*          <Checkbox*/}
        {/*            checked={isReg}*/}
        {/*            onChange={() => checkboxChange("reg")}*/}
        {/*            name="checkedisReg"*/}
        {/*            color="primary"*/}
        {/*            inputProps={{"aria-label": "secondary checkbox"}}*/}
        {/*          />*/}
        {/*        }*/}
        {/*        label="Требую создать собственный аккаунт для хранения купонов!!"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  ) : null}*/}
        {/*  {isReg ? (*/}
        {/*    <div className={s.select}>*/}
        {/*      <TextField*/}
        {/*        variant="outlined"*/}
        {/*        margin="normal"*/}
        {/*        required={true}*/}
        {/*        fullWidth*/}
        {/*        name="password"*/}
        {/*        label="Придумайте пароль"*/}
        {/*        type="password"*/}
        {/*        id="password"*/}
        {/*        autoComplete={"new-password"}*/}
        {/*        onChange={(event) => chngInpLn("pass", event.target.value, 7)}*/}
        {/*        error={!dataV?.pass}*/}
        {/*        helperText={!dataV?.pass ? "Минимум 8 знаков" : null}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  ) : null}*/}
        {/*  <div className={s.checkBox}>*/}
        {/*  <FormControlLabel*/}
        {/*    control={*/}
        {/*      <Checkbox*/}
        {/*        checked={dataV?.iAgree}*/}
        {/*        onChange={() => checkboxChange()}*/}
        {/*        name="checkediAgree"*/}
        {/*        color="primary"*/}
        {/*        size="medium"*/}
        {/*        inputProps={{ "aria-label": "secondary checkbox" }}*/}
        {/*      />*/}
        {/*    }*/}
        {/*    label={`Я согласен c ${условиями использования сайтa}`}*/}
        {/*  />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <span className={s.errMsg}>{props.msg ? props.msg.toString() : null}</span>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!done || stub}
        onClick={() => sendData()}
      >
        {stub ? "Отправляю!" : locale === "ru" ? "Отправить заказ!" : "Відправити замовлення"}
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    token: state.auth.token,
    stub: state.checkout.stub,
    optCity: state.checkout.city,
    optBranchN: state.checkout.branchN,
    cupon: state.checkout.cupon,
    basketArr: state.addLikesBasket.basketArr,
    isDoneSend: state.checkout.isDoneSend,
    invalid: state.checkout.invalid,
    msg: state.checkout.msg
  };
};

export const CheckoutForm = connect(mapStateToProps, {
  sendToDB,
  optStubOn,
  searchCityNP,
  deleteAllBasket
})(CheckoutFor);
