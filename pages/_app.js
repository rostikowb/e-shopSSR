import '../styles/globals.css';
import "swiper/swiper-bundle.css";
import React from "react";
import {MuiThemeProvider} from "material-ui";
// import {ruRU} from "@material-ui/core/locale";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {theme} from '../styles/theme'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import {InvisComp} from "../components/dopComp/invisComp/invisComp";
import {useRouter} from 'next/router'
import {Layout} from "../components/layout/Layout";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head"; // Import the CSS
config.autoAddCss = false;
library.add( faSearch );

export default function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);
    const muiTheme = createMuiTheme({
        userAgent: pageProps.initialReduxState?.auth?.userAgent || 'all'
    });
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    if(useRouter().pathname === "/checkout"){
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <ThemeProvider theme={theme}>
                        <InvisComp/>
                        {/*<Head>*/}
                        {/*    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />*/}
                        {/*    <title>vsivuha - Мінімальні ціни!</title>*/}
                        {/*</Head>*/}
                        <Component {...pageProps} />
                    </ThemeProvider>
                </MuiThemeProvider>
            </Provider>
        )
    }
    else {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
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