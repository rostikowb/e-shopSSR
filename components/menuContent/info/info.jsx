// import s from './info.module.css';
import React from 'react';
import {Acordeon} from '../../dopComp/acardeon/acardeon'
import {InfoContent} from './infoContent'
import {useRouter} from "next/router";


export const Info = (props) => {
  const locale = useRouter().locale

    const isInfo = props.defOpen[1] === 'info' || !props.defOpen[1];
    return (
        <Acordeon
            info={{
                title: locale === 'ru' ? 'Полезная информация' : 'Корисна інформація',
                content: <InfoContent/>,
                open: isInfo
            }}
        />

    )
};
