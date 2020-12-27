import React, {useState, useEffect} from "react";
import s from "./feedback.module.css";
import {connect} from "react-redux";
import {changeStateFeedbackModal} from "../../../redux/modal/actions";
import {TextField, Button} from "@material-ui/core";
import Select from "react-select";
import {sendTicket} from "../../../redux/tickets/action";
import {Modal} from "../modal/modal";
import ss from "../modal/modal.module.css"
import closedIcon from "../filtersChecked/cancel.svg";

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
    email: UD?.email || "",
    tel: UD?.tel || Number("+380"),
    telegram: "",
  });
  const [dataV, setDataV] = useState({
    question: !!data?.question,
    comm: !!data?.comm,
    msg: !!data?.msg,
    email: !!data?.email,
    tel: data?.tel.length > 3,
    telegram: data?.telegram.length > 2,
  });

  const sendData = () => {
    props.sendTicket(data, props.token);
  };

  const chengSel = (type, value) => {
    dataV["email"] = false;
    dataV["tel"] = false;
    dataV["telegram"] = false;
    dataV[type] = true;
    data[type] = value;
    setData({...data});
    setDataV({...dataV});
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

    setDataV({...dataV});
    setDone(
      dataV.question &&
      dataV.comm &&
      dataV.msg &&
      dataV.email &&
      dataV.tel &&
      dataV.telegram
    );
  }, [data]);

  const option = {
    changeState: props.changeStateFeedbackModal,
    title: "Обратная связь"
  }

  const style = {
    wrapper: {
      width: "50vw",
      top: '9%',
      left: '25%',
      height: '61vh'
    },
    top: {
      margin: '0 15px'
    }
  }

  if (props.doneMsg) return <Modal options={option} style={style}><span className={s.doneMsg}>Тикет успешно создан. С вами скоро свяжутся! 😉</span></Modal>

  return (
    <>
      <div
        onClick={() => props.changeStateFeedbackModal()}
        className={ss.modalShadow}
      />
      <div className={s.modalWrapper}>
        <div className={s.modal_feedback}>
          <div className={`${ss.topPc} ${s.title}`}>
            <span>Обратная связь</span>
            <img className={ss.clsIconBtn} onClick={() => props.changeStateFeedbackModal(false)} src={closedIcon}
                 alt=""/>
          </div>
          <div className={ss.topMobi}>
            <span className={ss.title}>Обратная связь</span>
          </div>
          <div className={s.feedbackBox}>
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
            <div className={`${s.feedbackBlock} ${s.TextField}`}>
              <TextField
                style={{margin: 0}}
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
                rowsMax={8}
                error={!dataV.msg}
                helperText="Если заказываете звонок, можете указать тут время, но не раньше чем через час"
                onChange={(event) => chngInpLn("msg", event.target.value, 4)}
              />
            </div>
            {props.errMsg ? (
              <span className={s.errMsg}>{props.errMsg}</span>
            ) : null}
            <div className={`${s.feedbackBlock} ${s.feedbackBlockBtn}`}>
              <TextField
                style={{width: "40%", margin: 0}}
                variant="outlined"
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
              <div className={s.sendBtn}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={!done || props.stub}
                  onClick={() => sendData()}
                >
                  Отправить
                </Button>
              </div>

            </div>
          </div>
          <div className={`${ss.bottom} ${ss.bottomIsDopChild} ${s.bottom}`}>
            <div className={s.sendBtnM}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!done || props.stub}
                onClick={() => sendData()}
              >
                Отправить
              </Button>
            </div>
            <div className={ss.closeBtn} onClick={() => props.changeStateFeedbackModal(false)}>ЗАКРЫТЬ</div>
          </div>

        </div>
      </div>
    </>)
};

const mapStateToProps = (state) => {
  return {
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
