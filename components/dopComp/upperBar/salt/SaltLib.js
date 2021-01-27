export const saltInfoCheck = (loc) => {
  switch (loc.pathname) {
    case '/info/promotions':
      return {ru: 'Акции', ua: 'Акції'};
    case '/info/aboutUs':
      return {ru: 'О нас', ua: 'Про нас'};
    case '/info/contact':
      return {ru: 'Контакты', ua: 'Контакти'};
    case '/info/FAQ':
      return {ru: 'Рубрика Вопрос-Ответ!', ua: 'Рубрика Питання-Відповідь!'};
    case '/info/licagr':
      return {ru: 'Условия использования', ua: 'Умови використання'};
    case '/info/return':
      return {ru: 'Условия возврата и гарантия', ua: 'Умови повернення та гарантія'};
    default:
      return false;
  }
}