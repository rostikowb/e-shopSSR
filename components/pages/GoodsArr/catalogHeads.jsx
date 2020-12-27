import Head from "next/head";
import React from "react";
import stripHtml from "string-strip-html";


export const CatalogHeads = ({catalog}) =>{
  // const desc = stripHtml('<div>sfsfsf</div><a>rrrrr</a>').result
  // console.log(desc);
  return (
    <Head>
      <title>{catalog}</title>
      <meta name="title" content={`VSIVUHA - ${catalog}`}/>
    </Head>
  )
}