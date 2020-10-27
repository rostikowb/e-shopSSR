import React from 'react';
import {Acordeon} from "../../dopComp/acardeon/acardeon";
import {FilterContent} from "./filterContent";


export const FilterBox = (props) => {
    const arr = props.defOpen;
    const isCatalog = ((arr[0] === '' && arr.length === 2) || arr[1] === '[catalog]') && arr[2] !== '[onegoods]'
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
