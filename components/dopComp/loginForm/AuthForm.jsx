import React, {useEffect, useState} from "react";
import { Container, makeStyles } from "@material-ui/core";
import s from "./login.module.css";
import { connect } from "react-redux";
import {LogForm} from "./log/LogForm";
import {RegForm} from "./reg/RegForm";
import {ResForm} from "./res/ResForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typo: {
    color: "black",
  },
}));

// L-login
// R-registration
// V-vostanovlenir(recovery)

const AuthFor = (props) => {
  const classes = useStyles();
  const isForm = props.isForm;

  const [data, setData] = useState({ name: "", email: "", pass: "", pin: "" });
  const [dataV, setDataV] = useState({
    name: false,
    email: false,
    pass: false,
    pin: false,
  });

  useEffect(()=>{
    setDataV({
      name: false,
      email: false,
      pass: false,
      pin: false,
    })
  },[isForm])

  const propsD = [data, dataV, setData, setDataV];

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{ marginTop: "0px" }}
        className={classes.paper + "" + s.formBox}
      >

        {isForm === "L"
            ? <LogForm data={propsD} classes={classes}/>
            : isForm === "R"
                ? <RegForm data={propsD} classes={classes}/>
                : <ResForm data={propsD} classes={classes}/>}

      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isForm: state.auth.isForm,
  };
};

export const AuthForm = connect(mapStateToProps, null)(AuthFor);
