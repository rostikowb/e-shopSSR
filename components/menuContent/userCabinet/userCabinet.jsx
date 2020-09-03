import React from "react";
import { Acordeon } from "../../dopComp/acardeon/acardeon";
import { connect } from "react-redux";
import { authExit } from "../../../redux/auth/actions";

export const UserCabine = (props) => {
  return (
    <Acordeon
      info={{
        title: "Личный кабинет",
        content: (
          <div>
            <span onClick={() => props.authExit()}>Выйти</span>
          </div>
        ),
      }}
    />
  );
};
export const UserCabinet = connect(null, {
  authExit,
})(UserCabine);
