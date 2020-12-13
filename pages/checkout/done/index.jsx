import React from "react";
import {initializeStore} from "../../../redux/store";
import {Done} from "../../../components/pages/checkout/done/done";

const done = () => {
  return (
    <>
      <Done/>
    </>
  )
};

export default done;

export async function getServerSideProps() {

  const reduxStore = initializeStore();

  return {
    props: {
      initialReduxState: reduxStore.getState()
    },
  }
}