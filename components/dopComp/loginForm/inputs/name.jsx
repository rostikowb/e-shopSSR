import {TextField} from "@material-ui/core";
import React from "react";


export const NameInput = (props)=>{
    const data = props.data[0];
    const dataV = props.data[1];
    const setData = props.data[2];
    const setDataV = props.data[3];

    const changeName = (e) => {
        let isValid = e.target.value.length > 1;
        if (isValid) {
            data.name = e.target.value;
            dataV.name = true;
            setData({ ...data });
        } else {
            dataV.name = false;
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
            id="name"
            label="Имя"
            autoComplete="name"
            name="name"
            type="text"
            autoFocus
            error={!dataV.name}
            onChange={(event) => changeName(event)}
        />
    )
}