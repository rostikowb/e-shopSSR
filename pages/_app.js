import '../styles/globals.css';
import "swiper/swiper-bundle.css";
import React from "react";
import {MuiThemeProvider} from "material-ui";
import {ruRU} from "@material-ui/core/locale";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import {InvisComp} from "../components/dopComp/invisComp/invisComp";
import {useRouter} from 'next/router'
import {Layout} from "../components/layout/Layout";
const theme = createMuiTheme({}, ruRU);

export default function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    if(useRouter().pathname === "/[checkout]"){
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <ThemeProvider theme={theme}>
                        <InvisComp/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </MuiThemeProvider>
            </Provider>
        )
    }
    else {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </MuiThemeProvider>
            </Provider>
        )
    }

}