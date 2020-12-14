import s from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { menuContent as Menu } from "../../../menuContent/menuContent";
import { TovZnk } from "../../../dopComp/tovZnk/tovZnk";
import React, { useState, useEffect } from "react";
import { Drawer } from "../../../dopComp/drawer/drawer";
import {CheckoutForm} from "../../../pages/checkout/form/form";
import {NoSsr} from "@material-ui/core";

// import Drawer from 'rc-drawer';

const drawerStyle = {
  overflow: "hidden"
}

export const MenuBtn = () => {
    // const [is, setIs] = useState(false);
  const [open, setIsOpen] = useState(false);
  const closeDrawer = () => setIsOpen(false);
  const openDrawer = () => setIsOpen(true);

    // useEffect(()=>{
    //     setIs(true)
    // }, []);

  return (
    <div className={s.menu}>
        {/*{is?<>*/}
      <NoSsr>
        <Drawer
          width={"auto"}
          visible={open}
          onClose={closeDrawer}
          height={"auto"}
          // style={}
        >
            <div className={s.menuBox}>
                <Menu />
                <TovZnk />
            </div>
        </Drawer>
        <button onClick={openDrawer}>
          <FontAwesomeIcon className={s.icon} icon={faBars} />
        </button>
        </NoSsr>
      {/*</>:null}*/}
    </div>
  );
};
