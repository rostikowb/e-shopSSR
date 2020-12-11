import React from 'react';
import {Acordeon} from "../../dopComp/acardeon/acardeon";
import {FilterContent} from "./filterContent/filterContent";


export const FilterBox = (props) => {
  const loc = props.defOpen;
  const isCatalog = loc.pathname === '/goods/[catalog]'
  console.log(isCatalog);
  // console.log(props.defOpen);
  // return (
  //     <Acordeon
  //         info={{
  //             title: 'Фильтры',
  //             content: <FilterContent/>,
  //             open: isCatalog
  //         }}/>
  // )

  return isCatalog ? <FilterContent/> : null

};
