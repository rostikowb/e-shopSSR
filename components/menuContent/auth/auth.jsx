import React, {useEffect} from "react";
import { Acordeon } from "../../dopComp/acardeon/acardeon";
import { AuthForm } from "../../dopComp/loginForm/AuthForm";

export const Auth = () => {
  useEffect(()=>{
    console.log('НЕ');
  }, [])

  return (
    <Acordeon
      info={{
        title: "Авторизация",
        content: <AuthForm />,
      }}
    />
  );
};