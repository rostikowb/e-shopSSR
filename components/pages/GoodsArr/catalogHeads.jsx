import Head from "next/head";
import React from "react";
import stripHtml from "string-strip-html";
import {useRouter} from "next/router";


export const CatalogHeads = ({catalog}) =>{
  // const desc = stripHtml('<div>sfsfsf</div><a>rrrrr</a>').result
  // console.log(desc);
  // const loc = useRouter()
  // console.log(loc);
  return (
    <Head>
      <title>{catalog}</title>
      <meta name="title" content={`VSIVUHA - ${catalog}`}/>
    </Head>
  )
}