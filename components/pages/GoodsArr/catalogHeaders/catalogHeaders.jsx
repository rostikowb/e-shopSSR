import Head from "next/head";
import React from "react";
import {option} from '../../../../option'
import {headerGetTitle} from "./headersParts/headerGetTitle";
import {headerGetDesc} from "./headersParts/headerGetDesc";


export const CatalogHeaders = (props) => {
  const catalog = props.catalog;
  const domen = option.DOMEN;
  const title = headerGetTitle(catalog)
  const desc = headerGetDesc(catalog)
  // const img = `${option}/img/catalog${catalog}.jpeg`

  return<Head>
    <title>{title}</title>
    <meta name="title" content={title}/>

    <meta name="description"
          content={desc}/>

    <meta name='apple-mobile-web-app-title' content={title}/>

    <meta name='twitter:title'
          content={title}/>
    <meta name='twitter:description'
          content={desc}/>
    <meta name='twitter:url'
          content={domen + '/goods/'+catalog}/>
    {/*<meta name='twitter:image'*/}
    {/*      content={img}/>*/}

    <meta key='ogtitle'
          property="og:headerGetTitle"
          content={title}/>
    <meta key="ogdescription"
          property="og:description"
          content={desc}/>
    <meta key="ogurl"
          property="og:url"
          content={domen + '/goods/'+catalog}/>
    {/*<meta key="ogimage"*/}
    {/*      property="og:image"*/}
    {/*      content={img}/>*/}
  </Head>
}