import {TextField} from "@material-ui/core";
import React from "react";


export const EmailInput = (props)=>{
    const data = props.data[0];
    const dataV = props.data[1];
    const setData = props.data[2];
    const setDataV = props.data[3];
    const locale = props.locale;

    const validateEmail = (email) => {
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    };

    const changeEmail = (e) => {
        let isValid = validateEmail(e.target.value);
        if (isValid) {
            data.email = e.target.value;
            dataV.email = true;
            setData({ ...data });
        } else {
            dataV.email = false;
        }
        setDataV({ ...dataV });
    };

    return(
        <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Емейл Адрес"
            name="email"
            autoComplete="email"
            error={!dataV.email}
            type="email"
            helperText={
                !dataV.email ? locale === 'ru' ? 'Пример email\'a - example@gmail.com' : 'Приклад email\'a - example@gmail.com' : null
            }
            onChange={(event) => changeEmail(event)}
            autoFocus
        />
    )
}