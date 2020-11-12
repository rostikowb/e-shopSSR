import React from 'react';
import {Acordeon} from "../../dopComp/acardeon/acardeon";
import {FilterContent} from "./filterContent";


export const FilterBox = (props) => {
    const arr = props.defOpen;
    const isCatalog = ((arr[0] === '' && arr.length === 3) || arr[2] === '[catalog]') && arr[3] !== '[onegoods]'
    console.log(props.defOpen);
    return (
        <Acordeon
            info={{
                title: 'Фильтры',
                content: <FilterContent/>,
                open: isCatalog
            }}/>
    )
};
