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
import {GoodsLayout} from "../components/layout/goodsLayout";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import {CheckoutLayout} from "../components/layout/checkoutLayout"; // Import the CSS
config.autoAddCss = false;
library.add( faSearch );

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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

    if(useRouter().pathname.split('/')[1] === "checkout"){
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <ThemeProvider theme={theme}>
                        <InvisComp/>
                        <CheckoutLayout>
                            <Component {...pageProps} />
                        </CheckoutLayout>
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
                        <GoodsLayout>
                            <Component {...pageProps} />
                        </GoodsLayout>
                    </ThemeProvider>
                </MuiThemeProvider>
            </Provider>
        )
    }
}