// import s from './info.module.css';
import React from 'react';
import {Acordeon} from '../../dopComp/acardeon/acardeon'
import {InfoContent} from './infoContent'


export const Info = (props) => {
    const isInfo = props.defOpen === 'info';
    return (
        <Acordeon
            info={{
                title: 'Полезная информация',
                content: <InfoContent/>,
                open: isInfo
            }}
        />

    )
};
