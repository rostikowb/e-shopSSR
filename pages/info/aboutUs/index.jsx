import React from "react";
import Head from 'next/head'
import {checkoutFormTheme} from "../../../styles/theme";
import {AboutUs} from "../../../components/pages/info/aboutUs/aboutUs";

const aboutUs = () => {
    return (
        <>
            <Head>
                <title>vsivuha.online - О нас</title>
                {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
            </Head>
            <AboutUs/>
        </>
    )
};

export default aboutUs;


// export async function getServerSideProps(context) {
//
//     // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {
//
//     // const reduxStore = initializeStore();
//
//     return {props: {
//             // initialReduxState: reduxStore.getState()
//             },
//     }
//     // } else {
//     //     return {props: {}}
//     // }
// }