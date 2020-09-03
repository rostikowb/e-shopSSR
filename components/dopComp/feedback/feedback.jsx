import React, { useState, useEffect } from "react";
import s from "./feedback.module.css";
import { connect } from "react-redux";
import { changeStateFeedbackModal } from "../../../redux/modal/actions";
import { TextField, Button } from "@material-ui/core";
import Select from "react-select";
import { sendTicket } from "../../../redux/tickets/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const optionsTema = [
  {
    value: "simple",
    label: "Я просто спросить ©",
  },
  {
    value: "products",
    label: "Проблемы с товаром(-ами)",
  },
  {
    value: "bug",
    label: "Технические вопросы",
  },
  {
    value: "coop",
    label: "Предложение сотрудничества",
  },
  {
    value: "wishes",
    label: "Пожелания",
  },
  {
    value: "another",
    label: "Другое",
  },
];

const optionsSreds = [
  {
    value: "email",
    label: "Електронной почты",
  },
  {
    value: "tel",
    label: "Моб. Телефона",
  },
  {
    value: "telegram",
    label: "Телеграмма",
  },
];

const validateEmail = (email) => {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

export const Feedbac = (props) => {
  const UD = props.UD;
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    question: "simple",
    comm: "email",
    msg: "",
    email: UD.email || "",
    tel: UD.tel || Number("+380"),
    telegram: "",
  });
  const [dataV, setDataV] = useState({
    question: !!data.question,
    comm: !!data.comm,
    msg: !!data.msg,
    email: !!data.email,
    tel: data.tel.length > 3,
    telegram: data.telegram.length > 2,
  });

  const sendData = () => {
    // props.optStubOn(OPT_SEND_STUB);
    props.sendTicket(data, props.token);
  };

  const chengSel = (type, value) => {
    dataV["email"] = false;
    dataV["tel"] = false;
    dataV["telegram"] = false;
    dataV[type] = true;
    data[type] = value;
    setData({ ...data });
    setDataV({ ...dataV });
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
    setData({ ...data });
    setDataV({ ...dataV });
  };

  useEffect(() => {
    if (data.comm === "tel") {
      dataV["email"] = true;
      dataV["telegram"] = true;
    }
    if (data.comm === "email") {
      dataV["tel"] = true;
      dataV["telegram"] = true;
    }
    if (data.comm === "telegram") {
      dataV["email"] = true;
      dataV["tel"] = true;
    }

    setDataV({ ...dataV });
    setDone(
      dataV.question &&
        dataV.comm &&
        dataV.msg &&
        dataV.email &&
        dataV.tel &&
        dataV.telegram
    );
  }, [data]);

  return props.modal ? (
    <>
      <div
        onClick={() => props.changeStateFeedbackModal()}
        className={s.modal_feedback_box}
      />
      <div className={s.modal_feedback}>
        {!props.doneMsg ? (
          <div className={s.feedbackBox}>
            <div className={s.topModal}>
              <span className={s.title}>Обратная связь</span>
              <FontAwesomeIcon
                onClick={() => props.changeStateBasketModal()}
                className={s.clsModalBtn}
                icon={faTimesCircle}
              />
            </div>
            <h2 className={s.titlePc}>Обратная связь</h2>
            <div className={s.feedbackBlock}>
              <span className={s.feedbackTitle}>Тема моего сообщения: </span>{" "}
              <Select
                defaultValue={optionsTema[0]}
                options={optionsTema}
                onChange={(e) => chengSel("question", e.value)}
                name="tema"
                className={s.cuponSelect}
              />
            </div>
            <div className={s.feedbackBlock}>
              <span className={s.feedbackTitle}>
                Свяжитесь со мной посредством:
              </span>
              <Select
                defaultValue={optionsSreds[0]}
                options={optionsSreds}
                onChange={(e) => chengSel("comm", e.value)}
                name="sreds"
                className={s.cuponSelect}
              />
            </div>
            <TextField
              style={{ margin: 0 }}
              multiline={true}
              variant="outlined"
              // color={"secondary"}
              margin="normal"
              required={true}
              fullWidth
              id="msg"
              label="Изложите сюда суть обращения"
              autoComplete="msg"
              name="msg"
              type="text"
              rows={5}
              rowsMax={14}
              error={!dataV.msg}
              helperText="Если заказываете звонок, можете указать тут время, но не раньше чем через час"
              onChange={(event) => chngInpLn("msg", event.target.value, 4)}
            />
            {props.errMsg ? (
              <span className={s.errMsg}>{props.errMsg}</span>
            ) : null}
            <div className={s.feedbackBlock}>
              <TextField
                style={{ width: "40%", margin: 0 }}
                variant="outlined"
                // color={"secondary"}
                margin="normal"
                required={true}
                fullWidth
                id={data.comm}
                label={
                  data.comm === "tel"
                    ? "Номер телефона"
                    : data.comm === "Логин в телеграмме"
                    ? "text"
                    : data.comm
                }
                name={data.comm}
                autoComplete={data.comm}
                type={
                  data.comm === "tel"
                    ? "number"
                    : data.comm === "telegram"
                    ? "text"
                    : data.comm
                }
                value={data[data.comm]}
                error={!dataV[data.comm]}
                onChange={(event) =>
                  chngInpLn(
                    data.comm,
                    event.target.value,
                    data.comm === "tel" ? 10 : 3
                  )
                }
                helperText={!dataV[data.comm] ? "Проверьте введенное" : null}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // className={classes.submit}
                disabled={!done || props.stub}
                onClick={() => sendData()}
              >
                Отправить
              </Button>
            </div>
          </div>
        ) : (
          <span className={s.doneMsg}>
            Тикет успешно создан. С вами скоро свяжутся! 😉
          </span>
        )}
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal.feedback,
    UD: state.auth.userData,
    token: state.auth.token,
    stub: state.ticket.stub,
    doneMsg: state.ticket.doneMsg,
    errMsg: state.ticket.errMsg,
  };
};

export const Feedback = connect(mapStateToProps, {
  changeStateFeedbackModal,
  sendTicket,
})(Feedbac);
