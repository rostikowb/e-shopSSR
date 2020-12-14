import React from "react";
import Head from 'next/head'
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
