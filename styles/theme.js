import {createMuiTheme, makeStyles} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import {ruRU} from "@material-ui/core/locale";

export const theme = createMuiTheme({}, ruRU);

export const checkoutFormTheme = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typo: {
        color: "black",
    },
}))