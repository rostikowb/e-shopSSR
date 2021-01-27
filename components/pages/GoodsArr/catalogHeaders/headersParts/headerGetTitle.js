import {option} from '../../../../../option'

export const headerGetTitle = (catalog, loc) =>{
  const locale = loc.locale;
  const title = option.goods.find(item=> item.value === catalog)
  return `${title.label[locale]} - на VSIVUHA`
}