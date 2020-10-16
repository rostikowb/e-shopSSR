import {TextField} from "@material-ui/core";
import React from "react";


export const PinInput = (props)=>{
    const data = props.data[0];
    const dataV = props.data[1];
    const setData = props.data[2];
    const setDataV = props.data[3];

    const changePin = (e) => {
        let isValid = e.target.value.length === 6;
        if (isValid) {
            data.pin = e.target.value.trim();
            dataV.pin = true;
            setData({ ...data });
        } else {
            dataV.pin = false;
        }
        setDataV({ ...dataV });
    };

    return(
        <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="pin"
            label="Пин-код"
            autoComplete="pin"
            name="pin"
            type="text"
            autoFocus
            error={!dataV.pin}
            onChange={(event) => changePin(event)}
            helperText={!dataV.pin ? "Введите временный пинкод" : null}
        />
    )
}