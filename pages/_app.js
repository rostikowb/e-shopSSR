import '../styles/globals.css';
import "swiper/swiper-bundle.css";
// import "swiper/components/pagination/pagination.scss";
import React from "react";
// import ReactDOM from "react-dom";
import {MuiThemeProvider} from "material-ui";
import {ruRU} from "@material-ui/core/locale";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
// import Layout from "../components/layout/Layout";
// import {wrapper} from '../redux/store';
const theme = createMuiTheme({}, ruRU);

export default function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </MuiThemeProvider>
        </Provider>
    )
}


{/*<Layout>*/
}


// function MyApp({Component, pageProps}) {
//     return (
//         <wrapper>
//             <MuiThemeProvider>
//                 <ThemeProvider theme={theme}>
//                     <Component {...pageProps} />
//                 </ThemeProvider>
//             </MuiThemeProvider>
//         </wrapper>
//     )
// }
//
// export default wrapper.withRedux(MyApp);