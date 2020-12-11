import React from 'react';
import {FilterContent} from "./filterContent/filterContent";


export const FilterBox = (props) => {
  const loc = props.defOpen;
  const isCatalog = loc.pathname === '/goods/[catalog]'

  return isCatalog ? <FilterContent/> : null
};
