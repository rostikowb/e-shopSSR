import {Button} from "@material-ui/core";
import React from "react";


export const ButtonInput = (props) => {
    const isForm = props.isForm;
    const classes = props.classes;
    const stub = props.stub;
    const startAuth = props.startAuth;
    const name = props.name;
    const disabled = props.disabled


    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={stub || disabled}
            onClick={() =>
                startAuth(
                    isForm === "L" ? "login" : isForm === "R" ? "signup" : "recov"
                )
            }
        >
            {stub ? "Отправляю!" : name}
        </Button>
    )
}