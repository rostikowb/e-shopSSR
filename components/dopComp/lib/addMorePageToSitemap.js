import {option} from "../../../option";

export const addMorePageToSitemap = (link) => {

  // Додавання каталогу товарів
  option.goods.forEach(item => link.push({url: `/goods/${item.value}`, changefreq: 'weekly'}));
  // Додавання сторінки інофрмації
  link.push({url: `/info`, changefreq: 'weekly'});
  // Додавання каталогу товарів

  ['promotions', 'contact', 'return', 'FAQ', 'licagr'].forEach(item => link.push({
    url: `/info/${item}`,
    changefreq: 'weekly'
  }));
  return link;
}