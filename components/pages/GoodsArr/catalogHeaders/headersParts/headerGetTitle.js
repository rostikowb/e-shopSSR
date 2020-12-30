import {option} from '../../../../../option'

export const headerGetTitle = (catalog) =>{
  const title = option.goods.find(item=> item.value === catalog)
  return `${title.label} - на VSIVUHA`
}