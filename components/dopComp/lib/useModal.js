import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const useModal = (isOpen, changeState, name) => {
  const loc = useRouter()
  const query = {...loc.query};
  const catalog = loc.query?.catalog;
  const [isClsBtn, setIsClsBtn] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)
  delete query.catalog
  delete query.onegoods


// вернуть для драйвера юзстейт
  const pushToUrl = (query) => {
    let pathname;

    if (loc.query?.onegoods) pathname = catalog + '/' + loc.query?.onegoods;
    else if (loc.query?.catalog) pathname = '/goods/' + catalog;
    else pathname = loc.pathname;

    const href = {
      pathname: loc.pathname,
      query
    }
    const as = {
      pathname,
      query
    }
    loc.push(href, as, {shallow: true})
  }
  const close = () => {
    setIsClsBtn(true)
    changeState(false)
    delete query[name]
    pushToUrl(query)
  }

  const open = () => {
    setIsClsBtn(false)
    changeState(true)
    pushToUrl({...query, [name]: 'open'})
  }

  useEffect(() => {
    if (!loc.query[name] && !isClsBtn) changeState(false)
  }, [loc.query[name]])

  useEffect(() => {
    if (isOpen) close()
  }, [loc.pathname, loc.query?.sort])

  return {open, close}
}