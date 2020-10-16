import {TextField} from "@material-ui/core";
import React from "react";


export const PassInput = (props)=>{
    const isForm = props.isForm;
    const data = props.data[0];
    const dataV = props.data[1];
    const setData = props.data[2];
    const setDataV = props.data[3];
    const newPass = props?.newPass;

    const changePass = (e) => {
        let isValid = e.target.value.length > 8;
        if (isValid) {
            data.pass = e.target.value;
            dataV.pass = true;
            setData({ ...data });
        } else {
            dataV.pass = false;
        }
        setDataV({ ...dataV });
    };

    return(
        <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label={newPass?"Новый пароль":"Пароль"}
            type="password"
            id="password"
            autoComplete={isForm === "R" || newPass ? "new-password" : "current-password"}
            onChange={(event) => changePass(event)}
            error={!dataV.pass}
            helperText={!dataV.pass ? "Минимум 8 знаков" : null}
        />
    )
}