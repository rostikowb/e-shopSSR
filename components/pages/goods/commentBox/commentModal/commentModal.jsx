import React, {useState, useEffect} from "react";
import s from "./commentModal.module.css";
import {connect} from "react-redux";
import {changeStateCommentsModal} from "../../../../../redux/modal/actions";
import {TextField, Button, makeStyles} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {addComments} from "../../../../../redux/oneGoods/action";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const CommentModa = (props) => {
  const classes = useStyles();
  const boughtId = props.data.boughtId;
  const boughtIndex = props.data.boughtIndex;
  const locale = useRouter().locale;

  const [data, setData] = useState({
    name: "",
    plus: "",
    minus: "",
    msg: "",
    voice: 0,
  });
  const [dataV, setDataV] = useState({
    name: false,
    plus: false,
    minus: false,
    msg: false,
    voice: false,
  });
  // console.log(data);
  const changeText = (type, value, lng) => {
    if (type === "voice") {
      dataV[type] = true;
    } else {
      dataV[type] = value.length > lng;
    }
    data[type] = value;
    setData({...data});
    setDataV({...dataV});
  };

  const send = () => {
    props.addComments(
      data,
      props.token,
      props.product._id,
      boughtId,
      boughtIndex
    );
  };

  return (
    <>
      <div
        onClick={() => props.changeStateCommentsModal()}
        className={s.modal_comment_box}
      />
      <div className={s.modal_comment}>
        <div className={s.formBox}>
          <h2 className={s.title}>{locale === "ru" ? "Оставить отзыв" : "Залишити відгук"}</h2>
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Имя"
            autoComplete="name"
            name="name"
            type="text"
            error={!dataV.name}
            onChange={(event) => changeText("name", event.target.value, 2)}
          />
          <div className={s.ratingBox}>
            <span className={s.ratingSpan}>{locale === "ru" ? "Ваша оценка:" : "Ваша оцінка"}:</span>
            <Rating
              className={s.rating}
              name="voice"
              // value={4}
              size={"large"}
              onChange={(event) => changeText("voice", event.target.value)}
            />
          </div>

          <TextField
            multiline={true}
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="msg"
            label={locale === "ru" ? "Опишите свой опыт!" : "Опишіть свій досвід!"}
            autoComplete="msg"
            name="msg"
            type="text"
            rows={5}
            rowsMax={14}
            error={!dataV.msg}
            onChange={(event) => changeText("msg", event.target.value, 50)}
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="plus"
            label={locale === "ru" ? "Плюсы" : "Плюси"}
            name="plus"
            type="text"
            error={!dataV.plus}
            onChange={(event) => changeText("plus", event.target.value, 4)}
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="minus"
            label={locale === "ru" ? "Минусы" : "Мінуси"}
            name="minus"
            type="text"
            error={!dataV.minus}
            onChange={(event) => changeText("minus", event.target.value, 4)}
          />
          {props.errMsg ? (
            <span className={s.errMsg}>{props.errMsg}</span>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={s.commentSendBtn}
            className={classes.submit}
            disabled={
              !dataV.name ||
              !dataV.plus ||
              !dataV.minus ||
              !dataV.msg ||
              !dataV.voice
            }
            onClick={() => send()}
          >
            {locale === "ru" ? "Отправить" : "Відправити"}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => props.changeStateCommentsModal()}
          >
            {locale === "ru" ? "Закрыть": "Закрити"}
          </Button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    UD: state.auth.userData,
    product: state.oneGoods.product,
    errMsg: state.oneGoods.commErrMsg,
    token: state.auth.token,
    modal: state.modal.comments,
  };
};

export const CommentModal = connect(mapStateToProps, {
  changeStateCommentsModal,
  addComments,
})(CommentModa);
